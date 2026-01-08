import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, LogOut, User, Edit, Star, History, Bell, Settings } from 'lucide-react';

// --- ARTHIKA COLOR PALETTE ---
const COLORS = {
    primary: '#F48FB1', // Pink
    secondary: '#FBC02D', // Gold/Yellow
    background: '#FFF9F1', // Off-White/Cream
    dark: '#333333', // Dark Gray/Text
    accentPurple: '#6B46C1', // Deep Purple
    accentGreen: '#38A169', // Medium Green
    whiteText: '#FFFFFF',
    softYellow: '#FBC02D1A',
};

const ProfilePage = ({ user, language, logout }) => {
    const navigate = useNavigate();
    const t = (en, hi, mr, gu, bn) => {
        switch (language) {
            case 'hi': return hi;
            case 'mr': return mr;
            case 'gu': return gu;
            case 'bn': return bn;
            default: return en;
        }
    };
    
    // Placeholder user data
    const userName = user?.name || t('Guest', 'अतिथि', 'अतिथी', 'મહેમાન', 'অতিথি');
    const userLevel = user?.level || 1;
    const userXp = user?.xp || 1250;
    const nextLevelXp = userLevel * 500;
    const progressPercent = nextLevelXp > 0 ? (userXp / nextLevelXp) * 100 : 0;

    const navItems = [
        { icon: History, label: t('My History', 'मेरा इतिहास', 'माझा इतिहास', 'મારો ઇતિહાસ', 'আমার ইতিহাস') },
        { icon: Edit, label: t('Edit Profile', 'प्रोफ़ाइल संपादित करें', 'प्रोफाइल संपादित करा', 'પ્રોફાઇલ સંપાદિત કરો', 'প্রোফাইল সম্পাদনা করুন') },
        { icon: Bell, label: t('Notifications', 'सूचनाएं', 'सूचना', 'સૂચનાઓ', 'বিজ্ঞপ্তি') },
        { icon: Settings, label: t('Settings', 'सेटिंग्स', 'सेटिंग्ज', 'સેટિંગ્સ', 'সেটিংস') },
    ];

    return (
        <div style={styles.cont}>
            {/* Top Header Section */}
            <div style={styles.header}>
                <button onClick={() => navigate('/home')} style={styles.backButton}>
                    <ChevronLeft size={24} color={COLORS.whiteText} />
                </button>
                <h1 style={styles.h1}>{t('My Profile', 'मेरी प्रोफ़ाइल', 'माझी प्रोफाइल', 'મારી પ્રોફાઇલ', 'আমার প্রোফাইল')}</h1>
            </div>

            {/* Profile Card */}
            <div style={styles.profileCard}>
                <div style={styles.profileHeader}>
                    <div style={styles.userIcon}>
                        <User size={48} color={COLORS.dark} />
                    </div>
                    <div style={styles.userDetails}>
                        <h2 style={styles.h2}>{userName}</h2>
                        <p style={styles.subtext}>{t('Aapka paisa, aapka faisla', 'आपका पैसा, आपका फैसला', 'आपला पैसा, आपला निर्णय', 'તમારા પૈસા, તમારો નિર્ણય', 'আপনার টাকা, আপনার সিদ্ধান্ত')}</p>
                    </div>
                </div>

                {/* Level and XP Bar */}
                <div style={styles.xpBarContainer}>
                    <div style={styles.levelInfo}>
                        <Star size={16} color={COLORS.secondary} />
                        <span style={styles.levelText}>{t('Level', 'स्तर', 'स्तर', 'સ્તર', 'স্তর')} {userLevel}</span>
                    </div>
                    <div style={styles.xpBarBackground}>
                        <div style={{ ...styles.xpBarFill, width: `${progressPercent}%` }}></div>
                    </div>
                    <p style={styles.xpText}>{userXp}/{nextLevelXp} XP</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div style={styles.navButtons}>
                {navItems.map((item, index) => (
                    <button key={index} style={styles.navBtn}>
                        <item.icon size={20} color={COLORS.dark} />
                        <span style={{ marginLeft: 15 }}>{item.label}</span>
                    </button>
                ))}
                {/* Logout Button */}
                <button style={{...styles.navBtn, color: COLORS.primary}} onClick={logout}>
                    <LogOut size={20} color={COLORS.primary} />
                    <span style={{ marginLeft: 15 }}>{t('Logout', 'लॉग आउट', 'लॉग आउट', 'લૉગ આઉટ', 'লগআউট')}</span>
                </button>
            </div>
        </div>
    );
};

// --- STYLES ---
const styles = {
    cont: {
        minHeight: '100vh',
        background: COLORS.background,
        padding: '20px',
        fontFamily: 'Inter, sans-serif',
    },
    header: {
        background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accentPurple})`,
        padding: '20px',
        paddingTop: '40px',
        borderRadius: '0 0 25px 25px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
        boxShadow: `0 4px 10px ${COLORS.dark}20`,
    },
    backButton: {
        background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, marginRight: '15px',
    },
    h1: {
        fontSize: '1.5em', fontWeight: 'bold', color: COLORS.whiteText, margin: 0,
    },
    profileCard: {
        backgroundColor: COLORS.whiteText,
        padding: '25px',
        borderRadius: '20px',
        boxShadow: `0 4px 15px ${COLORS.dark}10`,
        margin: '0 0 40px',
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    userIcon: {
        width: '70px', height: '70px', borderRadius: '50%',
        backgroundColor: COLORS.background,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        marginRight: '20px',
    },
    userDetails: {
        textAlign: 'left',
    },
    h2: {
        fontSize: '1.5em', fontWeight: 'bold', color: COLORS.dark, margin: 0,
    },
    subtext: {
        fontSize: '0.9em', color: COLORS.dark, opacity: 0.7, margin: 0,
    },
    xpBarContainer: {
        textAlign: 'left',
    },
    levelInfo: {
        display: 'flex', alignItems: 'center', marginBottom: '5px',
    },
    levelText: {
        fontSize: '1em', fontWeight: 'bold', color: COLORS.dark, marginLeft: '5px',
    },
    xpBarBackground: {
        backgroundColor: '#e0e0e0', borderRadius: '10px', height: '8px',
        overflow: 'hidden',
    },
    xpBarFill: {
        backgroundColor: COLORS.secondary, height: '100%',
        borderRadius: '10px', transition: 'width 0.5s ease-in-out',
    },
    xpText: {
        fontSize: '0.8em', color: COLORS.dark, textAlign: 'right', marginTop: '5px',
    },
    navButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    navBtn: {
        background: COLORS.whiteText,
        padding: '15px 20px',
        borderRadius: '15px',
        border: 'none',
        boxShadow: `0 2px 8px ${COLORS.dark}10`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        fontSize: '1em',
        fontWeight: 'bold',
        color: COLORS.dark,
        transition: 'transform 0.2s',
        ':hover': {
            transform: 'translateX(5px)',
            boxShadow: `0 4px 12px ${COLORS.dark}20`,
        }
    },
};

export default ProfilePage;