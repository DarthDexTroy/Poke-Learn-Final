import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import { useAppStore } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';
import { ALL_TOPICS } from '../data/topics';
import '../styles/TopicsScreen.css';

const TopicsScreen = () => {
  const navigate = useNavigate();
  const { selectedTopics, toggleTopic, setTopics } = useAppStore();
  const { showNotif } = useNotifStore();
  const [otherTopic, setOtherTopic] = useState('');

  useEffect(() => { setTopics([]); }, []);

  const handleContinue = () => {
    if (selectedTopics.length === 0) {
      showNotif('❌ Please select at least one topic!');
      return;
    }
    showNotif(`✅ ${selectedTopics.length} topics saved!`);
    navigate('/assessment');
  };

  return (
    <div className="screen active scrollable-screen" id="topics-screen">
      <div className="form-screen-bg"></div>
      <PokeBallsBackground count={10} />
      
      <div className="form-container align-start">
        <div className="topics-box">
          <div className="form-header">🎯 CHOOSE YOUR PATH</div>
          <div className="form-title">What do you want to learn?</div>
          <div className="form-sub" style={{ marginBottom: '20px' }}>
            Select all topics that interest you — we'll build your personalised learning path. Pick at least one.
          </div>

          <div className="topics-grid">
            {ALL_TOPICS.map((t) => {
              const isSelected = selectedTopics.includes(t.id);
              return (
                <div 
                  key={t.id} 
                  className={`topic-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleTopic(t.id)}
                >
                  <div className="tc-check">✓</div>
                  <div className="tc-icon">{t.icon}</div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-desc">{t.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="form-field" style={{ marginTop: '4px' }}>
            <label className="form-label">Anything else you'd like to learn? (optional)</label>
            <input 
              className="form-input" 
              placeholder="e.g. Natural Language Processing, Time Series..."
              value={otherTopic}
              onChange={(e) => setOtherTopic(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
              {selectedTopics.length} topic{selectedTopics.length === 1 ? '' : 's'} selected
            </div>
            <button className="form-btn" style={{ width: 'auto', padding: '12px 28px' }} onClick={handleContinue}>
              ▶ TAKE PRETEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsScreen;
