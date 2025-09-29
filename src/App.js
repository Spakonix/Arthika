import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LearnPage from './pages/LearnPage';
import InvestPage from './pages/InvestPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  // CRITICAL FIX: Initialize state by checking Local Storage first for persistence.
  const [language, setLanguage] = useState(
    localStorage.getItem('app-language') || 'en' // Retrieves saved language or defaults to 'en'
  );
  const [userData, setUserData] = useState(null);

  // CRITICAL FIX: This handler saves the language to Local Storage.
  const handleLanguageSelect = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('app-language', newLang); // Saves preference for future visits/loads
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage onLanguageSelect={handleLanguageSelect} />} />
        
        {/* All pages receive the persistent 'language' state */}
        <Route path="/login" element={<LoginPage language={language} setUserData={setUserData} />} />
        <Route path="/home" element={<HomePage user={userData} language={language} />} />
        <Route path="/register" element={<RegisterPage language={language} />} />
        <Route path="/learn" element={<LearnPage user={userData} language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;