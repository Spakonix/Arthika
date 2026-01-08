import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../translations'; 

// --- ORIGINAL VIBRANT COLOR PALETTE (Restored) ---
const COLORS = {
  // Base Palette (from 1000263365.jpg & Screenshot 2025-09-28 184611.png)
  offWhite: '#FFF9F1',      // Main Background / Card Background
  yellow: '#FBC02D',        // Secondary Accent (XP, Progress Bar Fill, Invest button)
  pink: '#F48FB1',          // Accent (Community button)
  darkGrey: '#333333',      // Text, Profile button
  
  // Derived Colors
  primaryPurple: '#4B0082', // Deep Purple (Header Background, Learn button)
  lightPink: 'rgba(244, 143, 177, 0.15)', // Light version of pink for Tip background
  textWhite: '#FFFFFF',
  success: '#66bb6a',       // Green (for task completion checkmarks)
  lightBorder: '#E0E0E0',
};

const HomePage = ({ user, language }) => {
  const navigate = useNavigate();

  const currentLang = translations[language] || translations.en;
  const t = (key) => currentLang[key] || translations.en[key] || '';

  const currentXP = 1250;
  const maxXP = 1500;
  const level = 3;
  const progressPercent = (currentXP / maxXP) * 100;
  const userName = user?.name || t('guest_name');

  useEffect(() => {
    const script = document.createElement('script');
    // script.src = '//code.tidio.co/le88gc5puadgxjfxg9pzkxpjm7mygnxm.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const styles = {
    // --- Global Container & Background ---
    container: {
      padding: 20,
      backgroundColor: COLORS.offWhite, // FFF9F1
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      color: COLORS.darkGrey,
    },

    // --- 1. Header Section (Deep Purple) ---
    header: {
      backgroundColor: COLORS.primaryPurple, // 4B0082
      color: COLORS.textWhite,
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    greetingText: {
      fontSize: 22,
      fontWeight: 'bold',
      margin: 0,
    },
    readyText: {
      fontSize: 14,
      opacity: 0.9,
      margin: '5px 0 10px 0',
    },
    streak: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
    fireIcon: {
      color: COLORS.yellow, // FBC02D
      fontSize: 20,
      marginRight: 4,
    },

    // Progress Bar
    progressContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      height: 10,
      overflow: 'hidden',
    },
    progressBarFill: {
      backgroundColor: COLORS.yellow, // FBC02D
      height: '100%',
      borderRadius: 10,
      transition: 'width 0.5s ease-in-out',
    },
    progressDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5,
      fontSize: 12,
    },

    // --- 2. Tasks Section ---
    taskSection: {
      backgroundColor: COLORS.textWhite, 
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    },
    taskHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: COLORS.darkGrey, // 333333
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: `1px solid ${COLORS.lightBorder}`,
      fontSize: 15,
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    taskText: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    taskXP: {
      color: COLORS.darkGrey, // 333333
      fontWeight: 'bold',
      fontSize: 14,
    },

    // --- 3. Tip Section (Pink Accent Background) ---
    tipSection: {
      backgroundColor: COLORS.lightPink, // Light version of F48FB1
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
    },
    tipText: {
      fontSize: 15,
      fontStyle: 'italic',
      color: COLORS.darkGrey, // 333333
      margin: 0,
      lineHeight: 1.4,
    },

    // --- 4. Navigation Grid ---
    buttonGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 15,
    },
    navButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      borderRadius: 15,
      fontSize: 16,
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      transition: 'transform 0.2s',
      color: COLORS.textWhite,
      '&:hover': { transform: 'scale(1.03)' },
    },
    navIcon: {
      fontSize: 30,
      marginBottom: 8,
    },
  };

  const handleTaskClick = (taskKey) => {
    // This logic simulates completing a task and collects XP
    if (taskKey === 'watch_lesson_task' || taskKey === 'take_quiz_task') navigate('/learn');
    else if (taskKey === 'check_portfolio_task') navigate('/invest');
    
    alert(`Task '${t(taskKey)}' initiated!`);
  };

  return (
    <div style={styles.container}>
      
      {/* 1. Top Header Section */}
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <p style={styles.greetingText}>
            {(t('welcome_message') || 'Good morning, Priya!').replace('Priya', userName)}
          </p>
          <div style={styles.streak}>
            <span style={styles.fireIcon}>🔥</span> 7
          </div>
        </div>
        <p style={styles.readyText}>{t('grow_wealth_question')}</p>
        
        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div style={{ ...styles.progressBarFill, width: `83.33%` }}></div>
        </div>
        <div style={styles.progressDetails}>
          <span>{t('level')} 3</span>
          <span>1250/1500 XP</span>
        </div>
      </div>

      {/* 2. Today's Tasks Section */}
      <div style={styles.taskSection}>
        <h3 style={styles.taskHeading}>{t('todays_tasks_heading')}</h3>
        <div style={styles.taskList}>
          
          {/* Task 1: Watch Lesson */}
          <div 
            style={styles.taskItem} 
            onClick={() => handleTaskClick('watch_lesson_task')}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={styles.taskText}>
              <span style={{ color: COLORS.success }}>▶️</span> {t('watch_lesson_task')}
            </div>
            <span style={styles.taskXP}>+50 XP</span>
          </div>
          
          {/* Task 2: Take a Quiz */}
          <div 
            style={styles.taskItem} 
            onClick={() => handleTaskClick('take_quiz_task')}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={styles.taskText}>
              <span style={{ color: COLORS.success }}>✅</span> {t('take_quiz_task')}
            </div>
            <span style={styles.taskXP}>+30 XP</span>
          </div>
          
          {/* Task 3: Check Portfolio */}
          <div 
            style={{...styles.taskItem, borderBottom: 'none'}} 
            onClick={() => handleTaskClick('check_portfolio_task')}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={styles.taskText}>
              <span style={{ color: COLORS.success }}>📈</span> {t('check_portfolio_task')}
            </div>
            <span style={styles.taskXP}>+20 XP</span>
          </div>
          
        </div>
      </div>

      {/* 3. Finance Tip of the Day */}
      <div style={styles.tipSection}>
        <p style={styles.tipText}>
          "{t('finance_tip_quote')}"
        </p>
      </div>

      {/* 4. Navigation Grid */}
      <div style={styles.buttonGrid}>
        
        {/* LEARN Button (Primary Purple) */}
        <button style={{ ...styles.navButton, backgroundColor: COLORS.primaryPurple }} onClick={() => navigate('/learn')}>
          <span style={styles.navIcon}>📖</span>
          {t('learn_button')}
        </button>
        
        {/* INVEST Button (Yellow/Gold) */}
        <button style={{ ...styles.navButton, backgroundColor: COLORS.yellow, color: COLORS.darkGrey }} onClick={() => navigate('/invest')}>
          <span style={styles.navIcon}>📈</span>
          {t('invest_button')}
        </button>
        
        {/* COMMUNITY Button (Pink) */}
        <button style={{ ...styles.navButton, backgroundColor: COLORS.pink, color: COLORS.textWhite }} onClick={() => navigate('/community')}>
          <span style={styles.navIcon}>👥</span>
          {t('community_button')}
        </button>
        
        {/* PROFILE Button (Dark Grey) */}
        <button style={{ ...styles.navButton, backgroundColor: COLORS.darkGrey, color: COLORS.textWhite }} onClick={() => navigate('/profile')}>
          <span style={styles.navIcon}>👤</span>
          {t('profile_button')}
        </button>
        
      </div>
      
    </div>
  );
};

export default HomePage;