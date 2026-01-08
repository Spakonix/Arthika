import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../translations'; // Check this path

const LearnPage = ({ user, language }) => {
  const navigate = useNavigate();
  // Ensure the correct language object is loaded
  const currentLang = translations[language] || translations.en;
  // CRASH FIX: Safely handles undefined translations
  const t = (key) => currentLang[key] || translations.en[key] || '';

  // State Management
  const [activeView, setActiveView] = useState('lessons'); 
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});
  const [hoveredReward, setHoveredReward] = useState(null);

  // Lesson Data (unchanged)
  const lessons = [
    {
      id: 'financial-basics-lesson',
      titleKey: 'financial_basics_title',
      descKey: 'financial_basics_desc',
      duration: 15,
      xp: 50,
      status: 'completed',
      image: 'https://www.finideas.com/wp-content/uploads/2023/07/7-financial-literacy-basics-everyone-should-know.png', 
      actionKey: 'take_quiz_button',
      quizId: 'financial-basics',
    },
    {
      id: 'smart-saving-lesson',
      titleKey: 'smart_saving_title',
      descKey: 'smart_saving_desc',
      duration: 12,
      xp: 60,
      status: 'completed',
      image: 'https://teachmoneywise.com/wp-content/uploads/2024/05/Smart-Money-Saving-Strategies-That-Actually-Work.png?v=1718114330', 
      actionKey: 'take_quiz_button',
      quizId: 'smart-saving',
    },
  ];

  // Video Data (unchanged)
  const videos = [
    {
      id: 'shg-video',
      youtubeId: 'hbI6rEydQ2M',
      titleKey: 'shg_video_title',
      descKey: 'shg_video_desc',
      thumbnail: 'https://img.youtube.com/vi/hbI6rEydQ2M/hqdefault.jpg',
      quizId: 'shg-video',
    },
    {
      id: 'finance-freedom-video',
      youtubeId: 'qIw-yFC-HNU',
      titleKey: 'finance_freedom_video_title',
      descKey: 'finance_freedom_video_desc',
      thumbnail: 'https://img.youtube.com/vi/qIw-yFC-HNU/hqdefault.jpg',
      quizId: 'finance-freedom-video',
    },
    {
      id: 'investing-for-beginners-video',
      youtubeId: '_k1cz7sSuc4',
      titleKey: 'investing_for_beginners_title',
      descKey: 'investing_for_beginners_desc',
      thumbnail: 'https://img.youtube.com/vi/_k1cz7sSuc4/hqdefault.jpg',
      quizId: 'investing-for-beginners-video',
    },
    {
      id: 'empowered-women-video',
      youtubeId: '2xr2HuwHlg8',
      titleKey: 'empowered_women_title',
      descKey: 'empowered_women_desc',
      thumbnail: 'https://img.youtube.com/vi/2xr2HuwHlg8/hqdefault.jpg',
      quizId: 'empowered-women-video',
    },
  ];

  // Quiz Interaction Logic
  const handleAnswerClick = (questionIndex, selectedOption) => {
    if (userAnswers[questionIndex]) return;

    const questions = t('quizzes')[activeQuiz.quizId];
    const newAnswers = { ...userAnswers, [questionIndex]: selectedOption };
    setUserAnswers(newAnswers);

    if (Object.keys(newAnswers).length === questions.length) {
      setTimeout(() => {
        setCompletedVideos({ ...completedVideos, [activeQuiz.id]: true });
        setActiveView('lessons');
        alert('Congratulations! Quiz completed!');
      }, 1000);
    }
  };

  // Styles Object (Included for completeness, but unchanged)
  const styles = {
    container: {
      backgroundColor: '#FFF9F1',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      paddingBottom: '20px',
    },
    header: {
      backgroundColor: '#4B0082',
      borderRadius: '0 0 25px 25px',
      padding: '20px',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    headerRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    backArrow: {
      fontSize: '24px',
      cursor: 'pointer',
      marginRight: '15px',
      color: '#fff',
    },
    mainTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      margin: '0',
    },
    subtitle: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.8)',
      margin: '0',
    },
    progressSection: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '10px 15px',
      color: '#333333',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    progressBarContainer: {
      backgroundColor: '#eee',
      borderRadius: '5px',
      height: '8px',
      overflow: 'hidden',
    },
    progressBarFill: {
      backgroundColor: '#4B0082',
      height: '100%',
      width: '60%',
      borderRadius: '5px',
    },
    contentArea: {
      padding: '0 20px',
    },
    lessonCard: {
      backgroundColor: '#fff',
      color: '#333333',
      borderRadius: '15px',
      padding: '15px',
      marginBottom: '15px',
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s',
    },
    cardImageContainer: {
      position: 'relative',
      width: '80px',
      height: '80px',
      flexShrink: 0,
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    completedIcon: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      backgroundColor: '#66bb6a',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '12px',
    },
    cardContent: {
      flexGrow: 1,
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '0 0 5px 0',
    },
    cardDescription: {
      fontSize: '12px',
      color: '#555',
      margin: '0 0 10px 0',
    },
    statusBadge: {
      backgroundColor: '#66bb6a',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: 'bold',
    },
    actionButton: {
      padding: '8px 15px',
      borderRadius: '20px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s, transform 0.2s',
    },
    takeQuizBtn: {
      backgroundColor: '#9be7ff',
      color: '#333333',
    },
    videoCard: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      marginBottom: '15px',
      cursor: 'pointer',
      width: '48%',
      minWidth: '150px', 
      transition: 'transform 0.2s',
    },
    videoThumbnail: {
      width: '100%',
      height: '120px', 
      objectFit: 'cover',
      display: 'block',
    },
    videoInfo: {
      padding: '10px',
    },
    videoTitle: {
      fontSize: '14px', 
      fontWeight: 'bold',
      margin: '0 0 5px 0',
      color: '#333333',
      minHeight: '40px',
    },
    videoDescription: {
      fontSize: '11px',
      color: '#555',
      margin: '0',
    },
    videoGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '15px 0',
    },
    quizQuestionCard: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '15px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    quizQuestion: {
      fontSize: '18px', 
      fontWeight: 'bold',
      marginBottom: '18px',
      color: '#4B0082',
    },
    quizOptionButton: {
      width: '100%',
      padding: '14px',
      marginBottom: '10px',
      borderRadius: '12px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9',
      fontSize: '15px',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background-color 0.2s, border-color 0.2s',
    },
    correctOption: {
      backgroundColor: '#66bb6a',
      color: '#fff',
      fontWeight: 'bold',
      border: '1px solid #4CAF50',
    },
    incorrectOption: {
      backgroundColor: '#ef5350',
      color: '#fff',
      fontWeight: 'bold',
      border: '1px solid #F44336',
    },
    viewRewardsBtn: {
        backgroundColor: '#FBC02D',
        color: '#333333',
        padding: '14px 30px',
        borderRadius: '30px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(251, 192, 45, 0.5)',
        transition: 'background-color 0.2s, transform 0.2s',
    },
    rewardsContainer: {
      backgroundColor: '#FFF9F1',
      minHeight: '100vh',
      padding: '20px',
      color: '#333333',
      fontFamily: 'sans-serif',
      display: 'flex', 
      flexDirection: 'column',
    },
    xpCard: {
      background: 'linear-gradient(135deg, #4B0082, #F48FB1)', 
      color: '#fff',
      borderRadius: '20px',
      padding: '25px 20px', 
      marginBottom: '20px',
      boxShadow: '0 10px 20px rgba(75, 0, 130, 0.3)', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    xpTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0 0 5px',
      zIndex: 1,
    },
    xpSubtitle: {
      fontSize: '16px',
      marginBottom: '10px',
      zIndex: 1,
    },
    xpProgress: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '15px',
      fontSize: '14px',
      zIndex: 1,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    statCard: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
      border: '1px solid #eee',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    },
    statIcon: {
      fontSize: '30px',
      marginBottom: '5px',
      color: '#FBC02D',
    },
    achievementsHeading: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: '15px',
      marginTop: '20px',
    },
    achievementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '15px',
      marginBottom: '20px',
    },
    achievementCard: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '15px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      border: '1px solid #f0f0f0',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      height: '100%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    achievementIcon: {
      fontSize: '40px',
      marginBottom: '10px',
      filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))',
    },
    achievementStatus: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: '10px',
      textTransform: 'uppercase',
    },
    upcomingRewardsSection: {
      marginTop: '30px', 
    },
    upcomingRewardsList: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '5px 0',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    },
    upcomingRewardItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      borderBottom: '1px solid #eee',
      fontSize: '14px',
      transition: 'background-color 0.2s',
    },
    womenLikeYouList: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
      border: '1px solid #f0f0f0',
    },
    womenLikeYouItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 5px', 
      borderBottom: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      borderRadius: '8px',
      margin: '5px 0',
      justifyContent: 'space-between',
    },
    profilePic: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '15px',
      objectFit: 'cover',
      border: '2px solid #FBC02D',
      flexShrink: 0,
    },
    userInfo: {
      flexGrow: 1,
      minWidth: '0',
      paddingRight: '10px',
    },
    userAchievement: {
      fontSize: '14px',
      color: '#555',
      margin: '0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    levelBadge: {
      backgroundColor: '#FBC02D',
      color: '#333333',
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '12px',
      fontWeight: 'bold',
      flexShrink: 0,
    },
  };

  // --- Render Functions ---

  const renderLessons = () => (
    <>
      <div style={styles.header}>
        <div style={styles.headerRow}>
          <span style={styles.backArrow} onClick={() => navigate('/home')}>
            ←
          </span>
          <div style={styles.titleSection}>
            <h1 style={styles.mainTitle}>{t('learn_finance_heading')}</h1>
            <p style={styles.subtitle}>{t('learn_finance_subheading')}</p>
          </div>
        </div>
        <div style={styles.progressSection}>
          <div style={styles.progressText}>
            <span>{t('overall_progress')}</span>
            <span>12/5 {t('lessons_label')}</span>
          </div>
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBarFill}></div>
          </div>
        </div>
      </div>
      <div style={styles.contentArea}>
        {lessons.map((lesson) => (
          <div key={lesson.id} style={styles.lessonCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={styles.cardImageContainer}>
              <img src={lesson.image} alt={t(lesson.titleKey)} style={styles.cardImage} />
              {lesson.status !== 'completed' && (
                <span style={styles.playIcon} role="img" aria-label="play-icon">▶️</span>
              )}
              {lesson.status === 'completed' && (
                <span style={styles.completedIcon} role="img" aria-label="completed-icon">✓</span>
              )}
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{t(lesson.titleKey)}</h3>
              <p style={styles.cardDescription}>{t(lesson.descKey)}</p>
              <div style={styles.cardMeta}>
                <span>🕒 {lesson.duration} min</span>
                <span>⭐ +{lesson.xp} XP</span>
                {lesson.status === 'completed' && (
                  <span style={styles.statusBadge}>{t('completed_status')}</span>
                )}
              </div>
              <button
                style={{
                  ...styles.actionButton,
                  ...(lesson.actionKey === 'take_quiz_button' ? styles.takeQuizBtn : styles.startBtn),
                }}
                onClick={() => {
                  if (lesson.actionKey === 'take_quiz_button') {
                    setActiveView('quiz');
                    setActiveQuiz(lesson);
                    setUserAnswers({});
                  } else {
                    alert(`Starting lesson: ${t(lesson.titleKey)}`);
                  }
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#70c5ff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9be7ff'}
              >
                {t(lesson.actionKey)}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.contentArea}>
        <div style={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} style={styles.videoCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}>
                <img src={video.thumbnail} alt={t(video.titleKey)} style={styles.videoThumbnail} />
                <div style={styles.videoInfo}>
                  <h3 style={styles.videoTitle}>{t(video.titleKey)}</h3>
                  <p style={styles.videoDescription}>{t(video.descKey)}</p>
                </div>
              </div>
              <div style={{ padding: '0 10px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  style={{
                    ...styles.actionButton,
                    ...styles.takeQuizBtn,
                  }}
                  onClick={() => {
                    setActiveView('quiz');
                    setActiveQuiz(video);
                    setUserAnswers({});
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#70c5ff'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9be7ff'}
                >
                  {t('take_quiz_button')}
                </button>
                {completedVideos[video.id] && (
                  <span style={{...styles.statusBadge, backgroundColor: '#008000'}}>{t('done_status')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View Achievements Button at the bottom */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button
          style={styles.viewRewardsBtn}
          onClick={() => setActiveView('rewards')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFA726'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FBC02D'}
        >
          {t('view_rewards_button')}
        </button>
      </div>
    </>
  );

  const renderQuiz = () => {
    const questions = t('quizzes') ? t('quizzes')[activeQuiz.quizId] : [];
    
    if (!questions || questions.length === 0) {
        return (
            <div style={{...styles.container, padding: 40, textAlign: 'center'}}>
                <h1 style={{color: styles.incorrectOption.backgroundColor}}>Error: Quiz Data Not Found</h1>
                <p>Please check the <code>translations.js</code> file for missing or invalid quiz data under the <code>'{activeQuiz.quizId}'</code> key in the <code>'{language}'</code> language block.</p>
                <button style={styles.quizOptionButton} onClick={() => setActiveView('lessons')}>Back to Lessons</button>
            </div>
        );
    }
    
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <span style={styles.backArrow} onClick={() => setActiveView('lessons')}>
              ←
            </span>
            <div style={styles.titleSection}>
              <h1 style={styles.mainTitle}>{t('quiz_heading')}</h1>
              <p style={styles.subtitle}>{t(activeQuiz.titleKey)}</p>
            </div>
          </div>
        </div>
        <div style={styles.contentArea}>
          {questions.map((q, index) => (
            <div key={index} style={styles.quizQuestionCard}>
              <h4 style={styles.quizQuestion}>{index + 1}. {q.question}</h4>
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  style={{
                    ...styles.quizOptionButton,
                    ...(userAnswers[index] === option && option === q.answer && styles.correctOption),
                    ...(userAnswers[index] === option && option !== q.answer && styles.incorrectOption),
                    ...(userAnswers[index] && option === q.answer && userAnswers[index] !== q.answer && styles.correctOption),
                  }}
                  onClick={() => handleAnswerClick(index, option)}
                  disabled={userAnswers[index] !== undefined}
                  onMouseEnter={(e) => {
                    if (userAnswers[index] === undefined) {
                      e.currentTarget.style.backgroundColor = '#f0f0f0';
                      e.currentTarget.style.borderColor = '#4B0082';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (userAnswers[index] === undefined) {
                      e.currentTarget.style.backgroundColor = '#f9f9f9';
                      e.currentTarget.style.borderColor = '#ccc';
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRewards = () => (
    <div style={styles.rewardsContainer}>
      <div style={styles.header}>
        <div style={styles.headerRow}>
          <span style={styles.backArrow} onClick={() => setActiveView('lessons')}>
            ←
          </span>
          <div style={styles.titleSection}>
            <h1 style={styles.mainTitle}>{t('your_achievements_heading')}</h1>
            <p style={styles.subtitle}>{t('track_progress_text')}</p>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 20px' }}>
        <div style={styles.xpCard}>
          <span style={styles.xpCardIcon} role="img" aria-label="trophy">🏆</span>
          <h2 style={styles.xpTitle}>{t('level')} 3</h2>
          <p style={styles.xpSubtitle}>Finance Explorer</p>
          <div style={{ ...styles.progressBarContainer, backgroundColor: 'rgba(255,255,255,0.3)' }}>
            <div style={{ ...styles.progressBarFill, width: '80%', backgroundColor: '#FBC02D', height: '10px' }}></div>
          </div>
          <div style={styles.xpProgress}>
            <span>1250 {t('xp_points_label')}</span>
            <span>250 {t('xp_to_next_level_text')} 4</span>
          </div>
        </div>
        <div style={styles.statsGrid}>
          {/* Stats Cards with Hover Effect */}
          <div style={styles.statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <span style={styles.statIcon}>🔥</span>
            <p style={{ margin: '0', fontWeight: 'bold' }}>7</p>
            <p style={{ margin: '0', fontSize: '12px' }}>{t('day_streak_label')}</p>
          </div>
          <div style={styles.statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <span style={styles.statIcon}>🏅</span>
            <p style={{ margin: '0', fontWeight: 'bold' }}>3</p>
            <p style={{ margin: '0', fontSize: '12px' }}>{t('badges_label')}</p>
          </div>
          <div style={styles.statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <span style={styles.statIcon}>📖</span>
            <p style={{ margin: '0', fontWeight: 'bold' }}>12</p>
            <p style={{ margin: '0', fontSize: '12px' }}>{t('lessons_label')}</p>
          </div>
        </div>
        <h3 style={styles.achievementsHeading}>{t('achievements_heading')}</h3>
        <div style={styles.achievementsGrid}>
          {t('rewards').map((reward) => (
            <div key={reward.key} style={styles.achievementCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span style={styles.achievementIcon}>
                {reward.key === 'first_steps' && '🌟'}
                {reward.key === 'budgeting_pro' && '🏆'}
                {reward.key === 'week_warrior' && '🗓️'}
                {reward.key === 'finance_queen' && '👑'}
              </span>
              <p style={{ fontWeight: 'bold', margin: '0' }}>{reward.title}</p>
              <p style={{ fontSize: '12px', margin: '5px 0' }}>{reward.desc}</p>
              <span style={{...styles.achievementStatus, backgroundColor: reward.status === 'earned' ? '#4B0082' : '#F48FB1'}}>
                {reward.status === 'earned' ? t('earned_status') : t('locked_status')}
              </span>
            </div>
          ))}
        </div>
        
        {/* UPCOMING REWARDS SECTION */}
        <div style={styles.upcomingRewardsSection}>
            <h3 style={styles.achievementsHeading}>{t('upcoming_rewards_heading')}</h3>
            <div style={styles.upcomingRewardsList}>
                {t('upcoming_rewards').map((reward, index) => (
                    <div key={index} style={styles.upcomingRewardItem} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(75, 0, 130, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <p style={{margin: 0, fontWeight: 'bold'}}>{reward.title}</p>
                        <span style={{...styles.achievementStatus, backgroundColor: '#F48FB1'}}>{t('locked_status')}</span>
                    </div>
                ))}
            </div>
        </div>

        <h3 style={styles.achievementsHeading}>{t('women_like_you_heading')}</h3>
        <div style={styles.womenLikeYouList}>
          {t('women_like_you').map((woman, index) => (
            <div key={index} style={styles.womenLikeYouItem} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(251, 192, 45, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <img
                src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`}
                style={styles.profilePic}
                alt={woman.name}
              />
              <div style={styles.userInfo}>
                <p style={{ fontWeight: 'bold', margin: '0' }}>{woman.name}</p>
                <p style={styles.userAchievement}>{woman.achievement}</p>
              </div>
              <span style={styles.levelBadge}>
                {t('level')} {woman.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Main Render Switch ---

  const renderCurrentView = () => {
    switch (activeView) {
      case 'lessons':
        return renderLessons();
      case 'quiz':
        return renderQuiz();
      case 'rewards':
        return renderRewards();
      default:
        return renderLessons();
    }
  };

  return renderCurrentView();
};

export default LearnPage;