import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const HomePage = ({ user, language }) => {
    const navigate = useNavigate();
    const t = (en, hi, mr, gu, bn, te, ta, pa, ml, ur) => {
        switch (language) {
            case 'hi': return hi;
            case 'mr': return mr;
            case 'gu': return gu;
            case 'bn': return bn;
            case 'te': return te;
            case 'ta': return ta;
            case 'pa': return pa;
            case 'ml': return ml;
            case 'ur': return ur;
            default: return en;
        }
    };

    const images = [
        'https://media.istockphoto.com/id/1126454593/photo/rural-women-using-mobile-phone-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=FioJqMLiZNgpeRweWtNRipR7TG_rF-fqki1ylk6ya-Y=',
        'https://media.istockphoto.com/id/1125843657/photo/rural-women-using-mobile-phone-at-village.jpg?s=612x612&w=0&k=20&c=E7QFCKFAOCFAf5_eEYa8jKPayKT1twnnRlIc-AvuSMo=',
        'https://media.istockphoto.com/id/1309084086/photo/rural-women-using-phone-in-villlage.jpg?s=612x612&w=0&k=20&c=U-m5YS4jVAva2iErd10TAcOYWut2IZgu5P89ysOKR1s=',
        'https://media.istockphoto.com/id/1125873451/photo/rural-women-using-mobile-phone-at-village.jpg?s=612x612&w=0&k=20&c=Wz1ZDufJf-tZFgp1mAsIP8tySsoEs48Mmtpny6MboEo='
    ];

    return (
        <div style={styles.cont}>
            <h1 style={styles.h1}>Arthika</h1>
            <h3 style={styles.h3}>
                {t(
                    `Namaste, ${user?.name || 'Guest'}`,
                    `नमस्ते, ${user?.name || 'अतिथि'}`,
                    `नमस्कार, ${user?.name || 'अतिथी'}`,
                    `નમસ્તે, ${user?.name || 'મહેમાન'}`,
                    `নমস্কার, ${user?.name || 'অতিথি'}`,
                    `నమస్తే, ${user?.name || 'అతిథి'}`,
                    `வணக்கம், ${user?.name || 'விருந்தினர்'}`,
                    `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${user?.name || 'ਮੇਹਮਾਨ'}`,
                    `നമസ്കാരം, ${user?.name || 'അതിഥി'}`,
                    `نمستے، ${user?.name || 'مہمان'}`
                )}
            </h3>
            <h4 style={styles.sub}>
                {t(
                    'Aapka paisa, aapka faisla',
                    'आपका पैसा, आपका फैसला',
                    'आपला पैसा, आपला निर्णय',
                    'તમારા પૈસા, તમારો નિર્ણય',
                    'আপনার টাকা, আপনার সিদ্ধান্ত',
                    'మీ డబ్బు, మీ నిర్ణయం',
                    'உங்கள் பணம், உங்கள் முடிவு',
                    'ਤੁਹਾਡਾ ਪੈਸਾ, ਤੁਹਾਡਾ ਫੈਸਲਾ',
                    'നിങ്ങളുടെ പണം, നിങ്ങളുടെ തീരുമാനമാണ്',
                    'آپ کا پیسہ، آپ کا فیصلہ'
                )}
            </h4>

            <div style={styles.btns}>
                {/* Learn Financial Security Button */}
                <button style={styles.btn}>
                    {t(
                        'Learn Financial Security',
                        'वित्तीय जानकारी सीखें',
                        'आर्थिक शिक्षण',
                        'નાણાકીય જ્ઞાન શikho',
                        'আর্থিক নিরাপত্তা শিখুন',
                        'ఆర్థిక భద్రత నేర్చుకోండి',
                        'நிதி பாதுகாப்பை அறிக',
                        'ਵਿੱਤੀ ਸੁਰੱਖਿਆ ਸਿੱਖੋ',
                        'സാമ്പത്തിക സുരക്ഷ പഠിക്കുക',
                        'مالی تحفظ سیکھیں'
                    )}
                </button>
                {/* Link Bank Account Button */}
                <button style={styles.btn}>
                    {t(
                        'Link Bank Account',
                        'बैंक खाता जोड़ें',
                        'बँक खाते लिंक करा',
                        'બેંક ખાતું જોડો',
                        'ব্যাংক অ্যাকাউন্ট যুক্ত করুন',
                        'బ్యాంక్ ఖాతాను లింక్ చేయండి',
                        'வங்கி கணக்கை இணைக்கவும்',
                        'ਬੈਂਕ ਖਾਤਾ ਜੋੜੋ',
                        'ബാങ്ക് അക്കൗണ്ട് ബന്ധിപ്പിക്കുക',
                        'بینک اکاؤنٹ لنک کریں'
                    )}
                </button>
                {/* Invest Now Button - now consistent with others */}
                <button style={styles.btn} onClick={() => navigate('/invest')}>
                    {t(
                        'Invest Now',
                        'अभी निवेश करें',
                        'आता गुंतवणूक करा',
                        'હવે રોકાણ કરો',
                        'এখনই বিনিয়োগ করুন',
                        'ఇప్పుడే పెట్టుబడి పెట్టండి',
                        'இப்போது முதலீடு செய்யுங்கள்',
                        'ਹੁਣੇ ਨਿਵੇਸ਼ ਕਰੋ',
                        'ഇപ്പോൾ നിക്ഷേപിക്കുക',
                        'ابھی سرمایہ کاری کریں'
                    )}
                </button>
                {/* Chat Assistant Button */}
                <button style={styles.btn}>
                    {t(
                        'Open Chat Assistant',
                        'चैट सहायक खोलें',
                        'चॅट सहाय्यक उघडा',
                        'ચેટ સહાયક ખોલો',
                        'চ্যাট সহকারী খুলুন',
                        'చాట్ అసిస్టెంట్ తెరవండి',
                        'அரட்டை உதவியாளரை திறக்கவும்',
                        'ਚੈਟ ਸਹਾਇਕ ਖੋਲ੍ਹੋ',
                        'ചാറ്റ് അസിസ്റ്റന്റ് തുറക്കുക',
                        'چیٹ اسسٹنٹ کھولیں'
                    )}
                </button>
            </div>

            <div style={styles.collage}>
                {images.map((url, index) => (
                    <img key={index} src={url} alt="rural woman" style={styles.img} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    cont: {
        padding: 20,
        background: `linear-gradient(to bottom, ${COLORS.background}, ${COLORS.softYellow})`,
        textAlign: 'center',
        minHeight: '100vh',
    },
    h1: { fontSize: 36, margin: 0, color: COLORS.secondary, fontWeight: '900' },
    h3: { fontSize: 22, margin: '10px 0', color: COLORS.dark, fontWeight: 'bold' },
    sub: { fontSize: 18, marginBottom: 20, color: COLORS.dark, fontWeight: 'normal' },
    btns: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        marginTop: 20,
    },
    btn: {
        padding: '12px 20px',
        width: 250,
        border: `2px solid ${COLORS.primary}`,
        borderRadius: 10,
        color: COLORS.dark,
        background: COLORS.whiteText,
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        boxShadow: `0 2px 5px ${COLORS.dark}20`,
        // NEW: Hover effect uses the secondary color for the shadow
        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 8px ${COLORS.secondary}50`,
        },
    },
    collage: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 10,
        marginTop: 30,
        padding: 10,
    },
    img: {
        width: '100%',
        height: 120,
        objectFit: 'cover',
        borderRadius: 8,
    },
};

export default HomePage;