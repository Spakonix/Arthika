// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import InvestPage from './pages/InvestPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [language, setLanguage] = useState('en');
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage onLanguageSelect={setLanguage} />} />
        <Route path="/login" element={<LoginPage language={language} setUserData={setUserData} />} />
        <Route path="/home" element={<HomePage user={userData} language={language} />} />
        <Route path="/register" element={<RegisterPage language={language} />} />
        <Route path="/invest" element={<InvestPage language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;