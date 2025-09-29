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
    accentPurple: '#6B46C1', // Deep Purple (Get Started/Primary CTA - Professional tone)
    whiteText: '#FFFFFF',
    softYellow: '#FBC02D1A', // Lightened secondary for subtle background gradient
};

// Placeholder Text Object (Expected to be passed down from App.jsx)
// This is used for demonstrating the immediate language change.
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
    // Add other languages as needed for proper preview
    gu: {
        getStarted: "શરૂ કરો",
        login: "લોગ ઇન",
        chooseLanguage: "તમારી ભાષા પસંદ કરો",
        welcomeTitle: "તમારી નાણાકીય સ્વતંત્રતાની યાત્રા અહીંથી શરૂ થાય છે",
        welcomeTagline: "સુરક્ષિત ભવિષ્યનું નિર્માણ કરવા જોડાઓ.",
    }
    // ... all other languages must be handled by the parent component (App.jsx)
};

const WelcomePage = ({ onLanguageSelect, texts, initialLang }) => {
    // FIX: Initialize useNavigate hook here to define the 'navigate' function.
    const navigate = useNavigate();

    // We use local state to track if a language has been selected to show the buttons.
    // Use the passed 'texts' prop if available, otherwise default to a dummy object for preview.
    const langTexts = texts || DUMMY_LANG_TEXTS[initialLang || 'en'];

    const [index, setIndex] = useState(0);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(initialLang || null);
    const [languageSelected, setLanguageSelected] = useState(!!initialLang);

    // Rotating messages in different languages
    const messages = [
        'अर्थिका में आपका स्वागत है',
        'અર્થિકા માં આપનું સ્વાગત છે',
        'অর্থিকায় আপনাকে স্বাগতম',
        'அர்திகாவுக்கு வரவேற்கிறோம்',
        'అర్థికాలోకి స్వాగతం',
        'ਅਰਥਿਕਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
        'Welcome to Arthika',
        'आर्टिका में खुशामदीद', // Urdu translation approximation
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
        // Rotates the welcome message every 2 seconds
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [messages.length]);

    const handleLanguageClick = (code) => {
        setSelectedLanguageCode(code);
        setLanguageSelected(true);
        // This function informs the parent component (App.jsx) to load the new language
        onLanguageSelect(code);
    };

    const handleGetStartedClick = () => {
        // Navigate to the Dashboard/Home page
        navigate('/home');
    };

    const handleLoginClick = () => {
        // Navigate to the Login page
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Arthika</h1>

            {/* Content displayed after language selection */}
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
                <>
                    {/* Content displayed before language selection */}
                    <p style={styles.fadeText} key={index}>
                        {messages[index]}
                    </p>
                    <p style={styles.chooseLanguageText}>{langTexts.chooseLanguage}</p>

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
        // Subtle background gradient using Cream and a hint of soft Yellow
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
        color: COLORS.secondary, // Yellow/Gold for professional title
        textShadow: `1px 1px 0 ${COLORS.dark}20`,
    },
    fadeText: {
        fontSize: '22px',
        fontWeight: '600',
        color: COLORS.dark,
        marginBottom: '15px',
        // Ensures smooth transition and prevents layout shift
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
        // Hover effect: lifts slightly and changes box shadow color
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
        // General hover effect
        ':hover': {
            transform: 'translateY(-1px)',
            opacity: 0.9,
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        }
    },
    loginButton: {
        backgroundColor: COLORS.secondary, // Yellow/Gold
        color: COLORS.dark,
        boxShadow: `0 4px 10px ${COLORS.secondary}70`,
    },
};

export default WelcomePage;
