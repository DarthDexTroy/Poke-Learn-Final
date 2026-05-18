import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import { useAppStore, createAccount } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setEmail, setName, resetUser } = useAppStore();
  const { showNotif } = useNotifStore();

  const handleSignUp = () => {
    if (!username.trim()) {
      showNotif('❌ Please enter a username');
      return;
    }
    if (!password.trim() || password.length < 4) {
      showNotif('❌ Password must be at least 4 characters');
      return;
    }

    const success = createAccount(username.trim(), password);
    if (!success) {
      showNotif('❌ Username already taken! Try another.');
      return;
    }

    // Reset store for brand new user
    resetUser();
    setName(username.trim());
    setEmail(username.trim().toLowerCase()); // store username as the key
    showNotif(`✅ Account created! Welcome, ${username.trim()}!`);
    setTimeout(() => navigate('/profile'), 400);
  };

  return (
    <div className="screen active scrollable-screen" id="signup-screen">
      <div className="form-screen-bg"></div>
      <PokeBallsBackground count={10} />
      
      <div className="form-container">
        <div className="form-box">
          <div className="form-header">🆕 NEW TRAINER</div>
          <div className="form-title">Create Account</div>
          <div className="form-sub">Join thousands of learners catching concepts.</div>
          
          <div className="form-field">
            <label className="form-label">Username</label>
            <input 
              className="form-input" 
              placeholder="Choose a username..." 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Password</label>
            <input 
              className="form-input" 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <button className="form-btn" onClick={handleSignUp}>▶ CREATE ACCOUNT</button>
          <div className="form-link">Already a trainer? <span onClick={() => navigate('/signin')}>Sign in →</span></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
