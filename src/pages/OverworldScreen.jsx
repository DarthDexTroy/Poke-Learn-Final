import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HUD from '../components/HUD';
import { useAppStore } from '../store/useAppStore';
import { MODULES } from '../data/modules';
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
];

export const MAP_ENCOUNTERS = {
  1: [{id: 1, name: 'Bulbasaur', hp: 40}, {id: 16, name: 'Pidgey', hp: 30}, {id: 19, name: 'Rattata', hp: 30}],
  2: [{id: 4, name: 'Charmander', hp: 50}, {id: 56, name: 'Mankey', hp: 45}, {id: 58, name: 'Growlithe', hp: 55}],
  3: [{id: 7, name: 'Squirtle', hp: 50}, {id: 43, name: 'Oddish', hp: 45}, {id: 48, name: 'Venonat', hp: 50}],
  4: [{id: 65, name: 'Alakazam', hp: 110}, {id: 94, name: 'Gengar', hp: 100}, {id: 104, name: 'Cubone', hp: 70}],
  5: [{id: 25, name: 'Pikachu', hp: 60}, {id: 120, name: 'Staryu', hp: 50}, {id: 130, name: 'Gyarados', hp: 120}]
};

const OverworldScreen = () => {
  const navigate = useNavigate();
  const { currentZone, completedModules, setBattleState } = useAppStore();
  const { showNotif } = useNotifStore();
  
  const [spritePos, setSpritePos] = useState({ x: 20, y: 70 });

  useEffect(() => {
    // Initial position
    const z = ZONES.find(z => z.id === currentZone) || ZONES[0];
    setSpritePos({ x: z.x, y: z.y });
  }, []);

  const handleZoneClick = (z) => {
    // Check if zone is locked
    // Zone N is unlocked if Zone N-1 module is complete
    if (z.id > 1) {
      const prevModule = MODULES.find(m => m.zone === z.id - 1);
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
        {ZONES.map((z1, i) => {
          if (i === ZONES.length - 1) return null;
          const z2 = ZONES[i + 1];

          const prevModule = MODULES.find(m => m.zone === z1.id);
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

          {ZONES.map(z => {
            let isLocked = false;
            if (z.id > 1) {
              const prevModule = MODULES.find(m => m.zone === z.id - 1);
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
                    const m = MODULES.find(mod => mod.zone === z.id);
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
