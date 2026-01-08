// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ language }) => {
  const navigate = useNavigate();
  const [f, setF] = useState({
    name: '',
    phone: '',
    age: '',
    email: '',
    password: '',
  });

  const t = (en, hi, mr) =>
    language === 'hi' ? hi : language === 'mr' ? mr : en;

  const handleChange = (e) => {
    setF({ ...f, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!f.name || !f.phone || !f.password) {
      alert(t('Please fill required fields', 'कृपया आवश्यक जानकारी भरें', 'कृपया आवश्यक माहिती भरा'));
      return;
    }
    alert(t('Registered successfully!', 'पंजीकरण सफल!', 'नोंदणी यशस्वी!'));
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <h2>{t('Register', 'पंजीकरण', 'नोंदणी')}</h2>
      {['name', 'phone', 'age', 'email', 'password'].map((key) => (
        <input
          key={key}
          name={key}
          type={key === 'password' ? 'password' : 'text'}
          placeholder={
            key === 'name'
              ? t('Name', 'नाम', 'नाव')
              : key === 'phone'
              ? t('Phone', 'फोन', 'फोन')
              : key === 'age'
              ? t('Age', 'आयु', 'वय')
              : key === 'email'
              ? t('Email (optional)', 'ईमेल (वैकल्पिक)', 'ईमेल (पर्यायी)')
              : t('Password', 'पासवर्ड', 'पासवर्ड')
          }
          onChange={handleChange}
          style={styles.input}
        />
      ))}
      <button onClick={handleSubmit} style={styles.btn}>
        {t('Submit', 'जमा करें', 'सबमिट')}
      </button>
      <button onClick={() => navigate('/home')} style={styles.back}>
        {t('Back to Website', 'वेबसाइट पर वापस', 'वेबसाइटवर परत')}
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #ffe6f0, #e0f7ff)',
    padding: 20,
    gap: 12,
  },
  input: {
    padding: 10,
    width: 260,
    borderRadius: 10,
    border: '1px solid #ccc',
  },
  btn: {
    padding: '10px 20px',
    background: '#82b1e0',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    marginTop: 10,
  },
  back: {
    marginTop: 10,
    background: '#ccc',
    color: '#333',
    padding: '8px 16px',
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
  },
};

export default RegisterPage;
