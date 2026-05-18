import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

const HUD = ({ customTitle, hideNav }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { xp, rank, level } = useAppStore();

  const isMap = location.pathname === '/overworld';
  const isModules = location.pathname.includes('/modules') || location.pathname === '/recommend';
  const isDex = location.pathname === '/collection';

  return (
    <div className="hud">
      <div className="hud-logo">{customTitle || 'PokéLearn'}</div>
      
      <div className="hud-stats">
        {isMap && <div className="hud-stat">🏅 Lv.<span id="trainer-lv">{level}</span></div>}
        
        <div className="hud-stat">⭐ {xp} XP
          <div className="xp-bar-wrap">
            <div className="xp-bar" style={{ width: `${xp % 100}%` }}></div>
          </div>
        </div>
        
        {!customTitle && (
          <div className="hud-stat">
            <span className={`rank-badge rank-${rank}`}>
              {rank.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {!hideNav && (
        <div className="hud-nav">
          <button 
            className={`nav-btn ${isModules ? 'active' : ''}`} 
            onClick={() => navigate('/recommend')}
          >
            📚 MODULES
          </button>
          <button 
            className={`nav-btn ${isDex ? 'active' : ''}`} 
            onClick={() => navigate('/collection')}
          >
            📋 DEX
          </button>
          <button 
            className={`nav-btn ${isMap ? 'active' : ''}`} 
            onClick={() => navigate('/overworld')}
          >
            🗺 MAP
          </button>
        </div>
      )}
    </div>
  );
};

export default HUD;
