// src/pages/WelcomePage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- ICONS (Placeholder for future use) ---
const Icon = ({ children, size = 16 }) => <span style={{ marginRight: '8px', fontSize: `${size}px`, lineHeight: 1 }}>{children}</span>;

// --- ARTHIKA COLOR PALETTE ---
const COLORS = {
    background: '#FFF9F1', // Off-White/Cream (Main Background)
    secondary: '#FBC02D', // Gold/Yellow (Title/Accent/Login Button)
    primary: '#F48FB1', // Pink (Accents)
    dark: '#333333', // Dark Gray/Text
    accentPurple: '#6B46C1', // Deep Purple (Get Started/Primary CTA)
    whiteText: '#FFFFFF',
    softYellow: '#FBC02D1A', // Lightened secondary for subtle background gradient
};

// --- DUMMY TEXTS for the second phase ---
const DUMMY_LANG_TEXTS = {
    hi: {
        getStarted: "शुरू करें",
        login: "लॉग इन",
        chooseLanguage: "अपनी भाषा चुनें",
        welcomeTitle: "आपकी वित्तीय स्वतंत्रता की यात्रा यहाँ से शुरू होती है",
        welcomeTagline: "एक सुरक्षित भविष्य के निर्माण के लिए जुड़ें।",
    },
    en: {
        getStarted: "Get Started",
        login: "Login",
        chooseLanguage: "Choose your Language",
        welcomeTitle: "Your journey to financial freedom starts here",
        welcomeTagline: "Join to build a secure future.",
    },
    gu: {
        getStarted: "શરૂ કરો",
        login: "લોગ ઇન",
        chooseLanguage: "તમારી ભાષા પસંદ કરો",
        welcomeTitle: "તમારી નાણાકીય સ્વતંત્રતાની યાત્રા અહીંથી શરૂ થાય છે",
        welcomeTagline: "સુરક્ષિત ભવિષ્યનું નિર્માણ કરવા જોડાઓ.",
    },
    // IMPORTANT: Add all other languages (mr, bn, te, ta, pa, ml, ur) here!
};

const WelcomePage = ({ onLanguageSelect, initialLang }) => {
    const navigate = useNavigate();

    // Use initialLang (from local storage) to determine initial state
    const [index, setIndex] = useState(0);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(initialLang || null);
    const [languageSelected, setLanguageSelected] = useState(!!initialLang);

    // --- Dynamic Text Lookup (CRITICAL FIX) ---
    // If a language is selected, use its texts; otherwise, default to 'en' preview.
    const langTexts = DUMMY_LANG_TEXTS[selectedLanguageCode] || DUMMY_LANG_TEXTS['en'];


    // Rotating messages in different languages
    const messages = [
        'अर्थिका में आपका स्वागत है',
        'અર્થિકા માં આપનું સ્વાગત છે',
        'অর্থিকায় আপনাকে স্বাগতম',
        'அர்திகாவுக்கு வரவேற்கிறோம்',
        'అర్థికాలోకి స్వాగతం',
        'ਅਰਥਿਕਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
        'Welcome to Arthika',
        'آرتھیکا میں خوش آمدید', 
    ];

    // Language buttons
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


    // --- HANDLER FUNCTIONS ---

    // Handler for language selection buttons (Phase 1)
    const handleLanguageClick = (code) => {
        // 1. Visually mark selection
        setSelectedLanguageCode(code);
        // 2. Set language in App.js state & Local Storage
        onLanguageSelect(code);
        // 3. Move to Phase 2 (Show Action Buttons)
        setLanguageSelected(true);
    };

    // Handler for Get Started button (Phase 2 - Primary Action)
    const handleGetStartedClick = () => {
        // CRITICAL: The first time, Get Started should take them to Registration or Home (if logged in).
        // Since login is the next route in your App.js, we navigate to /login.
        navigate('/register');
    };

    // Handler for Login button (Phase 2 - Secondary Action)
    const handleLoginClick = () => {
        navigate('/login');
    };


    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Arthika</h1>

            {/* --- Phase 2: Action Buttons (Language is selected) --- */}
            {languageSelected ? (
                <>
                    <h2 style={styles.fadeText} key={selectedLanguageCode}>
                        {langTexts.welcomeTitle}
                    </h2>
                    <p style={styles.tagline}>{langTexts.welcomeTagline}</p>

                    <div style={styles.actionButtonsContainer}>
                        {/* Get Started Button (Primary CTA) */}
                        <button
                            onClick={handleGetStartedClick}
                            style={{ ...styles.actionButton, backgroundColor: COLORS.accentPurple }}
                        >
                            <Icon size={20}>🚀</Icon> {langTexts.getStarted}
                        </button>

                        {/* Login Button (Secondary CTA) */}
                        <button
                            onClick={handleLoginClick}
                            style={{ ...styles.actionButton, ...styles.loginButton }}
                        >
                            <Icon>🚪</Icon> {langTexts.login}
                        </button>
                    </div>
                </>
            ) : (
                /* --- Phase 1: Language Selection --- */
                <>
                    {/* Rotating Message */}
                    <p style={styles.fadeText} key={index}>
                        {messages[index]}
                    </p>
                    <p style={styles.chooseLanguageText}>Choose your Language</p>

                    <div style={styles.langGrid}>
                        {languages.map(({ code, label }) => (
                            <div
                                key={code}
                                onClick={() => handleLanguageClick(code)}
                                style={{
                                    ...styles.langBox,
                                    border: selectedLanguageCode === code ? `2px solid ${COLORS.secondary}` : `2px solid ${COLORS.primary}`,
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

// --- CSS STYLES ---

const styles = {
    container: {
        minHeight: '100vh',
        background: `linear-gradient(to bottom, ${COLORS.background}, ${COLORS.softYellow})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
    },
    title: {
        fontSize: '48px',
        fontWeight: '900',
        marginBottom: '20px',
        color: COLORS.secondary,
        textShadow: `1px 1px 0 ${COLORS.dark}20`,
    },
    fadeText: {
        fontSize: '22px',
        fontWeight: '600',
        color: COLORS.dark,
        marginBottom: '15px',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s',
        minHeight: '1.5em',
        maxWidth: '90%',
    },
    tagline: {
        fontSize: '16px',
        color: COLORS.dark,
        marginBottom: '40px',
        maxWidth: '350px',
    },
    chooseLanguageText: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: COLORS.dark,
        marginBottom: '15px',
    },
    langGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        maxWidth: '400px',
        width: '100%',
        gap: '12px',
        justifyContent: 'center',
        margin: '20px 0',
    },
    langBox: {
        backgroundColor: COLORS.background,
        color: COLORS.dark,
        padding: '15px 10px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
        minWidth: '80px',
        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 8px ${COLORS.primary}80`,
        }
    },
    actionButtonsContainer: {
        width: '100%',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '30px',
    },
    actionButton: {
        width: '100%',
        padding: '15px 20px',
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        color: COLORS.whiteText,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, opacity 0.2s, box-shadow 0.2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ':hover': {
            transform: 'translateY(-1px)',
            opacity: 0.9,
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        }
    },
    loginButton: {
        backgroundColor: COLORS.secondary,
        color: COLORS.dark,
        boxShadow: `0 4px 10px ${COLORS.secondary}70`,
    },
};

export default WelcomePage;