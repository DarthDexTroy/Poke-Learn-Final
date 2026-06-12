import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import { useAppStore, validateLogin, loadUserState } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';

const SignInScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const { setEmail, setName } = useAppStore();
  const { showNotif } = useNotifStore();

  const handleSignIn = () => {
    if (!username.trim()) {
      showNotif('❌ Please enter your username');
      return;
    }
    if (!password.trim()) {
      showNotif('❌ Please enter your password');
      return;
    }

    const storageKey = validateLogin(username.trim(), password);
    if (!storageKey) {
      showNotif('❌ Invalid username or password');
      return;
    }

    // Load saved state for this user
    loadUserState(username.trim());
    showNotif('✅ Welcome back!');
    setTimeout(() => navigate('/recommend'), 400);
  };

  return (
    <div className="screen active scrollable-screen" id="signin-screen">
      <div className="form-screen-bg"></div>
      <PokeBallsBackground count={10} />
      
      <div className="form-container">
        <div className="form-box">
          <div className="form-header">🔐 TRAINER LOGIN</div>
          <div className="form-title">Welcome Back!</div>
          <div className="form-sub">Sign in to continue your learning journey.</div>

          <div className="form-field">
            <label className="form-label">Username</label>
            <input 
              className="form-input" 
              placeholder="Your username"
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
          
          <button className="form-btn" onClick={handleSignIn}>▶ SIGN IN</button>
          <div className="form-link">New trainer? <span onClick={() => navigate('/signup')}>Create an account →</span></div>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
