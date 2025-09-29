import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- ARTHIKA COLOR PALETTE ---
const COLORS = {
    background: '#FFF9F1', // Off-White/Cream (Main Background)
    secondary: '#FBC02D', // Gold/Yellow (Login Button)
    primary: '#F48FB1', // Pink (Accents)
    dark: '#333333', // Dark Gray/Text
    accentPurple: '#6B46C1', // Deep Purple (Title Text/Accents)
    whiteText: '#FFFFFF',
    softYellow: '#FBC02D1A', // Lightened secondary for subtle background gradient
};

const CustomMessageModal = ({ message, onClose }) => {
    if (!message) return null;
    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
                <p style={modalStyles.text}>{message}</p>
                <button onClick={onClose} style={modalStyles.button}>OK</button>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    content: {
        backgroundColor: COLORS.background,
        color: COLORS.dark,
        padding: '30px',
        borderRadius: '12px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    text: {
        fontSize: '16px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: COLORS.primary,
        color: COLORS.whiteText,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '100%',
    },
};

const LoginPage = ({ language, setUserData, onLanguageSelect }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // A simple translation function for placeholder text
    const t = (en, hi, mr, gu, bn) => {
        switch (language) {
            case 'hi': return hi;
            case 'mr': return mr;
            case 'gu': return gu;
            case 'bn': return bn;
            default: return en;
        }
    };

    const isValidName = (n) => /^[a-zA-Z\s]+$/.test(n);
    const isValidPhone = (p) => /^[0-9]{10}$/.test(p);

    const handle = () => {
        if (!isValidName(name)) {
            setErrorMessage(t('Name should only contain letters.', 'नाम में केवल अक्षर होने चाहिए।', 'नावात फक्त अक्षरे असावीत.', 'નામમાં ફક્ત અક્ષરો હોવા જોઈએ.', 'নামে শুধুমাত্র অক্ষর থাকা উচিত।'));
            return;
        }
        if (!isValidPhone(phone)) {
            setErrorMessage(t('Phone must be 10 digits.', 'फ़ोन नंबर 10 अंकों का होना चाहिए।', 'फोन नंबर 10 अंकी असावा.', 'ફોન નંબર 10 અંકનો હોવો જોઈએ.', 'ফোন নম্বর 10 সংখ্যা হতে হবে।'));
            return;
        }

        setUserData({ name, phone });
        navigate('/home');
    };

    return (
        <div style={styles.cont}>
            <h1 style={styles.title}>Arthika</h1>

            <div style={styles.loginCard}>
                <h2 style={styles.subtitle}>{t('Login to Arthika', 'अर्थिका में लॉगिन करें', 'अर्थिका मध्ये लॉगिन करा', 'અર્થિકામાં લોગિન કરો', 'আর্থিকাতে লগইন করুন')}</h2>
                <input
                    style={styles.input}
                    placeholder={t('Name*', 'नाम*', 'नाव*', 'નામ*', 'নাম*')}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    style={styles.input}
                    placeholder={t('Phone Number*', 'फ़ोन नंबर*', 'फोन नंबर*', 'ફોન નંબર*', 'ফোন নাম্বার*')}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <button style={styles.button} onClick={handle}>
                    {t('Go to Website', 'वेबसाइट खोलें', 'साईट उघडा', 'વેબસાઇટ પર જાઓ', 'ওয়েবসাইটে যান')}
                </button>
            </div>
            
            <CustomMessageModal message={errorMessage} onClose={() => setErrorMessage('')} />
        </div>
    );
};

const styles = {
    cont: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(to bottom, ${COLORS.background}, ${COLORS.softYellow})`,
        padding: '20px',
    },
    title: {
        fontSize: '48px',
        fontWeight: '900',
        marginBottom: '30px',
        color: COLORS.secondary,
        textShadow: `1px 1px 0 ${COLORS.dark}20`,
    },
    loginCard: {
        backgroundColor: COLORS.whiteText,
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '350px',
        boxSizing: 'border-box',
    },
    subtitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: COLORS.dark,
        textAlign: 'center',
    },
    input: {
        padding: '12px 15px',
        width: '100%',
        borderRadius: '10px',
        border: `2px solid ${COLORS.primary}`,
        background: COLORS.whiteText,
        color: COLORS.dark,
        fontSize: '16px',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
        ':focus': {
            outline: 'none',
            borderColor: COLORS.secondary,
        },
    },
    button: {
        padding: '12px 24px',
        background: COLORS.accentPurple,
        color: COLORS.whiteText,
        border: 'none',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: `0 4px 10px ${COLORS.accentPurple}40`,
        transition: 'transform 0.2s, opacity 0.2s',
        ':hover': {
            transform: 'translateY(-1px)',
            opacity: 0.9,
        },
    }
};

export default LoginPage;