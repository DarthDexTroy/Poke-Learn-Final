import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import TitleScreen from './pages/TitleScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfileScreen from './pages/ProfileScreen';
import TopicsScreen from './pages/TopicsScreen';
import AssessmentScreen from './pages/AssessmentScreen';
import RecommendScreen from './pages/RecommendScreen';
import ModuleScreen from './pages/ModuleScreen';
import OverworldScreen from './pages/OverworldScreen';
import BattleScreen from './pages/BattleScreen';
import CollectionScreen from './pages/CollectionScreen';
import { Notification } from './components/Notification';
import './styles/global.css';

// Transition Wrapper to handle screen flash/fade
const TransitionWrapper = ({ children }) => {
  const [showTrans, setShowTrans] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowTrans(true);
    const timer = setTimeout(() => setShowTrans(false), 250);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className={`screen-trans ${showTrans ? 'show' : ''}`} id="trans"></div>
      <div className="flash-overlay" id="flash"></div>
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Notification />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/topics" element={<TopicsScreen />} />
          <Route path="/assessment" element={<AssessmentScreen />} />
          <Route path="/recommend" element={<RecommendScreen />} />
          <Route path="/module/:moduleId" element={<ModuleScreen />} />
          <Route path="/overworld" element={<OverworldScreen />} />
          <Route path="/battle" element={<BattleScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
        </Routes>
      </TransitionWrapper>
    </Router>
  );
}

export default App;
