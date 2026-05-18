import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HUD from '../components/HUD';
import { useAppStore } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';
import { MODULES } from '../data/modules';
import { DYNAMIC_QS } from '../data/dynamicQs';
import VideoAssistantQA from '../components/VideoAssistantQA';
import '../styles/ModuleScreen.css';

const staticURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

// Adaptive Quiz Component
const AdaptiveQuizBox = ({ modId, sectionIdx, onCompleteSection }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [streak, setStreak] = useState(0); 
  const [answeredQs, setAnsweredQs] = useState([]); // track Qs seen to avoid repeats
  const [currentQ, setCurrentQ] = useState(null);
  
  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize first question
  useEffect(() => {
    if (!currentQ && !isCompleted) {
      pickNextQuestion('easy');
    }
  }, [modId, sectionIdx]);

  const pickNextQuestion = (targetDiff) => {
    const bank = DYNAMIC_QS[modId];
    if (!bank) return; // Fallback if script failed for this module
    
    // Filter questions by difficulty and those not yet answered
    const available = bank.filter(q => q.difficulty === targetDiff && !answeredQs.includes(q.q));
    
    let nextQ = null;
    if (available.length > 0) {
      // Pick random
      nextQ = available[Math.floor(Math.random() * available.length)];
    } else {
      // Fallback if we run out of questions in a tier (unlikely with 10 each, but safe)
      const anyUnseen = bank.find(q => !answeredQs.includes(q.q));
      nextQ = anyUnseen; 
    }

    if (nextQ) {
      setCurrentQ(nextQ);
      setAnswered(false);
      setSelectedOpt(null);
    } else {
      // If absolutely no questions left, just complete the section
      handleCompletion();
    }
  };

  const handleCompletion = () => {
    setIsCompleted(true);
    onCompleteSection(sectionIdx);
  };

  const handleAnswer = (optIdx) => {
    if (answered) return;
    setAnswered(true);
    setSelectedOpt(optIdx);
    
    const isCorrect = optIdx === currentQ.correct;
    
    setTimeout(() => {
      let newStreak = isCorrect ? streak + 1 : 0;
      let newDiff = difficulty;

      // Adaptive Logic
      if (isCorrect) {
        if (difficulty === 'easy' && newStreak >= 2) {
          newDiff = 'medium';
          newStreak = 0;
        } else if (difficulty === 'medium' && newStreak >= 2) {
          newDiff = 'hard';
          newStreak = 0;
        } else if (difficulty === 'hard' && newStreak >= 2) {
          // Passed two hard questions? Section complete!
          handleCompletion();
          return;
        }
      } else {
        // Demote on failure
        if (difficulty === 'hard') newDiff = 'medium';
        else if (difficulty === 'medium') newDiff = 'easy';
        newStreak = 0;
      }

      setStreak(newStreak);
      setDifficulty(newDiff);
      setAnsweredQs([...answeredQs, currentQ.q]);
      
      pickNextQuestion(newDiff);
    }, 2000); // 2 second pause to read the feedback
  };

  if (isCompleted) {
    return (
      <div className="section-complete" style={{ marginTop: '16px' }}>
        ✅ <span className="section-complete-text">Section Mastered! Adaptive Quiz Complete.</span>
      </div>
    );
  }

  if (!currentQ && !DYNAMIC_QS[modId]) {
    return <div style={{ color: 'var(--muted)', padding: '16px' }}>Quiz bank loading or unavailable...</div>;
  }
  if (!currentQ) return null;

  return (
    <div className="quiz-box" style={{ marginBottom: '16px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 12, right: 16, fontSize: '10px', textTransform: 'uppercase', color: 'var(--yellow)' }}>
        Level: {difficulty} | Streak: {streak} 🔥
      </div>
      <div className="quiz-q" style={{ paddingRight: '120px' }}>{currentQ.q}</div>
      <div className="quiz-opts">
        {currentQ.opts.map((opt, i) => {
          let cls = 'quiz-opt';
          if (answered) {
            if (i === currentQ.correct) cls += ' correct';
            else if (i === selectedOpt) cls += ' wrong';
          }
          return (
            <button 
              key={i} 
              className={cls}
              onClick={() => handleAnswer(i)}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`quiz-feedback ${selectedOpt === currentQ.correct ? 'correct-fb' : 'wrong-fb'}`}>
          <strong>{selectedOpt === currentQ.correct ? 'Correct! ' : 'Not quite. '}</strong>
          {currentQ.explain}
          <div style={{ marginTop: '8px', fontSize: '11px', opacity: 0.8 }}>
             {selectedOpt === currentQ.correct ? 'Loading next question...' : 'Adjusting difficulty...'}
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Feedback Box
const FeedbackBox = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  
  if (submitted) {
    return <div className="feedback-box feedback-submitted">Thanks for your feedback! 🌟</div>;
  }
  
  return (
    <div className="feedback-box">
      <label className="feedback-label">How was this section?</label>
      <div className="rating-row">
        {[1,2,3,4,5].map(star => (
          <div 
            key={star} 
            className={`rating-star ${rating >= star ? 'active' : ''}`}
            onClick={() => setRating(star)}
          >
            ⭐
          </div>
        ))}
      </div>
      <textarea 
        className="feedback-textarea" 
        placeholder="Was anything confusing? What did you like?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button 
        className="feedback-submit" 
        style={{ marginTop: '12px' }}
        onClick={() => setSubmitted(true)}
      >
        SUBMIT FEEDBACK
      </button>
    </div>
  );
};

const ModuleScreen = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const mod = MODULES.find(m => m.id === moduleId);
  
  const { addXP, markModuleComplete, completedModules } = useAppStore();
  const { showNotif } = useNotifStore();

  const [activeSection, setActiveSection] = useState(0);
  // Track correct answers: { sectionIdx: Set(qIndices) }
  const [progress, setProgress] = useState({});
  const [moduleFinished, setModuleFinished] = useState(false);

  useEffect(() => {
    if (!mod) navigate('/recommend');
    window.scrollTo(0, 0);
  }, [mod, navigate]);

  if (!mod) return null;

  const handleCorrect = (sIdx) => {
    setProgress(prev => {
      const next = { ...prev };
      next[sIdx] = true; // Mark entire section as done when adaptive quiz finishes
      return next;
    });
  };

  const isSectionDone = (sIdx) => {
    return !!progress[sIdx];
  };

  const totalSections = mod.sections.length;
  const completedSectionsCount = mod.sections.filter((_, i) => isSectionDone(i)).length;
  const progPct = Math.round((completedSectionsCount / totalSections) * 100);

  const handleFinishModule = () => {
    if (!completedModules.includes(mod.id)) {
      addXP(mod.xpReward);
      markModuleComplete(mod.id);
      showNotif(`🎉 Module Complete! +${mod.xpReward} XP`);
    }
    setModuleFinished(true);
  };

  const sec = mod.sections[activeSection];

  return (
    <div className="screen active" id="module-screen">
      <HUD customTitle={mod.name} />
      
      <div className="module-layout">
        {/* Sidebar */}
        <div className="module-sidebar">
          <div className="ms-title">MODULE PATH</div>
          
          <div className="ms-progress">
            <div className="ms-prog-label">
              <span>Progress</span>
              <span>{progPct}%</span>
            </div>
            <div className="ms-prog-bar">
              <div className="ms-prog-fill" style={{ width: `${progPct}%` }}></div>
            </div>
          </div>

          <div className="ms-nav">
            {mod.sections.map((s, i) => (
              <div 
                key={s.id}
                className={`ms-nav-item ${activeSection === i ? 'active' : ''} ${isSectionDone(i) ? 'done' : ''}`}
                onClick={() => { setActiveSection(i); window.scrollTo(0,0); }}
              >
                {i + 1}. {s.title}
              </div>
            ))}
          </div>

          <div className="ms-poke">
            <img src={animURL(mod.pokemon.id)} onError={(e) => { e.target.src = staticURL(mod.pokemon.id); }} alt={mod.pokemon.name} />
            <div className="ms-poke-name">{mod.pokemon.name}</div>
            <div className="ms-xp-info">Rewards {mod.xpReward} XP</div>
          </div>
        </div>

        {/* Content */}
        <div className="module-content">
          {moduleFinished ? (
            <div className="module-complete">
              <img className="mc-complete-poke" src={animURL(mod.pokemon.id)} alt="Pokemon" />
              <div className="mc-complete-title">MODULE MASTERED!</div>
              <div className="mc-complete-sub">
                Outstanding work catching those concepts.<br/>
                You've earned the <strong>{mod.name}</strong> badge.
              </div>
              <div className="xp-gained">+{mod.xpReward} XP GAINED</div>
              
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
                <button 
                  className="btn-primary" 
                  style={{ padding: '14px 24px', fontSize: '10px' }}
                  onClick={() => navigate('/recommend')}
                >
                  ▶ RETURN TO MODULES
                </button>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '14px 24px', fontSize: '10px' }}
                  onClick={() => navigate('/overworld')}
                >
                  🗺️ EXPLORE MAP
                </button>
              </div>
            </div>
          ) : (
            <div className="mod-section">
              <div className="mod-section-header">
                <div className="mod-section-num">{activeSection + 1}</div>
                <div className="mod-section-title">{sec.title}</div>
              </div>

              {/* Concepts */}
              {sec.concepts && sec.concepts.map((c, i) => (
                <div key={i} className="concept-card">
                  <div className="concept-card-title">
                    <span>{c.icon}</span> {c.title}
                  </div>
                  <div className="concept-card-body" dangerouslySetInnerHTML={{ __html: c.body }}></div>
                  {c.scenario && (
                    <div className="scenario-box" dangerouslySetInnerHTML={{ __html: c.scenario }}></div>
                  )}
                </div>
              ))}

              {/* Video */}
              {sec.video && (
                <>
                  <div className="concept-card" style={{ marginTop: '24px' }}>
                    <div className="concept-card-title">▶ Video Lesson</div>
                    <div className="video-wrapper">
                      <iframe 
                        src={`https://www.youtube.com/embed/${sec.video.id}`} 
                        title={sec.video.title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="video-meta">
                      <span>{sec.video.title} — {sec.video.channel}</span>
                      <span>⏱ {sec.video.duration}</span>
                    </div>
                  </div>
                  
                  {/* LLaMA Video Assistant */}
                  <VideoAssistantQA videoContext={sec.video} />
                </>
              )}

              {/* Quizzes */}
              <div className="concept-card" style={{ marginTop: '24px', background: 'rgba(22, 33, 62, 0.9)', borderColor: 'rgba(255, 214, 10, 0.3)' }}>
                <div className="concept-card-title" style={{ marginBottom: '16px' }}>
                  🎯 Adaptive Knowledge Check
                  <div style={{ fontSize: '12px', fontWeight: 'normal', color: 'var(--muted)', marginTop: '4px' }}>
                    Questions adapt to your skill level. Pass 2 "Hard" questions in a row to clear the section.
                  </div>
                </div>
                
                {!isSectionDone(activeSection) && (
                  <AdaptiveQuizBox 
                    modId={mod.id}
                    sectionIdx={activeSection} 
                    onCompleteSection={handleCorrect}
                  />
                )}

                {isSectionDone(activeSection) && (
                  <div className="section-complete" style={{ marginTop: 0 }}>
                    ✅ <span className="section-complete-text">Section Complete! Excellent work.</span>
                  </div>
                )}
              </div>

              {/* Feedback Component */}
              <div style={{ marginTop: '24px' }}>
                <FeedbackBox />
              </div>

              {/* Next/Finish Button */}
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  className="btn-primary" 
                  style={{ padding: '14px 28px', opacity: isSectionDone(activeSection) ? 1 : 0.5 }}
                  onClick={() => {
                    if (!isSectionDone(activeSection)) {
                      showNotif('⚠️ Answer all knowledge checks correctly to proceed.');
                      return;
                    }
                    if (activeSection + 1 < totalSections) {
                      setActiveSection(activeSection + 1);
                      window.scrollTo(0,0);
                    } else {
                      handleFinishModule();
                    }
                  }}
                >
                  {activeSection + 1 < totalSections ? '▶ NEXT SECTION' : '🏆 FINISH MODULE'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleScreen;
