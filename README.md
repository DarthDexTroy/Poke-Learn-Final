# 🎓 PokéLearn

> **Learn Data Science. Catch 'em all.**

PokéLearn is a gamified, Pokémon-inspired web application that teaches data science concepts through interactive video lessons, adaptive quizzes, and a battle-and-catch mechanic. Progress through modules, answer questions to fight wild Pokémon, and build your KnowledgeDex as you master statistics, machine learning, and more.

---

## ✨ Features

### 🧠 Adaptive Learning
- **Skill Assessment Pretest** — A 12-question diagnostic determines your starting rank (Beginner, Intermediate, or Advanced) and assigns your starter Pokémon.
- **Dynamic Adaptive Quizzes** — Each module section features an AI-generated question bank (~100 questions per module) with three difficulty tiers. The quiz engine tracks your streak and promotes/demotes you between Easy → Medium → Hard in real time.
- **Personalized Module Path** — Recommended learning modules adapt based on your pretest results.

### 🎮 Pokémon-Inspired Game Loop
- **Overworld Map** — Navigate a node-based world map with animated sprites representing each curriculum zone.
- **Random Encounters & Battles** — Answer data science questions to deal damage to wild Pokémon. Correct answers boost your catch rate.
- **Catch Mechanic** — Physics-based Poké Ball throw animation with shake, burst, and capture sequences.
- **KnowledgeDex** — Track all concepts you've caught, organized by zone.

### 🤖 AI-Powered Tutor
- **LLaMA Video Assistant** — An integrated AI chatbot (powered by Groq's LLaMA 3.1 API) provides contextual help based on the current video lesson's transcript. Responses render with full markdown formatting (bold, bullets, code).

### 🎨 Visual Polish
- **Animated Sprites** — All Pokémon sprites use high-quality Generation V animated GIFs from the PokeAPI CDN.
- **Retro Aesthetic** — Pixel-art fonts, dark mode UI, gradient backgrounds, and smooth CSS animations throughout.
- **Responsive Layout** — Clean component architecture that scales across screen sizes.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + Vite |
| **Routing** | React Router DOM v6 |
| **State Management** | Zustand |
| **Icons** | Lucide React |
| **AI Integration** | Groq API (LLaMA 3.1 8B) |
| **Sprites** | PokeAPI CDN (animated GIFs) |
| **Styling** | Vanilla CSS with CSS variables |

---

## 📁 Project Structure

```
poke-learn/
├── public/
├── scripts/
│   └── generateQs.js          # Node script to generate quiz questions via Groq API
├── src/
│   ├── components/
│   │   ├── HUD.jsx             # Top navigation bar (XP, Level, Rank)
│   │   ├── Notification.jsx    # Toast notification system
│   │   ├── PokeBallsBackground.jsx  # Animated menu background
│   │   └── VideoAssistantQA.jsx     # LLaMA AI chatbot component
│   ├── data/
│   │   ├── assessQs.js         # Pretest & battle question bank
│   │   ├── dynamicQs.js        # LLM-generated adaptive quiz questions
│   │   ├── modules.js          # Curriculum data (sections, videos, quizzes)
│   │   └── topics.js           # Available learning topics
│   ├── pages/
│   │   ├── AssessmentScreen.jsx   # Skill assessment pretest
│   │   ├── BattleScreen.jsx       # Pokémon battle encounters
│   │   ├── CollectionScreen.jsx   # KnowledgeDex
│   │   ├── ModuleScreen.jsx       # Interactive learning modules
│   │   ├── OverworldScreen.jsx    # Node-based world map
│   │   ├── ProfileScreen.jsx     # User profile setup
│   │   ├── RecommendScreen.jsx   # Personalized module recommendations
│   │   ├── SignInScreen.jsx      # Login page
│   │   ├── SignUpScreen.jsx      # Registration page
│   │   ├── TitleScreen.jsx       # Landing page
│   │   └── TopicsScreen.jsx      # Topic selection
│   ├── store/
│   │   └── useAppStore.js      # Zustand global state
│   ├── styles/                 # Per-page CSS modules + global styles
│   ├── App.jsx                 # Root component with routing
│   └── main.jsx                # Entry point
├── .env                        # Environment variables (API keys)
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 20.19 (required by Vite)
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pokelearn.git
cd pokelearn/poke-learn

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the `poke-learn/` directory:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> Get a free API key at [console.groq.com](https://console.groq.com)

### Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎯 How to Play

1. **Sign Up** — Create your trainer profile and select your interests.
2. **Take the Pretest** — Answer 12 questions to determine your rank and receive your starter Pokémon:
   - 🟢 **Beginner** → Bulbasaur
   - 🔵 **Intermediate** → Alakazam
   - 🟣 **Advanced** → Mewtwo
3. **Study Modules** — Watch video lessons and pass adaptive quizzes to progress.
4. **Explore the Map** — Navigate the overworld and trigger random encounters.
5. **Battle & Catch** — Answer questions to damage wild Pokémon, then throw a Poké Ball!
6. **Fill Your Dex** — Collect all data science concepts across every zone.

---

## 🧪 Regenerating Quiz Questions

To regenerate the adaptive quiz bank using the Groq API:

```bash
VITE_GROQ_API_KEY=your_key node scripts/generateQs.js
```

This will query LLaMA to produce ~100 questions per module across Easy, Medium, and Hard tiers, and save them to `src/data/dynamicQs.js`.

---

## 📄 License

This project is for educational purposes.

---

<p align="center">
  <em>Built with ❤️ and Poké Balls</em>
</p>
=======

>>>>>>> 7742c556d40c0ee98c24f92f2ceaf8f054f89da0
