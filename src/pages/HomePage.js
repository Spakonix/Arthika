// src/pages/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
// Check the path here: should be '../translations' if translations.js is in src/
import { translations } from '../translations'; 

const HomePage = ({ user, language }) => {
  const navigate = useNavigate();

  const currentLang = translations[language] || translations.en;
  // CRASH FIX: Added || '' to safely handle undefined translations before calling .replace()
  const t = (key) => currentLang[key] || translations.en[key] || '';

  const styles = {
    // ... (Your CSS styles remain the same)
    container: {
      padding: 20,
      backgroundColor: '#FFF9F1',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
    },
    header: {
      backgroundColor: '#4B0082',
      color: '#fff',
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    welcomeText: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    greeting: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    fireIcon: {
      color: '#FBC02D',
      fontSize: 24,
      fontWeight: 'bold',
    },
    progressContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      marginTop: 10,
    },
    progressBar: {
      height: 10,
      backgroundColor: '#FBC02D',
      width: '80%',
      borderRadius: 10,
    },
    progressDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5,
      fontSize: 12,
    },
    taskSection: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    },
    taskHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #eee',
    },
    taskText: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: '#555',
    },
    tipSection: {
      backgroundColor: 'rgba(244, 143, 177, 0.2)',
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    },
    tipHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
    tipQuote: {
      fontStyle: 'italic',
      color: '#333333',
      lineHeight: 1.5,
    },
    buttonGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 15,
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 120,
      borderRadius: 15,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
    },
    learnBtn: { backgroundColor: '#4B0082' },
    investBtn: { backgroundColor: '#FBC02D', color: '#333333' },
    communityBtn: { backgroundColor: '#F48FB1' },
    profileBtn: { backgroundColor: '#333333' },
    icon: {
      fontSize: 30,
      marginBottom: 10,
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.greeting}>
          <div>
            <div style={styles.welcomeText}>
              {/* CRASH FIX implemented here */}
              {(t('welcome_message') || '').replace('Priya', user?.name || t('guest_name'))}
            </div>
            <p>{t('grow_wealth_question')}</p>
          </div>
          <div style={styles.fireIcon}>
            🔥 <span>7</span>
          </div>
        </div>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}></div>
        </div>
        <div style={styles.progressDetails}>
          <span>{t('level')} 3</span>
          <span>1250/1500 XP</span>
        </div>
      </div>

      {/* Today's Tasks Section */}
      <div style={styles.taskSection}>
        <h3 style={styles.taskHeading}>{t('todays_tasks_heading')}</h3>
        <div style={styles.taskItem}>
          <div style={styles.taskText}>
            <span role="img" aria-label="play-icon">▶️</span>
            {t('watch_lesson_task')}
          </div>
          <span>+50 XP</span>
        </div>
        <div style={styles.taskItem}>
          <div style={styles.taskText}>
            <span role="img" aria-label="quiz-icon">✅</span>
            {t('take_quiz_task')}
          </div>
          <span>+30 XP</span>
        </div>
        <div style={styles.taskItem}>
          <div style={styles.taskText}>
            <span role="img" aria-label="chart-icon">📈</span>
            {t('check_portfolio_task')}
          </div>
          <span>+20 XP</span>
        </div>
      </div>

      {/* Finance Tip Section */}
      <div style={styles.tipSection}>
        <h4 style={styles.tipHeading}>{t('finance_tip_heading')}</h4>
        <p style={styles.tipQuote}>
          "{t('finance_tip_quote')}"
        </p>
      </div>

      {/* Navigation Buttons */}
      <div style={styles.buttonGrid}>
        <button
          style={{ ...styles.button, ...styles.learnBtn }}
          onClick={() => navigate('/learn')}
        >
          <span style={styles.icon} role="img" aria-label="book-icon">
            📖
          </span>
          {t('learn_button')}
        </button>
        <button style={{ ...styles.button, ...styles.investBtn }}>
          <span style={styles.icon} role="img" aria-label="chart-up-icon">
            📈
          </span>
          {t('invest_button')}
        </button>
        <button style={{ ...styles.button, ...styles.communityBtn }}>
          <span style={styles.icon} role="img" aria-label="community-icon">
            👥
          </span>
          {t('community_button')}
        </button>
        <button style={{ ...styles.button, ...styles.profileBtn }}>
          <span style={styles.icon} role="img" aria-label="profile-icon">
            👤
          </span>
          {t('profile_button')}
        </button>
      </div>
    </div>
  );
};

export default HomePage;