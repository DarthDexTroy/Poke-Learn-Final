import React from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import '../styles/TitleScreen.css';

const TitleScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen active" id="title-screen">
      <div className="title-bg"></div>
      <PokeBallsBackground count={12} />
      
      <div className="title-mascot">
        <svg width="96" height="96" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="47" fill="#e63946" stroke="#fff" strokeWidth="3"/>
          <rect x="3" y="47" width="94" height="6" fill="#fff"/>
          <circle cx="50" cy="53" r="47" fill="#edf2f4" clipPath="url(#t_bot)"/>
          <clipPath id="t_bot"><rect x="0" y="50" width="100" height="50"/></clipPath>
          <circle cx="50" cy="50" r="13" fill="#fff" stroke="#333" strokeWidth="3"/>
          <circle cx="50" cy="50" r="7" fill="#e0e0e0" stroke="#aaa" strokeWidth="2"/>
          <circle cx="46" cy="46" r="2" fill="rgba(255,255,255,.6)"/>
        </svg>
      </div>
      
      <div className="title-logo">PokéLearn</div>
      <div className="title-sub">Data Science · Catch Knowledge · Evolve Your Mind</div>
      
      <button className="btn-start" onClick={() => navigate('/signin')}>
        ▶ START JOURNEY
      </button>
      
      <div className="title-footer">
        ✦ POKÉLEARN ✦
      </div>
    </div>
  );
};

export default TitleScreen;
