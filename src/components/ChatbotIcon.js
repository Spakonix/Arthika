import React from 'react';

const ChatbotIcon = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        alt="Chatbot"
        style={styles.icon}
      />
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  icon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
};

export default ChatbotIcon;
