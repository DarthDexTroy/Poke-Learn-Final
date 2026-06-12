import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialGameState = {
  name: 'Trainer',
  email: '',
  selectedTopics: [],
  rank: 'beginner',
  xp: 0,
  level: 1,
  caught: { 1: [], 2: [], 3: [], 4: [], 5: [] },
  allCaught: [],
  completedModules: [],
  assessCorrect: 0,
  assessIdx: 0,
  starterPokemon: null,
  currentZone: 1,
  currentEnemy: null,
  catchChance: 50,
  questionsAnswered: 0,
  questionsCorrect: 0,
  recommendedModules: [],
  sessionStartTime: null,
  totalMinutes: 0,
  profile: {
    ageRange: '',
    education: '',
    field: '',
    yearsSchool: '',
    jobTitle: '',
    industry: '',
    experience: '',
    gender: '',
    country: ''
  }
};

/* ---- User accounts stored in localStorage ---- */
const ACCOUNTS_KEY = 'poke-learn-accounts'; // { username: { password, storageKey } }

const getAccounts = () => {
  try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '{}'); } catch { return {}; }
};

const saveAccounts = (accounts) => {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
};

/* Create a new account. Returns true if success, false if username taken. */
export const createAccount = (username, password) => {
  const accounts = getAccounts();
  const key = username.toLowerCase().trim();
  if (accounts[key]) return false; // already exists
  accounts[key] = { password, storageKey: `poke-learn-${key}` };
  saveAccounts(accounts);
  return true;
};

/* Validate login credentials. Returns the storageKey or null. */
export const validateLogin = (username, password) => {
  const accounts = getAccounts();
  const key = username.toLowerCase().trim();
  const acct = accounts[key];
  if (!acct) return null;
  if (acct.password !== password) return null;
  return acct.storageKey;
};

/* Check if an account exists */
export const accountExists = (username) => {
  const accounts = getAccounts();
  return !!accounts[username.toLowerCase().trim()];
};

/* Load a user's saved game state into the store */
export const loadUserState = (username) => {
  const accounts = getAccounts();
  const key = username.toLowerCase().trim();
  const acct = accounts[key];
  if (!acct) return;

  const raw = localStorage.getItem(acct.storageKey);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      const userData = parsed.state || parsed;
      // Remove any functions that might have been serialized
      const clean = {};
      for (const k of Object.keys(userData)) {
        if (typeof userData[k] !== 'function') clean[k] = userData[k];
      }
      useAppStore.setState({
        ...clean,
        sessionStartTime: Date.now(),
      });
    } catch { /* ignore */ }
  }
};

/* Save the current store state for the current user */
export const saveCurrentUser = () => {
  const state = useAppStore.getState();
  const username = state.email; // we store username in the email field
  if (!username) return;

  const accounts = getAccounts();
  const key = username.toLowerCase().trim();
  const acct = accounts[key];
  if (!acct) return;

  // Calculate session minutes
  const sessionMins = state.sessionStartTime
    ? Math.floor((Date.now() - state.sessionStartTime) / 60000)
    : 0;
  
  const data = {};
  for (const k of Object.keys(state)) {
    if (typeof state[k] !== 'function') data[k] = state[k];
  }
  data.totalMinutes = (data.totalMinutes || 0) + sessionMins;
  data.sessionStartTime = null;

  localStorage.setItem(acct.storageKey, JSON.stringify({ state: data }));
};

export const useAppStore = create(
  persist(
    (set, get) => ({
      ...initialGameState,

      // Actions
      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setProfile: (profileData) => set((state) => ({ profile: { ...state.profile, ...profileData } })),
      toggleTopic: (topicId) => set((state) => {
        const topics = state.selectedTopics.includes(topicId)
          ? state.selectedTopics.filter(t => t !== topicId)
          : [...state.selectedTopics, topicId];
        return { selectedTopics: topics };
      }),
      setTopics: (topics) => set({ selectedTopics: topics }),
      setRank: (rank) => set({ rank }),
      addXP: (amount) => set((state) => {
        const newXp = state.xp + amount;
        return {
          xp: newXp,
          level: Math.max(1, Math.floor(newXp / 100) + 1)
        };
      }),
      addCaught: (pokemon, zone) => set((state) => {
        const zoneCaught = state.caught[zone] || [];
        if (!zoneCaught.find(p => p.id === pokemon.id)) {
          return {
            caught: { ...state.caught, [zone]: [...zoneCaught, pokemon] },
            allCaught: [...state.allCaught, pokemon]
          };
        }
        return state;
      }),
      markModuleComplete: (moduleId) => set((state) => {
        if (!state.completedModules.includes(moduleId)) {
          return { completedModules: [...state.completedModules, moduleId] };
        }
        return state;
      }),
      setAssessScore: (correct) => set({ assessCorrect: correct }),
      setAssessIdx: (idx) => set({ assessIdx: idx }),
      setStarterPokemon: (poke) => set({ starterPokemon: poke }),
      setRecommendations: (modules) => set({ recommendedModules: modules }),

      // Battle State
      setBattleState: (updates) => set((state) => ({ ...state, ...updates })),

      // Session
      startSession: () => set({ sessionStartTime: Date.now() }),

      // Sign out — save current user, then reset
      signOut: () => {
        saveCurrentUser();
        set({ ...initialGameState });
      },
      
      // Reset
      resetUser: () => set({ ...initialGameState })
    }),
    {
      name: 'poke-learn-storage',
    }
  )
);
