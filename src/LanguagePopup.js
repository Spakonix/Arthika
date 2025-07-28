// src/components/LanguagePopup.js
import React, { useState } from 'react';

const LanguagePopup = ({ onClose }) => {
  const [selected, setSelected] = useState(null);

  const chooseLanguage = (lang) => {
    setSelected(lang);
    setTimeout(() => {
      onClose(lang);
    }, 800);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>Welcome to Arthika</h2>
        <p>Please select your language:</p>
        <div style={styles.btnContainer}>
          <button onClick={() => chooseLanguage('hi')}>हिंदी</button>
          <button onClick={() => chooseLanguage('en')}>English</button>
          <button onClick={() => chooseLanguage('mr')}>मराठी</button>
        </div>
        {selected && <p style={{ marginTop: '10px' }}>Loading {selected}...</p>}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  popup: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
  },
  btnContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    gap: '12px'
  }
};

export default LanguagePopup;
