import React from 'react';
import HUD from '../components/HUD';
import { useAppStore } from '../store/useAppStore';
import '../styles/CollectionScreen.css';

// We map pokemon IDs to the zone they belong to for labeling
const ZONE_NAMES = {
  1: 'Statistics Plains',
  2: 'Python Peak',
  3: 'ML Forest',
  4: 'Deep Learning Cave',
  5: 'Viz Waterfall'
};

const staticURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

const CollectionScreen = () => {
  const { allCaught, caught } = useAppStore();

  const totalCaught = allCaught.length;
  // Based on MAP_ENCOUNTERS in OverworldScreen: 3 per zone * 5 zones = 15
  const totalAvailable = 15; 
  
  return (
    <div className="screen scrollable-screen active" id="collection-screen">
      <HUD />
      
      <div className="dex-body">
        <div className="dex-header">📋 KNOWLEDGEDEX</div>
        <div className="dex-stats">
          You have caught <strong>{totalCaught}</strong> out of <strong>{totalAvailable}</strong> knowledge concepts.
        </div>

        <div className="dex-grid">
          {allCaught.map((p) => {
            // Find which zone this belongs to based on the state or assumption
            let zoneId = 1;
            for (let z in caught) {
              if (caught[z].find(x => x.id === p.id)) {
                zoneId = parseInt(z);
                break;
              }
            }

            return (
              <div className="dex-card caught" key={p.id}>
                <div className="dex-bg" style={{ backgroundImage: `url(${staticURL(p.id)})` }}></div>
                <div className="dex-card-id">#{String(p.id).padStart(3, '0')}</div>
                <img className="dex-img" src={animURL(p.id)} onError={(e) => { e.target.src = staticURL(p.id); }} alt={p.name} />
                <div className="dex-card-name">{p.name.toUpperCase()}</div>
                <div className="dex-zone">{ZONE_NAMES[zoneId]}</div>
              </div>
            );
          })}
          
          {/* Empty placeholders for uncaught ones */}
          {Array.from({ length: totalAvailable - totalCaught }).map((_, i) => (
            <div key={`empty-${i}`} className="dex-card empty">
              <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.2)' }}>?</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionScreen;
