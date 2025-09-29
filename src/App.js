// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

// --- Import the Chatbot component ---
import Chatbot from './components/Chatbot';

function App() {
  const [language, setLanguage] = useState('en');
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      {/* The Routes will switch between your pages */}
      <Routes>
        <Route path="/" element={<WelcomePage onLanguageSelect={setLanguage} />} />
        <Route path="/login" element={<LoginPage language={language} setUserData={setUserData} />} />
        <Route path="/home" element={<HomePage user={userData} language={language} />} />
        <Route path="/register" element={<RegisterPage language={language} />} />
      </Routes>

      {/* --- Add the Chatbot here, outside the Routes --- */}
      {/* It will now appear on every page and use the language set by the WelcomePage */}
      <Chatbot language={language} />
    </Router>
  );
}

export default App;