import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ language, setUserData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const t = (en, hi, mr) =>
    language === 'hi' ? hi : language === 'mr' ? mr : en;

  const isValidName = (n) => /^[a-zA-Z\s]+$/.test(n);
  const isValidPhone = (p) => /^[0-9]{10}$/.test(p);

  const handle = () => {
    if (!isValidName(name)) {
      alert(t('Name should only contain letters.', 'नाम में केवल अक्षर होने चाहिए।', 'नावात फक्त अक्षरे असावीत.'));
      return;
    }
    if (!isValidPhone(phone)) {
      alert(t('Phone must be 10 digits.', 'फ़ोन नंबर 10 अंकों का होना चाहिए।', 'फोन नंबर 10 अंकी असावा.'));
      return;
    }

    setUserData({ name, phone });
    navigate('/home');
  };

  return (
    <div style={styles.cont}>
      <h1 style={{ marginBottom: 10, color: '#333' }}>Arthika</h1>

      <h2>{t('Login to Arthika', 'अर्थिका में लॉगिन करें', 'अर्थिका मध्ये लॉगिन करा')}</h2>
      <input
        style={styles.inp}
        placeholder={t('Name*', 'नाम*', 'नाव*')}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        style={styles.inp}
        placeholder={t('Phone Number*', 'फ़ोन नंबर*', 'फोन नंबर*')}
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button style={styles.btn} onClick={handle}>
        {t('Go to Website', 'वेबसाइट खोलें', 'साईट उघडा')}
      </button>
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
    background: 'linear-gradient(to bottom, #ffe6f0, #e0f7ff)',
    gap: 20,
  },
  inp: {
    padding: 12,
    width: 260,
    borderRadius: 10,
    border: '1px solid #ccc',
    background: '#fff',
    color: '#000',
    fontSize: 16,
  },
  btn: {
    padding: '10px 24px',
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 16,
    cursor: 'pointer',
  }
};

export default LoginPage;
