import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import { useAppStore } from '../store/useAppStore';
import { ASSESS_QS } from '../data/assessQs';
import { MODULES } from '../data/modules';
import '../styles/AssessmentScreen.css';

const spriteURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

const AssessmentScreen = () => {
  const navigate = useNavigate();
  const { 
    assessIdx, 
    setAssessIdx, 
    assessCorrect, 
    setAssessScore,
    setRank,
    setRecommendations,
    selectedTopics
  } = useAppStore();

  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // ALWAYS reset assessment progress when mounting this page
  useEffect(() => {
    setAssessIdx(0);
    setAssessScore(0);
    setAnswered(false);
    setSelectedOpt(null);
    setShowResult(false);

    // Block browser back button during the pretest
    const blockBack = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', blockBack);

    return () => {
      window.removeEventListener('popstate', blockBack);
    };
  }, []);

  const handleAnswer = (idx) => {
    if (answered) return;
    setAnswered(true);
    setSelectedOpt(idx);
    
    const isCorrect = idx === ASSESS_QS[assessIdx].correct;
    if (isCorrect) {
      setAssessScore(assessCorrect + 1);
    }

    setTimeout(() => {
      if (assessIdx + 1 >= ASSESS_QS.length) {
        finishAssessment(isCorrect ? assessCorrect + 1 : assessCorrect);
      } else {
        setAssessIdx(assessIdx + 1);
        setAnswered(false);
        setSelectedOpt(null);
      }
    }, 900);
  };

  const finishAssessment = (finalScore) => {
    const pct = Math.round((finalScore / ASSESS_QS.length) * 100);
    let newRank = 'beginner';
    
    if (pct >= 75) newRank = 'advanced';
    else if (pct >= 40) newRank = 'intermediate';

    setRank(newRank);
    
    // Assign Starter based on rank
    const starters = {
      advanced: { id: 150, name: 'Mewtwo' },
      intermediate: { id: 65, name: 'Alakazam' },
      beginner: { id: 1, name: 'Bulbasaur' }
    };
    useAppStore.getState().setStarterPokemon(starters[newRank]);

    buildRecommendations(pct, newRank);
    setShowResult(true);
  };

  const buildRecommendations = (score, rankStr) => {
    const scoredModules = MODULES.map(m => {
      let pts = 0;
      const topicMatch = m.topicIds.some(t => selectedTopics.includes(t));
      if (topicMatch) pts += 3;
      if (score < 40 && (m.id === 'm1' || m.id === 'm2')) pts += 2;
      if (score >= 40 && score < 75 && (m.id === 'm3' || m.id === 'm5')) pts += 2;
      if (score >= 75 && (m.id === 'm4' || m.id === 'm3')) pts += 2;
      pts -= m.zone * 0.1;
      return { ...m, pts };
    }).sort((a, b) => b.pts - a.pts);

    let recs = scoredModules.slice(0, 4).map(m => m.id);
    if (recs.length < 3) recs = MODULES.slice(0, 3).map(m => m.id);
    setRecommendations(recs);
  };

  if (showResult) {
    const pct = Math.round((assessCorrect / ASSESS_QS.length) * 100);
    const pd = {
      advanced: { id: 150, desc: 'Outstanding! Strong foundations — we\'ll start you on the advanced modules.' },
      intermediate: { id: 65, desc: 'Solid base! Your personalised path will systematically fill the gaps.' },
      beginner: { id: 1, desc: 'Welcome, Trainer! Your curated path starts from the foundations.' }
    };
    const { id, desc } = pd[useAppStore.getState().rank] || pd.beginner;
    const rank = useAppStore.getState().rank;

    return (
      <div className="screen active" id="assessment-screen">
        <PokeBallsBackground count={10} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="assessment-box">
            <div className="result-card">
              <img 
                src={animURL(id)} 
                onError={(e) => { e.target.src = spriteURL(id); }} 
                style={{ width: '110px', height: '110px', imageRendering: 'pixelated', display: 'block', margin: '0 auto 12px' }} 
                alt="rank pokemon" 
              />
              <div className="assess-header">🎓 PRETEST COMPLETE</div>
              <div className={`result-rank ${rank}`}>{rank.toUpperCase()}</div>
              <div className="result-score">{assessCorrect}/{ASSESS_QS.length} correct ({pct}%)</div>
              <div className="result-desc">{desc}</div>
              <button className="btn-start" style={{ fontSize: '10px', padding: '12px 28px' }} onClick={() => navigate('/recommend')}>
                ▶ SEE YOUR MODULES
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = ASSESS_QS[assessIdx];
  const progressPct = ((assessIdx) / ASSESS_QS.length) * 100;

  return (
    <div className="screen active" id="assessment-screen">
      <PokeBallsBackground count={10} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="assessment-box">
          <div className="assess-header">🎓 SKILL PRETEST</div>
          <div className="assess-title">Where do you stand?</div>
          <div className="assess-sub">Answer 12 questions — we'll recommend modules based on your score.</div>
          
          <div className="assess-progress">
            <div className="assess-bar-wrap">
              <div className="assess-bar" style={{ width: `${progressPct}%` }}></div>
            </div>
            <div className="assess-q-num">Q {assessIdx + 1} / {ASSESS_QS.length}</div>
          </div>
          
          <div className="assess-question">{q.q}</div>
          
          <div className="assess-options">
            {q.opts.map((opt, i) => {
              let cls = 'assess-opt';
              if (answered) {
                if (i === q.correct) cls += ' correct';
                else if (i === selectedOpt) cls += ' wrong';
              }
              return (
                <button 
                  key={i} 
                  className={cls} 
                  disabled={answered}
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentScreen;
