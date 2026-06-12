import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HUD from '../components/HUD';
import { useAppStore } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';
import { getAssessQs } from '../data/assessQs'; // reusing questions for battle
import '../styles/BattleScreen.css';

const staticURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const staticBackURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/back/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
const animBackURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`;

const BattleScreen = () => {
  const navigate = useNavigate();
  const { 
    name, 
    level, 
    currentEnemy, 
    catchChance,
    questionsAnswered,
    questionsCorrect,
    starterPokemon,
    setBattleState,
    addXP,
    addCaught,
    allCaught,
    profile
  } = useAppStore();
  const { showNotif } = useNotifStore();

  const ASSESS_QS = getAssessQs(profile.industry);

  const [msg, setMsg] = useState('');
  const [phase, setPhase] = useState('intro'); // intro, action, question, catchAnim, end
  const [qIdx, setQIdx] = useState(0);
  const [playerHp, setPlayerHp] = useState(100);

  const enemyRef = useRef(null);

  useEffect(() => {
    if (!currentEnemy) {
      navigate('/overworld');
      return;
    }
    setMsg(`Wild ${currentEnemy.name} appeared!`);
    setTimeout(() => {
      setMsg(`What will ${name} do?`);
      setPhase('action');
    }, 2000);
    
    // Pick a random question
    setQIdx(Math.floor(Math.random() * ASSESS_QS.length));
  }, []);

  if (!currentEnemy) return null;

  // Derive player pokemon (starter -> first caught -> Pikachu)
  const playerPokeId = starterPokemon ? starterPokemon.id : (allCaught.length > 0 ? allCaught[0].id : 25);
  const playerPokeName = starterPokemon ? starterPokemon.name : (allCaught.length > 0 ? allCaught[0].name : 'Pikachu');

  const handleFight = () => {
    setPhase('question');
    setMsg('Answer correctly to attack!');
  };

  const handleAnswer = (optIdx) => {
    const q = ASSESS_QS[qIdx];
    const isCorrect = optIdx === q.correct;
    
    setPhase('anim');
    
    if (isCorrect) {
      setMsg(`${playerPokeName} used Data Smash! It's super effective!`);
      // Flash enemy
      if (enemyRef.current) {
        enemyRef.current.style.filter = 'brightness(2) sepia(1) hue-rotate(-50deg) saturate(5)';
        setTimeout(() => enemyRef.current.style.filter = '', 200);
        setTimeout(() => enemyRef.current.style.filter = 'brightness(2)', 400);
        setTimeout(() => enemyRef.current.style.filter = '', 600);
      }

      const dmg = Math.floor(currentEnemy.maxHp * 0.4);
      const newHp = Math.max(0, currentEnemy.hp - dmg);
      const newChance = Math.min(95, catchChance + 25);
      
      setBattleState({
        currentEnemy: { ...currentEnemy, hp: newHp },
        catchChance: newChance,
        questionsAnswered: questionsAnswered + 1,
        questionsCorrect: questionsCorrect + 1
      });

      if (newHp === 0) {
        setTimeout(() => {
          setMsg(`${currentEnemy.name} fainted! You gained 50 XP.`);
          addXP(50);
          setTimeout(() => navigate('/overworld'), 2500);
        }, 2000);
      } else {
        setTimeout(() => {
          setQIdx(Math.floor(Math.random() * ASSESS_QS.length));
          setMsg(`What will ${name} do?`);
          setPhase('action');
        }, 2500);
      }
    } else {
      setMsg(`Wrong! ${currentEnemy.name} counter-attacked!`);
      const dmg = 25;
      const pNewHp = Math.max(0, playerHp - dmg);
      setPlayerHp(pNewHp);
      
      // Flash screen red
      const flash = document.getElementById('flash');
      if (flash) {
        flash.style.background = 'red';
        flash.classList.add('show');
        setTimeout(() => {
          flash.classList.remove('show');
          flash.style.background = 'white';
        }, 300);
      }

      if (pNewHp === 0) {
        setTimeout(() => {
          setMsg(`${name} blacked out...`);
          setTimeout(() => navigate('/overworld'), 2500);
        }, 2000);
      } else {
        setTimeout(() => {
          setQIdx(Math.floor(Math.random() * ASSESS_QS.length));
          setMsg(`What will ${name} do?`);
          setPhase('action');
        }, 2500);
      }
    }
  };

  const handleCatch = () => {
    setPhase('catchAnim');
    setMsg(`${name} threw a Pokéball!`);
    
    // Create animated ball element
    const scene = document.querySelector('.battle-scene');
    const ball = document.createElement('div');
    ball.className = 'catch-ball';
    ball.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="#e63946" stroke="#333" stroke-width="6"/><rect x="0" y="46" width="100" height="8" fill="#333"/><circle cx="50" cy="54" r="47" fill="#fff" clip-path="url(#cb-bot)"/><clipPath id="cb-bot"><rect x="0" y="50" width="100" height="50"/></clipPath><circle cx="50" cy="50" r="16" fill="#fff" stroke="#333" stroke-width="6"/><circle cx="50" cy="50" r="6" fill="#333"/></svg>`;
    
    scene.appendChild(ball);

    // Roll checks upfront
    const roll = Math.random() * 100;
    const isCaught = roll <= catchChance;
    const numShakes = isCaught ? 3 : Math.floor(Math.random() * 3);

    // 1. Throw ball
    ball.style.animation = 'throwBall 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';

    setTimeout(() => {
      // 2. Ball hits enemy, enemy shrinks into ball
      if (enemyRef.current) {
        enemyRef.current.style.animation = 'enemyShrink 0.4s forwards';
      }
      
      setTimeout(() => {
        // 3. Enemy is inside. Ball drops to platform
        ball.style.animation = 'ballDrop 0.5s cubic-bezier(.54,.13,.44,.83) forwards';
        
        setTimeout(() => {
          // 4. Sequence of shakes loop
          let currentShake = 0;
          
          const doShake = () => {
            if (currentShake < numShakes) {
               // Reset animation via reflow to trigger shake again
               ball.style.animation = 'none';
               void ball.offsetWidth; 
               ball.style.animation = 'ballShake 0.6s cubic-bezier(.36,.07,.19,.97) both';
               currentShake++;
               setTimeout(doShake, 1200); // 1.2 sec between shakes
            } else {
               // 5. Finished shakes logic
               if (isCaught) {
                  ball.style.animation = 'catchSuccess 1s forwards';
                  setMsg(`Gotcha! ${currentEnemy.name} was caught! +100 XP`);
                  addCaught(currentEnemy, useAppStore.getState().currentZone);
                  addXP(100);
                  showNotif(`🎉 Caught ${currentEnemy.name}!`);
                  
                  setTimeout(() => {
                    if (scene.contains(ball)) scene.removeChild(ball);
                    navigate('/overworld');
                  }, 3000);
               } else {
                  // Break out logic
                  ball.style.animation = 'ballBurst 0.3s forwards';
                  if (enemyRef.current) {
                    enemyRef.current.style.animation = 'enemyBreakout 0.4s forwards';
                  }
                  setMsg(`Oh no! The Pokémon broke free!`);
                  
                  setTimeout(() => {
                    if (scene.contains(ball)) scene.removeChild(ball);
                    setMsg(`What will ${name} do?`);
                    setPhase('action');
                  }, 2000);
               }
            }
          };
          
          // Wait briefly after ball drop before the first shake
          setTimeout(doShake, 800); 
          
        }, 500); // duration of drop
      }, 400); // duration of shrink
    }, 600); // duration of throw
  };

  const hpColor = (pct) => pct > 50 ? 'var(--green)' : pct > 20 ? 'var(--yellow)' : 'var(--red)';
  const enemyHpPct = (currentEnemy.hp / currentEnemy.maxHp) * 100;
  const playerHpPct = playerHp; // max is 100

  return (
    <div className="screen active" id="battle-screen">
      <HUD hideNav />
      
      <div className="battle-scene">
        <div className="battle-entity enemy-entity">
          <div className="battle-platform"></div>
          <img 
            ref={enemyRef}
            className="battle-sprite enemy-float" 
            src={animURL(currentEnemy.id)} 
            onError={(e) => { e.target.src = staticURL(currentEnemy.id); }}
            alt={currentEnemy.name} 
          />
        </div>
        
        <div className="battle-entity player-entity">
          <div className="battle-platform"></div>
          <img 
            className="battle-sprite player-float" 
            src={animBackURL(playerPokeId)} 
            onError={(e) => { e.target.src = staticBackURL(playerPokeId); }}
            alt={playerPokeName} 
          />
        </div>
        
        {/* Enemy HP */}
        <div className="hp-box enemy">
          <div className="catch-chance-meter">🎯 Catch: {catchChance}%</div>
          <div className="hp-name-row">
            <span className="hp-name">{currentEnemy.name.toUpperCase()}</span>
            <span className="hp-lv">Lv{Math.max(5, level - 2)}</span>
          </div>
          <div className="hp-bar-wrap">
            <div className="hp-bar" style={{ width: `${enemyHpPct}%`, background: hpColor(enemyHpPct) }}></div>
          </div>
        </div>
        
        {/* Player HP */}
        <div className="hp-box player">
          <div className="hp-name-row">
            <span className="hp-name">{playerPokeName.toUpperCase()}</span>
            <span className="hp-lv">Lv{level}</span>
          </div>
          <div className="hp-bar-wrap">
            <div className="hp-bar" style={{ width: `${playerHpPct}%`, background: hpColor(playerHpPct) }}></div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '10px', marginTop: '4px', fontFamily: "'Press Start 2P', monospace" }}>
            {Math.floor(playerHp)}/100
          </div>
        </div>
      </div>
      
      <div className="battle-ui">
        <div className="battle-msg">{msg}</div>
        
        <div className="battle-actions">
          {phase === 'action' && (
            <>
              <button className="battle-btn fight" onClick={handleFight}>⚔️ FIGHT</button>
              <button className="battle-btn catch" onClick={handleCatch}>🔴 CATCH</button>
              <button className="battle-btn run" onClick={() => navigate('/overworld')}>🏃 RUN</button>
            </>
          )}
          {phase === 'question' && (
            <div style={{ gridColumn: '1 / -1', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>{ASSESS_QS[qIdx].q}</div>
              {ASSESS_QS[qIdx].opts.map((opt, i) => (
                <button 
                  key={i}
                  style={{ 
                    padding: '8px', 
                    background: 'rgba(255,255,255,0.1)', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    borderRadius: '4px', 
                    color: '#fff', 
                    textAlign: 'left', 
                    fontSize: '11px', 
                    cursor: 'pointer' 
                  }}
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BattleScreen;
