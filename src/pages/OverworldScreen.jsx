import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HUD from '../components/HUD';
import { useAppStore } from '../store/useAppStore';
import { getModulesForIndustry } from '../data/modules';
import { useNotifStore } from '../components/Notification';
import '../styles/MapScreen.css';

const staticURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

// Map nodes layout (relative percentages)
const ZONES = [
  { id: 1, x: 26, y: 70, name: 'Statistics Plains' },
  { id: 2, x: 44, y: 55, name: 'Python Peak' },
  { id: 3, x: 68, y: 61, name: 'ML Forest' },
  { id: 4, x: 73, y: 33, name: 'Deep Learning Cave' },
  { id: 5, x: 39, y: 22, name: 'Viz Waterfall' },
  { id: 6, x: 15, y: 30, name: 'Web Dev Coast' },
  { id: 7, x: 10, y: 50, name: 'Cyber Citadel' },
  { id: 8, x: 15, y: 80, name: 'FinTech Valley' },
  { id: 9, x: 30, y: 90, name: 'Health Data Hub' },
  { id: 10, x: 50, y: 85, name: 'EdTech Campus' },
  { id: 11, x: 70, y: 80, name: 'Retail Warehouse' },
  { id: 12, x: 85, y: 60, name: 'Consulting Tower' },
  { id: 13, x: 90, y: 40, name: 'Policy Capitol' },
  { id: 14, x: 85, y: 20, name: 'Impact Center' },
  { id: 15, x: 60, y: 10, name: 'Media Studio' },
];

export const MAP_ENCOUNTERS = {
  1: [{id: 1, name: 'Bulbasaur', hp: 40}, {id: 16, name: 'Pidgey', hp: 30}, {id: 19, name: 'Rattata', hp: 30}],
  2: [{id: 4, name: 'Charmander', hp: 50}, {id: 56, name: 'Mankey', hp: 45}, {id: 58, name: 'Growlithe', hp: 55}],
  3: [{id: 7, name: 'Squirtle', hp: 50}, {id: 43, name: 'Oddish', hp: 45}, {id: 48, name: 'Venonat', hp: 50}],
  4: [{id: 65, name: 'Alakazam', hp: 110}, {id: 94, name: 'Gengar', hp: 100}, {id: 104, name: 'Cubone', hp: 70}],
  5: [{id: 25, name: 'Pikachu', hp: 60}, {id: 120, name: 'Staryu', hp: 50}, {id: 130, name: 'Gyarados', hp: 120}],
  6: [{id: 134, name: 'Vaporeon', hp: 80}, {id: 60, name: 'Poliwag', hp: 40}],
  7: [{id: 135, name: 'Jolteon', hp: 80}, {id: 81, name: 'Magnemite', hp: 40}],
  8: [{id: 133, name: 'Eevee', hp: 80}, {id: 52, name: 'Meowth', hp: 40}],
  9: [{id: 136, name: 'Flareon', hp: 80}, {id: 113, name: 'Chansey', hp: 150}],
  10: [{id: 150, name: 'Mewtwo', hp: 120}, {id: 63, name: 'Abra', hp: 30}],
  11: [{id: 143, name: 'Snorlax', hp: 120}, {id: 108, name: 'Lickitung', hp: 60}],
  12: [{id: 131, name: 'Lapras', hp: 90}, {id: 122, name: 'Mr. Mime', hp: 50}],
  13: [{id: 145, name: 'Zapdos', hp: 100}, {id: 17, name: 'Pidgeotto', hp: 50}],
  14: [{id: 146, name: 'Moltres', hp: 100}, {id: 37, name: 'Vulpix', hp: 40}],
  15: [{id: 144, name: 'Articuno', hp: 100}, {id: 124, name: 'Jynx', hp: 60}]
};

const OverworldScreen = () => {
  const navigate = useNavigate();
  const { currentZone, completedModules, setBattleState, profile } = useAppStore();
  const { showNotif } = useNotifStore();
  
  const customModules = getModulesForIndustry(profile.industry);
  const activeZoneIds = customModules.map(m => m.zone);
  const ACTIVE_ZONES = ZONES.filter(z => activeZoneIds.includes(z.id));

  const [spritePos, setSpritePos] = useState({ x: 20, y: 70 });

  useEffect(() => {
    // Initial position
    const z = ACTIVE_ZONES.find(z => z.id === currentZone) || ACTIVE_ZONES[0];
    setSpritePos({ x: z.x, y: z.y });
  }, []);

  const handleZoneClick = (z) => {
    // Check if zone is locked
    const currentIndex = ACTIVE_ZONES.findIndex(activeZone => activeZone.id === z.id);
    if (currentIndex > 0) {
      const prevZoneId = ACTIVE_ZONES[currentIndex - 1].id;
      const prevModule = customModules.find(m => m.zone === prevZoneId);
      if (prevModule && !completedModules.includes(prevModule.id)) {
        showNotif(`🔒 Zone Locked! Complete "${prevModule.name}" first.`);
        return;
      }
    }

    // Move sprite
    setSpritePos({ x: z.x, y: z.y });

    // 40% chance of random encounter when moving to a valid zone
    if (Math.random() > 0.6) {
      setTimeout(() => triggerEncounter(z.id), 850); // wait for move animation
    } else {
      setTimeout(() => {
        useAppStore.setState({ currentZone: z.id }); // update zone without battle
        showNotif(`📍 Arrived at ${z.name}`);
      }, 850);
    }
  };

  const triggerEncounter = (zoneId) => {
    const pool = MAP_ENCOUNTERS[zoneId] || MAP_ENCOUNTERS[1];
    const enemy = pool[Math.floor(Math.random() * pool.length)];
    
    // flash effect
    const flash = document.getElementById('flash');
    if (flash) {
      flash.classList.add('show');
      setTimeout(() => flash.classList.remove('show'), 100);
      setTimeout(() => flash.classList.add('show'), 200);
      setTimeout(() => flash.classList.remove('show'), 300);
    }

    // set battle state
    setBattleState({
      currentZone: zoneId,
      currentEnemy: { ...enemy, maxHp: enemy.hp },
      catchChance: 50,
      questionsAnswered: 0,
      questionsCorrect: 0
    });

    setTimeout(() => {
      navigate('/battle');
    }, 600);
  };

  // Helper to draw connecting lines
  const renderPaths = () => {
    return (
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      >
        {ACTIVE_ZONES.map((z1, i) => {
          if (i === ACTIVE_ZONES.length - 1) return null;
          const z2 = ACTIVE_ZONES[i + 1];

          const prevModule = customModules.find(m => m.zone === z1.id);
          const isUnlocked = prevModule && completedModules.includes(prevModule.id);

          return (
            <line
              key={`path-${i}`}
              x1={`${z1.x}%`}
              y1={`${z1.y}%`}
              x2={`${z2.x}%`}
              y2={`${z2.y}%`}
              stroke={isUnlocked ? 'var(--yellow)' : 'rgba(255,255,255,0.2)'}
              strokeWidth="4"
              strokeDasharray={isUnlocked ? 'none' : '8 8'}
              style={{
                filter: isUnlocked ? 'drop-shadow(0 0 6px var(--yellow))' : 'none',
                transition: 'stroke 0.5s'
              }}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className="screen active" id="map-screen">
      <HUD />
      <div className="map-container">
        <div className="map-playfield">
          <div className="map-bg"></div>

          {renderPaths()}

          {ACTIVE_ZONES.map(z => {
            let isLocked = false;
            const currentIndex = ACTIVE_ZONES.findIndex(activeZone => activeZone.id === z.id);
            if (currentIndex > 0) {
              const prevZoneId = ACTIVE_ZONES[currentIndex - 1].id;
              const prevModule = customModules.find(m => m.zone === prevZoneId);
              if (prevModule && !completedModules.includes(prevModule.id)) {
                isLocked = true;
              }
            }

            return (
              <div
                key={z.id}
                className={`zone-node ${z.id === currentZone ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                onClick={() => handleZoneClick(z)}
              >
                <div className="zone-icon">
                  {(() => {
                    const m = customModules.find(mod => mod.zone === z.id);
                    return m ? <img src={animURL(m.pokemon.id)} onError={(e) => { e.target.src = staticURL(m.pokemon.id); }} alt={m.pokemon.name} /> : '📍';
                  })()}
                </div>
                <div className="zone-label">{z.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverworldScreen;
