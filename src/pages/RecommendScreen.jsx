import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HUD from '../components/HUD';
import { useAppStore, saveCurrentUser } from '../store/useAppStore';
import { getModulesForIndustry } from '../data/modules';
import { getAssessQs } from '../data/assessQs';
import { LogOut, User, BookOpen, Clock, Trophy, BarChart3 } from 'lucide-react';
import '../styles/RecommendScreen.css';

const spriteURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`;
const animURL = id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

const RecommendScreen = () => {
  const navigate = useNavigate();
  const { 
    name, 
    email,
    assessCorrect, 
    rank, 
    selectedTopics, 
    recommendedModules, 
    completedModules,
    questionsAnswered,
    questionsCorrect,
    allCaught,
    xp,
    level,
    totalMinutes,
    sessionStartTime,
    profile,
    signOut,
    startSession
  } = useAppStore();

  // Session timer
  const [sessionMins, setSessionMins] = useState(0);

  const customModules = getModulesForIndustry(profile.industry);
  const customAssessQs = getAssessQs(profile.industry);
  
  useEffect(() => {
    if (!sessionStartTime) startSession();
    const interval = setInterval(() => {
      if (sessionStartTime) {
        setSessionMins(Math.floor((Date.now() - sessionStartTime) / 60000));
      }
    }, 10000);

    // Block browser back button so user can't go back to the pretest
    const blockBack = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', blockBack);

    return () => {
      clearInterval(interval);
      window.removeEventListener('popstate', blockBack);
    };
  }, [sessionStartTime]);

  const handleSignOut = () => {
    saveCurrentUser();
    signOut();
    navigate('/');
  };

  const pct = customAssessQs.length > 0 ? Math.round((assessCorrect / customAssessQs.length) * 100) : 0;
  const totalMins = (totalMinutes || 0) + sessionMins;
  
  const rankPoke = { beginner: 1, intermediate: 65, advanced: 150 }[rank] || 1;
  const why = {
    beginner: "Your pretest shows you're building foundations. We've prioritised modules that establish core concepts clearly.",
    intermediate: "You have a solid base. We've selected modules that fill your specific gaps and push you toward mastery.",
    advanced: "Strong fundamentals! We've queued the advanced modules so you can tackle the most challenging concepts."
  };

  // Skill percentages based on quiz performance and module completion
  const moduleProgress = customModules.length > 0 ? Math.round((completedModules.length / customModules.length) * 100) : 0;
  const quizAccuracy = questionsAnswered > 0 ? Math.round((questionsCorrect / questionsAnswered) * 100) : 0;
  const catchProgress = Math.round((allCaught.length / 25) * 100); // 25 total possible
  const overallSkill = Math.round((moduleProgress * 0.4 + quizAccuracy * 0.35 + Math.min(catchProgress, 100) * 0.25));

  return (
    <div className="screen active scrollable-screen" id="recommend-screen">
      <HUD />
      
      <div className="rec-body">

        {/* Profile Dashboard */}
        <div className="profile-dashboard">
          <div className="pd-header">
            <div className="pd-avatar">
              <img 
                src={animURL(rankPoke)} 
                onError={(e) => { e.target.src = spriteURL(rankPoke); }} 
                alt="avatar" 
              />
            </div>
            <div className="pd-info">
              <h2 className="pd-name">{name}</h2>
              <div className="pd-email">@{email || 'unknown'}</div>
              <div className="pd-rank">{rank.toUpperCase()} · Level {level}</div>
            </div>
            <button className="sign-out-btn" onClick={handleSignOut}>
              <LogOut size={16} />
              Sign Out
            </button>
          </div>

          <div className="pd-stats-grid">
            <div className="pd-stat-card">
              <div className="pd-stat-icon"><BookOpen size={20} /></div>
              <div className="pd-stat-value">{completedModules.length}/{customModules.length}</div>
              <div className="pd-stat-label">Modules Done</div>
            </div>
            <div className="pd-stat-card">
              <div className="pd-stat-icon"><Clock size={20} /></div>
              <div className="pd-stat-value">{totalMins < 1 ? '<1' : totalMins}</div>
              <div className="pd-stat-label">Minutes Spent</div>
            </div>
            <div className="pd-stat-card">
              <div className="pd-stat-icon"><Trophy size={20} /></div>
              <div className="pd-stat-value">{xp}</div>
              <div className="pd-stat-label">Total XP</div>
            </div>
            <div className="pd-stat-card">
              <div className="pd-stat-icon"><BarChart3 size={20} /></div>
              <div className="pd-stat-value">{pct}%</div>
              <div className="pd-stat-label">Pretest Score</div>
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="pd-skills">
            <div className="pd-skills-title">📊 Skill Assessment</div>
            <div className="pd-skill-row">
              <span className="pd-skill-name">Module Progress</span>
              <div className="pd-skill-bar">
                <div className="pd-skill-fill" style={{ width: `${moduleProgress}%`, background: 'var(--green)' }} />
              </div>
              <span className="pd-skill-pct">{moduleProgress}%</span>
            </div>

            <div className="pd-skill-row">
              <span className="pd-skill-name">Concepts Caught</span>
              <div className="pd-skill-bar">
                <div className="pd-skill-fill" style={{ width: `${Math.min(catchProgress, 100)}%`, background: 'var(--yellow)' }} />
              </div>
              <span className="pd-skill-pct">{Math.min(catchProgress, 100)}%</span>
            </div>
            <div className="pd-overall">
              <span>Overall Mastery</span>
              <span className="pd-overall-pct">{overallSkill}%</span>
            </div>
          </div>

          {/* Account Details */}
          {(profile.education || profile.field || profile.industry) && (
            <div className="pd-details">
              <div className="pd-details-title"><User size={16} /> Account Details</div>
              <div className="pd-details-grid">
                {profile.education && <div className="pd-detail"><span>Education</span><strong>{profile.education}</strong></div>}
                {profile.field && <div className="pd-detail"><span>Field</span><strong>{profile.field}</strong></div>}
                {profile.industry && <div className="pd-detail"><span>Industry</span><strong>{profile.industry}</strong></div>}
                {profile.experience && <div className="pd-detail"><span>Experience</span><strong>{profile.experience}</strong></div>}
                {profile.jobTitle && <div className="pd-detail"><span>Job Title</span><strong>{profile.jobTitle}</strong></div>}
              </div>
            </div>
          )}
        </div>

        {/* Course Path */}
        <div className="rec-intro">
          <div className="rec-intro-text">
            <h3>Your Learning Path 🎯</h3>
            <p>
              {why[rank] || why.beginner}
            </p>
          </div>
        </div>

        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: 'var(--muted)', marginBottom: '14px', letterSpacing: '1px' }}>
          {recommendedModules.length} MODULES RECOMMENDED · {customModules.length - recommendedModules.length} OPTIONAL
        </div>

        <div className="modules-grid">
          {customModules.map(m => {
            const isRec = recommendedModules.includes(m.id);
            const isDone = completedModules.includes(m.id);
            const topicMatch = m.topicIds.some(t => selectedTopics.includes(t));
            
            let whyText = '';
            if (isRec) {
              if (topicMatch) whyText = '✓ Matches your selected topics';
              else if (pct < 40 && m.zone <= 2) whyText = '✓ Recommended for your current level';
              else whyText = '✓ Targets gaps from your pretest score';
            }

            const canOpen = isRec || isDone;

            return (
              <div 
                key={m.id}
                className={`module-card ${isRec ? 'recommended' : ''} ${!canOpen ? 'locked-module' : ''}`}
                onClick={() => canOpen && navigate(`/module/${m.id}`)}
                style={{ cursor: canOpen ? 'pointer' : 'not-allowed' }}
              >
                <div className="mc-header">
                  <div className="mc-icon">{isDone ? '✅' : m.icon}</div>
                  <div>
                    <div className="mc-title">{m.name}</div>
                    <div className="mc-subtitle">{m.subtitle}</div>
                  </div>
                </div>

                {isRec && whyText && <div className="mc-why">{whyText}</div>}

                <div className="mc-tags">
                  {m.tags.map((t, i) => (
                    <span 
                      key={i} 
                      className="mc-tag" 
                      style={{ background: `${m.color}22`, color: m.color, border: `1px solid ${m.color}44` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.55, marginBottom: '10px' }}>
                  {m.desc}
                </div>

                <div className="mc-footer">
                  <span>{isDone ? '✅ Complete' : '🎯 ' + (isRec ? 'Click to start' : 'Locked')}</span>
                  <span className="mc-xp">+{m.xpReward} XP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendScreen;
