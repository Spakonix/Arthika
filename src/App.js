import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LearnPage from './pages/LearnPage';
import InvestPage from './pages/InvestPage';
import ProfilePage from './pages/ProfilePage';
import Chatbot from './components/Chatbot'; // Make sure this path is correct

function App() {
  // CRITICAL: Initializes state by checking Local Storage first for persistence.
  const [language, setLanguage] = useState(
    localStorage.getItem('app-language') || 'en'
  );
  const [userData, setUserData] = useState(null);

  const handleLanguageSelect = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('app-language', newLang);
  };

  return (
    <Router>
      {/* 1. The Routes handle page switching */}
      <Routes>
        <Route path="/" element={<WelcomePage onLanguageSelect={handleLanguageSelect} />} />
        
        {/* Core Application Pages */}
        <Route path="/login" element={<LoginPage language={language} setUserData={setUserData} />} />
        <Route path="/home" element={<HomePage user={userData} language={language} />} />
        <Route path="/register" element={<RegisterPage language={language} />} />
        
        {/* Navigation Pages */}
        <Route path="/learn" element={<LearnPage user={userData} language={language} />} />
        <Route path="/invest" element={<InvestPage user={userData} language={language} />} />
        <Route path="/profile" element={<ProfilePage user={userData} language={language} />} />
      </Routes>

      {/* 2. CHATBOT PLACEMENT: Outside Routes, so it persists across all pages */}
      <Chatbot language={language} />
    </Router>
  );
}

export default App;