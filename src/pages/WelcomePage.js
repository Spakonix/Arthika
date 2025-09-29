// src/pages/WelcomePage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = ({ onLanguageSelect }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const messages = [
    'अर्थिका में आपका स्वागत है',
    'અર્થિકા માં આપનું સ્વાગત છે',
    'অর্থিকায় আপনাকে স্বাগতম',
    'அர்திகாவுக்கு வரவேற்கிறோம்',
    'అర్థికాలోకి స్వాగతం',
    'ਅਰਥਿਕਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
    'അര്‍ഥിക്കയിലേക്ക് സ്വാഗതം',
    'آرتھیکا میں خوش آمدید',
    'Welcome to Arthika',
  ];

  const languages = [
    { code: 'hi', label: 'हिंदी' },
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'मराठी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'ur', label: 'اردو' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const handleClick = (lang) => {
    // This calls the handler in App.js, which saves to Local Storage
    onLanguageSelect(lang); 
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Arthika</h1>
      <p style={styles.fadeText} key={index}>{messages[index]}</p>

      <div style={styles.langGrid}>
        {languages.map(({ code, label }) => (
          <div
            key={code}
            onClick={() => handleClick(code)}
            style={{
              ...styles.langBox,
              fontFamily: code === 'en' ? 'Times New Roman' : 'inherit',
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #ffd1dc, #d6f5ff)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  },
  fadeText: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '25px',
    transition: 'opacity 0.5s ease-in-out',
  },
  langGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 120px)',
    gap: '15px',
    justifyContent: 'center',
  },
  langBox: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '1px solid #ccc',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
};

export default WelcomePage;