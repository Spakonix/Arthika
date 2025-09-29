export const translations = {
  en: {
    // Homepage Translations
    welcome_message: 'Good morning, Priya!',
    grow_wealth_question: 'Ready to grow your wealth today?',
    level: 'Level',
    todays_tasks_heading: 'Today’s Tasks',
    watch_lesson_task: 'Watch today’s lesson',
    take_quiz_task: 'Take a quiz',
    check_portfolio_task: 'Check investment portfolio',
    finance_tip_heading: 'Finance Tip of the Day',
    finance_tip_quote: 'Your financial independence is your superpower. Build it one step at a time.',
    learn_button: 'Learn',
    invest_button: 'Invest',
    community_button: 'Community',
    profile_button: 'Profile',
    guest_name: 'Guest',

    // Learn Page Translations
    learn_finance_heading: 'Learn Finance',
    learn_finance_subheading: 'Master money management skills',
    overall_progress: 'Overall Progress',
    lessons_label: 'lessons',
    financial_basics_title: 'Financial Basics',
    financial_basics_desc: 'Understanding Money & Budgeting',
    smart_saving_title: 'Smart Saving Strategies',
    smart_saving_desc: 'Building Your Emergency Fund',
    
    // Video Titles
    shg_video_title: 'What is SHG? Self Help Group',
    shg_video_desc: 'Learn how self-help groups empower women financially and socially.',
    finance_freedom_video_title: 'Financial Freedom for Women',
    finance_freedom_video_desc: 'Inspiring stories and practical tips for financial independence.',
    investing_for_beginners_title: 'Investing for Beginners',
    investing_for_beginners_desc: 'A simple guide to get started with investing.',
    empowered_women_title: 'Empowered Women - Changing Lives',
    empowered_women_desc: 'Stories of women who transformed their lives through financial literacy.',

    completed_status: 'Completed',
    done_status: 'Done',
    take_quiz_button: 'Take Quiz',
    start_button: 'Start',
    keep_learning_text: 'Keep learning to unlock rewards!',
    complete_lessons_text: 'Complete 3 more lessons to reach Level 4',
    view_rewards_button: 'View Rewards',
    
    // Achievements Page Translations
    your_achievements_heading: 'Your Achievements',
    track_progress_text: 'Track your progress & rewards',
    xp_points_label: 'XP Points',
    xp_to_next_level_text: 'XP to Level',
    day_streak_label: 'Day Streak',
    badges_label: 'Badges',
    achievements_heading: 'Achievements',
    upcoming_rewards_heading: 'Upcoming Rewards',
    upcoming_rewards_text: 'Investment Calculator Access',
    women_like_you_heading: 'Women Like You',
    back_to_learn_button: 'Back to Learn',
    
    // Quiz and Reward-specific Translations
    quiz_heading: 'Quiz',
    submit_button: 'Submit',
    correct_answer: 'Correct!',
    wrong_answer: 'Incorrect. Try again.',
    quiz_results_heading: 'Quiz Results',
    correct_answers_label: 'Correct Answers',
    earned_status: 'Earned',
    locked_status: 'Locked',
    
    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'What is the first step in creating a budget?', options: ['Track your income and expenses', 'Buy a new car', 'Invest in stocks', 'Pay off your friends'], answer: 'Track your income and expenses' },
        { question: 'What does "cash flow" refer to?', options: ['The money you have in your wallet', 'The movement of money in and out of your account', 'The value of your savings', 'The price of a product'], answer: 'The movement of money in and out of your account' },
        { question: 'Why is an emergency fund important?', options: ['For vacations', 'For unexpected expenses', 'To buy luxury items', 'To give to friends'], answer: 'For unexpected expenses' },
        { question: 'Which of these is a need, not a want?', options: ['A new smartphone', 'Food', 'A designer bag', 'A luxury car'], answer: 'Food' },
        { question: 'What is the 50/30/20 budgeting rule?', options: ['50% savings, 30% needs, 20% wants', '50% needs, 30% wants, 20% savings', '50% wants, 30% needs, 20% savings', '50% needs, 30% savings, 20% wants'], answer: '50% needs, 30% wants, 20% savings' },
      ],
      'smart-saving': [
        { question: 'What is the purpose of an emergency fund?', options: ['To buy luxury goods', 'To pay for vacations', 'To cover unexpected expenses like medical bills or job loss', 'To invest in the stock market'], answer: 'To cover unexpected expenses like medical bills or job loss' },
        { question: 'What is the "Rule of 72"?', options: ['A formula to calculate how long it takes for money to double', 'A budgeting method', 'A tax strategy', 'A rule for investing in bonds'], answer: 'A formula to calculate how long it takes for money to double' },
        { question: 'What is compounding interest?', options: ['Interest on your initial investment only', 'Interest earned on your initial investment and previously earned interest', 'A fixed rate of return', 'A government fee on investments'], answer: 'Interest earned on your initial investment and previously earned interest' },
        { question: 'The best way to save money is to:', options: ['Spend it all at once', 'Wait until the end of the month to save', 'Pay yourself first (save before you spend)', 'Borrow money to save'], answer: 'Pay yourself first (save before you spend)' },
        { question: 'What does "liquidity" in savings refer to?', options: ['How much interest you earn', 'How quickly you can access your money', 'How much money you have saved', 'The tax rate on your savings'], answer: 'How quickly you can access your money' },
      ],
      'shg-video': [
        { question: 'What does SHG stand for?', options: ['Smart Help Group', 'Self Help Group', 'Strong Harmony Group', 'Social Health Group'], answer: 'Self Help Group' },
        { question: 'What is the primary activity of an SHG?', options: ['Large business investments', 'Women meeting to sing songs', 'Members making small regular savings', 'Organizing community events'], answer: 'Members making small regular savings' },
        { question: 'What is the purpose of the money collected by an SHG?', options: ['To give to the government', 'To lend to a member in need', 'To buy new clothes for all members', 'To buy land for the group'], answer: 'To lend to a member in need' },
        { question: 'How do SHGs empower women?', options: ['By giving them power in politics', 'By teaching them to cook', 'By promoting savings and financial literacy', 'By providing free travel'], answer: 'By promoting savings and financial literacy' },
        { question: 'An SHG helps a woman start a small business. This is an example of:', options: ['Charity', 'Financial inclusion', 'A loan from a big bank', 'A gift'], answer: 'Financial inclusion' },
      ],
      'finance-freedom-video': [
        { question: 'Financial freedom means:', options: ['Being rich', 'Having the ability to make life choices without worrying about money', 'Never having to work', 'Winning the lottery'], answer: 'Having the ability to make life choices without worrying about money' },
        { question: 'A key step to financial freedom is:', options: ['Creating a budget', 'Buying expensive things', 'Getting a high-interest loan', 'Never saving money'], answer: 'Creating a budget' },
        { question: 'Why is it important for women to be financially independent?', options: ['To impress friends', 'To rely on others', 'To have control over their lives and future', 'To avoid taxes'], answer: 'To have control over their lives and future' },
        { question: 'The video mentions that financial independence is a:', options: ['Dream', 'Superpower', 'Myth', 'Hobby'], answer: 'Superpower' },
        { question: 'The best time to start learning about finance is:', options: ['When you are old', 'When you are a student', 'Yesterday', 'Never'], answer: 'Yesterday' },
      ],
      'investing-for-beginners-video': [
        { question: 'What is a stock?', options: ['A type of bond', 'A form of loan', 'A small piece of ownership in a company', 'A type of government certificate'], answer: 'A small piece of ownership in a company' },
        { question: 'What is the main goal of investing?', options: ['To lose money quickly', 'To make your money grow over time', 'To pay off debt', 'To spend money on luxury goods'], answer: 'To make your money grow over time' },
        { question: 'What is a mutual fund?', options: ['A fund that only a single person can invest in', 'A fund where money from many investors is pooled to invest in stocks, bonds, etc.', 'A government loan program', 'A type of bank account'], answer: 'A fund where money from many investors is pooled to invest in stocks, bonds, etc.' },
        { question: 'What does "diversification" mean?', options: ['Investing all your money in one company', 'Spreading your investments across different assets to reduce risk', 'Putting money in a savings account', 'Paying high fees for investment advice'], answer: 'Spreading your investments across different assets to reduce risk' },
        { question: 'What is a "long-term" investment?', options: ['An investment held for less than a year', 'An investment held for more than 5 years', 'An investment that pays a monthly dividend', 'A loan from the bank'], answer: 'An investment held for more than 5 years' },
      ],
      'empowered-women-video': [
        { question: 'What is a key benefit of financial literacy for women?', options: ['It helps them manage other peoples money', 'It enables them to become more independent and make better financial decisions', 'It helps them get more job promotions', 'It allows them to spend money freely'], answer: 'It enables them to become more independent and make better financial decisions' },
        { question: 'How do financially empowered women help their families?', options: ['By making all family decisions alone', 'By hiding money from their family members', 'By contributing to household income and children’s education', 'By asking for loans from friends'], answer: 'By contributing to household income and children’s education' },
        { question: 'What is microfinance?', options: ['Small loans given to poor individuals or groups to help them start small businesses', 'A large-scale investment banking system', 'A type of government tax', 'A savings program for children'], answer: 'Small loans given to poor individuals or groups to help them start small businesses' },
        { question: 'The video highlights how women:', options: ['Depend on men', 'Waste money on unnecessary items', 'Can be agents of change in their communities', 'Only care about their personal wealth'], answer: 'Can be agents of change in their communities' },
        { question: 'According to the video, financial literacy is not just about money, but also about:', options: ['Getting a degree', 'Building confidence and self-respect', 'Buying new properties', 'Traveling the world'], answer: 'Building confidence and self-respect' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'First Steps', desc: 'Complete your first lesson', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'Budgeting Pro', desc: 'Master budgeting basics', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'Week Warrior', desc: 'Maintain a 7-day streak', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'Finance Queen', desc: 'Reach Level 5', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'Investment Calculator Access', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'Ananya K.', achievement: 'Saved ₹50,000 in 6 months', level: 8 },
      { name: 'Priya S.', achievement: 'Started investing at 23', level: 6 },
      { name: 'Meera R.', achievement: 'Built emergency fund', level: 7 }
    ],
  },
  hi: {
    // Homepage Translations
    welcome_message: 'शुभ प्रभात, प्रिया!',
    grow_wealth_question: 'आज अपना धन बढ़ाने के लिए तैयार हैं?',
    level: 'स्तर',
    todays_tasks_heading: 'आज के कार्य',
    watch_lesson_task: 'आज का पाठ देखें',
    take_quiz_task: 'एक क्विज दें',
    check_portfolio_task: 'निवेश पोर्टफोलियो जांचें',
    finance_tip_heading: 'आज का वित्त टिप',
    finance_tip_quote: 'आपकी आर्थिक स्वतंत्रता आपकी महाशक्ति है। इसे एक-एक करके बनाएं।',
    learn_button: 'सीखें',
    invest_button: 'निवेश करें',
    community_button: 'समुदाय',
    profile_button: 'प्रोफ़ाइल',
    guest_name: 'अतिथि',
    
    // Learn Page Translations
    learn_finance_heading: 'वित्त सीखें',
    learn_finance_subheading: 'पैसा प्रबंधन कौशल में महारत हासिल करें',
    overall_progress: 'कुल प्रगति',
    lessons_label: 'पाठ',
    financial_basics_title: 'वित्तीय मूल बातें',
    financial_basics_desc: 'पैसे और बजट को समझना',
    smart_saving_title: 'स्मार्ट बचत रणनीतियाँ',
    smart_saving_desc: 'अपनी आपातकालीन निधि बनाना',
    
    // Video Titles
    shg_video_title: 'एसएचजी क्या है? स्वयं सहायता समूह',
    shg_video_desc: 'जानें कि स्वयं सहायता समूह महिलाओं को आर्थिक और सामाजिक रूप से कैसे सशक्त बनाते हैं।',
    finance_freedom_video_title: 'महिलाओं के लिए वित्तीय स्वतंत्रता',
    finance_freedom_video_desc: 'प्रेरक कहानियाँ और वित्तीय स्वतंत्रता के लिए व्यावहारिक युक्तियाँ।',
    investing_for_beginners_title: 'शुरुआती के लिए निवेश',
    investing_for_beginners_desc: 'निवेश शुरू करने के लिए एक सरल गाइड।',
    empowered_women_title: 'सशक्त महिलाएं - जीवन बदलना',
    empowered_women_desc: 'वित्तीय साक्षरता के माध्यम से अपना जीवन बदलने वाली महिलाओं की कहानियाँ।',

    completed_status: 'पूरा हो गया',
    done_status: 'पूरा हुआ',
    take_quiz_button: 'क्विज लें',
    start_button: 'शुरू करें',
    keep_learning_text: 'इनाम अनलॉक करने के लिए सीखते रहें!',
    complete_lessons_text: 'स्तर 4 तक पहुंचने के लिए 3 और पाठ पूरे करें',
    view_rewards_button: 'इनाम देखें',
    
    // Achievements Page Translations
    your_achievements_heading: 'आपकी उपलब्धियाँ',
    track_progress_text: 'अपनी प्रगति और पुरस्कार ट्रैक करें',
    xp_points_label: 'एक्सपी अंक',
    xp_to_next_level_text: 'एक्सपी अगले स्तर के लिए',
    day_streak_label: 'दिनों का सिलसिला',
    badges_label: 'बैज',
    achievements_heading: 'उपलब्धियां',
    upcoming_rewards_heading: 'आगामी पुरस्कार',
    upcoming_rewards_text: 'निवेश कैलकुलेटर तक पहुंच',
    women_like_you_heading: 'आप जैसी महिलाएं',
    back_to_learn_button: 'वापस सीखें',
    
    // Quiz and Reward-specific Translations
    quiz_heading: 'प्रश्नोत्तरी',
    submit_button: 'जमा करें',
    correct_answer: 'सही!',
    wrong_answer: 'गलत। पुनः प्रयास करें।',
    quiz_results_heading: 'प्रश्नोत्तरी के परिणाम',
    correct_answers_label: 'सही उत्तर',
    earned_status: 'अर्जित',
    locked_status: 'बंद है',

    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'बजट बनाने का पहला कदम क्या है?', options: ['अपनी आय और व्यय को ट्रैक करें', 'एक नई कार खरीदें', 'स्टॉक्स में निवेश करें', 'अपने दोस्तों का कर्ज चुकाएं'], answer: 'अपनी आय और व्यय को ट्रैक करें' },
        { question: '“कैश फ्लो” से क्या तात्पर्य है?', options: ['आपके बटुए में पैसा', 'आपके खाते में पैसे का आना-जाना', 'आपकी बचत का मूल्य', 'किसी उत्पाद की कीमत'], answer: 'आपके खाते में पैसे का आना-जाना' },
        { question: 'आपातकालीन निधि क्यों महत्वपूर्ण है?', options: ['छुट्टियों के लिए', 'अप्रत्याशित खर्चों के लिए', 'लक्जरी सामान खरीदने के लिए', 'दोस्तों को देने के लिए'], answer: 'अप्रत्याशित खर्चों के लिए' },
        { question: 'इनमें से क्या एक आवश्यकता है, चाहत नहीं?', options: ['एक नया स्मार्टफोन', 'भोजन', 'एक डिजाइनर बैग', 'एक लक्जरी कार'], answer: 'भोजन' },
        { question: '50/30/20 बजट नियम क्या है?', options: ['50% बचत, 30% आवश्यकताएं, 20% चाहतें', '50% आवश्यकताएं, 30% चाहतें, 20% बचत', '50% चाहतें, 30% आवश्यकताएं, 20% बचत', '50% आवश्यकताएं, 30% बचत, 20% चाहतें'], answer: '50% आवश्यकताएं, 30% चाहतें, 20% बचत' },
      ],
      'smart-saving': [
        { question: 'आपातकालीन निधि का उपयोग किस लिए किया जाता है?', options: ['लक्जरी सामान खरीदने के लिए', 'छुट्टियों के लिए', 'चिकित्सा बिल या नौकरी छूटने जैसे अप्रत्याशित खर्चों को कवर करने के लिए', 'शेयर बाजार में निवेश करने के लिए'], answer: 'चिकित्सा बिल या नौकरी छूटने जैसे अप्रत्याशित खर्चों को कवर करने के लिए' },
        { question: '“72 का नियम” क्या है?', options: ['पैसे को दोगुना होने में कितना समय लगता है, इसकी गणना करने का एक सूत्र', 'एक बजट विधि', 'एक कर रणनीति', 'बांड में निवेश करने का एक नियम'], answer: 'पैसे को दोगुना होने में कितना समय लगता है, इसकी गणना करने का एक सूत्र' },
        { question: 'कंपाउंडिंग ब्याज क्या है?', options: ['केवल आपके प्रारंभिक निवेश पर ब्याज', 'आपके प्रारंभिक निवेश और पहले से अर्जित ब्याज पर अर्जित ब्याज', 'एक निश्चित वापसी दर', 'निवेश पर एक सरकारी शुल्क'], answer: 'आपके प्रारंभिक निवेश और पहले से अर्जित ब्याज पर अर्जित ब्याज' },
        { question: 'पैसे बचाने का सबसे अच्छा तरीका है:', options: ['इसे एक बार में खर्च करें', 'बचाने के लिए महीने के अंत तक प्रतीक्षा करें', 'सबसे पहले खुद को भुगतान करें (खर्च करने से पहले बचाएं)', 'बचाने के लिए पैसे उधार लें'], answer: 'सबसे पहले खुद को भुगतान करें (खर्च करने से पहले बचाएं)' },
        { question: 'बचत में "तरलता" (liquidity) का क्या अर्थ है?', options: ['आप कितना ब्याज कमाते हैं', 'आप कितनी जल्दी अपने पैसे तक पहुंच सकते हैं', 'आपने कितना पैसा बचाया है', 'आपकी बचत पर कर की दर'], answer: 'आप कितनी जल्दी अपने पैसे तक पहुंच सकते हैं' },
      ],
      'shg-video': [
        { question: 'एसएचजी का क्या मतलब है?', options: ['स्मार्ट हेल्प ग्रुप', 'स्वयं सहायता समूह', 'स्ट्रॉन्ग हार्मनी ग्रुप', 'सोशल हेल्थ ग्रुप'], answer: 'स्वयं सहायता समूह' },
        { question: 'एक एसएचजी का प्राथमिक कार्य क्या है?', options: ['बड़े व्यवसाय में निवेश', 'गाना गाने के लिए महिलाओं का मिलना', 'सदस्यों द्वारा छोटी नियमित बचत करना', 'सामुदायिक कार्यक्रमों का आयोजन करना'], answer: 'सदस्यों द्वारा छोटी नियमित बचत करना' },
        { question: 'एक एसएचजी द्वारा जमा किए गए पैसे का उद्देश्य क्या है?', options: ['सरकार को देना', 'जरूरतमंद सदस्य को उधार देना', 'सभी सदस्यों के लिए नए कपड़े खरीदना', 'समूह के लिए जमीन खरीदना'], answer: 'जरूरतमंद सदस्य को उधार देना' },
        { question: 'एसएचजी महिलाओं को कैसे सशक्त करते हैं?', options: ['राजनीति में शक्ति देकर', 'उन्हें खाना बनाना सिखाकर', 'बचत और वित्तीय साक्षरता को बढ़ावा देकर', 'मुफ्त यात्रा प्रदान करके'], answer: 'बचत और वित्तीय साक्षरता को बढ़ावा देकर' },
        { question: 'एक एसएचजी एक महिला को एक छोटा व्यवसाय शुरू करने में मदद करता है। यह किसका एक उदाहरण है?', options: ['दान', 'वित्तीय समावेशन', 'एक बड़े बैंक से ऋण', 'एक उपहार'], answer: 'वित्तीय समावेशन' },
      ],
      'finance-freedom-video': [
        { question: 'वित्तीय स्वतंत्रता का मतलब है:', options: ['अमीर होना', 'पैसे की चिंता किए बिना जीवन के चुनाव करने की क्षमता होना', 'कभी काम न करना पड़े', 'लॉटरी जीतना'], answer: 'पैसे की चिंता किए बिना जीवन के चुनाव करने की क्षमता होना' },
        { question: 'वित्तीय स्वतंत्रता का एक मुख्य कदम है:', options: ['बजट बनाना', 'महंगी चीजें खरीदना', 'उच्च ब्याज वाला ऋण लेना', 'कभी पैसे न बचाना'], answer: 'बजट बनाना' },
        { question: 'महिलाओं के लिए आर्थिक रूप से स्वतंत्र होना क्यों महत्वपूर्ण है?', options: ['दोस्तों को प्रभावित करने के लिए', 'दूसरों पर निर्भर रहने के लिए', 'अपने जीवन और भविष्य पर नियंत्रण रखने के लिए', 'करों से बचने के लिए'], answer: 'अपने जीवन और भविष्य पर नियंत्रण रखने के लिए' },
        { question: 'वीडियो के अनुसार, वित्तीय स्वतंत्रता एक:', options: ['सपना है', 'महाशक्ति है', 'एक मिथक है', 'एक शौक है'], answer: 'महाशक्ति है' },
        { question: 'वित्त के बारे में सीखना शुरू करने का सबसे अच्छा समय है:', options: ['जब आप बूढ़े हों', 'जब आप एक छात्र हों', 'कल', 'कभी नहीं'], answer: 'कल' },
      ],
      'investing-for-beginners-video': [
        { question: 'स्टॉक क्या है?', options: ['एक प्रकार का बांड', 'ऋण का एक रूप', 'एक कंपनी में स्वामित्व का एक छोटा सा हिस्सा', 'एक प्रकार का सरकारी प्रमाणपत्र'], answer: 'एक कंपनी में स्वामित्व का एक छोटा सा हिस्सा' },
        { question: 'निवेश का मुख्य लक्ष्य क्या है?', options: ['जल्दी से पैसा खोना', 'समय के साथ अपने पैसे को बढ़ाना', 'कर्ज चुकाना', 'विलासिता की वस्तुओं पर पैसा खर्च करना'], answer: 'समय के साथ अपने पैसे को बढ़ाना' },
        { question: 'म्यूचुअल फंड क्या है?', options: ['एक फंड जिसमें केवल एक व्यक्ति निवेश कर सकता है', 'एक फंड जहां कई निवेशकों से पैसा स्टॉक्स, बांड आदि में निवेश करने के लिए जमा किया जाता है', 'एक सरकारी ऋण कार्यक्रम', 'एक प्रकार का बैंक खाता'], answer: 'एक फंड जहां कई निवेशकों से पैसा स्टॉक्स, बांड आदि में निवेश करने के लिए जमा किया जाता है' },
        { question: '“विविधीकरण” (diversification) का क्या अर्थ है?', options: ['अपना सारा पैसा एक कंपनी में निवेश करना', 'जोखिम को कम करने के लिए विभिन्न संपत्तियों में अपने निवेश को फैलाना', 'एक बचत खाते में पैसा रखना', 'निवेश सलाह के लिए उच्च शुल्क का भुगतान करना'], answer: 'जोखिम को कम करने के लिए विभिन्न संपत्तियों में अपने निवेश को फैलाना' },
        { question: '“दीर्घकालिक” (long-term) निवेश क्या है?', options: ['एक साल से कम समय के लिए रखा गया निवेश', '5 साल से अधिक समय के लिए रखा गया निवेश', 'एक निवेश जो मासिक लाभांश देता है', 'बैंक से ऋण'], answer: '5 साल से अधिक समय के लिए रखा गया निवेश' },
      ],
      'empowered-women-video': [
        { question: 'महिलाओं के लिए वित्तीय साक्षरता का एक मुख्य लाभ क्या है?', options: ['यह उन्हें दूसरों के पैसे का प्रबंधन करने में मदद करता है', 'यह उन्हें अधिक स्वतंत्र होने और बेहतर वित्तीय निर्णय लेने में सक्षम बनाता है', 'यह उन्हें अधिक नौकरी पदोन्नति दिलाने में मदद करता', 'यह उन्हें स्वतंत्र रूप से पैसा खर्च करने की अनुमति देता है'], answer: 'यह उन्हें अधिक स्वतंत्र होने और बेहतर वित्तीय निर्णय लेने में सक्षम बनाता है' },
        { question: 'आर्थिक रूप से सशक्त महिलाएं अपने परिवारों की मदद कैसे करती हैं?', options: ['परिवार के सभी निर्णय अकेले लेकर', 'अपने परिवार के सदस्यों से पैसे छिपाकर', 'घरेलू आय और बच्चों की शिक्षा में योगदान देकर', 'दोस्तों से ऋण मांगकर'], answer: 'घरेलू आय और बच्चों की शिक्षा में योगदान देकर' },
        { question: 'सूक्ष्मवित्त (microfinance) क्या है?', options: ['गरीब व्यक्तियों या समूहों को छोटे व्यवसाय शुरू करने में मदद करने के लिए दिए गए छोटे ऋण', 'एक बड़े पैमाने पर निवेश बैंकिंग प्रणाली', 'एक प्रकार का सरकारी कर', 'बच्चों के लिए एक बचत कार्यक्रम'], answer: 'गरीब व्यक्तियों या समूहों को छोटे व्यवसाय शुरू करने में मदद करने के लिए दिए गए छोटे ऋण' },
        { question: 'वीडियो बताता है कि महिलाएं:', options: ['पुरुषों पर निर्भर करती हैं', 'अनावश्यक चीजों पर पैसा बर्बाद करती हैं', 'अपने समुदायों में बदलाव के एजेंट हो सकती हैं', 'केवल अपनी व्यक्तिगत संपत्ति की परवाह करती हैं'], answer: 'अपने समुदायों में बदलाव के एजेंट हो सकती हैं' },
        { question: 'वीडियो के अनुसार, वित्तीय साक्षरता केवल पैसे के बारे में नहीं है, बल्कि यह भी है:', options: ['एक डिग्री प्राप्त करना', 'आत्मविश्वास और आत्म-सम्मान का निर्माण करना', 'नई संपत्ति खरीदना', 'दुनिया की यात्रा करना'], answer: 'आत्मविश्वास और आत्म-सम्मान का निर्माण करना' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'पहला कदम', desc: 'अपना पहला पाठ पूरा करें', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'बजटिंग प्रो', desc: 'मास्टर बजटिंग की मूल बातें', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'सप्ताह योद्धा', desc: '7 दिन का सिलसिला बनाए रखें', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'वित्त रानी', desc: 'स्तर 5 तक पहुंचें', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'निवेश कैलकुलेटर तक पहुंच', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'अनन्या के.', achievement: '6 महीनों में ₹50,000 बचाए', level: 8 },
      { name: 'प्रिया एस.', achievement: '23 साल की उम्र में निवेश शुरू किया', level: 6 },
      { name: 'मीरा आर.', achievement: 'आपातकालीन निधि बनाई', level: 7 }
    ],
  },
  mr: {
    // Homepage Translations
    welcome_message: 'शुभ प्रभात, प्रिया!',
    grow_wealth_question: 'आज आपले धन वाढवण्यासाठी तयार आहात?',
    level: 'पातळी',
    todays_tasks_heading: 'आजची कामे',
    watch_lesson_task: 'आजचा पाठ बघा',
    take_quiz_task: 'एक क्विझ द्या',
    check_portfolio_task: 'गुंतवणूक पोर्टफोलिओ तपासा',
    finance_tip_heading: 'आजची आर्थिक सल्ला',
    finance_tip_quote: 'तुमचे आर्थिक स्वातंत्र्य तुमची महाशक्ती आहे. ते एक-एक पाऊल टाकून तयार करा.',
    learn_button: 'शिकणे',
    invest_button: 'गुंतवणूक करा',
    community_button: 'समुदाय',
    profile_button: 'प्रोफाइल',
    guest_name: 'अतिथी',

    // Learn Page Translations
    learn_finance_heading: 'वित्त शिका',
    learn_finance_subheading: 'पैसे व्यवस्थापन कौशल्ये मास्तर करा',
    overall_progress: 'एकूण प्रगती',
    lessons_label: 'पाठ',
    financial_basics_title: 'आर्थिक मूलतत्त्वे',
    financial_basics_desc: 'पैसे आणि बजेट समजून घेणे',
    smart_saving_title: 'स्मार्ट बचत धोरणे',
    smart_saving_desc: 'तुमची आपत्कालीन निधी तयार करणे',
    
    // Video Titles
    shg_video_title: 'एसएचजी काय आहे? स्वयं सहायता समूह',
    shg_video_desc: 'जाणून घ्या की स्वयं सहायता गट महिलांना आर्थिक आणि सामाजिकरित्या कसे सक्षम करतात.',
    finance_freedom_video_title: 'महिलांसाठी वित्तीय स्वातंत्र्य',
    finance_freedom_video_desc: 'आर्थिक स्वातंत्र्यासाठी प्रेरणादायक कथा आणि व्यावहारिक टिप्स.',
    investing_for_beginners_title: 'नवशिक्यांसाठी गुंतवणूक',
    investing_for_beginners_desc: 'गुंतवणूक सुरू करण्यासाठी एक सोपी मार्गदर्शक.',
    empowered_women_title: 'सक्षम महिला - जीवन बदलणे',
    empowered_women_desc: 'ज्या महिलांनी आर्थिक साक्षरतेद्वारे आपले जीवन बदलले त्यांच्या कथा.',

    completed_status: 'पूर्ण झाले',
    done_status: 'पूर्ण झाले',
    take_quiz_button: 'क्विझ द्या',
    start_button: 'सुरू करा',
    keep_learning_text: 'बक्षिसे अनलॉक करण्यासाठी शिकत रहा!',
    complete_lessons_text: 'स्तर 4 पर्यंत पोहोचण्यासाठी 3 आणखी पाठ पूर्ण करा',
    view_rewards_button: 'बक्षिसे पहा',

    // Achievements Page Translations
    your_achievements_heading: 'तुमच्या उपलब्धी',
    track_progress_text: 'तुमची प्रगती आणि बक्षिसे ट्रॅक करा',
    xp_points_label: 'एक्सपी पॉइंट्स',
    xp_to_next_level_text: 'एक्सपी पुढील स्तरासाठी',
    day_streak_label: 'दिवसांची मालिका',
    badges_label: 'बॅज',
    achievements_heading: 'उपलब्धी',
    upcoming_rewards_heading: 'आगामी बक्षिसे',
    upcoming_rewards_text: 'गुंतवणूक कॅल्क्युलेटर ऍक्सेस',
    women_like_you_heading: 'तुमच्यासारख्या महिला',
    back_to_learn_button: 'परत शिका',

    // Quiz and Reward-specific Translations
    quiz_heading: 'क्विझ',
    submit_button: 'जमा करा',
    correct_answer: 'बरोबर!',
    wrong_answer: 'चुकीचे. पुन्हा प्रयत्न करा.',
    quiz_results_heading: 'क्विझचे परिणाम',
    correct_answers_label: 'बरोबर उत्तरे',
    earned_status: 'कमावले',
    locked_status: 'लॉक केलेले',
    
    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'बजेट तयार करण्याचा पहिला टप्पा कोणता आहे?', options: ['तुमचे उत्पन्न आणि खर्च ट्रॅक करा', 'नवीन गाडी खरेदी करा', 'स्टॉक मध्ये गुंतवणूक करा', 'तुमच्या मित्रांचे कर्ज फेडा'], answer: 'तुमचे उत्पन्न आणि खर्च ट्रॅक करा' },
        { question: '“कॅश फ्लो” म्हणजे काय?', options: ['तुमच्या पाकिटातील पैसा', 'तुमच्या खात्यात पैशाची ये-जा', 'तुमच्या बचतीचे मूल्य', 'एका उत्पादनाची किंमत'], answer: 'तुमच्या खात्यात पैशाची ये-जा' },
        { question: 'आपातकालीन निधी का महत्वाचा आहे?', options: ['सुट्ट्यांसाठी', 'अनपेक्षित खर्चांसाठी', 'लक्झरी वस्तू खरेदी करण्यासाठी', 'मित्रांना देण्यासाठी'], answer: 'अनपेक्षित खर्चांसाठी' },
        { question: 'यापैकी काय गरज आहे, इच्छा नाही?', options: ['नवीन स्मार्टफोन', 'अन्न', 'डिझायनर बॅग', 'लक्झरी कार'], answer: 'अन्न' },
        { question: '50/30/20 बजेट नियम काय आहे?', options: ['50% बचत, 30% गरजा, 20% इच्छा', '50% गरजा, 30% इच्छा, 20% बचत', '50% इच्छा, 30% गरजा, 20% बचत', '50% गरजा, 30% बचत, 20% इच्छा'], answer: '50% गरजा, 30% इच्छा, 20% बचत' },
      ],
      'smart-saving': [
        { question: 'आपत्कालीन निधीचा उपयोग कशासाठी होतो?', options: ['लक्झरी वस्तू खरेदी करण्यासाठी', 'सुट्ट्यांसाठी', 'वैद्यकीय बिलांसारख्या अनपेक्षित खर्चांसाठी किंवा नोकरी गमावल्यास', 'शेअर बाजारात गुंतवणूक करण्यासाठी'], answer: 'वैद्यकीय बिलांसारख्या अनपेक्षित खर्चांसाठी किंवा नोकरी गमावल्यास' },
        { question: '“72 चा नियम” काय आहे?', options: ['पैसे दुप्पट होण्यासाठी लागणारा वेळ मोजण्याचे सूत्र', 'एक बजेट पद्धत', 'एक कर धोरण', 'बॉन्डमध्ये गुंतवणूक करण्याचा नियम'], answer: 'पैसे दुप्पट होण्यासाठी लागणारा वेळ मोजण्याचे सूत्र' },
        { question: 'चक्रवाढ व्याज (Compounding Interest) काय आहे?', options: ['फक्त तुमच्या प्रारंभिक गुंतवणुकीवरील व्याज', 'तुमच्या प्रारंभिक गुंतवणुकीवर आणि पूर्वी कमावलेल्या व्याजावर मिळालेले व्याज', 'एक निश्चित परतावा दर', 'गुंतवणुकीवरील सरकारी शुल्क'], answer: 'तुमच्या प्रारंभिक गुंतवणुकीवर आणि पूर्वी कमावलेल्या व्याजावर मिळालेले व्याज' },
        { question: 'पैसे वाचवण्याचा सर्वोत्तम मार्ग आहे:', options: ['एकाच वेळी सर्व खर्च करा', 'बचत करण्यासाठी महिन्याच्या शेवटपर्यंत थांबा', 'प्रथम स्वतःला पैसे द्या (खर्च करण्यापूर्वी बचत करा)', 'बचत करण्यासाठी कर्ज घ्या'], answer: 'प्रथम स्वतःला पैसे द्या (खर्च करण्यापूर्वी बचत करा)' },
        { question: 'बचतीतील "तरलता" (liquidity) चा अर्थ काय आहे?', options: ['तुम्ही किती व्याज कमवता', 'तुम्ही तुमच्या पैशापर्यंत किती लवकर पोहोचू शकता', 'तुम्ही किती पैसे वाचवले आहेत', 'तुमच्या बचतीवरील कर दर'], answer: 'तुम्ही तुमच्या पैशापर्यंत किती लवकर पोहोचू शकता' },
      ],
      'shg-video': [
        { question: 'एसएचजीचा अर्थ काय आहे?', options: ['स्मार्ट हेल्प ग्रुप', 'स्वयं सहायता समूह', 'स्ट्रॉन्ग हार्मनी ग्रुप', 'सोशल हेल्थ ग्रुप'], answer: 'स्वयं सहायता समूह' },
        { question: 'एसएचजीची प्राथमिक क्रिया काय आहे?', options: ['मोठ्या व्यवसायात गुंतवणूक', 'गाणे गाण्यासाठी महिला भेटणे', 'सदस्यांकडून लहान नियमित बचत करणे', 'सामुदायिक कार्यक्रमांचे आयोजन करणे'], answer: 'सदस्यांकडून लहान नियमित बचत करणे' },
        { question: 'एसएचजीद्वारे जमा केलेल्या पैशाचा उद्देश काय आहे?', options: ['सरकारला देणे', 'गरजू सदस्यांना कर्ज देणे', 'सर्व सदस्यांसाठी नवीन कपडे खरेदी करणे', 'समूहासाठी जमीन खरेदी करणे'], answer: 'गरजू सदस्यांना कर्ज देणे' },
        { question: 'एसएचजी महिलांना कसे सक्षम करतात?', options: ['राजकारणात शक्ती देऊन', 'त्यांना स्वयंपाक शिकवून', 'बचत आणि वित्तीय साक्षरतेला प्रोत्साहन देऊन', 'मोफत प्रवास देऊन'], answer: 'बचत आणि वित्तीय साक्षरतेला प्रोत्साहन देऊन' },
        { question: 'एक एसएचजी एका महिलेला एक छोटा व्यवसाय सुरू करण्यास मदत करतो. हे कशाचे उदाहरण आहे?', options: ['दान', 'वित्तीय समावेशन', 'मोठ्या बँकेकडून कर्ज', 'एक भेट'], answer: 'वित्तीय समावेशन' },
      ],
      'finance-freedom-video': [
        { question: 'वित्तीय स्वातंत्र्याचा अर्थ आहे:', options: ['श्रीमंत होणे', 'पैशाची चिंता न करता जीवनातील निवड करण्याची क्षमता असणे', 'कधीही काम करावे लागणार नाही', 'लॉटरी जिंकणे'], answer: 'पैशाची चिंता न करता जीवनातील निवड करण्याची क्षमता असणे' },
        { question: 'वित्तीय स्वातंत्र्याचे एक मुख्य पाऊल आहे:', options: ['बजेट तयार करणे', 'महागड्या वस्तू खरेदी करणे', 'जास्त व्याजदर असलेले कर्ज घेणे', 'कधीही बचत न करणे'], answer: 'बजेट तयार करणे' },
        { question: 'महिलांसाठी आर्थिकदृष्ट्या स्वतंत्र असणे का महत्त्वाचे आहे?', options: ['मित्रांना प्रभावित करण्यासाठी', 'इतरांवर अवलंबून राहण्यासाठी', 'आपल्या जीवनावर आणि भविष्यावर नियंत्रण ठेवण्यासाठी', 'कर (टॅक्स) टाळण्यासाठी'], answer: 'आपल्या जीवनावर आणि भविष्यावर नियंत्रण ठेवण्यासाठी' },
        { question: 'व्हिडिओनुसार, वित्तीय स्वातंत्र्य हे आहे:', options: ['एक स्वप्न', 'महाशक्ती', 'एक गैरसमज (Myth)', 'एक छंद'], answer: 'महाशक्ती' },
        { question: 'वित्ताविषयी शिकायला सुरुवात करण्याची सर्वोत्तम वेळ आहे:', options: ['जेव्हा तुम्ही वृद्ध असाल', 'जेव्हा तुम्ही विद्यार्थी असाल', 'काल', 'कधीच नाही'], answer: 'काल' },
      ],
      'investing-for-beginners-video': [
        { question: 'स्टॉक काय आहे?', options: ['एका प्रकारचा बाँड', 'कर्जाचा एक प्रकार', 'एका कंपनीतील मालकीचा एक छोटा भाग', 'एका प्रकारचा सरकारी प्रमाणपत्र'], answer: 'एका कंपनीतील मालकीचा एक छोटा भाग' },
        { question: 'गुंतवणुकीचे मुख्य उद्दिष्ट काय आहे?', options: ['त्वरीत पैसे गमावणे', 'वेळेनुसार आपले पैसे वाढवणे', 'कर्ज फेडणे', 'विलासी वस्तूंवर पैसे खर्च करणे'], answer: 'वेळेनुसार आपले पैसे वाढवणे' },
        { question: 'म्युच्युअल फंड काय आहे?', options: ['एक फंड ज्यात फक्त एकच व्यक्ती गुंतवणूक करू शकते', 'एक फंड जिथे अनेक गुंतवणूकदारांचे पैसे एकत्र करून स्टॉक्स, बाँड्स इत्यादीमध्ये गुंतवले जातात', 'एक सरकारी कर्ज योजना', 'एका प्रकारचा बँक खाते'], answer: 'एक फंड जिथे अनेक गुंतवणूकदारांचे पैसे एकत्र करून स्टॉक्स, बाँड्स इत्यादीमध्ये गुंतवले जातात' },
        { question: '“विविधीकरण” (diversification) चा अर्थ काय आहे?', options: ['आपले सर्व पैसे एकाच कंपनीत गुंतवणे', 'जोखीम कमी करण्यासाठी विविध मालमत्तांमध्ये आपली गुंतवणूक पसरवणे', 'बचत खात्यात पैसे ठेवणे', 'गुंतवणुकीच्या सल्ल्यासाठी जास्त शुल्क भरणे'], answer: 'जोखीम कमी करण्यासाठी विविध मालमत्तांमध्ये आपली गुंतवणूक पसरवणे' },
        { question: '“दीर्घकाळ” (long-term) गुंतवणूक काय आहे?', options: ['एका वर्षापेक्षा कमी कालावधीसाठी ठेवलेली गुंतवणूक', '5 वर्षांपेक्षा जास्त कालावधीसाठी ठेवलेली गुंतवणूक', 'जी गुंतवणूक मासिक लाभांश देते', 'बँकेकडून कर्ज'], answer: '5 वर्षांपेक्षा जास्त कालावधीसाठी ठेवलेली गुंतवणूक' },
      ],
      'empowered-women-video': [
        { question: 'महिलांसाठी वित्तीय साक्षरतेचा एक महत्त्वाचा फायदा काय आहे?', options: ['तो त्यांना इतरांच्या पैशाचे व्यवस्थापन करण्यास मदत करतो', 'तो त्यांना अधिक स्वतंत्र बनण्यास आणि चांगले आर्थिक निर्णय घेण्यास सक्षम करतो', 'तो त्यांना अधिक नोकरीत बढती मिळवून देतो', 'तो त्यांना मुक्तपणे पैसे खर्च करण्याची परवानगी देतो'], answer: 'तो त्यांना अधिक स्वतंत्र बनण्यास आणि चांगले आर्थिक निर्णय घेण्यास सक्षम करतो' },
        { question: 'आर्थिकदृष्ट्या सक्षम महिला त्यांच्या कुटुंबांना कशी मदत करतात?', options: ['सर्व कौटुंबिक निर्णय स्वतः घेऊन', 'कुटुंबातील सदस्यांपासून पैसे लपवून', 'घरगुती उत्पन्न आणि मुलांच्या शिक्षणात योगदान देऊन', 'मित्रांकडून कर्ज मागून'], answer: 'घरगुती उत्पन्न आणि मुलांच्या शिक्षणात योगदान देऊन' },
        { question: 'सूक्ष्मवित्त (microfinance) काय आहे?', options: ['गरीब व्यक्ती किंवा समूहांना छोटे व्यवसाय सुरू करण्यासाठी दिलेले लहान कर्ज', 'एक मोठ्या प्रमाणावर गुंतवणूक बँकिंग प्रणाली', 'एका प्रकारचा सरकारी कर', 'मुलांसाठी बचत कार्यक्रम'], answer: 'गरीब व्यक्ती किंवा समूहांना छोटे व्यवसाय सुरू करण्यासाठी दिलेले लहान कर्ज' },
        { question: 'व्हिडिओ कशावर भर देतो की महिला:', options: ['पुरुषांवर अवलंबून असतात', 'अनावश्यक वस्तूंवर पैसे वाया घालवतात', 'त्यांच्या समुदायांमध्ये बदलाचे एजंट बनू शकतात', 'फक्त त्यांच्या वैयक्तिक संपत्तीची काळजी करतात'], answer: 'त्यांच्या समुदायांमध्ये बदलाचे एजंट बनू शकतात' },
        { question: 'व्हिडिओनुसार, वित्तीय साक्षरता केवळ पैशाबद्दल नाही, तर याबद्दल देखील आहे:', options: ['पदवी मिळवणे', 'आत्मविश्वास आणि आत्म-सन्मान निर्माण करणे', 'नवीन मालमत्ता खरेदी करणे', 'जगभर प्रवास करणे'], answer: 'आत्मविश्वास आणि आत्म-सन्मान निर्माण करणे' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'पहिली पावले', desc: 'तुमचा पहिला पाठ पूर्ण करा', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'बजेटिंग प्रो', desc: 'बजेटिंगच्या मूलभूत गोष्टींमध्ये प्राविण्य मिळवा', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'वीक वॉरियर', desc: '७ दिवसांची मालिका राखा', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'फायनान्स क्वीन', desc: 'स्तर ५ गाठा', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'गुंतवणूक कॅल्क्युलेटर ऍक्सेस', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'अनन्या के.', achievement: '६ महिन्यांत ₹५०,००० वाचवले', level: 8 },
      { name: 'प्रिया एस.', achievement: '२३ व्या वर्षी गुंतवणूक सुरू केली', level: 6 },
      { name: 'मीरा आर.', achievement: 'आपत्कालीन निधी तयार केला', level: 7 }
    ],
  },
  gu: {
    // Homepage Translations
    welcome_message: 'શુભ પ્રભાત, પ્રિયા!',
    grow_wealth_question: 'આજે તમારી સંપત્તિ વધારવા તૈયાર છો?',
    level: 'સ્તર',
    todays_tasks_heading: 'આજના કાર્યો',
    watch_lesson_task: 'આજનો પાઠ જુઓ',
    take_quiz_task: 'એક ક્વિઝ આપો',
    check_portfolio_task: 'રોકાણ પોર્ટફોલિયો તપાસો',
    finance_tip_heading: 'આજનો નાણાકીય ટિપ',
    finance_tip_quote: 'તમારી નાણાકીય સ્વતંત્રતા તમારી મહાશક્તિ છે. તેને એક પછી એક પગલું ભરીને બનાવો.',
    learn_button: 'શીખો',
    invest_button: 'રોકાણ કરો',
    community_button: 'સમુદાય',
    profile_button: 'પ્રોફાઇલ',
    guest_name: 'મહેમાન',

    // Learn Page Translations
    learn_finance_heading: 'નાણાકીય જ્ઞાન મેળવો',
    learn_finance_subheading: 'પૈસા વ્યવસ્થાપન કૌશલ્યોમાં નિપુણતા મેળવો',
    overall_progress: 'એકંદર પ્રગતિ',
    lessons_label: 'પાઠ',
    financial_basics_title: 'નાણાકીય મૂળભૂત બાબતો',
    financial_basics_desc: 'પૈસા અને બજેટ સમજવું',
    smart_saving_title: 'સ્માર્ટ બચત વ્યૂહરચના',
    smart_saving_desc: 'તમારું ઇમરજન્સી ફંડ બનાવવું',
    
    // Video Titles
    shg_video_title: 'SHG શું છે? સ્વ સહાય જૂથ',
    shg_video_desc: 'જાણો કે સ્વ-સહાય જૂથો મહિલાઓને નાણાકીય અને સામાજિક રીતે કેવી રીતે સશક્ત બનાવે છે.',
    finance_freedom_video_title: 'મહિલાઓ માટે નાણાકીય સ્વતંત્રતા',
    finance_freedom_video_desc: 'પ્રેરક વાર્તાઓ અને નાણાકીય સ્વતંત્રતા માટે વ્યવહારુ ટીપ્સ.',
    investing_for_beginners_title: 'નવા નિશાળીયા માટે રોકાણ',
    investing_for_beginners_desc: 'રોકાણ શરૂ કરવા માટે એક સરળ માર્ગદર્શિકા.',
    empowered_women_title: 'સશક્ત મહિલાઓ - જીવન બદલવું',
    empowered_women_desc: 'નાણાકીય સાક્ષરતા દ્વારા પોતાનું જીવન બદલનાર મહિલાઓની વાર્તાઓ.',

    completed_status: 'પૂર્ણ થયું',
    done_status: 'થઈ ગયું',
    take_quiz_button: 'ક્વિઝ લો',
    start_button: 'શરૂ કરો',
    keep_learning_text: 'પુરસ્કારો અનલૉક કરવા માટે શીખતા રહો!',
    complete_lessons_text: 'લેવલ 4 સુધી પહોંચવા માટે 3 વધુ પાઠ પૂર્ણ કરો',
    view_rewards_button: 'પુરસ્કારો જુઓ',

    // Achievements Page Translations
    your_achievements_heading: 'તમારી સિદ્ધિઓ',
    track_progress_text: 'તમારી પ્રગતિ અને પુરસ્કારો ટ્રૅક કરો',
    xp_points_label: 'એક્સપી પોઈન્ટ્સ',
    xp_to_next_level_text: 'એક્સપી આગલા સ્તર માટે',
    day_streak_label: 'દિવસની શ્રેણી',
    badges_label: 'બેજ',
    achievements_heading: 'સિદ્ધિઓ',
    upcoming_rewards_heading: 'આગામી પુરસ્કારો',
    upcoming_rewards_text: 'રોકાણ કેલ્ક્યુલેટર એક્સેસ',
    women_like_you_heading: 'તમારા જેવી મહિલાઓ',
    back_to_learn_button: 'પાછા શીખો',

    // Quiz and Reward-specific Translations
    quiz_heading: 'ક્વિઝ',
    submit_button: 'સબમિટ કરો',
    correct_answer: 'સાચું!',
    wrong_answer: 'ખોટું. ફરી પ્રયાસ કરો.',
    quiz_results_heading: 'ક્વિઝના પરિણામો',
    correct_answers_label: 'સાચા જવાબો',
    earned_status: 'કમાવ્યું',
    locked_status: 'લોક કરેલું',

    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'બજેટ બનાવવા માટેનું પહેલું પગલું શું છે?', options: ['તમારી આવક અને ખર્ચને ટ્રૅક કરો', 'નવી કાર ખરીદો', 'સ્ટોકમાં રોકાણ કરો', 'તમારા મિત્રોનું દેવું ચૂકવો'], answer: 'તમારી આવક અને ખર્ચને ટ્રૅક કરો' },
        { question: '“કેશ ફ્લો” નો અર્થ શું છે?', options: ['તમારા પાકીટમાં પૈસા', 'તમારા ખાતામાં પૈસાની અવરજવર', 'તમારી બચતનું મૂલ્ય', 'ઉત્પાદનની કિંમત'], answer: 'તમારા ખાતામાં પૈસાની અવરજવર' },
        { question: 'કટોકટી ભંડોળ શા માટે મહત્વનું છે?', options: ['વેકેશન માટે', 'અણધાર્યા ખર્ચ માટે', 'લક્ઝરી વસ્તુઓ ખરીદવા માટે', 'મિત્રોને આપવા માટે'], answer: 'અણધાર્યા ખર્ચ માટે' },
        { question: 'આમાંથી કઈ જરૂરિયાત છે, ઈચ્છા નહીં?', options: ['નવો સ્માર્ટફોન', 'ખોરાક', 'ડિઝાઇનર બેગ', 'લક્ઝરી કાર'], answer: 'ખોરાક' },
        { question: '50/30/20 બજેટ નિયમ શું છે?', options: ['50% બચત, 30% જરૂરિયાતો, 20% ઈચ્છાઓ', '50% જરૂરિયાતો, 30% ઈચ્છાઓ, 20% બચત', '50% ઈચ્છાઓ, 30% જરૂરિયાતો, 20% બચત', '50% જરૂરિયાતો, 30% બચત, 20% ઈચ્છાઓ'], answer: '50% જરૂરિયાતો, 30% ઈચ્છાઓ, 20% બચત' },
      ],
      'smart-saving': [
        { question: 'કટોકટી ભંડોળનો ઉપયોગ શા માટે થાય છે?', options: ['લક્ઝરી વસ્તુઓ ખરીદવા માટે', 'વેકેશન માટે', 'અણધાર્યા ખર્ચ માટે જેમ કે મેડિકલ બિલ અથવા નોકરી ગુમાવવા', 'શેરબજારમાં રોકાણ કરવા માટે'], answer: 'અણધાર્યા ખર્ચ માટે જેમ કે મેડિકલ બિલ અથવા નોકરી ગુમાવવા' },
        { question: '“72નો નિયમ” શું છે?', options: ['પૈસાને બમણા થવામાં કેટલો સમય લાગે છે તે ગણવાનું સૂત્ર', 'એક બજેટ પદ્ધતિ', 'એક કર વ્યૂહરચના', 'બોન્ડમાં રોકાણ કરવાનો એક નિયમ'], answer: 'પૈસાને બમણા થવામાં કેટલો સમય લાગે છે તે ગણવાનું સૂત્ર' },
        { question: 'ચક્રવૃદ્ધિ વ્યાજ (Compounding Interest) શું છે?', options: ['માત્ર તમારા મૂળ રોકાણ પર વ્યાજ', 'તમારા મૂળ રોકાણ અને અગાઉ કમાયેલા વ્યાજ પર મેળવેલ વ્યાજ', 'વળતરનો નિશ્ચિત દર', 'રોકાણ પર સરકારી ફી'], answer: 'તમારા મૂળ રોકાણ અને અગાઉ કમાયેલા વ્યાજ પર મેળવેલ વ્યાજ' },
        { question: 'પૈસા બચાવવાનો શ્રેષ્ઠ માર્ગ છે:', options: ['બધું એકસાથે ખર્ચો', 'બચાવવા માટે મહિનાના અંત સુધી રાહ જુઓ', 'પહેલા તમારી જાતને ચૂકવો (ખર્ચ કરતા પહેલા બચાવો)', 'બચાવવા માટે પૈસા ઉધાર લો'], answer: 'પહેલા તમારી જાતને ચૂકવો (ખર્ચ કરતા પહેલા બચાવો)' },
        { question: 'બચતમાં "તરલતા" (liquidity) શું દર્શાવે છે?', options: ['તમે કેટલું વ્યાજ કમાવો છો', 'તમે તમારા પૈસાને કેટલી ઝડપથી એક્સેસ કરી શકો છો', 'તમે કેટલી બચત કરી છે', 'તમારી બચત પર કરનો દર'], answer: 'તમે તમારા પૈસાને કેટલી ઝડપથી એક્સેસ કરી શકો છો' },
      ],
      'shg-video': [
        { question: 'SHG નો અર્થ શું છે?', options: ['સ્માર્ટ હેલ્પ ગ્રુપ', 'સ્વ સહાય જૂથ', 'સ્ટ્રોંગ હાર્મની ગ્રુપ', 'સોશિયલ હેલ્થ ગ્રુપ'], answer: 'સ્વ સહાય જૂથ' },
        { question: 'SHG ની પ્રાથમિક પ્રવૃત્તિ શું છે?', options: ['મોટા વ્યવસાય રોકાણો', 'મહિલાઓ ગીત ગાવા મળે છે', 'સભ્યો નાની નિયમિત બચત કરે છે', 'સમુદાય કાર્યક્રમોનું આયોજન'], answer: 'સભ્યો નાની નિયમિત બચત કરે છે' },
        { question: 'SHG દ્વારા એકત્ર કરાયેલા નાણાંનો હેતુ શું છે?', options: ['સરકારને આપવા', 'જરૂરિયાતમંદ સભ્યને ધિરાણ આપવું', 'બધા સભ્યો માટે નવા કપડાં ખરીદવા', 'જૂથ માટે જમીન ખરીદવી'], answer: 'જરૂરિયાતમંદ સભ્યને ધિરાણ આપવું' },
        { question: 'SHG મહિલાઓને કેવી રીતે સશક્ત કરે છે?', options: ['રાજકારણમાં સત્તા આપીને', 'તેમને રસોઈ શીખવીને', 'બચત અને નાણાકીય સાક્ષરતાને પ્રોત્સાહન આપીને', 'મફત મુસાફરી પૂરી પાડીને'], answer: 'બચત અને નાણાકીય સાક્ષરતાને પ્રોત્સાહન આપીને' },
        { question: 'એક SHG એક મહિલાને નાનો વ્યવસાય શરૂ કરવામાં મદદ કરે છે. આ તેનું ઉદાહરણ છે:', options: ['દાન', 'નાણાકીય સમાવેશ', 'મોટી બેંકમાંથી લોન', 'એક ભેટ'], answer: 'નાણાકીય સમાવેશ' },
      ],
      'finance-freedom-video': [
        { question: 'નાણાકીય સ્વતંત્રતા એટલે:', options: ['ધનિક હોવું', 'પૈસાની ચિંતા કર્યા વિના જીવનની પસંદગી કરવાની ક્ષમતા હોવી', 'ક્યારેય કામ ન કરવું', 'લોટરી જીતવી'], answer: 'પૈસાની ચિંતા કર્યા વિના જીવનની પસંદગી કરવાની ક્ષમતા હોવી' },
        { question: 'નાણાકીય સ્વતંત્રતા માટેનું મુખ્ય પગલું છે:', options: ['બજેટ બનાવવું', 'મોંઘી વસ્તુઓ ખરીદવી', 'વધારે વ્યાજવાળી લોન લેવી', 'ક્યારેય બચત ન કરવી'], answer: 'બજેટ બનાવવું' },
        { question: 'મહિલાઓ માટે આર્થિક રીતે સ્વતંત્ર હોવું શા માટે મહત્વનું છે?', options: ['મિત્રોને પ્રભાવિત કરવા', 'અન્યો પર નિર્ભર રહેવા', 'પોતાના જીવન અને ભવિષ્ય પર નિયંત્રણ રાખવા', 'કર (ટેક્સ) ટાળવા'], answer: 'પોતાના જીવન અને ભવિષ્ય પર નિયંત્રણ રાખવા' },
        { question: 'વિડિયોમાં ઉલ્લેખ છે કે નાણાકીય સ્વતંત્રતા એક છે:', options: ['સ્વપ્ન', 'મહાશક્તિ', 'દંતકથા', 'શોખ'], answer: 'મહાશક્તિ' },
        { question: 'નાણાં વિશે શીખવાનું શરૂ કરવાનો શ્રેષ્ઠ સમય છે:', options: ['જ્યારે તમે વૃદ્ધ હોવ', 'જ્યારે તમે વિદ્યાર્થી હોવ', 'ગઈકાલે', 'ક્યારેય નહીં'], answer: 'ગઈકાલે' },
      ],
      'investing-for-beginners-video': [
        { question: 'સ્ટોક શું છે?', options: ['એક પ્રકારનો બોન્ડ', 'લોનનું એક સ્વરૂપ', 'એક કંપનીમાં માલિકીનો એક નાનો ભાગ', 'એક પ્રકારનું સરકારી પ્રમાણપત્ર'], answer: 'એક કંપનીમાં માલિકીનો એક નાનો ભાગ' },
        { question: 'રોકાણનો મુખ્ય ધ્યેય શું છે?', options: ['ઝડપથી પૈસા ગુમાવવા', 'સમય જતાં તમારા પૈસા વધારવા', 'દેવું ચૂકવવું', 'આડંબરી વસ્તુઓ પર પૈસા ખર્ચવા'], answer: 'સમય જતાં તમારા પૈસા વધારવા' },
        { question: 'મ્યુચ્યુઅલ ફંડ શું છે?', options: ['એક ફંડ જેમાં માત્ર એક જ વ્યક્તિ રોકાણ કરી શકે છે', 'એક ફંડ જ્યાં ઘણા રોકાણકારોના પૈસા એકઠા કરીને સ્ટોક્સ, બોન્ડ્સ વગેરેમાં રોકાણ કરવામાં આવે છે', 'સરકારી લોન કાર્યક્રમ', 'એક પ્રકારનું બેંક ખાતું'], answer: 'એક ફંડ જ્યાં ઘણા રોકાણકારોના પૈસા એકઠા કરીને સ્ટોક્સ, બોન્ડ્સ વગેરેમાં રોકાણ કરવામાં આવે છે' },
        { question: '“વિવિધીકરણ” (diversification) નો અર્થ શું છે?', options: ['તમારા બધા પૈસા એક કંપનીમાં રોકવા', 'જોખમ ઘટાડવા માટે વિવિધ અસ્કયામતોમાં તમારા રોકાણને ફેલાવવું', 'બચત ખાતામાં પૈસા મૂકવા', 'રોકાણ સલાહ માટે ઊંચી ફી ચૂકવવી'], answer: 'જોખમ ઘટાડવા માટે વિવિધ અસ્કયામતોમાં તમારા રોકાણને ફેલાવવું' },
        { question: '“લાંબા ગાળાનું” (long-term) રોકાણ શું છે?', options: ['એક વર્ષથી ઓછા સમય માટે રાખેલ રોકાણ', '5 વર્ષથી વધુ સમય માટે રાખેલ રોકાણ', 'એક રોકાણ જે માસિક ડિવિડન્ડ ચૂકવે છે', 'બેંકમાંથી લોન'], answer: '5 વર્ષથી વધુ સમય માટે રાખેલ રોકાણ' },
      ],
      'empowered-women-video': [
        { question: 'મહિલાઓ માટે નાણાકીય સાક્ષરતાનો મુખ્ય ફાયદો શું છે?', options: ['તે તેમને અન્ય લોકોના પૈસાનું સંચાલન કરવામાં મદદ કરે છે', 'તે તેમને વધુ સ્વતંત્ર બનવા અને વધુ સારા નાણાકીય નિર્ણયો લેવા સક્ષમ બનાવે છે', 'તે તેમને વધુ નોકરીની બઢતી મેળવવામાં મદદ કરે છે', 'તે તેમને મુક્તપણે પૈસા ખર્ચવાની મંજૂરી આપે છે'], answer: 'તે તેમને વધુ સ્વતંત્ર બનવા અને વધુ સારા નાણાકીય નિર્ણયો લેવા સક્ષમ બનાવે છે' },
        { question: 'આર્થિક રીતે સશક્ત મહિલાઓ તેમના પરિવારોને કેવી રીતે મદદ કરે છે?', options: ['તમામ પારિવારિક નિર્ણયો એકલા લઈને', 'તેમના પરિવારના સભ્યોથી પૈસા છુપાવીને', 'ઘરની આવક અને બાળકોના શિક્ષણમાં યોગદાન આપીને', 'મિત્રો પાસેથી લોન માંગીને'], answer: 'ઘરની આવક અને બાળકોના શિક્ષણમાં યોગદાન આપીને' },
        { question: 'માઇક્રોફાઇનાન્સ (microfinance) શું છે?', options: ['ગરીબ વ્યક્તિઓ અથવા જૂથોને નાના વ્યવસાયો શરૂ કરવામાં મદદ કરવા માટે આપેલી નાની લોન', 'મોટા પાયે રોકાણ બેંકિંગ સિસ્ટમ', 'એક પ્રકારનો સરકારી કર', 'બાળકો માટે બચત કાર્યક્રમ'], answer: 'ગરીબ વ્યક્તિઓ અથવા જૂથોને નાના વ્યવસાયો શરૂ કરવામાં મદદ કરવા માટે આપેલી નાની લોન' },
        { question: 'વિડિયો ભારપૂર્વક જણાવે છે કે મહિલાઓ:', options: ['પુરુષો પર નિર્ભર છે', 'બિનજરૂરી વસ્તુઓ પર પૈસા બગાડે છે', 'તેમના સમુદાયોમાં પરિવર્તનના એજન્ટ બની શકે છે', 'માત્ર તેમની વ્યક્તિગત સંપત્તિની કાળજી લે છે'], answer: 'તેમના સમુદાયોમાં પરિવર્તનના એજન્ટ બની શકે છે' },
        { question: 'વિડિયો મુજબ, નાણાકીય સાક્ષરતા માત્ર પૈસા વિશે જ નથી, પણ તે આ વિશે પણ છે:', options: ['ડિગ્રી મેળવવી', 'આત્મવિશ્વાસ અને આત્મસન્માનનું નિર્માણ કરવું', 'નવી મિલકતો ખરીદવી', 'વિશ્વભરમાં મુસાફરી કરવી'], answer: 'આત્મવિશ્વાસ અને આત્મસન્માનનું નિર્માણ કરવું' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'પહેલા પગલાં', desc: 'તમારો પહેલો પાઠ પૂર્ણ કરો', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'બજેટિંગ પ્રો', desc: 'બજેટિંગના મૂળભૂત સિદ્ધાંતોમાં નિપુણતા મેળવો', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'સપ્તાહ યોદ્ધા', desc: '૭ દિવસની શ્રેણી જાળવો', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'ફાયનાન્સ ક્વીન', desc: 'સ્તર ૫ સુધી પહોંચો', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'રોકાણ કેલ્ક્યુલેટર એક્સેસ', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'અનન્યા કે.', achievement: '૬ મહિનામાં ₹૫૦,૦૦૦ બચાવ્યા', level: 8 },
      { name: 'પ્રિયા એસ.', achievement: '૨૩ વર્ષની ઉંમરે રોકાણ શરૂ કર્યું', level: 6 },
      { name: 'મીરા આર.', achievement: 'કટોકટી ભંડોળ બનાવ્યું', level: 7 }
    ],
  },
  bn: {
    // Homepage Translations
    welcome_message: 'শুভ সকাল, প্রিয়া!',
    grow_wealth_question: 'আজ আপনার সম্পদ বাড়াতে প্রস্তুত?',
    level: 'স্তর',
    todays_tasks_heading: 'আজকের কাজ',
    watch_lesson_task: 'আজকের পাঠ দেখুন',
    take_quiz_task: 'একটি কুইজ নিন',
    check_portfolio_task: 'বিনিয়োগ পোর্টফোলিও পরীক্ষা করুন',
    finance_tip_heading: 'আজকের আর্থিক টিপস',
    finance_tip_quote: 'আপনার আর্থিক স্বাধীনতা আপনার পরাশক্তি। এটি একটি একটি ধাপে তৈরি করুন।',
    learn_button: 'শিখুন',
    invest_button: 'বিনিয়োগ করুন',
    community_button: 'সম্প্রদায়',
    profile_button: 'প্রোফাইল',
    guest_name: 'অতিথি',

    // Learn Page Translations
    learn_finance_heading: 'আর্থিক জ্ঞান অর্জন করুন',
    learn_finance_subheading: 'অর্থ ব্যবস্থাপনার দক্ষতা অর্জন করুন',
    overall_progress: 'সামগ্রিক অগ্রগতি',
    lessons_label: 'পাঠ',
    financial_basics_title: 'আর্থিক মৌলিক বিষয়',
    financial_basics_desc: 'টাকা ও বাজেট বোঝা',
    smart_saving_title: 'স্মার্ট সঞ্চয় কৌশল',
    smart_saving_desc: 'আপনার জরুরি তহবিল তৈরি করুন',
    
    // Video Titles
    shg_video_title: 'SHG কী? স্ব-সহায়তা দল',
    shg_video_desc: 'জানুন কীভাবে স্ব-সহায়তা দল নারীদের আর্থিকভাবে এবং সামাজিকভাবে ক্ষমতায়ন করে।',
    finance_freedom_video_title: 'নারীদের জন্য আর্থিক স্বাধীনতা',
    finance_freedom_video_desc: 'আর্থিক স্বাধীনতার জন্য অনুপ্রেরণামূলক গল্প এবং ব্যবহারিক টিপস।',
    investing_for_beginners_title: 'নতুনদের জন্য বিনিয়োগ',
    investing_for_beginners_desc: 'বিনিয়োগ শুরু করার জন্য একটি সহজ গাইড।',
    empowered_women_title: 'ক্ষমতায়িত নারী - জীবন পরিবর্তন',
    empowered_women_desc: 'যেসব নারী আর্থিক সাক্ষরতার মাধ্যমে তাদের জীবন পরিবর্তন করেছেন তাদের গল্প।',

    completed_status: 'সম্পূর্ণ হয়েছে',
    done_status: 'সম্পন্ন',
    take_quiz_button: 'কুইজ নিন',
    start_button: 'শুরু করুন',
    keep_learning_text: 'পুরস্কার আনলক করতে শিখতে থাকুন!',
    complete_lessons_text: 'স্তর ৪ এ পৌঁছাতে আরও ৩টি পাঠ সম্পূর্ণ করুন',
    view_rewards_button: 'পুরস্কার দেখুন',

    // Achievements Page Translations
    your_achievements_heading: 'আপনার অর্জন',
    track_progress_text: 'আপনার অগ্রগতি এবং পুরস্কার ট্র্যাক করুন',
    xp_points_label: 'এক্সপি পয়েন্টস',
    xp_to_next_level_text: 'এক্সপি পরবর্তী স্তরের জন্য',
    day_streak_label: 'দিনের স্ট্রিক',
    badges_label: 'ব্যাজ',
    achievements_heading: 'অর্জন',
    upcoming_rewards_heading: 'আসন্ন পুরস্কার',
    upcoming_rewards_text: 'বিনিয়োগ ক্যালকুলেটর অ্যাক্সেস',
    women_like_you_heading: 'আপনার মতো নারী',
    back_to_learn_button: 'লার্নিং-এ ফিরে যান',

    // Quiz and Reward-specific Translations
    quiz_heading: 'কুইজ',
    submit_button: 'জমা দিন',
    correct_answer: 'সঠিক!',
    wrong_answer: 'ভুল। আবার চেষ্টা করুন।',
    quiz_results_heading: 'কুইজ ফলাফল',
    correct_answers_label: 'সঠিক উত্তর',
    earned_status: 'অর্জিত',
    locked_status: 'লক করা হয়েছে',

    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'বাজেট তৈরির প্রথম ধাপ কি?', options: ['আপনার আয় এবং খরচ ট্র্যাক করুন', 'একটি নতুন গাড়ি কিনুন', 'স্টকে বিনিয়োগ করুন', 'আপনার বন্ধুদের ঋণ শোধ করুন'], answer: 'আপনার আয় এবং খরচ ট্র্যাক করুন' },
        { question: '“ক্যাশ ফ্লো” বলতে কী বোঝায়?', options: ['আপনার ওয়ালেটে থাকা টাকা', 'আপনার অ্যাকাউন্ট থেকে টাকা আসা-যাওয়া', 'আপনার সঞ্চয়ের মূল্য', 'একটি পণ্যের দাম'], answer: 'আপনার অ্যাকাউন্ট থেকে টাকা আসা-যাওয়া' },
        { question: 'জরুরি তহবিল কেন গুরুত্বপূর্ণ?', options: ['ছুটির জন্য', 'अप्रत्याशित খরচের জন্য', 'বিলাসবহুল জিনিসপত্র কেনার জন্য', 'বন্ধুদের দেওয়ার জন্য'], answer: 'अप्रत्याशित খরচের জন্য' },
        { question: 'এর মধ্যে কোনটি প্রয়োজন, ইচ্ছা নয়?', options: ['একটি নতুন স্মার্টফোন', 'খাদ্য', 'একটি ডিজাইনার ব্যাগ', 'একটি বিলাসবহুল গাড়ি'], answer: 'খাদ্য' },
        { question: '50/30/20 বাজেট নিয়ম কি?', options: ['50% সঞ্চয়, 30% প্রয়োজন, 20% ইচ্ছা', '50% প্রয়োজন, 30% ইচ্ছা, 20% সঞ্চয়', '50% ইচ্ছা, 30% প্রয়োজন, 20% সঞ্চয়', '50% প্রয়োজন, 30% সঞ্চয়, 20% ইচ্ছা'], answer: '50% প্রয়োজন, 30% ইচ্ছা, 20% সঞ্চয়' },
      ],
      'smart-saving': [
        { question: 'জরুরি তহবিল কী জন্য ব্যবহার করা হয়?', options: ['বিলাসবহুল জিনিসপত্র কেনার জন্য', 'ছুটির জন্য', 'চিকিৎসা বিল বা চাকরি হারানোর মতো অপ্রত্যাশিত খরচের জন্য', 'শেয়ার বাজারে বিনিয়োগের জন্য'], answer: 'চিকিৎসা বিল বা চাকরি হারানোর মতো অপ্রত্যাশিত খরচের জন্য' },
        { question: '“72 এর নিয়ম” কী?', options: ['টাকা দ্বিগুণ হতে কত সময় লাগে তা গণনা করার একটি সূত্র', 'একটি বাজেট পদ্ধতি', 'একটি কর কৌশল', 'বন্ডে বিনিয়োগের একটি নিয়ম'], answer: 'টাকা দ্বিগুণ হতে কত সময় লাগে তা গণনা করার একটি সূত্র' },
        { question: 'চক্রবৃদ্ধি সুদ (Compounding Interest) কী?', options: ['শুধুমাত্র আপনার প্রাথমিক বিনিয়োগের উপর সুদ', 'আপনার প্রাথমিক বিনিয়োগ এবং পূর্বে অর্জিত সুদের উপর অর্জিত সুদ', 'একটি নির্দিষ্ট রিটার্ন হার', 'বিনিয়োগের উপর একটি সরকারী ফি'], answer: 'আপনার প্রাথমিক বিনিয়োগ এবং পূর্বে অর্জিত সুদের উপর অর্জিত সুদ' },
        { question: 'টাকা বাঁচানোর সেরা উপায় হল:', options: ['একবারে সব খরচ করুন', 'বাঁচানোর জন্য মাসের শেষ পর্যন্ত অপেক্ষা করুন', 'প্রথমে নিজেকে টাকা দিন (খরচ করার আগে বাঁচান)', 'বাঁচানোর জন্য ধার করুন'], answer: 'প্রথমে নিজেকে টাকা দিন (খরচ করার আগে বাঁচান)' },
        { question: 'সঞ্চয়ে "তারল্য" (liquidity) বলতে কী বোঝায়?', options: ['আপনি কত সুদ পান', 'আপনি কত দ্রুত আপনার টাকা অ্যাক্সেস করতে পারেন', 'আপনি কত টাকা সঞ্চয় করেছেন', 'আপনার সঞ্চয়ের উপর করের হার'], answer: 'আপনি কত দ্রুত আপনার টাকা অ্যাক্সেস করতে পারেন' },
      ],
      'shg-video': [
        { question: 'SHG এর মানে কি?', options: ['স্মার্ট হেল্প গ্রুপ', 'স্ব-সহায়তা দল', 'স্ট্রং হারমনি গ্রুপ', 'সোশ্যাল হেলথ গ্রুপ'], answer: 'স্ব-সহায়তা দল' },
        { question: 'একটি SHG এর প্রাথমিক কাজ কি?', options: ['বড় ব্যবসা বিনিয়োগ', 'মহিলাদের গান গাওয়ার জন্য মিলিত হওয়া', 'সদস্যদের দ্বারা ছোট নিয়মিত সঞ্চয় করা', 'সামাজিক ইভেন্টের আয়োজন করা'], answer: 'সদস্যদের দ্বারা ছোট নিয়মিত সঞ্চয় করা' },
        { question: 'SHG দ্বারা সংগৃহীত অর্থের উদ্দেশ্য কী?', options: ['সরকারকে দেওয়া', 'প্রয়োজনে একজন সদস্যকে ঋণ দেওয়া', 'সব সদস্যের জন্য নতুন পোশাক কেনা', 'দলের জন্য জমি কেনা'], answer: 'প্রয়োজনে একজন সদস্যকে ঋণ দেওয়া' },
        { question: 'SHG কিভাবে মহিলাদের ক্ষমতায়ন করে?', options: ['রাজনীতিতে ক্ষমতা দিয়ে', 'তাদের রান্না শেখার মাধ্যমে', 'সঞ্চয় ও আর্থিক সাক্ষরতাকে উৎসাহিত করার মাধ্যমে', 'বিনামূল্যে ভ্রমণ প্রদান করে'], answer: 'সঞ্চয় ও আর্থিক সাক্ষরতাকে উৎসাহিত করার মাধ্যমে' },
        { question: 'একটি SHG একজন মহিলাকে একটি ছোট ব্যবসা শুরু করতে সাহায্য করে। এটি কিসের উদাহরণ?', options: ['দাতব্য', 'আর্থিক অন্তর্ভুক্তি', 'একটি বড় ব্যাংক থেকে ঋণ', 'একটি উপহার'], answer: 'আর্থিক অন্তর্ভুক্তি' },
      ],
      'finance-freedom-video': [
        { question: 'আর্থিক স্বাধীনতা মানে:', options: ['ধনী হওয়া', 'অর্থের চিন্তা না করে জীবনের পছন্দ করার ক্ষমতা থাকা', 'কখনো কাজ না করা', 'লটারি জেতা'], answer: 'অর্থের চিন্তা না করে জীবনের পছন্দ করার ক্ষমতা থাকা' },
        { question: 'আর্থিক স্বাধীনতার একটি মূল পদক্ষেপ হল:', options: ['একটি বাজেট তৈরি করা', 'দামি জিনিস কেনা', 'উচ্চ সুদের ঋণ নেওয়া', 'কখনো সঞ্চয় না করা'], answer: 'একটি বাজেট তৈরি করা' },
        { question: 'মহিলাদের জন্য আর্থিকভাবে স্বাধীন হওয়া কেন গুরুত্বপূর্ণ?', options: ['বন্ধুদের প্রভাবিত করতে', 'অন্যদের উপর নির্ভর করতে', 'তাদের জীবন ও ভবিষ্যতের উপর নিয়ন্ত্রণ রাখতে', 'কর এড়াতে'], answer: 'তাদের জীবন ও ভবিষ্যতের উপর নিয়ন্ত্রণ রাখতে' },
        { question: 'ভিডিওতে বলা হয়েছে যে আর্থিক স্বাধীনতা হল একটি:', options: ['স্বপ্ন', 'পরাশক্তির', 'মিথ', 'শখ'], answer: 'পরাশক্তির' },
        { question: 'অর্থ সম্পর্কে শেখা শুরু করার সেরা সময় হল:', options: ['যখন আপনি বৃদ্ধ হন', 'যখন আপনি ছাত্র হন', 'গতকাল', 'কখনো না'], answer: 'গতকাল' },
      ],
      'investing-for-beginners-video': [
        { question: 'স্টক কি?', options: ['এক প্রকারের বন্ড', 'ঋণের একটি রূপ', 'একটি কোম্পানিতে মালিকানার একটি ছোট অংশ', 'এক প্রকারের সরকারি শংসাপত্র'], answer: 'একটি কোম্পানিতে মালিকানার একটি ছোট অংশ' },
        { question: 'বিনিয়োগের মূল লক্ষ্য কি?', options: ['দ্রুত অর্থ হারানো', 'সময়ের সাথে সাথে আপনার অর্থ বৃদ্ধি করা', 'ঋণ পরিশোধ করা', 'বিলাস দ্রব্যে অর্থ ব্যয় করা'], answer: 'সময়ের সাথে সাথে আপনার অর্থ বৃদ্ধি করা' },
        { question: 'মিউচুয়াল ফান্ড কি?', options: ['একটি তহবিল যেখানে শুধুমাত্র একজন ব্যক্তি বিনিয়োগ করতে পারে', 'একটি তহবিল যেখানে অনেক বিনিয়োগকারীর অর্থ স্টক, বন্ড ইত্যাদিতে বিনিয়োগের জন্য একত্রিত করা হয়', 'একটি সরকারী ঋণ কর্মসূচি', 'এক প্রকারের ব্যাংক অ্যাকাউন্ট'], answer: 'একটি তহবিল যেখানে অনেক বিনিয়োগকারীর অর্থ স্টক, বন্ড ইত্যাদিতে বিনিয়োগের জন্য একত্রিত করা হয়' },
        { question: '“বৈচিত্র্যকরণ” (diversification) বলতে কী বোঝায়?', options: ['আপনার সমস্ত অর্থ একটি কোম্পানিতে বিনিয়োগ করা', 'ঝুঁকি কমাতে বিভিন্ন সম্পদে আপনার বিনিয়োগ ছড়িয়ে দেওয়া', 'একটি সঞ্চয় অ্যাকাউন্টে অর্থ রাখা', 'বিনিয়োগ পরামর্শের জন্য উচ্চ ফি প্রদান'], answer: 'ঝুঁকি কমাতে বিভিন্ন সম্পদে আপনার বিনিয়োগ ছড়িয়ে দেওয়া' },
        { question: '“দীর্ঘমেয়াদী” (long-term) বিনিয়োগ কি?', options: ['এক বছরের কম সময়ের জন্য রাখা বিনিয়োগ', '৫ বছরের বেশি সময়ের জন্য রাখা বিনিয়োগ', 'যে বিনিয়োগ মাসিক লভ্যাংশ প্রদান করে', 'ব্যাংক থেকে ঋণ'], answer: '৫ বছরের বেশি সময়ের জন্য রাখা বিনিয়োগ' },
      ],
      'empowered-women-video': [
        { question: 'মহিলাদের জন্য আর্থিক সাক্ষরতার একটি প্রধান সুবিধা কি?', options: ['এটি তাদের অন্যদের অর্থ পরিচালনা করতে সহায়তা করে', 'এটি তাদের আরও স্বাধীন হতে এবং আরও ভাল আর্থিক সিদ্ধান্ত নিতে সক্ষম করে', 'এটি তাদের আরও চাকরির পদোন্নতি পেতে সহায়তা করে', 'এটি তাদের অবাধে অর্থ ব্যয় করার অনুমতি দেয়'], answer: 'এটি তাদের আরও স্বাধীন হতে এবং আরও ভাল আর্থিক সিদ্ধান্ত নিতে সক্ষম করে' },
        { question: 'আর্থিকভাবে ক্ষমতায়িত মহিলারা তাদের পরিবারকে কীভাবে সাহায্য করে?', options: ['সমস্ত পারিবারিক সিদ্ধান্ত একা নিয়ে', 'পরিবারের সদস্যদের কাছ থেকে অর্থ লুকিয়ে', 'পারিবারিক আয় এবং সন্তানদের শিক্ষায় অবদান রেখে', 'বন্ধুদের কাছ থেকে ঋণ চেয়ে'], answer: 'পারিবারিক আয় এবং সন্তানদের শিক্ষায় অবদান রেখে' },
        { question: 'মাইক্রোফাইন্যান্স (microfinance) কি?', options: ['গরিব ব্যক্তি বা গোষ্ঠীকে ছোট ব্যবসা শুরু করতে সাহায্য করার জন্য দেওয়া ছোট ঋণ', 'একটি বড় আকারের বিনিয়োগ ব্যাংকিং ব্যবস্থা', 'এক প্রকারের সরকারি কর', 'শিশুদের জন্য একটি সঞ্চয় কর্মসূচি'], answer: 'গরিব ব্যক্তি বা গোষ্ঠীকে ছোট ব্যবসা শুরু করতে সাহায্য করার জন্য দেওয়া ছোট ঋণ' },
        { question: 'ভিডিওটি তুলে ধরেছে যে মহিলারা:', options: ['পুরুষদের উপর নির্ভর করে', 'অপ্রয়োজনীয় জিনিসে অর্থ অপচয় করে', 'তাদের সম্প্রদায়ের পরিবর্তনের এজেন্ট হতে পারে', 'শুধুমাত্র তাদের ব্যক্তিগত সম্পদের যত্ন নেয়'], answer: 'তাদের সম্প্রদায়ের পরিবর্তনের এজেন্ট হতে পারে' },
        { question: 'ভিডিও অনুসারে, আর্থিক সাক্ষরতা কেবল অর্থ সম্পর্কে নয়, এটি সম্পর্কেও:', options: ['একটি ডিগ্রি অর্জন করা', 'আত্মবিশ্বাস এবং আত্ম-সম্মান তৈরি করা', 'নতুন সম্পত্তি কেনা', 'সারা বিশ্বে ভ্রমণ'], answer: 'আত্মবিশ্বাস এবং আত্ম-সম্মান তৈরি করা' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'প্রথম পদক্ষেপ', desc: 'আপনার প্রথম পাঠ সম্পন্ন করুন', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'বাজেটিং প্রো', desc: 'বাজেটিং এর মৌলিক বিষয়গুলো আয়ত্ত করুন', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'সপ্তাহের যোদ্ধা', desc: '৭ দিনের স্ট্রিক বজায় রাখুন', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'ফাইন্যান্স কুইন', desc: 'স্তর ৫ এ পৌঁছান', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'বিনিয়োগ ক্যালকুলেটর অ্যাক্সেস', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'অনন্যা কে.', achievement: '৬ মাসে ₹৫০,০০০ বাঁচিয়েছেন', level: 8 },
      { name: 'প্রিয়া এস.', achievement: '২৩ বছর বয়সে বিনিয়োগ শুরু করেছেন', level: 6 },
      { name: 'মীরা আর.', achievement: 'জরুরি তহবিল তৈরি করেছেন', level: 7 }
    ],
  },
  te: {
    // Homepage Translations
    welcome_message: 'శుభోదయం, ప్రియ!',
    grow_wealth_question: 'ఈ రోజు మీ సంపద పెంచుకోవడానికి సిద్ధంగా ఉన్నారా?',
    level: 'స్థాయి',
    todays_tasks_heading: 'నేటి పనులు',
    watch_lesson_task: 'నేటి పాఠం చూడండి',
    take_quiz_task: 'ఒక క్విజ్ తీసుకోండి',
    check_portfolio_task: 'పెట్టుబడి పోర్ట్‌ఫోలియోను తనిఖీ చేయండి',
    finance_tip_heading: 'నేటి ఆర్థిక చిట్కా',
    finance_tip_quote: 'మీ ఆర్థిక స్వాతంత్ర్యం మీ అద్భుత శక్తి. దానిని ఒక్కొక్కటిగా నిర్మించండి.',
    learn_button: 'నేర్చుకోండి',
    invest_button: 'పెట్టుబడి పెట్టండి',
    community_button: 'సమూహం',
    profile_button: 'ప్రొఫైల్',
    guest_name: 'అతిథి',

    // Learn Page Translations
    learn_finance_heading: 'ఆర్థికం నేర్చుకోండి',
    learn_finance_subheading: 'డబ్బు నిర్వహణ నైపుణ్యాలను నేర్చుకోండి',
    overall_progress: 'మొత్తం పురోగతి',
    lessons_label: 'పాఠాలు',
    financial_basics_title: 'ఆర్థిక ప్రాథమికాలు',
    financial_basics_desc: 'డబ్బు మరియు బడ్జెటింగ్‌ను అర్థం చేసుకోవడం',
    smart_saving_title: 'స్మార్ట్ పొదుపు వ్యూహాలు',
    smart_saving_desc: 'మీ అత్యవసర నిధిని నిర్మించడం',
    
    // Video Titles
    shg_video_title: 'SHG అంటే ఏమిటి? స్వయం సహాయక బృందం',
    shg_video_desc: 'స్వయం సహాయక బృందాలు మహిళలను ఆర్థికంగా మరియు సామాజికంగా ఎలా సాధికారం చేస్తాయో తెలుసుకోండి.',
    finance_freedom_video_title: 'మహిళల కోసం ఆర్థిక స్వాతంత్ర్యం',
    finance_freedom_video_desc: 'ఆర్థిక స్వాతంత్ర్యం కోసం స్ఫూర్తిదాయకమైన కథలు మరియు ఆచరణాత్మక చిట్కాలు.',
    investing_for_beginners_title: 'కొత్తవారికి పెట్టుబడి',
    investing_for_beginners_desc: 'పెట్టుబడి పెట్టడం ఎలా ప్రారంభించాలో ఒక సాధారణ గైడ్.',
    empowered_women_title: 'సాధికార మహిళలు - జీవితాలు మార్చడం',
    empowered_women_desc: 'ఆర్థిక అక్షరాస్యత ద్వారా తమ జీవితాలను మార్చుకున్న మహిళల కథలు.',

    completed_status: 'పూర్తయింది',
    done_status: 'పూర్తి',
    take_quiz_button: 'క్విజ్ తీసుకోండి',
    start_button: 'ప్రారంభించండి',
    keep_learning_text: 'బహుమతులు అన్‌లాక్ చేయడానికి నేర్చుకుంటూ ఉండండి!',
    complete_lessons_text: 'స్థాయి 4 చేరుకోవడానికి ఇంకా 3 పాఠాలు పూర్తి చేయండి',
    view_rewards_button: 'బహుమతులు చూడండి',
    
    // Achievements Page Translations
    your_achievements_heading: 'మీ విజయాలు',
    track_progress_text: 'మీ పురోగతి మరియు బహుమతులను ట్రాక్ చేయండి',
    xp_points_label: 'ఎక్స్పీ పాయింట్లు',
    xp_to_next_level_text: 'తదుపరి స్థాయికి ఎక్స్పీ',
    day_streak_label: 'రోజుల పరంపర',
    badges_label: 'బ్యాడ్జ్‌లు',
    achievements_heading: 'విజయాలు',
    upcoming_rewards_heading: 'రాబోయే బహుమతులు',
    upcoming_rewards_text: 'పెట్టుబడి కాలిక్యులేటర్ యాక్సెస్',
    women_like_you_heading: 'మీలాంటి మహిళలు',
    back_to_learn_button: 'తిరిగి నేర్చుకోవడానికి',

    // Quiz and Reward-specific Translations
    quiz_heading: 'క్విజ్',
    submit_button: 'సబ్మిట్ చేయండి',
    correct_answer: 'సరియైనది!',
    wrong_answer: 'తప్పు. మళ్ళీ ప్రయత్నించండి.',
    quiz_results_heading: 'క్విజ్ ఫలితాలు',
    correct_answers_label: 'సరియైన సమాధానాలు',
    earned_status: 'సంపాదించారు',
    locked_status: 'లాక్ చేయబడింది',
    
    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'బడ్జెట్‌ను రూపొందించడానికి మొదటి అడుగు ఏమిటి?', options: ['మీ ఆదాయం మరియు ఖర్చులను ట్రాక్ చేయండి', 'కొత్త కారును కొనండి', 'స్టాక్స్‌లో పెట్టుబడి పెట్టండి', 'మీ స్నేహితుల అప్పులు తీర్చండి'], answer: 'మీ ఆదాయం మరియు ఖర్చులను ట్రాక్ చేయండి' },
        { question: '“క్యాష్ ఫ్లో” అంటే ఏమిటి?', options: ['మీ పర్సులో ఉన్న డబ్బు', 'మీ ఖాతాలోకి మరియు బయటకు డబ్బు కదలిక', 'మీ పొదుపు విలువ', 'ఉత్పత్తి ధర'], answer: 'మీ ఖాతాలోకి మరియు బయటకు డబ్బు కదలిక' },
        { question: 'అత్యవసర నిధి ఎందుకు ముఖ్యం?', options: ['సెలవులకు', 'ఊహించని ఖర్చులకు', 'లగ్జరీ వస్తువులను కొనుగోలు చేయడానికి', 'స్నేహితులకు ఇవ్వడానికి'], answer: 'ఊహించని ఖర్చులకు' },
        { question: 'వీటిలో ఏది అవసరం, కోరిక కాదు?', options: ['కొత్త స్మార్ట్‌ఫోన్', 'ఆహారం', 'డిజైనర్ బ్యాగ్', 'లగ్జరీ కారు'], answer: 'ఆహారం' },
        { question: '50/30/20 బడ్జెట్ సూత్రం ఏమిటి?', options: ['50% పొదుపు, 30% అవసరాలు, 20% కోరికలు', '50% అవసరాలు, 30% కోరికలు, 20% పొదుపు', '50% కోరికలు, 30% అవసరాలు, 20% పొదుపు', '50% అవసరాలు, 30% పొదుపు, 20% కోరికలు'], answer: '50% అవసరాలు, 30% కోరికలు, 20% పొదుపు' },
      ],
      'smart-saving': [
        { question: 'అత్యవసర నిధిని దేనికి ఉపయోగిస్తారు?', options: ['లగ్జరీ వస్తువులను కొనుగోలు చేయడానికి', 'సెలవులకు', 'వైద్య బిల్లులు లేదా ఉద్యోగం కోల్పోవడం వంటి ఊహించని ఖర్చులకు', 'స్టాక్ మార్కెట్‌లో పెట్టుబడి పెట్టడానికి'], answer: 'వైద్య బిల్లులు లేదా ఉద్యోగం కోల్పోవడం వంటి ఊహించని ఖర్చులకు' },
        { question: '“72 సూత్రం” ఏమిటి?', options: ['డబ్బు రెట్టింపు కావడానికి పట్టే సమయాన్ని లెక్కించే సూత్రం', 'ఒక బడ్జెట్ పద్ధతి', 'ఒక పన్ను వ్యూహం', 'బాండ్స్‌లో పెట్టుబడి పెట్టే నియమం'], answer: 'డబ్బు రెట్టింపు కావడానికి పట్టే సమయాన్ని లెక్కించే సూత్రం' },
        { question: 'చక్రవడ్డీ (Compounding Interest) అంటే ఏమిటి?', options: ['మీ ప్రారంభ పెట్టుబడిపై మాత్రమే వడ్డీ', 'మీ ప్రారంభ పెట్టుబడి మరియు గతంలో సంపాదించిన వడ్డీపై సంపాదించిన వడ్డీ', 'ఒక స్థిరమైన రాబడి రేటు', 'పెట్టుబడిపై ప్రభుత్వ రుసుము'], answer: 'మీ ప్రారంభ పెట్టుబడి మరియు గతంలో సంపాదించిన వడ్డీపై సంపాదించిన వడ్డీ' },
        { question: 'డబ్బు ఆదా చేయడానికి ఉత్తమ మార్గం ఏది:', options: ['అంతా ఒకేసారి ఖర్చు చేయండి', 'పొదుపు కోసం నెల చివరి వరకు వేచి ఉండండి', 'ముందుగా మీకే చెల్లించండి (ఖర్చు చేయడానికి ముందు ఆదా చేయండి)', 'పొదుపు కోసం అప్పు తీసుకోండి'], answer: 'ముందుగా మీకే చెల్లించండి (ఖర్చు చేయడానికి ముందు ఆదా చేయండి)' },
        { question: 'పొదుపులో "ద్రవ్యత" (liquidity) దేనిని సూచిస్తుంది?', options: ['మీరు ఎంత వడ్డీ సంపాదిస్తారు', 'మీ డబ్బును మీరు ఎంత త్వరగా పొందగలరు', 'మీరు ఎంత డబ్బు ఆదా చేశారు', 'మీ పొదుపుపై పన్ను రేటు'], answer: 'మీ డబ్బును మీరు ఎంత త్వరగా పొందగలరు' },
      ],
      'shg-video': [
        { question: 'SHG అంటే ఏమిటి?', options: ['స్మార్ట్ హెల్ప్ గ్రూప్', 'స్వయం సహాయక బృందం', 'స్ట్రాంగ్ హార్మొనీ గ్రూప్', 'సామాజిక ఆరోగ్య బృందం'], answer: 'స్వయం సహాయక బృందం' },
        { question: 'ఒక SHG యొక్క ప్రాథమిక కార్యాచరణ ఏమిటి?', options: ['పెద్ద వ్యాపార పెట్టుబడులు', 'పాటలు పాడటానికి మహిళలు సమావేశం', 'సభ్యులు చిన్న తరహా పొదుపు చేయడం', 'సామాజిక కార్యక్రమాలు నిర్వహించడం'], answer: 'సభ్యులు చిన్న తరహా పొదుపు చేయడం' },
        { question: 'SHG సేకరించిన డబ్బు యొక్క ఉద్దేశ్యం ఏమిటి?', options: ['ప్రభుత్వానికి ఇవ్వడం', 'అవసరమైన సభ్యునికి రుణం ఇవ్వడం', 'అందరి కోసం కొత్త బట్టలు కొనడం', 'గ్రూపు కోసం భూమి కొనడం'], answer: 'అవసరమైన సభ్యునికి రుణం ఇవ్వడం' },
        { question: 'SHG లు మహిళలకు ఎలా సాధికారత కల్పిస్తాయి?', options: ['రాజకీయాలలో వారికి అధికారం ఇవ్వడం ద్వారా', 'వంట చేయడం నేర్పడం ద్వారా', 'పొదుపు మరియు ఆర్థిక అక్షరాస్యతను ప్రోత్సహించడం ద్వారా', 'ఉచిత ప్రయాణాన్ని అందించడం ద్వారా'], answer: 'పొదుపు మరియు ఆర్థిక అక్షరాస్యతను ప్రోత్సహించడం ద్వారా' },
        { question: 'ఒక SHG ఒక మహిళకు చిన్న వ్యాపారం ప్రారంభించడానికి సహాయం చేస్తుంది. ఇది దేనికి ఉదాహరణ?', options: ['దాతృత్వం', 'ఆర్థిక చేరిక', 'పెద్ద బ్యాంకు నుండి రుణం', 'ఒక బహుమతి'], answer: 'ఆర్థిక చేరిక' },
      ],
      'finance-freedom-video': [
        { question: 'ఆర్థిక స్వాతంత్ర్యం అంటే:', options: ['ధనవంతులు కావడం', 'డబ్బు గురించి చింతించకుండా జీవిత ఎంపికలు చేసుకునే సామర్థ్యం కలిగి ఉండటం', 'ఎప్పటికీ పని చేయనవసరం లేదు', 'లాటరీ గెలవడం'], answer: 'డబ్బు గురించి చింతించకుండా జీవిత ఎంపికలు చేసుకునే సామర్థ్యం కలిగి ఉండటం' },
        { question: 'ఆర్థిక స్వాతంత్ర్యానికి ముఖ్యమైన అడుగు ఏది:', options: ['బడ్జెట్‌ను రూపొందించడం', 'ఖరీదైన వస్తువులను కొనడం', 'అధిక వడ్డీ రుణం తీసుకోవడం', 'ఎప్పుడూ డబ్బు ఆదా చేయకపోవడం'], answer: 'బడ్జెట్‌ను రూపొందించడం' },
        { question: 'మహిళలు ఆర్థికంగా స్వతంత్రంగా ఉండటం ఎందుకు ముఖ్యం?', options: ['స్నేహితులను ఆకట్టుకోవడానికి', 'ఇతరులపై ఆధారపడటానికి', 'తమ జీవితంపై మరియు భవిష్యత్తుపై నియంత్రణ కలిగి ఉండటానికి', 'పన్నులు (ట్యాక్స్) నివారించడానికి'], answer: 'తమ జీవితంపై మరియు భవిష్యత్తుపై నియంత్రణ కలిగి ఉండటానికి' },
        { question: 'వీడియో ప్రకారం, ఆర్థిక స్వాతంత్ర్యం ఒక:', options: ['కల', 'మహాశక్తి', 'అపోహ', 'హోబీ'], answer: 'మహాశక్తి' },
        { question: 'ఆర్థిక విషయాల గురించి నేర్చుకోవడం ప్రారంభించడానికి ఉత్తమ సమయం:', options: ['మీరు వృద్ధులైనప్పుడు', 'మీరు విద్యార్థిగా ఉన్నప్పుడు', 'నిన్న', 'ఎప్పుడూ కాదు'], answer: 'నిన్న' },
      ],
      'investing-for-beginners-video': [
        { question: 'స్టాక్ అంటే ఏమిటి?', options: ['ఒక రకమైన బాండ్', 'రుణం యొక్క రూపం', 'ఒక కంపెనీలో యాజమాన్యం యొక్క చిన్న భాగం', 'ఒక రకమైన ప్రభుత్వ ధృవపత్రం'], answer: 'ఒక కంపెనీలో యాజమాన్యం యొక్క చిన్న భాగం' },
        { question: 'పెట్టుబడి యొక్క ప్రధాన లక్ష్యం ఏమిటి?', options: ['త్వరగా డబ్బు కోల్పోవడం', 'సమయం గడుస్తున్న కొద్దీ మీ డబ్బును పెంచడం', 'అప్పులు తీర్చడం', 'విలాసవంతమైన వస్తువులపై డబ్బు ఖర్చు చేయడం'], answer: 'సమయం గడుస్తున్న కొద్దీ మీ డబ్బును పెంచడం' },
        { question: 'మ్యూచువల్ ఫండ్ అంటే ఏమిటి?', options: ['ఒక వ్యక్తి మాత్రమే పెట్టుబడి పెట్టగలిగే ఫండ్', 'అనేక మంది పెట్టుబడిదారుల నుండి డబ్బు పోగుచేసి స్టాక్స్, బాండ్స్ మొదలైన వాటిలో పెట్టుబడి పెట్టే ఫండ్', 'ప్రభుత్వ రుణ కార్యక్రమం', 'ఒక రకమైన బ్యాంక్ ఖాతా'], answer: 'అనేక మంది పెట్టుబడిదారుల నుండి డబ్బు పోగుచేసి స్టాక్స్, బాండ్స్ మొదలైన వాటిలో పెట్టుబడి పెట్టే ఫండ్' },
        { question: '“వైవిధ్యీకరణ” (diversification) అంటే ఏమిటి?', options: ['మీ డబ్బునంతా ఒకే కంపెనీలో పెట్టుబడి పెట్టడం', 'రిస్క్‌ను తగ్గించడానికి మీ పెట్టుబడులను వేర్వేరు ఆస్తులలో విస్తరించడం', 'పొదుపు ఖాతాలో డబ్బు ఉంచడం', 'పెట్టుబడి సలహా కోసం అధిక రుసుము చెల్లించడం'], answer: 'రిస్క్‌ను తగ్గించడానికి మీ పెట్టుబడులను వేర్వేరు ఆస్తులలో విస్తరించడం' },
        { question: '“దీర్ఘకాలిక” (long-term) పెట్టుబడి అంటే ఏమిటి?', options: ['ఒక సంవత్సరం కంటే తక్కువ కాలం ఉంచిన పెట్టుబడి', '5 సంవత్సరాల కంటే ఎక్కువ కాలం ఉంచిన పెట్టుబడి', 'నెలవారీ డివిడెండ్ ఇచ్చే పెట్టుబడి', 'బ్యాంకు నుండి రుణం'], answer: '5 సంవత్సరాల కంటే ఎక్కువ కాలం ఉంచిన పెట్టుబడి' },
      ],
      'finance-freedom-video': [
        { question: 'మహిళల కోసం ఆర్థిక అక్షరాస్యత యొక్క ముఖ్య ప్రయోజనం ఏమిటి?', options: ['ఇది ఇతరుల డబ్బును నిర్వహించడానికి వారికి సహాయపడుతుంది', 'ఇది వారికి మరింత స్వతంత్రంగా ఉండటానికి మరియు మెరుగైన ఆర్థిక నిర్ణయాలు తీసుకోవడానికి వీలు కల్పిస్తుంది', 'ఇది వారికి మరింత ఉద్యోగ పదోన్నతులు పొందడానికి సహాయపడుతుంది', 'ఇది వారికి స్వేచ్ఛగా డబ్బు ఖర్చు చేయడానికి అనుమతిస్తుంది'], answer: 'ఇది వారికి మరింత స్వతంత్రంగా ఉండటానికి మరియు మెరుగైన ఆర్థిక నిర్ణయాలు తీసుకోవడానికి వీలు కల్పిస్తుంది' },
        { question: 'ఆర్థికంగా సాధికారత కలిగిన మహిళలు తమ కుటుంబాలకు ఎలా సహాయం చేస్తారు?', options: ['కుటుంబ నిర్ణయాలన్నీ ఒంటరిగా తీసుకోవడం ద్వారా', 'కుటుంబ సభ్యుల నుండి డబ్బు దాచడం ద్వారా', 'గృహ ఆదాయానికి మరియు పిల్లల విద్యకు సహకరించడం ద్వారా', 'స్నేహితుల నుండి అప్పులు అడగడం ద్వారా'], answer: 'గృహ ఆదాయానికి మరియు పిల్లల విద్యకు సహకరించడం ద్వారా' },
        { question: 'మైక్రోఫైనాన్స్ (microfinance) అంటే ఏమిటి?', options: ['పేద వ్యక్తులకు లేదా సమూహాలకు చిన్న వ్యాపారాలను ప్రారంభించడానికి ఇచ్చే చిన్న రుణాలు', 'పెద్ద ఎత్తున పెట్టుబడి బ్యాంకింగ్ వ్యవస్థ', 'ఒక రకమైన ప్రభుత్వ పన్ను', 'పిల్లల కోసం ఒక పొదుపు కార్యక్రమం'], answer: 'పేద వ్యక్తులకు లేదా సమూహాలకు చిన్న వ్యాపారాలను ప్రారంభించడానికి ఇచ్చే చిన్న రుణాలు' },
        { question: 'మహిళలు ఎలా ఉంటారని వీడియో హైలైట్ చేస్తుంది:', options: ['పురుషులపై ఆధారపడతారు', 'అనవసరమైన వస్తువులపై డబ్బు వృథా చేస్తారు', 'తమ సంఘాలలో మార్పుకు కారకులు కాగలరు', 'తమ వ్యక్తిగత సంపద గురించి మాత్రమే పట్టించుకుంటారు'], answer: 'తమ సంఘాలలో మార్పుకు కారకులు కాగలరు' },
        { question: 'వీడియో ప్రకారం, ఆర్థిక అక్షరాస్యత డబ్బు గురించి మాత్రమే కాదు, దీని గురించి కూడా:', options: ['డిగ్రీ పొందడం', 'ఆత్మవిశ్వాసం మరియు ఆత్మగౌరవాన్ని పెంపొందించడం', 'కొత్త ఆస్తులు కొనడం', 'ప్రపంచాన్ని చుట్టేయడం'], answer: 'ఆత్మవిశ్వాసం మరియు ఆత్మగౌరవాన్ని పెంపొందించడం' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'మొదటి అడుగులు', desc: 'మీ మొదటి పాఠాన్ని పూర్తి చేయండి', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'బడ్జెటింగ్ ప్రో', desc: 'బడ్జెటింగ్ ప్రాథమికాలను నేర్చుకోండి', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'వార యోధుడు', desc: '7 రోజుల పరంపరను కొనసాగించండి', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'ఫైనాన్స్ క్వీన్', desc: 'స్థాయి 5 చేరుకోండి', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'పెట్టుబడి కాలిక్యులేటర్ యాక్సెస్', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'అనన్య కె.', achievement: '6 నెలల్లో ₹50,000 ఆదా చేశారు', level: 8 },
      { name: 'ప్రియా ఎస్.', achievement: '23 ఏళ్ల వయస్సులో పెట్టుబడి పెట్టడం ప్రారంభించారు', level: 6 },
      { name: 'మీరా ఆర్.', achievement: 'అత్యవసర నిధిని నిర్మించారు', level: 7 }
    ],
  },
  ta: {
    // Homepage Translations
    welcome_message: 'இனிய காலை, பிரியா!',
    grow_wealth_question: 'இன்று உங்கள் செல்வத்தை பெருக்கத் தயாரா?',
    level: 'நிலை',
    todays_tasks_heading: 'இன்றைய பணிகள்',
    watch_lesson_task: 'இன்றைய பாடத்தை பார்க்கவும்',
    take_quiz_task: 'ஒரு வினாடி வினாவை எடுக்கவும்',
    check_portfolio_task: 'முதலீட்டுத் திட்டத்தை சரிபார்க்கவும்',
    finance_tip_heading: 'இன்றைய நிதி குறிப்பு',
    finance_tip_quote: 'உங்கள் நிதி சுதந்திரம் உங்கள் வல்லமை. அதை ஒரு நேரத்தில் ஒரு படி உருவாக்குங்கள்.',
    learn_button: 'கற்றுக்கொள்ளுங்கள்',
    invest_button: 'முதலீடு செய்யுங்கள்',
    community_button: 'சமூகம்',
    profile_button: 'சுயவிவரம்',
    guest_name: 'விருந்தினர்',

    // Learn Page Translations
    learn_finance_heading: 'நிதி கற்கவும்',
    learn_finance_subheading: 'பண மேலாண்மை திறன்களைப் பெறுங்கள்',
    overall_progress: 'மொத்த முன்னேற்றம்',
    lessons_label: 'பாடங்கள்',
    financial_basics_title: 'நிதி அடிப்படைகள்',
    financial_basics_desc: 'பணம் மற்றும் பட்ஜெட் புரிந்துகொள்ளுதல்',
    smart_saving_title: 'ஸ்மார்ட் சேமிப்பு உத்திகள்',
    smart_saving_desc: 'உங்கள் அவசர நிதி உருவாக்குதல்',
    
    // Video Titles
    shg_video_title: 'SHG என்றால் என்ன? சுய உதவி குழு',
    shg_video_desc: 'சுய உதவி குழுக்கள் பெண்களை நிதி மற்றும் சமூக ரீதியாக எவ்வாறு மேம்படுத்துகின்றன என்பதை அறிக.',
    finance_freedom_video_title: 'பெண்களுக்கான நிதி சுதந்திரம்',
    finance_freedom_video_desc: 'நிதி சுதந்திரத்திற்கான ஊக்கமளிக்கும் கதைகள் மற்றும் நடைமுறை குறிப்புகள்.',
    investing_for_beginners_title: 'புதியவர்களுக்கு முதலீடு',
    investing_for_beginners_desc: 'முதலீடு செய்யத் தொடங்குவதற்கான ஒரு எளிய வழிகாட்டி.',
    empowered_women_title: 'அதிகாரம் பெற்ற பெண்கள் - வாழ்க்கையை மாற்றுதல்',
    empowered_women_desc: 'நிதி கல்வியறிவு மூலம் தங்கள் வாழ்க்கையை மாற்றிய பெண்களின் கதைகள்.',

    completed_status: 'முடிந்தது',
    done_status: 'முடிந்தது',
    take_quiz_button: 'வினாடி வினா எடுக்கவும்',
    start_button: 'தொடங்கு',
    keep_learning_text: 'பரிசுகளைத் திறக்க கற்றுக்கொண்டே இருங்கள்!',
    complete_lessons_text: 'நிலை 4 ஐ அடைய இன்னும் 3 பாடங்களை முடிக்கவும்',
    view_rewards_button: 'பரிசுகளைக் காண்க',

    // Achievements Page Translations
    your_achievements_heading: 'உங்கள் சாதனைகள்',
    track_progress_text: 'உங்கள் முன்னேற்றம் மற்றும் பரிசுகளைப் கண்காணிக்கவும்',
    xp_points_label: 'எக்ஸ்பி புள்ளிகள்',
    xp_to_next_level_text: 'அடுத்த நிலைக்கான எக்ஸ்பி',
    day_streak_label: 'நாள் தொடர்',
    badges_label: 'பதக்கங்கள்',
    achievements_heading: 'சாதனைகள்',
    upcoming_rewards_heading: 'வரவிருக்கும் பரிசுகள்',
    upcoming_rewards_text: 'முதலீட்டு கால்குலேட்டர் அணுகல்',
    women_like_you_heading: 'உங்களைப் போன்ற பெண்கள்',
    back_to_learn_button: 'கற்க திரும்பு',

    // Quiz and Reward-specific Translations
    quiz_heading: 'வினாடி வினா',
    submit_button: 'சமர்ப்பிக்கவும்',
    correct_answer: 'சரியானது!',
    wrong_answer: 'தவறு. மீண்டும் முயற்சிக்கவும்.',
    quiz_results_heading: 'வினாடி வினா முடிவுகள்',
    correct_answers_label: 'சரியான பதில்கள்',
    earned_status: 'சம்பாதித்தது',
    locked_status: 'பூட்டப்பட்டது',

    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'பட்ஜெட்டை உருவாக்குவதற்கான முதல் படி என்ன?', options: ['உங்கள் வருமானம் மற்றும் செலவுகளைக் கண்காணிக்கவும்', 'புதிய காரை வாங்கவும்', 'பங்குகளில் முதலீடு செய்யவும்', 'உங்கள் நண்பர்களின் கடன்களைத் திருப்பிச் செலுத்தவும்'], answer: 'உங்கள் வருமானம் மற்றும் செலவுகளைக் கண்காணிக்கவும்' },
        { question: '“பணப்புழக்கம்” எதைக் குறிக்கிறது?', options: ['உங்கள் பணப்பையில் உள்ள பணம்', 'உங்கள் கணக்கிற்கு உள்ளேயும் வெளியேயும் பணத்தின் இயக்கம்', 'உங்கள் சேமிப்பின் மதிப்பு', 'ஒரு பொருளின் விலை'], answer: 'உங்கள் கணக்கிற்கு உள்ளேயும் வெளியேயும் பணத்தின் இயக்கம்' },
        { question: 'அவசர நிதி ஏன் முக்கியம்?', options: ['விடுமுறைகளுக்கு', 'எதிர்பாராத செலவுகளுக்கு', 'ஆடம்பர பொருட்களை வாங்க', 'நண்பர்களுக்கு கொடுக்க'], answer: 'எதிர்பாராத செலவுகளுக்கு' },
        { question: 'இவற்றில் எது தேவை, ஆசை அல்ல?', options: ['ஒரு புதிய ஸ்மார்ட்போன்', 'உணவு', 'ஒரு வடிவமைப்பாளர் பை', 'ஒரு சொகுசு கார்'], answer: 'உணவு' },
        { question: '50/30/20 பட்ஜெட் விதி என்ன?', options: ['50% சேமிப்பு, 30% தேவைகள், 20% ஆசைகள்', '50% தேவைகள், 30% ஆசைகள், 20% சேமிப்பு', '50% ஆசைகள், 30% தேவைகள், 20% சேமிப்பு', '50% தேவைகள், 30% சேமிப்பு, 20% ஆசைகள்'], answer: '50% தேவைகள், 30% ஆசைகள், 20% சேமிப்பு' },
      ],
      'smart-saving': [
        { question: 'அவசர நிதி எதற்காகப் பயன்படுத்தப்படுகிறது?', options: ['ஆடம்பரப் பொருட்களை வாங்குவதற்காக', 'விடுமுறைகளுக்கு', 'மருத்துவச் செலவுகள் அல்லது வேலை இழப்பு போன்ற எதிர்பாராத செலவுகளுக்கு', 'பங்குச் சந்தையில் முதலீடு செய்ய'], answer: 'மருத்துவச் செலவுகள் அல்லது வேலை இழப்பு போன்ற எதிர்பாராத செலவுகளுக்கு' },
        { question: '“72ன் விதி” என்ன?', options: ['பணம் இரட்டிப்பாக எவ்வளவு நேரம் ஆகும் என்பதைக் கணக்கிடுவதற்கான ஒரு சூத்திரம்', 'ஒரு பட்ஜெட் முறை', 'ஒரு வரி உத்தி', 'பத்திரங்களில் முதலீடு செய்வதற்கான ஒரு விதி'], answer: 'பணம் இரட்டிப்பாக எவ்வளவு நேரம் ஆகும் என்பதைக் கணக்கிடுவதற்கான ஒரு சூத்திரம்' },
        { question: 'கூட்டு வட்டி (Compounding Interest) என்றால் என்ன?', options: ['உங்கள் ஆரம்ப முதலீட்டில் மட்டுமே வட்டி', 'உங்கள் ஆரம்ப முதலீடு மற்றும் முன்பு சம்பாதித்த வட்டிக்கு ஈட்டப்படும் வட்டி', 'ஒரு நிலையான வருமான விகிதம்', 'முதலீட்டில் ஒரு அரசாங்க கட்டணம்'], answer: 'உங்கள் ஆரம்ப முதலீடு மற்றும் முன்பு சம்பாதித்த வட்டிக்கு ஈட்டப்படும் வட்டி' },
        { question: 'பணம் சேமிக்க சிறந்த வழி:', options: ['அனைத்தையும் ஒரே நேரத்தில் செலவிடுங்கள்', 'சேமிக்க மாத இறுதி வரை காத்திருங்கள்', 'முதலில் உங்களுக்கே செலுத்துங்கள் (செலவழிக்கும் முன் சேமிக்கவும்)', 'சேமிக்க கடன் வாங்கவும்'], answer: 'முதலில் உங்களுக்கே செலுத்துங்கள் (செலவழிக்கும் முன் சேமிக்கவும்)' },
        { question: 'சேமிப்பில் "பணப்புழக்கம்" (liquidity) எதைக் குறிக்கிறது?', options: ['நீங்கள் எவ்வளவு வட்டி சம்பாதிக்கிறீர்கள்', 'உங்கள் பணத்தை எவ்வளவு விரைவாக அணுக முடியும்', 'நீங்கள் எவ்வளவு பணம் சேமித்துள்ளீர்கள்', 'உங்கள் சேமிப்பின் மீதான வரி விகிதம்'], answer: 'உங்கள் பணத்தை எவ்வளவு விரைவாக அணுக முடியும்' },
      ],
      'shg-video': [
        { question: 'SHG என்பதன் பொருள் என்ன?', options: ['ஸ்மார்ட் ஹெல்ப் குரூப்', 'சுய உதவி குழு', 'ஸ்ட்ராங் ஹார்மனி குரூப்', 'சமூக சுகாதார குழு'], answer: 'சுய உதவி குழு' },
        { question: 'ஒரு SHG இன் முதன்மை செயல்பாடு என்ன?', options: ['பெரிய வணிக முதலீடுகள்', 'பெண்கள் பாடுவதற்கு சந்திப்பது', 'உறுப்பினர்கள் சிறிய வழக்கமான சேமிப்புகளைச் செய்வது', 'சமூக நிகழ்வுகளை ஏற்பாடு செய்தல்'], answer: 'உறுப்பினர்கள் சிறிய வழக்கமான சேமிப்புகளைச் செய்வது' },
        { question: 'SHG ஆல் சேகரிக்கப்படும் பணத்தின் நோக்கம் என்ன?', options: ['அரசாங்கத்திற்கு கொடுப்பது', 'தேவைப்படும் உறுப்பினருக்கு கடனாக கொடுப்பது', 'அனைத்து உறுப்பினர்களுக்கும் புதிய ஆடைகள் வாங்குவது', 'குழுவிற்கு நிலம் வாங்குவது'], answer: 'தேவைப்படும் உறுப்பினருக்கு கடனாக கொடுப்பது' },
        { question: 'SHG கள் பெண்களை எவ்வாறு மேம்படுத்துகின்றன?', options: ['அரசியலில் அவர்களுக்கு அதிகாரம் அளிப்பதன் மூலம்', 'அவர்களுக்கு சமையல் கற்றுக்கொடுப்பதன் மூலம்', 'சேமிப்பு மற்றும் நிதி அறிவை மேம்படுத்துவதன் மூலம்', 'இலவச பயணத்தை வழங்குவதன் மூலம்'], answer: 'சேமிப்பு மற்றும் நிதி அறிவை மேம்படுத்துவதன் மூலம்' },
        { question: 'ஒரு SHG ஒரு பெண்ணுக்கு ஒரு சிறிய தொழிலைத் தொடங்க உதவுகிறது. இது எதற்கு ஒரு உதாரணம்?', options: ['தர்மம்', 'நிதி உள்ளடக்க', 'ஒரு பெரிய வங்கியிலிருந்து கடன்', 'ஒரு பரிசு'], answer: 'நிதி உள்ளடக்க' },
      ],
      'finance-freedom-video': [
        { question: 'நிதி சுதந்திரம் என்றால்:', options: ['பணக்காரராக இருப்பது', 'பணத்தைப் பற்றி கவலைப்படாமல் வாழ்க்கைத் தேர்வுகளைச் செய்யும் திறன் இருப்பது', 'ஒருபோதும் வேலை செய்ய வேண்டியதில்லை', 'லாட்டரி வெல்வது'], answer: 'பணத்தைப் பற்றி கவலைப்படாமல் வாழ்க்கைத் தேர்வுகளைச் செய்யும் திறன் இருப்பது' },
        { question: 'நிதி சுதந்திரத்திற்கான ஒரு முக்கிய படி:', options: ['ஒரு பட்ஜெட்டை உருவாக்குவது', 'விலையுயர்ந்த பொருட்களை வாங்குவது', 'உயர் வட்டி கடன் பெறுவது', 'ஒருபோதும் பணம் சேமிக்காமல் இருப்பது'], answer: 'ஒரு பட்ஜெட்டை உருவாக்குவது' },
        { question: 'பெண்கள் நிதி ரீதியாக சுதந்திரமாக இருப்பது ஏன் முக்கியம்?', options: ['நண்பர்களை ஈர்க்க', 'மற்றவர்களைச் சார்ந்து இருக்க', 'தங்கள் வாழ்க்கை மற்றும் எதிர்காலத்தின் மீது கட்டுப்பாடு வைத்திருக்க', 'வரிகளைத் தவிர்க்க'], answer: 'தங்கள் வாழ்க்கை மற்றும் எதிர்காலத்தின் மீது கட்டுப்பாடு வைத்திருக்க' },
        { question: 'நிதி சுதந்திரம் என்பது ஒரு:', options: ['கனவு', 'மகாசக்தி', 'கற்பனைக் கதை', 'பொழுதுபோக்கு'], answer: 'மகாசக்தி' },
        { question: 'நிதியைப் பற்றி கற்றுக்கொள்ளத் தொடங்க சிறந்த நேரம்:', options: ['நீங்கள் வயதாகும்போது', 'நீங்கள் மாணவராக இருக்கும்போது', 'நேற்று', 'ஒருபோதும் இல்லை'], answer: 'நேற்று' },
      ],
      'investing-for-beginners-video': [
        { question: 'பங்கு என்றால் என்ன?', options: ['ஒரு வகை பத்திர', 'கடனின் ஒரு வடிவம்', 'ஒரு நிறுவனத்தில் உரிமையின் ஒரு சிறிய பகுதி', 'ஒரு வகை அரசு சான்றிதழ்'], answer: 'ஒரு நிறுவனத்தில் உரிமையின் ஒரு சிறிய பகுதி' },
        { question: 'முதலீட்டின் முக்கிய நோக்கம் என்ன?', options: ['விரைவில் பணத்தை இழக்க', 'காலப்போக்கில் உங்கள் பணத்தை வளரச் செய்ய', 'கடனை அடைக்க', 'ஆடம்பரப் பொருட்களுக்குப் பணத்தைச் செலவிட'], answer: 'காலப்போக்கில் உங்கள் பணத்தை வளரச் செய்ய' },
        { question: 'பரஸ்பர நிதி (Mutual Fund) என்றால் என்ன?', options: ['ஒரு நபர் மட்டுமே முதலீடு செய்யக்கூடிய நிதி', 'பல முதலீட்டாளர்களிடமிருந்து பணம் திரட்டப்பட்டு பங்குகள், பத்திரங்கள் போன்றவற்றில் முதலீடு செய்யப்படும் நிதி', 'ஒரு அரசு கடன் திட்டம்', 'ஒரு வகையான வங்கி கணக்கு'], answer: 'பல முதலீட்டாளர்களிடமிருந்து பணம் திரட்டப்பட்டு பங்குகள், பத்திரங்கள் போன்றவற்றில் முதலீடு செய்யப்படும் நிதி' },
        { question: '“பல்வகைப்படுத்தல்” (diversification) என்றால் என்ன?', options: ['உங்கள் எல்லா பணத்தையும் ஒரே நிறுவனத்தில் முதலீடு செய்தல்', 'ஆபத்தைக் குறைக்க வெவ்வேறு சொத்துக்களில் உங்கள் முதலீடுகளைப் பரவலாக்குதல்', 'ஒரு சேமிப்புக் கணக்கில் பணத்தைப் போடுதல்', 'முதலீட்டு ஆலோசனைக்கு அதிக கட்டணம் செலுத்துதல்'], answer: 'ஆபத்தைக் குறைக்க வெவ்வேறு சொத்துக்களில் உங்கள் முதலீடுகளைப் பரவலாக்குதல்' },
        { question: '“நீண்ட கால” (long-term) முதலீடு என்ன?', options: ['ஒரு வருடத்திற்கும் குறைவாக வைத்திருக்கும் முதலீடு', '5 ஆண்டுகளுக்கும் மேலாக வைத்திருக்கும் முதலீடு', 'மாதாந்திர ஈவுத்தொகை வழங்கும் முதலீடு', 'வங்கியிலிருந்து கடன்'], answer: '5 ஆண்டுகளுக்கும் மேலாக வைத்திருக்கும் முதலீடு' },
      ],
      'empowered-women-video': [
        { question: 'பெண்களுக்கு நிதி அறிவின் முக்கியப் பலன் என்ன?', options: ['இது மற்றவர்களின் பணத்தை நிர்வகிக்க அவர்களுக்கு உதவுகிறது', 'இது அவர்களுக்கு அதிக சுதந்திரமாகவும் சிறந்த நிதி முடிவுகளை எடுக்கவும் உதவுகிறது', 'இது அவர்களுக்கு அதிக பதவி உயர்வு பெற உதவுகிறது', 'இது அவர்களுக்கு சுதந்திரமாக பணத்தை செலவிட அனுமதிக்கிறது'], answer: 'இது அவர்களுக்கு அதிக சுதந்திரமாகவும் சிறந்த நிதி முடிவுகளை எடுக்கவும் உதவுகிறது' },
        { question: 'நிதி ரீதியாக அதிகாரம் பெற்ற பெண்கள் தங்கள் குடும்பங்களுக்கு எப்படி உதவுகிறார்கள்?', options: ['அனைத்து குடும்ப முடிவுகளையும் தனியாக எடுப்பதன் மூலம்', 'தங்கள் குடும்ப உறுப்பினர்களிடமிருந்து பணத்தை மறைப்பதன் மூலம்', 'வீட்டு வருமானம் மற்றும் குழந்தைகளின் கல்விக்கு பங்களிப்பதன் மூலம்', 'நண்பர்களிடம் கடன் கேட்பதன் மூலம்'], answer: 'வீட்டு வருமானம் மற்றும் குழந்தைகளின் கல்விக்கு பங்களிப்பதன் மூலம்' },
        { question: 'நுண்நிதி (microfinance) என்றால் என்ன?', options: ['ஏழைகள் அல்லது குழுக்களுக்கு சிறு தொழில்களைத் தொடங்க உதவும் சிறிய கடன்கள்', 'ஒரு பெரிய அளவிலான முதலீட்டு வங்கி அமைப்பு', 'ஒரு வகை அரசாங்க வரி', 'குழந்தைகளுக்கான சேமிப்புத் திட்டம்'], answer: 'ஏழைகள் அல்லது குழுக்களுக்கு சிறு தொழில்களைத் தொடங்க உதவும் சிறிய கடன்கள்' },
        { question: 'வீடியோ வலியுறுத்துவது பெண்கள்:', options: ['ஆண்களைச் சார்ந்து இருக்கிறார்கள்', 'தேவையில்லாத பொருட்களுக்கு பணத்தை வீணடிக்கிறார்கள்', 'தங்கள் சமூகங்களில் மாற்றத்தின் முகவர்களாக இருக்க முடியும்', 'தங்கள் தனிப்பட்ட செல்வம் பற்றி மட்டுமே கவலைப்படுகிறார்கள்'], answer: 'தங்கள் சமூகங்களில் மாற்றத்தின் முகவர்களாக இருக்க முடியும்' },
        { question: 'வீடியோவின்படி, நிதி அறிவு என்பது பணம் பற்றியது மட்டுமல்ல, இது பற்றியும் கூட:', options: ['ஒரு பட்டத்தைப் பெறுவது', 'நம்பிக்கை மற்றும் சுய மரியாதையை உருவாக்குவது', 'புதிய சொத்துக்களை வாங்குவது', 'உலகைச் சுற்றி வருவது'], answer: 'நம்பிக்கை மற்றும் சுய மரியாதையை உருவாக்குவது' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'முதல் படிகள்', desc: 'உங்கள் முதல் பாடத்தை முடிக்கவும்', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'பட்ஜெட்டிங் ப்ரோ', desc: 'பட்ஜெட் அடிப்படைகளை மாஸ்டர் செய்யவும்', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'வார வாரியர்', desc: '7 நாள் தொடர் பராமரிக்கவும்', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'நிதி ராணி', desc: 'நிலை 5 ஐ அடையவும்', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'முதலீட்டு கால்குலேட்டர் அணுகல்', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'அனன்யா கே.', achievement: '6 மாதங்களில் ₹50,000 சேமித்தார்', level: 8 },
      { name: 'பிரியா எஸ்.', achievement: '23 வயதில் முதலீடு செய்யத் தொடங்கினார்', level: 6 },
      { name: 'மீரா ஆர்.', achievement: 'அவசர நிதியை உருவாக்கினார்', level: 7 }
    ],
  },
  pa: {
    // Homepage Translations
    welcome_message: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਪ੍ਰਿਆ!',
    grow_wealth_question: 'ਅੱਜ ਆਪਣੀ ਦੌਲਤ ਵਧਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?',
    level: 'ਪੱਧਰ',
    todays_tasks_heading: 'ਅੱਜ ਦੇ ਕੰਮ',
    watch_lesson_task: 'ਅੱਜ ਦਾ ਪਾਠ ਦੇਖੋ',
    take_quiz_task: 'ਇੱਕ ਕਵਿਜ਼ ਲਓ',
    check_portfolio_task: 'ਨਿਵੇਸ਼ ਪੋਰਟਫੋਲੀਓ ਦੀ ਜਾਂਚ ਕਰੋ',
    finance_tip_heading: 'ਅੱਜ ਦੀ ਵਿੱਤੀ ਸਲਾਹ',
    finance_tip_quote: 'ਤੁਹਾਡੀ ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਤੁਹਾਡੀ ਮਹਾਨ ਸ਼ਕਤੀ ਹੈ। ਇਸਨੂੰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਣਾਓ।',
    learn_button: 'ਸਿੱਖੋ',
    invest_button: 'ਨਿਵੇਸ਼ ਕਰੋ',
    community_button: 'ਭਾਈਚਾਰਾ',
    profile_button: 'ਪ੍ਰੋਫਾਈਲ',
    guest_name: 'ਮੇਹਮਾਨ',

    // Learn Page Translations
    learn_finance_heading: 'ਵਿੱਤ ਸਿੱਖੋ',
    learn_finance_subheading: 'ਪੈਸੇ ਦੇ ਪ੍ਰਬੰਧਨ ਦੇ ਹੁਨਰਾਂ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ',
    overall_progress: 'ਕੁੱਲ ਪ੍ਰਗਤੀ',
    lessons_label: 'ਪਾਠ',
    financial_basics_title: 'ਵਿੱਤੀ ਮੂਲ ਗੱਲਾਂ',
    financial_basics_desc: 'ਪੈਸੇ ਅਤੇ ਬਜਟ ਨੂੰ ਸਮਝਣਾ',
    smart_saving_title: 'ਸਮਾਰਟ ਬਚਤ ਦੀਆਂ ਰਣਨੀਤੀਆਂ',
    smart_saving_desc: 'ਆਪਣਾ ਐਮਰਜੈਂਸੀ ਫੰਡ ਬਣਾਉਣਾ',
    
    // Video Titles
    shg_video_title: 'SHG ਕੀ ਹੈ? ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹ',
    shg_video_desc: 'ਜਾਣੋ ਕਿ ਕਿਵੇਂ ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹ ਔਰਤਾਂ ਨੂੰ ਵਿੱਤੀ ਅਤੇ ਸਮਾਜਿਕ ਤੌਰ ਤੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਂਦੇ ਹਨ।',
    finance_freedom_video_title: 'ਔਰਤਾਂ ਲਈ ਵਿੱਤੀ ਆਜ਼ਾਦੀ',
    finance_freedom_video_desc: 'ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਲਈ ਪ੍ਰੇਰਣਾਦਾਇਕ ਕਹਾਣੀਆਂ ਅਤੇ ਵਿਹਾਰਕ ਸੁਝਾਅ।',
    investing_for_beginners_title: 'ਨਿਵੇਸ਼ ਨਵੇਂ ਸਿਖਿਆਰਥੀਆਂ ਲਈ',
    investing_for_beginners_desc: 'ਨਿਵੇਸ਼ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਇੱਕ ਸਧਾਰਨ ਗਾਈਡ।',
    empowered_women_title: 'ਸ਼ਕਤੀਸ਼ਾਲੀ ਔਰਤਾਂ - ਜੀਵਨ ਬਦਲਣਾ',
    empowered_women_desc: 'ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ ਜਿਨ੍ਹਾਂ ਨੇ ਵਿੱਤੀ ਸਾਖਰਤਾ ਦੁਆਰਾ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਬਦਲ ਦਿੱਤੀ।',

    completed_status: 'ਪੂਰਾ ਹੋ ਗਿਆ',
    done_status: 'ਹੋ ਗਿਆ',
    take_quiz_button: 'ਕਵਿਜ਼ ਲਓ',
    start_button: 'ਸ਼ੁਰੂ ਕਰੋ',
    keep_learning_text: 'ਇਨਾਮਾਂ ਨੂੰ ਅਨਲੌਕ ਕਰਨ ਲਈ ਸਿੱਖਦੇ ਰਹੋ!',
    complete_lessons_text: 'ਪੱਧਰ 4 ਤੇ ਪਹੁੰਚਣ ਲਈ ਹੋਰ 3 ਪਾਠ ਪੂਰੇ ਕਰੋ',
    view_rewards_button: 'ਇਨਾਮ ਦੇਖੋ',

    // Achievements Page Translations
    your_achievements_heading: 'ਤੁਹਾਡੀਆਂ ਪ੍ਰਾਪਤੀਆਂ',
    track_progress_text: 'ਆਪਣੀ ਪ੍ਰਗਤੀ ਅਤੇ ਇਨਾਮਾਂ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ',
    xp_points_label: 'ਐਕਸਪੀ ਪੁਆਇੰਟਸ',
    xp_to_next_level_text: 'ਅਗਲੇ ਪੱਧਰ ਲਈ ਐਕਸਪੀ',
    day_streak_label: 'ਦਿਨ ਦਾ ਸਟ੍ਰੀਕ',
    badges_label: 'ਬੈਜ',
    achievements_heading: 'ਪ੍ਰਾਪਤੀਆਂ',
    upcoming_rewards_heading: 'ਆਉਣ ਵਾਲੇ ਇਨਾਮ',
    upcoming_rewards_text: 'ਨਿਵੇਸ਼ ਕੈਲਕੁਲੇਟਰ ਐਕਸੈਸ',
    women_like_you_heading: 'ਤੁਹਾਡੇ ਵਰਗੀਆਂ ਔਰਤਾਂ',
    back_to_learn_button: 'ਲਰਨਿੰਗ ਤੇ ਵਾਪਸ',

    // Quiz and Reward-specific Translations
    quiz_heading: 'ਕਵਿਜ਼',
    submit_button: 'ਸਬਮਿਟ ਕਰੋ',
    correct_answer: 'ਸਹੀ!',
    wrong_answer: 'ਗਲਤ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    quiz_results_heading: 'ਕਵਿਜ਼ ਨਤੀਜੇ',
    correct_answers_label: 'ਸਹੀ ਜਵਾਬ',
    earned_status: 'ਕਮਾਇਆ',
    locked_status: 'ਲੌਕ ਕੀਤਾ ਗਿਆ',

    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'ਬਜਟ ਬਣਾਉਣ ਦਾ ਪਹਿਲਾ ਕਦਮ ਕੀ ਹੈ?', options: ['ਆਪਣੀ ਆਮਦਨ ਅਤੇ ਖਰਚਿਆਂ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ', 'ਇੱਕ ਨਵੀਂ ਕਾਰ ਖਰੀਦੋ', 'ਸਟਾਕ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰੋ', 'ਆਪਣੇ ਦੋਸਤਾਂ ਦਾ ਕਰਜ਼ਾ ਚੁਕਾਓ'], answer: 'ਆਪਣੀ ਆਮਦਨ ਅਤੇ ਖਰਚਿਆਂ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ' },
        { question: '"ਕੈਸ਼ ਫਲੋ" ਦਾ ਕੀ ਮਤਲਬ ਹੈ?', options: ['ਤੁਹਾਡੇ ਬਟੂਏ ਵਿੱਚ ਪੈਸਾ', 'ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਪੈਸੇ ਦੀ ਆਮਦ ਅਤੇ ਜਾਵਕ', 'ਤੁਹਾਡੀ ਬਚਤ ਦਾ ਮੁੱਲ', 'ਇੱਕ ਉਤਪਾਦ ਦੀ ਕੀਮਤ'], answer: 'ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਪੈਸੇ ਦੀ ਆਮਦ ਅਤੇ ਜਾਵਕ' },
        { question: 'ਐਮਰਜੈਂਸੀ ਫੰਡ ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ?', options: ['ਛੁੱਟੀਆਂ ਲਈ', 'ਅਣਕਿਆਸੇ ਖਰਚਿਆਂ ਲਈ', 'ਲਗਜ਼ਰੀ ਚੀਜ਼ਾਂ ਖਰੀਦਣ ਲਈ', 'ਦੋਸਤਾਂ ਨੂੰ ਦੇਣ ਲਈ'], answer: 'ਅਣਕਿਆਸੇ ਖਰਚਿਆਂ ਲਈ' },
        { question: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੀ ਇੱਕ ਲੋੜ ਹੈ, ਚਾਹਤ ਨਹੀਂ?', options: ['ਇੱਕ ਨਵਾਂ ਸਮਾਰਟਫੋਨ', 'ਭੋਜਨ', 'ਇੱਕ ਡਿਜ਼ਾਈਨਰ ਬੈਗ', 'ਇੱਕ ਲਗਜ਼ਰੀ ਕਾਰ'], answer: 'ਭੋਜਨ' },
        { question: '50/30/20 ਬਜਟ ਨਿਯਮ ਕੀ ਹੈ?', options: ['50% ਬਚਤ, 30% ਲੋੜਾਂ, 20% ਚਾਹਤਾਂ', '50% ਲੋੜਾਂ, 30% ਚਾਹਤਾਂ, 20% ਬਚਤ', '50% ਚਾਹਤਾਂ, 30% ਲੋੜਾਂ, 20% ਬਚਤ', '50% ਲੋੜਾਂ, 30% ਬਚਤ, 20% ਚਾਹਤਾਂ'], answer: '50% ਲੋੜਾਂ, 30% ਚਾਹਤਾਂ, 20% ਬਚਤ' },
      ],
      'smart-saving': [
        { question: 'ਐਮਰਜੈਂਸੀ ਫੰਡ ਦੀ ਵਰਤੋਂ ਕਿਸ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?', options: ['ਲਗਜ਼ਰੀ ਚੀਜ਼ਾਂ ਖਰੀਦਣ ਲਈ', 'ਛੁੱਟੀਆਂ ਲਈ', 'ਮੈਡੀਕਲ ਬਿੱਲਾਂ ਜਾਂ ਨੌਕਰੀ ਖਤਮ ਹੋਣ ਵਰਗੇ ਅਣਕਿਆਸੇ ਖਰਚਿਆਂ ਲਈ', 'ਸਟਾਕ ਮਾਰਕੀਟ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨ ਲਈ'], answer: 'ਮੈਡੀਕਲ ਬਿੱਲਾਂ ਜਾਂ ਨੌਕਰੀ ਖਤਮ ਹੋਣ ਵਰਗੇ ਅਣਕਿਆਸੇ ਖਰਚਿਆਂ ਲਈ' },
        { question: '“72 ਦਾ ਨਿਯਮ” ਕੀ ਹੈ?', options: ['ਪੈਸੇ ਨੂੰ ਦੁੱਗਣਾ ਹੋਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ, ਦੀ ਗਣਨਾ ਕਰਨ ਦਾ ਇੱਕ ਸੂਤਰ', 'ਇੱਕ ਬਜਟ ਵਿਧੀ', 'ਇੱਕ ਟੈਕਸ ਰਣਨੀਤੀ', 'ਬਾਂਡ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨ ਦਾ ਇੱਕ ਨਿਯਮ'], answer: 'ਪੈਸੇ ਨੂੰ ਦੁੱਗਣਾ ਹੋਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ, ਦੀ ਗਣਨਾ ਕਰਨ ਦਾ ਇੱਕ ਸੂਤਰ' },
        { question: 'ਚੱਕਰਵਰਤੀ ਵਿਆਜ (Compounding Interest) ਕੀ ਹੈ?', options: ['ਸਿਰਫ ਤੁਹਾਡੇ ਸ਼ੁਰੂਆਤੀ ਨਿਵੇਸ਼ ਤੇ ਵਿਆਜ', 'ਤੁਹਾਡੇ ਸ਼ੁਰੂਆਤੀ ਨਿਵੇਸ਼ ਅਤੇ ਪਹਿਲਾਂ ਕਮਾਏ ਵਿਆਜ' ,'ਤੇ ਕਮਾਇਆ ਵਿਆਜ', 'ਇੱਕ ਨਿਸ਼ਚਿਤ ਰਿਟਰਨ ਦਰ', 'ਨਿਵੇਸ਼ਤੇ ਇੱਕ ਸਰਕਾਰੀ ਫੀਸ'], answer: 'ਤੁਹਾਡੇ ਸ਼ੁਰੂਆਤੀ ਨਿਵੇਸ਼ ਅਤੇ ਪਹਿਲਾਂ ਕਮਾਏ ਵਿਆਜ ਤੇ ਕਮਾਇਆ ਵਿਆਜ' },
        { question: 'ਪੈਸੇ ਬਚਾਉਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ ਹੈ:', options: ['ਇੱਕੋ ਵਾਰ ਵਿੱਚ ਸਾਰਾ ਖਰਚ ਕਰ ਦਿਓ', 'ਬਚਾਉਣ ਲਈ ਮਹੀਨੇ ਦੇ ਅੰਤ ਤੱਕ ਉਡੀਕ ਕਰੋ', 'ਪਹਿਲਾਂ ਆਪਣੇ ਆਪ ਨੂੰ ਭੁਗਤਾਨ ਕਰੋ (ਖਰਚਣ ਤੋਂ ਪਹਿਲਾਂ ਬਚਾਓ)', 'ਬਚਾਉਣ ਲਈ ਪੈਸੇ ਉਧਾਰ ਲਓ'], answer: 'ਪਹਿਲਾਂ ਆਪਣੇ ਆਪ ਨੂੰ ਭੁਗਤਾਨ ਕਰੋ (ਖਰਚਣ ਤੋਂ ਪਹਿਲਾਂ ਬਚਾਓ)' },
        { question: 'ਬਚਤ ਵਿੱਚ "ਤਰਲਤਾ" (liquidity) ਕਿਸ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ?', options: ['ਤੁਸੀਂ ਕਿੰਨਾ ਵਿਆਜ ਕਮਾਉਂਦੇ ਹੋ', 'ਤੁਸੀਂ ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਕਿੰਨੀ ਜਲਦੀ ਵਰਤ ਸਕਦੇ ਹੋ', 'ਤੁਸੀਂ ਕਿੰਨਾ ਪੈਸਾ ਬਚਾਇਆ ਹੈ', 'ਤੁਹਾਡੀ ਬਚਤ ','ਤੇ ਟੈਕਸ ਦਰ'], answer: 'ਤੁਸੀਂ ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਕਿੰਨੀ ਜਲਦੀ ਵਰਤ ਸਕਦੇ ਹੋ' },
      ],
      'shg-video': [
        { question: 'SHG ਦਾ ਕੀ ਅਰਥ ਹੈ?', options: ['ਸਮਾਰਟ ਹੈਲਪ ਗਰੁੱਪ', 'ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹ', 'ਸਟ੍ਰੋਂਗ ਹਾਰਮਨੀ ਗਰੁੱਪ', 'ਸੋਸ਼ਲ ਹੈਲਥ ਗਰੁੱਪ'], answer: 'ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹ' },
        { question: 'ਇੱਕ SHG ਦੀ ਮੁੱਖ ਗਤੀਵਿਧੀ ਕੀ ਹੈ?', options: ['ਵੱਡੇ ਕਾਰੋਬਾਰੀ ਨਿਵੇਸ਼', 'ਔਰਤਾਂ ਗੀਤ ਗਾਉਣ ਲਈ ਮਿਲਦੀਆਂ ਹਨ', 'ਮੈਂਬਰਾਂ ਦੁਆਰਾ ਛੋਟੀ ਨਿਯਮਤ ਬੱਚਤ ਕਰਨਾ', 'ਸਮਾਜਿਕ ਸਮਾਗਮਾਂ ਦਾ ਆਯੋਜਨ ਕਰਨਾ'], answer: 'ਮੈਂਬਰਾਂ ਦੁਆਰਾ ਛੋਟੀ ਨਿਯਮਤ ਬੱਚਤ ਕਰਨਾ' },
        { question: 'ਇੱਕ SHG ਦੁਆਰਾ ਇਕੱਠੇ ਕੀਤੇ ਪੈਸੇ ਦਾ ਉਦੇਸ਼ ਕੀ ਹੈ?', options: ['ਸਰਕਾਰ ਨੂੰ ਦੇਣਾ', 'ਲੋੜਵੰਦ ਮੈਂਬਰ ਨੂੰ ਕਰਜ਼ਾ ਦੇਣਾ', 'ਸਾਰੇ ਮੈਂਬਰਾਂ ਲਈ ਨਵੇਂ ਕੱਪੜੇ ਖਰੀਦਣਾ', 'ਗਰੁੱਪ ਲਈ ਜ਼ਮੀਨ ਖਰੀਦਣਾ'], answer: 'ਲੋੜਵੰਦ ਮੈਂਬਰ ਨੂੰ ਕਰਜ਼ਾ ਦੇਣਾ' },
        { question: 'SHG ਔਰਤਾਂ ਨੂੰ ਕਿਵੇਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਂਦੇ ਹਨ?', options: ['ਰਾਜਨੀਤੀ ਵਿੱਚ ਸ਼ਕਤੀ ਦੇ ਕੇ', 'ਉਨ੍ਹਾਂ ਨੂੰ ਖਾਣਾ ਪਕਾਉਣਾ ਸਿਖਾ ਕੇ', 'ਬਚਤ ਅਤੇ ਵਿੱਤੀ ਸਾਖਰਤਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਕੇ', 'ਮੁਫ਼ਤ ਯਾਤਰਾ ਪ੍ਰਦਾਨ ਕਰਕੇ'], answer: 'ਬਚਤ ਅਤੇ ਵਿੱਤੀ ਸਾਖਰਤਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਕੇ' },
        { question: 'ਇੱਕ SHG ਇੱਕ ਔਰਤ ਨੂੰ ਇੱਕ ਛੋਟਾ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਕਿਸ ਦੀ ਉਦਾਹਰਣ ਹੈ?', options: ['ਦਾਨ', 'ਵਿੱਤੀ ਸ਼ਮੂਲੀਅਤ', 'ਇੱਕ ਵੱਡੇ ਬੈਂਕ ਤੋਂ ਕਰਜ਼ਾ', 'ਇੱਕ ਤੋਹਫ਼ਾ'], answer: 'ਵਿੱਤੀ ਸ਼ਮੂਲੀਅਤ' },
      ],
      'finance-freedom-video': [
        { question: 'ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਦਾ ਮਤਲਬ ਹੈ:', options: ['ਅਮੀਰ ਹੋਣਾ', 'ਪੈਸੇ ਦੀ ਚਿੰਤਾ ਕੀਤੇ ਬਿਨਾਂ ਜੀਵਨ ਦੀ ਚੋਣ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਹੋਣਾ', 'ਕਦੇ ਕੰਮ ਨਾ ਕਰਨਾ', 'ਲਾਟਰੀ ਜਿੱਤਣਾ'], answer: 'ਪੈਸੇ ਦੀ ਚਿੰਤਾ ਕੀਤੇ ਬਿਨਾਂ ਜੀਵਨ ਦੀ ਚੋਣ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਹੋਣਾ' },
        { question: 'ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਦਾ ਇੱਕ ਮੁੱਖ ਕਦਮ ਹੈ:', options: ['ਬਜਟ ਬਣਾਉਣਾ', 'ਮਹਿੰਗੀਆਂ ਚੀਜ਼ਾਂ ਖਰੀਦਣਾ', 'ਉੱਚ ਵਿਆਜ ਵਾਲਾ ਕਰਜ਼ਾ ਲੈਣਾ', 'ਕਦੇ ਪੈਸਾ ਨਾ ਬਚਾਉਣਾ'], answer: 'ਬਜਟ ਬਣਾਉਣਾ' },
        { question: 'ਔਰਤਾਂ ਲਈ ਆਰਥਿਕ ਤੌਰ ਤੇ ਆਜ਼ਾਦ ਹੋਣਾ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ?', options: ['ਦੋਸਤਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਲਈ', 'ਦੂਜਿਆਂ ਤੇ ਨਿਰਭਰ ਰਹਿਣ ਲਈ', 'ਆਪਣੇ ਜੀਵਨ ਅਤੇ ਭਵਿੱਖ ','ਤੇ ਕੰਟਰੋਲ ਰੱਖਣ ਲਈ', 'ਟੈਕਸਾਂ ਤੋਂ ਬਚਣ ਲਈ'], answer: 'ਆਪਣੇ ਜੀਵਨ ਅਤੇ ਭਵਿੱਖ ਤੇ ਕੰਟਰੋਲ ਰੱਖਣ ਲਈ' },
        { question: 'ਵੀਡੀਓ ਦੇ ਅਨੁਸਾਰ, ਵਿੱਤੀ ਆਜ਼ਾਦੀ ਹੈ:', options: ['ਇੱਕ ਸੁਪਨਾ', 'ਇੱਕ ਮਹਾਂਸ਼ਕਤੀ', 'ਇੱਕ ਮਿੱਥ', 'ਇੱਕ ਸ਼ੌਕ'], answer: 'ਇੱਕ ਮਹਾਂਸ਼ਕਤੀ' },
        { question: 'ਵਿੱਤ ਬਾਰੇ ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ ਹੈ:', options: ['ਜਦੋਂ ਤੁਸੀਂ ਬੁੱਢੇ ਹੋ', 'ਜਦੋਂ ਤੁਸੀਂ ਵਿਦਿਆਰਥੀ ਹੋ', 'ਕੱਲ੍ਹ', 'ਕਦੇ ਨਹੀਂ'], answer: 'ਕੱਲ੍ਹ' },
      ],
      'investing-for-beginners-video': [
        { question: 'ਸਟਾਕ ਕੀ ਹੈ?', options: ['ਇੱਕ ਕਿਸਮ ਦਾ ਬਾਂਡ', 'ਕਰਜ਼ੇ ਦਾ ਇੱਕ ਰੂਪ', 'ਇੱਕ ਕੰਪਨੀ ਵਿੱਚ ਮਾਲਕੀ ਦਾ ਇੱਕ ਛੋਟਾ ਜਿਹਾ ਹਿੱਸਾ', 'ਇੱਕ ਕਿਸਮ ਦਾ ਸਰਕਾਰੀ ਸਰਟੀਫਿਕੇਟ'], answer: 'ਇੱਕ ਕੰਪਨੀ ਵਿੱਚ ਮਾਲਕੀ ਦਾ ਇੱਕ ਛੋਟਾ ਜਿਹਾ ਹਿੱਸਾ' },
        { question: 'ਨਿਵੇਸ਼ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਹੈ?', options: ['ਜਲਦੀ ਪੈਸਾ ਗੁਆਉਣਾ', 'ਸਮੇਂ ਦੇ ਨਾਲ ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਵਧਾਉਣਾ', 'ਕਰਜ਼ਾ ਚੁਕਾਉਣਾ', 'ਲਗਜ਼ਰੀ ਚੀਜ਼ਾਂ' ,'ਤੇ ਪੈਸਾ ਖਰਚ ਕਰਨਾ'], answer: 'ਸਮੇਂ ਦੇ ਨਾਲ ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਵਧਾਉਣਾ' },
        { question: 'ਮਿਊਚਲ ਫੰਡ ਕੀ ਹੈ?', options: ['ਇੱਕ ਫੰਡ ਜਿਸ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਵਿਅਕਤੀ ਨਿਵੇਸ਼ ਕਰ ਸਕਦਾ ਹੈ', 'ਇੱਕ ਫੰਡ ਜਿੱਥੇ ਬਹੁਤ ਸਾਰੇ ਨਿਵੇਸ਼ਕਾਂ ਦਾ ਪੈਸਾ ਸਟਾਕ, ਬਾਂਡ ਆਦਿ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨ ਲਈ ਇਕੱਠਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ', 'ਇੱਕ ਸਰਕਾਰੀ ਕਰਜ਼ਾ ਪ੍ਰੋਗਰਾਮ', 'ਇੱਕ ਕਿਸਮ ਦਾ ਬੈਂਕ ਖਾਤਾ'], answer: 'ਇੱਕ ਫੰਡ ਜਿੱਥੇ ਬਹੁਤ ਸਾਰੇ ਨਿਵੇਸ਼ਕਾਂ ਦਾ ਪੈਸਾ ਸਟਾਕ, ਬਾਂਡ ਆਦਿ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨ ਲਈ ਇਕੱਠਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ' },
        { question: '“ਵਿਭਿੰਨਤਾ” (diversification) ਦਾ ਕੀ ਅਰਥ ਹੈ?', options: ['ਆਪਣਾ ਸਾਰਾ ਪੈਸਾ ਇੱਕ ਕੰਪਨੀ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨਾ', 'ਜੋਖਮ ਘਟਾਉਣ ਲਈ ਵੱਖ-ਵੱਖ ਸੰਪਤੀਆਂ ਵਿੱਚ ਆਪਣੇ ਨਿਵੇਸ਼ ਨੂੰ ਫੈਲਾਉਣਾ', 'ਇੱਕ ਬਚਤ ਖਾਤੇ ਵਿੱਚ ਪੈਸਾ ਰੱਖਣਾ', 'ਨਿਵੇਸ਼ ਸਲਾਹ ਲਈ ਉੱਚ ਫੀਸ ਦਾ ਭੁਗਤਾਨ ਕਰਨਾ'], answer: 'ਜੋਖਮ ਘਟਾਉਣ ਲਈ ਵੱਖ-ਵੱਖ ਸੰਪਤੀਆਂ ਵਿੱਚ ਆਪਣੇ ਨਿਵੇਸ਼ ਨੂੰ ਫੈਲਾਉਣਾ' },
        { question: '“ਲੰਮੇ ਸਮੇਂ” (long-term) ਦਾ ਨਿਵੇਸ਼ ਕੀ ਹੈ?', options: ['ਇੱਕ ਸਾਲ ਤੋਂ ਘੱਟ ਸਮੇਂ ਲਈ ਰੱਖਿਆ ਗਿਆ ਨਿਵੇਸ਼', '5 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਸਮੇਂ ਲਈ ਰੱਖਿਆ ਗਿਆ ਨਿਵੇਸ਼', 'ਇੱਕ ਨਿਵੇਸ਼ ਜੋ ਮਹੀਨਾਵਾਰ ਲਾਭਅੰਸ਼ ਦਿੰਦਾ ਹੈ', 'ਬੈਂਕ ਤੋਂ ਕਰਜ਼ਾ'], answer: '5 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਸਮੇਂ ਲਈ ਰੱਖਿਆ ਗਿਆ ਨਿਵੇਸ਼' },
      ],
      'empowered-women-video': [
        { question: 'ਔਰਤਾਂ ਲਈ ਵਿੱਤੀ ਸਾਖਰਤਾ ਦਾ ਇੱਕ ਮੁੱਖ ਲਾਭ ਕੀ ਹੈ?', options: ['ਇਹ ਉਹਨਾਂ ਨੂੰ ਦੂਜੇ ਲੋਕਾਂ ਦੇ ਪੈਸੇ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ', 'ਇਹ ਉਹਨਾਂ ਨੂੰ ਵਧੇਰੇ ਆਜ਼ਾਦ ਬਣਨ ਅਤੇ ਬਿਹਤਰ ਵਿੱਤੀ ਫੈਸਲੇ ਲੈਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ', 'ਇਹ ਉਹਨਾਂ ਨੂੰ ਵਧੇਰੇ ਨੌਕਰੀ ਦੀਆਂ ਤਰੱਕੀਆਂ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ', 'ਇਹ ਉਹਨਾਂ ਨੂੰ ਖੁੱਲ੍ਹੇਆਮ ਪੈਸਾ ਖਰਚ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ'], answer: 'ਇਹ ਉਹਨਾਂ ਨੂੰ ਵਧੇਰੇ ਆਜ਼ਾਦ ਬਣਨ ਅਤੇ ਬਿਹਤਰ ਵਿੱਤੀ ਫੈਸਲੇ ਲੈਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ' },
        { question: 'ਆਰਥਿਕ ਤੌਰ ਤੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਔਰਤਾਂ ਆਪਣੇ ਪਰਿਵਾਰਾਂ ਦੀ ਮਦਦ ਕਿਵੇਂ ਕਰਦੀਆਂ ਹਨ?', options: ['ਸਾਰੇ ਪਰਿਵਾਰਕ ਫੈਸਲੇ ਇਕੱਲੇ ਲੈ ਕੇ', 'ਆਪਣੇ ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਤੋਂ ਪੈਸੇ ਲੁਕਾ ਕੇ', 'ਘਰੇਲੂ ਆਮਦਨ ਅਤੇ ਬੱਚਿਆਂ ਦੀ ਸਿੱਖਿਆ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾ ਕੇ', 'ਦੋਸਤਾਂ ਤੋਂ ਕਰਜ਼ੇ ਮੰਗ ਕੇ'], answer: 'ਘਰੇਲੂ ਆਮਦਨ ਅਤੇ ਬੱਚਿਆਂ ਦੀ ਸਿੱਖਿਆ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾ ਕੇ' },
        { question: 'ਮਾਈਕ੍ਰੋਫਾਈਨੈਂਸ (microfinance) ਕੀ ਹੈ?', options: ['ਗਰੀਬ ਵਿਅਕਤੀਆਂ ਜਾਂ ਸਮੂਹਾਂ ਨੂੰ ਛੋਟੇ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਦਿੱਤੇ ਗਏ ਛੋਟੇ ਕਰਜ਼ੇ', 'ਇੱਕ ਵੱਡੇ ਪੱਧਰ ','ਤੇ ਨਿਵੇਸ਼ ਬੈਂਕਿੰਗ ਪ੍ਰਣਾਲੀ', 'ਇੱਕ ਕਿਸਮ ਦਾ ਸਰਕਾਰੀ ਟੈਕਸ', 'ਬੱਚਿਆਂ ਲਈ ਇੱਕ ਬਚਤ ਪ੍ਰੋਗਰਾਮ'], answer: 'ਗਰੀਬ ਵਿਅਕਤੀਆਂ ਜਾਂ ਸਮੂਹਾਂ ਨੂੰ ਛੋਟੇ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਦਿੱਤੇ ਗਏ ਛੋਟੇ ਕਰਜ਼ੇ' },
        { question: 'ਵੀਡੀਓ ਦੱਸਦਾ ਹੈ ਕਿ ਔਰਤਾਂ:', options: ['ਮਰਦਾਂ ਤੇ ਨਿਰਭਰ ਕਰਦੀਆਂ ਹਨ', 'ਬੇਲੋੜੀਆਂ ਚੀਜ਼ਾਂ ','ਤੇ ਪੈਸਾ ਬਰਬਾਦ ਕਰਦੀਆਂ ਹਨ', 'ਆਪਣੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਤਬਦੀਲੀ ਦੇ ਏਜੰਟ ਹੋ ਸਕਦੀਆਂ ਹਨ', 'ਸਿਰਫ਼ ਆਪਣੀ ਨਿੱਜੀ ਦੌਲਤ ਦੀ ਪਰਵਾਹ ਕਰਦੀਆਂ ਹਨ'], answer: 'ਆਪਣੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਤਬਦੀਲੀ ਦੇ ਏਜੰਟ ਹੋ ਸਕਦੀਆਂ ਹਨ' },
        { question: 'ਵੀਡੀਓ ਦੇ ਅਨੁਸਾਰ, ਵਿੱਤੀ ਸਾਖਰਤਾ ਸਿਰਫ ਪੈਸੇ ਬਾਰੇ ਨਹੀਂ ਹੈ, ਸਗੋਂ ਇਸ ਬਾਰੇ ਵੀ ਹੈ:', options: ['ਇੱਕ ਡਿਗਰੀ ਪ੍ਰਾਪਤ ਕਰਨਾ', 'ਆਤਮ ਵਿਸ਼ਵਾਸ ਅਤੇ ਸਵੈ-ਮਾਣ ਬਣਾਉਣਾ', 'ਨਵੀਂ ਜਾਇਦਾਦ ਖਰੀਦਣਾ', 'ਦੁਨੀਆ ਦੀ ਯਾਤਰਾ ਕਰਨਾ'], answer: 'ਆਤਮ ਵਿਸ਼ਵਾਸ ਅਤੇ ਸਵੈ-ਮਾਣ ਬਣਾਉਣਾ' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'ਪਹਿਲੇ ਕਦਮ', desc: 'ਆਪਣਾ ਪਹਿਲਾ ਪਾਠ ਪੂਰਾ ਕਰੋ', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'ਬਜਟਿੰਗ ਪ੍ਰੋ', desc: 'ਬਜਟਿੰਗ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'ਵੀਕ ਵਾਰੀਅਰ', desc: '7 ਦਿਨਾਂ ਦੀ ਸਟ੍ਰੀਕ ਬਣਾਏ ਰੱਖੋ', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'ਫਾਇਨਾਂਸ ਕਵੀਨ', desc: 'ਪੱਧਰ 5 ਤੇ ਪਹੁੰਚੋ', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'ਨਿਵੇਸ਼ ਕੈਲਕੁਲੇਟਰ ਐਕਸੈਸ', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'ਅਨੰਨਿਆ ਕੇ.', achievement: '6 ਮਹੀਨਿਆਂ ਵਿੱਚ ₹50,000 ਬਚਾਏ', level: 8 },
      { name: 'ਪ੍ਰਿਆ ਐਸ.', achievement: '23 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨਾ ਸ਼ੁਰੂ ਕੀਤਾ', level: 6 },
      { name: 'ਮੀਰਾ ਆਰ.', achievement: 'ਐਮਰਜੈਂਸੀ ਫੰਡ ਬਣਾਇਆ', level: 7 }
    ],
  },
  ml: {
    // Homepage Translations
    welcome_message: 'സുപ്രഭാതം, പ്രിയ!',
    grow_wealth_question: 'ഇന്ന് നിങ്ങളുടെ സമ്പത്ത് വർദ്ധിപ്പിക്കാൻ തയ്യാറാണോ?',
    level: 'നില',
    todays_tasks_heading: 'ഇന്നത്തെ ജോലികൾ',
    watch_lesson_task: 'ഇന്നത്തെ പാഠം കാണുക',
    take_quiz_task: 'ഒരു ക്വിസ് എടുക്കുക',
    check_portfolio_task: 'നിക്ഷേപ പോർട്ട്‌ഫോളിയോ പരിശോധിക്കുക',
    finance_tip_heading: 'ഇന്നത്തെ ധനകാര്യ നുറുങ്ങുകൾ',
    finance_tip_quote: 'നിങ്ങളുടെ സാമ്പത്തിക സ്വാതന്ത്ര്യം നിങ്ങളുടെ മഹത്വമാണ്. അതിനെ ഓരോ ഘട്ടത്തിലായി നിർമ്മിക്കുക.',
    learn_button: 'പഠിക്കുക',
    invest_button: 'നിക്ഷേപിക്കുക',
    community_button: 'സമൂഹം',
    profile_button: 'പ്രൊഫൈൽ',
    guest_name: 'അതിഥി',

    // Learn Page Translations
    learn_finance_heading: 'ഫിനാൻസ് പഠിക്കുക',
    learn_finance_subheading: 'പണ മാനേജ്മെന്റ് കഴിവുകൾ നേടുക',
    overall_progress: 'മൊത്തത്തിലുള്ള പുരോഗതി',
    lessons_label: 'പാഠങ്ങൾ',
    financial_basics_title: 'സാമ്പത്തിക അടിസ്ഥാനകാര്യങ്ങൾ',
    financial_basics_desc: 'പണവും ബഡ്ജറ്റിംഗും മനസ്സിലാക്കുക',
    smart_saving_title: 'സ്മാർട്ട് സമ്പാദ്യ തന്ത്രങ്ങൾ',
    smart_saving_desc: 'നിങ്ങളുടെ അടിയന്തര ഫണ്ട് നിർമ്മിക്കുക',
    
    // Video Titles
    shg_video_title: 'SHG എന്താണ്? സ്വയം സഹായ സംഘം',
    shg_video_desc: 'സ്വയം സഹായ സംഘങ്ങൾ സ്ത്രീകളെ സാമ്പത്തികമായും സാമൂഹികമായും എങ്ങനെ ശാക്തീകരിക്കുന്നുവെന്ന് അറിയുക.',
    finance_freedom_video_title: 'സ്ത്രീകൾക്കുള്ള സാമ്പത്തിക സ്വാതന്ത്ര്യം',
    finance_freedom_video_desc: 'സാമ്പത്തിക സ്വാതന്ത്ര്യത്തിനുള്ള പ്രചോദനാത്മക കഥകളും പ്രായോഗിക നുറുങ്ങുകളും.',
    investing_for_beginners_title: 'പുതിയവർക്കുള്ള നിക്ഷേപം',
    investing_for_beginners_desc: 'നിക്ഷേപം ആരംഭിക്കാനുള്ള ഒരു ലളിതമായ വഴികാട്ടി.',
    empowered_women_title: 'ശാക്തീകരിക്കപ്പെട്ട സ്ത്രീകൾ - ജീവിതം മാറ്റുന്നു',
    empowered_women_desc: 'സാമ്പത്തിക സാക്ഷരതയിലൂടെ തങ്ങളുടെ ജീവിതം മാറ്റിയ സ്ത്രീകളുടെ കഥകൾ.',

    completed_status: 'പൂർത്തിയായി',
    done_status: 'പൂർത്തിയാക്കി',
    take_quiz_button: 'ക്വിസ് എടുക്കുക',
    start_button: 'ആരംഭിക്കുക',
    keep_learning_text: 'റിവാർഡുകൾ അൺലോക്ക് ചെയ്യാൻ പഠിച്ചുകൊണ്ടേയിരിക്കുക!',
    complete_lessons_text: 'ലെവൽ 4-ൽ എത്താൻ 3 പാഠങ്ങൾ കൂടി പൂർത്തിയാക്കുക',
    view_rewards_button: 'റിവാർഡുകൾ കാണുക',

    // Achievements Page Translations
    your_achievements_heading: 'നിങ്ങളുടെ നേട്ടങ്ങൾ',
    track_progress_text: 'നിങ്ങളുടെ പുരോഗതിയും പ്രതിഫലങ്ങളും ട്രാക്ക് ചെയ്യുക',
    xp_points_label: 'എക്സ്പി പോയിന്റുകൾ',
    xp_to_next_level_text: 'അടുത്ത ലെവലിലേക്കുള്ള എക്സ്പി',
    day_streak_label: 'ദിവസത്തെ സ്ട്രീക്ക്',
    badges_label: 'ബാഡ്ജുകൾ',
    achievements_heading: 'നേട്ടങ്ങൾ',
    upcoming_rewards_heading: 'വരാനിരിക്കുന്ന പ്രതിഫലങ്ങൾ',
    upcoming_rewards_text: 'നിക്ഷേപ കാൽക്കുലേറ്റർ ആക്സസ്',
    women_like_you_heading: 'നിങ്ങളെപ്പോലുള്ള സ്ത്രീകൾ',
    back_to_learn_button: 'പഠനത്തിലേക്ക് തിരികെ',

    // Quiz and Reward-specific Translations
    quiz_heading: 'ക്വിസ്',
    submit_button: 'സമർപ്പിക്കുക',
    correct_answer: 'ശരിയാണ്!',
    wrong_answer: 'തെറ്റാണ്. വീണ്ടും ശ്രമിക്കുക.',
    quiz_results_heading: 'ക്വിസ് ഫലങ്ങൾ',
    correct_answers_label: 'ശരിയായ ഉത്തരങ്ങൾ',
    earned_status: 'നേടി',
    locked_status: 'ലോക്ക് ചെയ്തത്',
    
    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'ഒരു ബഡ്ജറ്റ് ഉണ്ടാക്കുന്നതിനുള്ള ആദ്യത്തെ പടി എന്താണ്?', options: ['നിങ്ങളുടെ വരുമാനവും ചെലവുകളും ട്രാക്ക് ചെയ്യുക', 'ഒരു പുതിയ കാർ വാങ്ങുക', 'സ്റ്റോക്കുകളിൽ നിക്ഷേപിക്കുക', 'നിങ്ങളുടെ സുഹൃത്തുക്കളുടെ കടം വീട്ടുക'], answer: 'നിങ്ങളുടെ വരുമാനവും ചെലവുകളും ട്രാക്ക് ചെയ്യുക' },
        { question: '“ക്യാഷ് ഫ്ലോ” എന്നാൽ എന്താണ്?', options: ['നിങ്ങളുടെ പഴ്സിലുള്ള പണം', 'നിങ്ങളുടെ അക്കൗണ്ടിലേക്കും പുറത്തേക്കുമുള്ള പണത്തിന്റെ ഒഴുക്ക്', 'നിങ്ങളുടെ സമ്പാദ്യത്തിന്റെ മൂല്യം', 'ഒരു ഉൽപ്പന്നത്തിന്റെ വില'], answer: 'നിങ്ങളുടെ അക്കൗണ്ടിലേക്കും പുറത്തേക്കുമുള്ള പണത്തിന്റെ ഒഴുക്ക്' },
        { question: 'എന്തുകൊണ്ടാണ് ഒരു അടിയന്തിര ഫണ്ട് പ്രധാനം?', options: ['അവധിക്കാലങ്ങൾക്കായി', 'അപ്രതീക്ഷിത ചെലവുകൾക്കായി', 'ആഢംബര വസ്തുക്കൾ വാങ്ങാൻ', 'സുഹൃത്തുക്കൾക്ക് നൽകാൻ'], answer: 'അപ്രതീക്ഷിത ചെലവുകൾക്കായി' },
        { question: 'ഇവയിൽ ഏതാണ് ആവശ്യം, ആഗ്രഹമല്ല?', options: ['ഒരു പുതിയ സ്മാർട്ട്‌ഫോൺ', 'ഭക്ഷണം', 'ഒരു ഡിസൈനർ ബാഗ്', 'ഒരു ആഢംബര കാർ'], answer: 'ഭക്ഷണം' },
        { question: '50/30/20 ബഡ്ജറ്റിംഗ് നിയമം എന്താണ്?', options: ['50% സമ്പാദ്യം, 30% ആവശ്യങ്ങൾ, 20% ആഗ്രഹങ്ങൾ', '50% ആവശ്യങ്ങൾ, 30% ആഗ്രഹങ്ങൾ, 20% സമ്പാദ്യം', '50% ആഗ്രഹങ്ങൾ, 30% ആവശ്യങ്ങൾ, 20% സമ്പാദ്യം', '50% ആവശ്യങ്ങൾ, 30% സമ്പാദ്യം, 20% ആഗ്രഹങ്ങൾ'], answer: '50% ആവശ്യങ്ങൾ, 30% ആഗ്രഹങ്ങൾ, 20% സമ്പാദ്യം' },
      ],
      'smart-saving': [
        { question: 'ഒരു അടിയന്തിര ഫണ്ട് എന്തിനാണ് ഉപയോഗിക്കുന്നത്?', options: ['ആഢംബര വസ്തുക്കൾ വാങ്ങാൻ', 'അവധിക്കാലങ്ങൾക്കായി', 'വൈദ്യസഹായ ബില്ലുകൾ അല്ലെങ്കിൽ ജോലി നഷ്ടപ്പെടുന്നത് പോലുള്ള അപ്രതീക്ഷിത ചെലവുകൾക്ക്', 'ഓഹരി വിപണിയിൽ നിക്ഷേപിക്കാൻ'], answer: 'വൈദ്യസഹായ ബില്ലുകൾ അല്ലെങ്കിൽ ജോലി നഷ്ടപ്പെടുന്നത് പോലുള്ള അപ്രതീക്ഷിത ചെലവുകൾക്ക്' },
        { question: '"72-ന്റെ നിയമം" എന്താണ്?', options: ['പണം ഇരട്ടിയാകാൻ എടുക്കുന്ന സമയം കണക്കാക്കുന്നതിനുള്ള ഒരു സൂത്രവാക്യം', 'ഒരു ബഡ്ജറ്റിംഗ് രീതി', 'ഒരു നികുതി തന്ത്രം', 'ബോണ്ടുകളിൽ നിക്ഷേപിക്കുന്നതിനുള്ള ഒരു നിയമം'], answer: 'പണം ഇരട്ടിയാകാൻ എടുക്കുന്ന സമയം കണക്കാക്കുന്നതിനുള്ള ഒരു സൂത്രവാക്യം' },
        { question: 'കൂട്ടുപലിശ (Compounding Interest) എന്താണ്?', options: ['നിങ്ങളുടെ ആദ്യ നിക്ഷേപത്തിലുള്ള പലിശ മാത്രം', 'നിങ്ങളുടെ ആദ്യ നിക്ഷേപത്തിലും മുൻപ് ലഭിച്ച പലിശയിലും ലഭിക്കുന്ന പലിശ', 'ഒരു നിശ്ചിത റിട്ടേൺ നിരക്ക്', 'നിക്ഷേപത്തിലുള്ള ഒരു സർക്കാർ ഫീസ്'], answer: 'നിങ്ങളുടെ ആദ്യ നിക്ഷേപത്തിലും മുൻപ് ലഭിച്ച പലിശയിലും ലഭിക്കുന്ന പലിശ' },
        { question: 'പണം ലാഭിക്കുന്നതിനുള്ള ഏറ്റവും നല്ല മാർഗ്ഗം:', options: ['ഒറ്റയടിക്ക് എല്ലാം ചെലവഴിക്കുക', 'ലാഭിക്കാൻ മാസാവസാനം വരെ കാത്തിരിക്കുക', 'ആദ്യം നിങ്ങൾക്കുതന്നെ പണം നൽകുക (ചെലവഴിക്കുന്നതിനു മുൻപ് ലാഭിക്കുക)', 'ലാഭിക്കാൻ കടം വാങ്ങുക'], answer: 'ആദ്യം നിങ്ങൾക്കുതന്നെ പണം നൽകുക (ചെലവഴിക്കുന്നതിനു മുൻപ് ലാഭിക്കുക)' },
        { question: 'സമ്പാദ്യത്തിലെ "ദ്രവ്യത" (liquidity) എന്താണ്?', options: ['നിങ്ങൾക്ക് എത്ര പലിശ ലഭിക്കുന്നു', 'നിങ്ങളുടെ പണം എത്ര വേഗത്തിൽ ഉപയോഗിക്കാൻ കഴിയും', 'നിങ്ങൾ എത്ര പണം ലാഭിച്ചു', 'നിങ്ങളുടെ സമ്പാദ്യത്തിലുള്ള നികുതി നിരക്ക്'], answer: 'നിങ്ങളുടെ പണം എത്ര വേഗത്തിൽ ഉപയോഗിക്കാൻ കഴിയും' },
      ],
      'shg-video': [
        { question: 'SHG എന്നാൽ എന്താണ്?', options: ['സ്മാർട്ട് ഹെൽപ്പ് ഗ്രൂപ്പ്', 'സ്വയം സഹായ സംഘം', 'സ്ട്രോംഗ് ഹാർമണി ഗ്രൂപ്പ്', 'സോഷ്യൽ ഹെൽപ്പ് ഗ്രൂപ്പ്'], answer: 'സ്വയം സഹായ സംഘം' },
        { question: 'ഒരു SHG-യുടെ പ്രധാന പ്രവർത്തനം എന്താണ്?', options: ['വലിയ ബിസിനസ് നിക്ഷേപങ്ങൾ', 'പാട്ട് പാടാൻ സ്ത്രീകൾ ഒത്തുചേരുന്നു', 'അംഗങ്ങൾ ചെറിയ പതിവ് സമ്പാദ്യം നടത്തുന്നു', 'കമ്മ്യൂണിറ്റി പരിപാടികൾ സംഘടിപ്പിക്കുന്നു'], answer: 'അംഗങ്ങൾ ചെറിയ പതിവ് സമ്പാദ്യം നടത്തുന്നു' },
        { question: 'ഒരു SHG ശേഖരിക്കുന്ന പണത്തിന്റെ ലക്ഷ്യം എന്താണ്?', options: ['സർക്കാരിന് നൽകാൻ', 'ആവശ്യമുള്ള ഒരംഗത്തിന് വായ്പ നൽകാൻ', 'എല്ലാ അംഗങ്ങൾക്കും പുതിയ വസ്ത്രങ്ങൾ വാങ്ങാൻ', 'ഗ്രൂപ്പിന് വേണ്ടി സ്ഥലം വാങ്ങാൻ'], answer: 'ആവശ്യമുള്ള ഒരംഗത്തിന് വായ്പ നൽകാൻ' },
        { question: 'SHG-കൾ സ്ത്രീകളെ എങ്ങനെയാണ് ശാക്തീകരിക്കുന്നത്?', options: ['രാഷ്ട്രീയത്തിൽ അധികാരം നൽകിക്കൊണ്ട്', 'അവരെ പാചകം പഠിപ്പിച്ചുകൊണ്ട്', 'സമ്പാദ്യവും സാമ്പത്തിക സാക്ഷരതയും പ്രോത്സാഹിപ്പിച്ചുകൊണ്ട്', 'സൗജന്യ യാത്ര നൽകിക്കൊണ്ട്'], answer: 'സമ്പാദ്യവും സാമ്പത്തിക സാക്ഷരതയും പ്രോത്സാഹിപ്പിച്ചുകൊണ്ട്' },
        { question: 'ഒരു SHG ഒരു സ്ത്രീയെ ഒരു ചെറിയ ബിസിനസ്സ് ആരംഭിക്കാൻ സഹായിക്കുന്നു. ഇത് എന്തിന്റെ ഉദാഹരണമാണ്?', options: ['ധർമ്മം', 'സാമ്പത്തിക ഉൾപ്പെടുത്തൽ', 'ഒരു വലിയ ബാങ്കിൽ നിന്നുള്ള വായ്പ', 'ഒരു സമ്മാനം'], answer: 'സാമ്പത്തിക ഉൾപ്പെടുത്തൽ' },
      ],
      'finance-freedom-video': [
        { question: 'സാമ്പത്തിക സ്വാതന്ത്ര്യം എന്നാൽ:', options: ['ധനികനാവുക', 'പണത്തെക്കുറിച്ച് ആശങ്കപ്പെടാതെ ജീവിതത്തിലെ തിരഞ്ഞെടുപ്പുകൾ നടത്താനുള്ള കഴിവ്', 'ഒരിക്കലും ജോലി ചെയ്യേണ്ടതില്ല', 'ലോട്ടറി അടിക്കുക'], answer: 'പണത്തെക്കുറിച്ച് ആശങ്കപ്പെടാതെ ജീവിതത്തിലെ തിരഞ്ഞെടുപ്പുകൾ നടത്താനുള്ള കഴിവ്' },
        { question: 'സാമ്പത്തിക സ്വാതന്ത്ര്യത്തിനുള്ള ഒരു പ്രധാന പടി:', options: ['ഒരു ബഡ്ജറ്റ് ഉണ്ടാക്കുക', 'വില കൂടിയ സാധനങ്ങൾ വാങ്ങുക', 'ഉയർന്ന പലിശയുള്ള ലോൺ എടുക്കുക', 'ഒരിക്കലും പണം ലാഭിക്കാതിരിക്കുക'], answer: 'ഒരു ബഡ്ജറ്റ് ഉണ്ടാക്കുക' },
        { question: 'സ്ത്രീകൾ സാമ്പത്തികമായി സ്വതന്ത്രരാകേണ്ടത് പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?', options: ['സുഹൃത്തുക്കളെ ആകർഷിക്കാൻ', 'മറ്റുള്ളവരെ ആശ്രയിക്കാൻ', 'അവരുടെ ജീവിതത്തിലും ഭാവയിലും നിയന്ത്രണം നേടാൻ', 'നികുതികൾ ഒഴിവാക്കാൻ'], answer: 'അവരുടെ ജീവിതത്തിലും ഭാവയിലും നിയന്ത്രണം നേടാൻ' },
        { question: 'വീഡിയോ പ്രകാരം സാമ്പത്തിക സ്വാതന്ത്ര്യം ഒരു:', options: ['സ്വപ്നം', 'മഹാശക്തി', 'ഒരു മിഥ്യ', 'ഒരു ഹോബി'], answer: 'മഹാശക്തി' },
        { question: 'സാമ്പത്തിക കാര്യങ്ങളെക്കുറിച്ച് പഠിക്കാൻ തുടങ്ങാനുള്ള ഏറ്റവും നല്ല സമയം:', options: ['നിങ്ങൾ പ്രായമാകുമ്പോൾ', 'നിങ്ങൾ ഒരു വിദ്യാർത്ഥിയായിരിക്കുമ്പോൾ', 'ഇന്നലെ', 'ഒരിക്കലും ഇല്ല'], answer: 'ഇന്നലെ' },
      ],
      'investing-for-beginners-video': [
        { question: 'സ്റ്റോക്ക് എന്നാൽ എന്താണ്?', options: ['ഒരു തരം ബോണ്ട്', 'വായ്പയുടെ ഒരു രൂപം', 'ഒരു കമ്പനിയിലെ ഉടമസ്ഥാവകാശത്തിന്റെ ഒരു ചെറിയ ഭാഗം', 'ഒരു തരം സർക്കാർ സർട്ടിഫിക്കറ്റ്'], answer: 'ഒരു കമ്പനിയിലെ ഉടമസ്ഥാവകാശത്തിന്റെ ഒരു ചെറിയ ഭാഗം' },
        { question: 'നിക്ഷേപത്തിന്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?', options: ['വേഗത്തിൽ പണം നഷ്ടപ്പെടുത്തുക', 'കാലക്രമേണ നിങ്ങളുടെ പണം വളർത്തുക', 'കടം വീട്ടുക', 'ആഡംബര വസ്തുക്കൾക്കായി പണം ചെലവഴിക്കുക'], answer: 'കാലക്രമേണ നിങ്ങളുടെ പണം വളർത്തുക' },
        { question: 'മ്യൂച്വൽ ഫണ്ട് എന്നാൽ എന്താണ്?', options: ['ഒരാൾക്ക് മാത്രം നിക്ഷേപിക്കാൻ കഴിയുന്ന ഒരു ഫണ്ട്', 'പല നിക്ഷേപകരിൽ നിന്നുള്ള പണം ഓഹരികൾ, ബോണ്ടുകൾ തുടങ്ങിയവയിൽ നിക്ഷേപിക്കാൻ ശേഖരിക്കുന്ന ഒരു ഫണ്ട്', 'ഒരു സർക്കാർ ലോൺ പ്രോഗ്രാം', 'ഒരു തരം ബാങ്ക് അക്കൗണ്ട്'], answer: 'പല നിക്ഷേപകരിൽ നിന്നുള്ള പണം ഓഹരികൾ, ബോണ്ടുകൾ തുടങ്ങിയവയിൽ നിക്ഷേപിക്കാൻ ശേഖരിക്കുന്ന ഒരു ഫണ്ട്' },
        { question: '"വൈവിധ്യവൽക്കരണം" (diversification) എന്നതിനർത്ഥം എന്താണ്?', options: ['നിങ്ങളുടെ എല്ലാ പണവും ഒരു കമ്പനിയിൽ നിക്ഷേപിക്കുക', 'റിസ്ക് കുറയ്ക്കുന്നതിന് വിവിധ ആസ്തികളിൽ നിങ്ങളുടെ നിക്ഷേപം വ്യാപിപ്പിക്കുക', 'ഒരു സമ്പാദ്യ അക്കൗണ്ടിൽ പണം വെക്കുക', 'നിക്ഷേപ ഉപദേശത്തിനായി ഉയർന്ന ഫീസ് നൽകുക'], answer: 'റിസ്ക് കുറയ്ക്കുന്നതിന് വിവിധ ആസ്തികളിൽ നിങ്ങളുടെ നിക്ഷേപം വ്യാപിപ്പിക്കുക' },
        { question: '"ദീർഘകാല" (long-term) നിക്ഷേപം എന്താണ്?', options: ['ഒരു വർഷത്തിൽ താഴെ സൂക്ഷിക്കുന്ന നിക്ഷേപം', '5 വർഷത്തിൽ കൂടുതൽ സൂക്ഷിക്കുന്ന നിക്ഷേപം', 'പ്രതിമാസ ലാഭവിഹിതം നൽകുന്ന നിക്ഷേപം', 'ബാങ്കിൽ നിന്നുള്ള വായ്പ'], answer: '5 വർഷത്തിൽ കൂടുതൽ സൂക്ഷിക്കുന്ന നിക്ഷേപം' },
      ],
      'empowered-women-video': [
        { question: 'സ്ത്രീകൾക്ക് സാമ്പത്തിക സാക്ഷരതയുടെ പ്രധാന നേട്ടം എന്താണ്?', options: ['ഇത് മറ്റുള്ളവരുടെ പണം കൈകാര്യം ചെയ്യാൻ അവരെ സഹായിക്കുന്നു', 'കൂടുതൽ സ്വതന്ത്രരാകാനും മികച്ച സാമ്പത്തിക തീരുമാനങ്ങൾ എടുക്കാനും ഇത് അവരെ സഹായിക്കുന്നു', 'കൂടുതൽ ജോലി പ്രൊമോഷനുകൾ നേടാൻ ഇത് അവരെ സഹായിക്കുന്നു', 'സ്വതന്ത്രമായി പണം ചെലവഴിക്കാൻ ഇത് അവരെ അനുവദിക്കുന്നു'], answer: 'കൂടുതൽ സ്വതന്ത്രരാകാനും മികച്ച സാമ്പത്തിക തീരുമാനങ്ങൾ എടുക്കാനും ഇത് അവരെ സഹായിക്കുന്നു' },
        { question: 'സാമ്പത്തികമായി ശാക്തീകരിക്കപ്പെട്ട സ്ത്രീകൾ അവരുടെ കുടുംബങ്ങളെ എങ്ങനെയാണ് സഹായിക്കുന്നത്?', options: ['എല്ലാ കുടുംബ തീരുമാനങ്ങളും ഒറ്റയ്ക്ക് എടുത്തുകൊണ്ട്', 'കുടുംബാംഗങ്ങളിൽ നിന്ന് പണം ഒളിപ്പിച്ചുകൊണ്ട്', 'വീട്ടുചെലവുകളിലും കുട്ടികളുടെ വിദ്യാഭ്യാസത്തിലും സംഭാവന നൽകിക്കൊണ്ട്', 'സുഹൃത്തുക്കളിൽ നിന്ന് വായ്പ ചോദിച്ചുകൊണ്ട്'], answer: 'വീട്ടുചെലവുകളിലും കുട്ടികളുടെ വിദ്യാഭ്യാസത്തിലും സംഭാവന നൽകിക്കൊണ്ട്' },
        { question: 'മൈക്രോഫിനാൻസ് (microfinance) എന്താണ്?', options: ['ചെറുകിട ബിസിനസുകൾ തുടങ്ങാൻ ദരിദ്ര വ്യക്തികൾക്കോ ​​ഗ്രൂപ്പുകൾക്കോ ​​നൽകുന്ന ചെറിയ വായ്പകൾ', 'വലിയ തോതിലുള്ള നിക്ഷേപ ബാങ്കിംഗ് സംവിധാനം', 'ഒരു തരം സർക്കാർ നികുതി', 'കുട്ടികൾക്കുള്ള ഒരു സമ്പാദ്യ പദ്ധതി'], answer: 'ചെറുകിട ബിസിനസുകൾ തുടങ്ങാൻ ദരിദ്ര വ്യക്തികൾക്കോ ​​ഗ്രൂപ്പുകൾക്കോ ​​നൽകുന്ന ചെറിയ വായ്പകൾ' },
        { question: 'സ്ത്രീകൾ എങ്ങനെയുള്ളവരാണെന്ന് വീഡിയോ എടുത്തു കാണിക്കുന്നു:', options: ['പുരുഷന്മാരെ ആശ്രയിക്കുന്നവർ', 'അനാവശ്യ വസ്തുക്കൾക്കായി പണം പാഴാക്കുന്നവർ', 'അവരുടെ കമ്മ്യൂണിറ്റികളിൽ മാറ്റത്തിന് ഏജന്റുമാരാകാൻ കഴിവുള്ളവർ', 'അവരുടെ വ്യക്തിപരമായ സമ്പത്തിനെക്കുറിച്ച് മാത്രം ശ്രദ്ധിക്കുന്നവർ'], answer: 'അവരുടെ കമ്മ്യൂണിറ്റികളിൽ മാറ്റത്തിന് ഏജന്റുമാരാകാൻ കഴിവുള്ളവർ' },
        { question: 'വീഡിയോ പ്രകാരം, സാമ്പത്തിക സാക്ഷരത പണത്തെക്കുറിച്ച് മാത്രമല്ല, ഇതിനെക്കുറിച്ചും കൂടിയാണ്:', options: ['ഒരു ഡിഗ്രി നേടുന്നതിനെക്കുറിച്ച്', 'ആത്മവിശ്വാസവും ആത്മാഭിമാനവും വളർത്തുന്നതിനെക്കുറിച്ച്', 'പുതിയ പ്രോപ്പർട്ടികൾ വാങ്ങുന്നതിനെക്കുറിച്ച്', 'ലോകം ചുറ്റി സഞ്ചരിക്കുന്നതിനെക്കുറിച്ച്'], answer: 'ആത്മവിശ്വാസവും ആത്മാഭിമാനവും വളർത്തുന്നതിനെക്കുറിച്ച്' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'ആദ്യ ചുവടുകൾ', desc: 'നിങ്ങളുടെ ആദ്യ പാഠം പൂർത്തിയാക്കുക', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'ബഡ്ജറ്റിംഗ് പ്രോ', desc: 'ബഡ്ജറ്റിംഗിന്റെ അടിസ്ഥാനകാര്യങ്ങൾ നേടുക', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'വീക്ക് വാരിയർ', desc: '7 ദിവസത്തെ സ്ട്രീക്ക് നിലനിർത്തുക', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'ഫിനാൻസ് ക്വീൻ', desc: 'ലെവൽ 5-ൽ എത്തുക', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'നിക്ഷേപ കാൽക്കുലേറ്റർ ആക്സസ്', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'അനന്യ കെ.', achievement: '6 മാസത്തിനുള്ളിൽ ₹50,000 ലാഭിച്ചു', level: 8 },
      { name: 'പ്രിയ എസ്.', achievement: '23-ആം വയസ്സിൽ നിക്ഷേപം ആരംഭിച്ചു', level: 6 },
      { name: 'മീര ആർ.', achievement: 'അടിയന്തിര ഫണ്ട് ഉണ്ടാക്കി', level: 7 }
    ],
  },
  uur: {
    // Homepage Translations
    welcome_message: 'صبح بخیر، پریا!',
    grow_wealth_question: 'آج اپنی دولت بڑھانے کے لیے تیار ہیں؟',
    level: 'سطح',
    todays_tasks_heading: 'آج کے کام',
    watch_lesson_task: 'آج کا سبق دیکھیں',
    take_quiz_task: 'ایک کوئز لیں',
    check_portfolio_task: 'سرمایہ کاری پورٹ فولیو چیک کریں',
    finance_tip_heading: 'آج کی مالی صلاح',
    finance_tip_quote: 'آپ کی مالی آزادی آپ کی سپر پاور ہے۔ اسے ایک ایک کر کے بنائیں',
    learn_button: 'سیکھیں',
    invest_button: 'سرمایہ کاری کریں',
    community_button: 'برادری',
    profile_button: 'پروفائل',
    guest_name: 'مہمان',
    
    // Learn Page Translations
    learn_finance_heading: 'مالیات سیکھیں',
    learn_finance_subheading: 'پیسے کے انتظام کی مہارتوں میں مہارت حاصل کریں',
    overall_progress: 'مجموعی ترقی',
    lessons_label: 'سبق',
    financial_basics_title: 'مالیاتی بنیادی باتیں',
    financial_basics_desc: 'پیسے اور بجٹ کو سمجھنا',
    smart_saving_title: 'سمارٹ بچت کی حکمت عملی',
    smart_saving_desc: 'آپ کے ہنگامی فنڈ کی تشکیل',
    
    // Video Titles
    shg_video_title: 'SHG کیا ہے؟ خود مدد گروپ',
    shg_video_desc: 'جانیں کہ خود مدد گروپس خواتین کو مالی اور سماجی طور پر کس طرح بااختیار بناتے ہیں۔',
    finance_freedom_video_title: 'خواتین کے لیے مالی آزادی',
    finance_freedom_video_desc: 'مالی آزادی کے لیے متاثر کن کہانیاں اور عملی تجاویز۔',
    investing_for_beginners_title: 'نئے لوگوں کے لیے سرمایہ کاری',
    investing_for_beginners_desc: 'سرمایہ کاری شروع کرنے کے لیے ایک آسان گائیڈ۔',
    empowered_women_title: 'بااختیار خواتین - زندگیوں کو بدلنا',
    empowered_women_desc: 'ان خواتین کی کہانیاں جنہوں نے مالی خواندگی کے ذریعے اپنی زندگیوں کو بدل دیا۔',

    completed_status: 'مکمل ہو گیا',
    done_status: 'ہو گیا',
    take_quiz_button: 'کوئز لیں',
    start_button: 'شروع کریں',
    keep_learning_text: 'انعامات کو غیر مقفل کرنے کے لئے سیکھتے رہیں!',
    complete_lessons_text: 'سطح 4 تک پہنچنے کے لیے مزید 3 اسباق مکمل کریں',
    view_rewards_button: 'انعامات دیکھیں',
    
    // Achievements Page Translations
    your_achievements_heading: 'آپ کی کامیابیاں',
    track_progress_text: 'اپنی ترقی اور انعامات کو ٹریک کریں',
    xp_points_label: 'ایکسپی پوائنٹس',
    xp_to_next_level_text: 'اگلی سطح کے لیے ایکسپی',
    day_streak_label: 'دن کی لکیر',
    badges_label: 'بیجز',
    achievements_heading: 'کامیابیاں',
    upcoming_rewards_heading: 'آنے والے انعامات',
    upcoming_rewards_text: 'سرمایہ کاری کیلکولیٹر تک رسائی',
    women_like_you_heading: 'آپ جیسی خواتین',
    back_to_learn_button: 'سیکھنے پر واپس',
    
    // Quiz and Reward-specific Translations
    quiz_heading: 'کوئز',
    submit_button: 'جمع کریں',
    correct_answer: 'درست!',
    wrong_answer: 'غلط ہے۔ دوبارہ کوشش کریں.',
    quiz_results_heading: 'کوئز کے نتائج',
    correct_answers_label: 'درست جوابات',
    earned_status: 'کمایا',
    locked_status: 'مقفل',
    
    // Data (Quiz Questions)
    quizzes: {
      'financial-basics': [
        { question: 'بجٹ بنانے کا پہلا قدم کیا ہے؟', options: ['اپنی آمدنی اور اخراجات کو ٹریک کریں', 'ایک نئی کار خریدیں', 'اسٹاک میں سرمایہ کاری کریں', 'اپنے دوستوں کا قرض ادا کریں'], answer: 'اپنی آمدنی اور اخراجات کو ٹریک کریں' },
        { question: '“کیش فلو” سے کیا مراد ہے؟', options: ['آپ کے پرس میں موجود پیسہ', 'آپ کے اکاؤنٹ سے پیسے کا اندر اور باہر جانا', 'آپ کی بچت کی قیمت', 'کسی پروڈکٹ کی قیمت'], answer: 'آپ کے اکاؤنٹ سے پیسے کا اندر اور باہر جانا' },
        { question: 'ہنگامی فنڈ کیوں ضروری ہے؟', options: ['چھٹیوں کے لیے', 'غیر متوقع اخراجات کے لیے', 'عیش و آرام کی چیزیں خریدنے کے لیے', 'دوستوں کو دینے کے لیے'], answer: 'غیر متوقع اخراجات کے لیے' },
        { question: 'ان میں سے کیا ضرورت ہے، خواہش نہیں؟', options: ['ایک نیا اسمارٹ فون', 'کھانا', 'ایک ڈیزائنر بیگ', 'ایک لگژری کار'], answer: 'کھانا' },
        { question: '50/30/20 بجٹ کا اصول کیا ہے؟', options: ['50% بچت، 30% ضروریات، 20% خواہشات', '50% ضروریات، 30% خواہشات، 20% بچت', '50% خواہشات، 30% ضروریات، 20% بچت', '50% ضروریات، 30% بچت، 20% خواہشات'], answer: '50% ضروریات، 30% خواہشات، 20% بچت' },
      ],
      'smart-saving': [
        { question: 'ہنگامی فنڈ کس لیے استعمال ہوتا ہے؟', options: ['عیش و آرام کی چیزوں کے لیے', 'چھٹیوں کے لیے', 'طبی بلوں یا نوکری کھونے جیسے غیر متوقع اخراجات کو پورا کرنے کے لیے', 'شیئر بازار میں سرمایہ کاری کے لیے'], answer: 'طبی بلوں یا نوکری کھونے جیسے غیر متوقع اخراجات کو پورا کرنے کے لیے' },
        { question: '“72 کا قاعدہ” کیا ہے؟', options: ['پیسہ دگنا ہونے میں کتنا وقت لگتا ہے اس کا حساب لگانے کا فارمولا', 'بجٹ بنانے کا طریقہ', 'ٹیکس کی حکمت عملی', 'بانڈز میں سرمایہ کاری کا قاعدہ'], answer: 'پیسہ دگنا ہونے میں کتنا وقت لگتا ہے اس کا حساب لگانے کا فارمولا' },
        { question: 'مرکب سود (Compounding Interest) کیا ہے؟', options: ['صرف آپ کی ابتدائی سرمایہ کاری پر سود', 'آپ کی ابتدائی سرمایہ کاری اور پہلے سے کمائے گئے سود پر کمایا گیا سود', 'آمدنی کی ایک مقررہ شرح', 'سرمایہ کاری پر حکومتی فیس'], answer: 'آپ کی ابتدائی سرمایہ کاری اور پہلے سے کمائے گئے سود پر کمایا گیا سود' },
        { question: 'پیسے بچانے کا بہترین طریقہ ہے:', options: ['اسے ایک ہی بار میں خرچ کر دیں', 'بچانے کے لیے مہینے کے آخر تک انتظار کریں', 'پہلے خود کو ادا کریں (خرچ کرنے سے پہلے بچائیں)', 'بچانے کے لیے قرض لیں'], answer: 'پہلے خود کو ادا کریں (خرچ کرنے سے پہلے بچائیں)' },
        { question: 'بچت میں "لیکویڈیٹی" (Liquidity) کا کیا مطلب ہے؟', options: ['آپ کتنا سود کماتے ہیں', 'آپ کتنی جلدی اپنے پیسے تک رسائی حاصل کر سکتے ہیں', 'آپ نے کتنا پیسہ بچایا ہے', 'آپ کی بچت پر ٹیکس کی شرح'], answer: 'آپ کتنی جلدی اپنے پیسے تک رسائی حاصل کر سکتے ہیں' },
      ],
      'shg-video': [
        { question: 'SHG کا کیا مطلب ہے؟', options: ['سمارٹ ہیلپ گروپ', 'خود مدد گروپ', 'سٹرانگ ہارمنی گروپ', 'سوشل ہیلتھ گروپ'], answer: 'خود مدد گروپ' },
        { question: 'ایک SHG کا بنیادی کام کیا ہے؟', options: ['بڑے کاروبار میں سرمایہ کاری', 'خواتین کا گانا گانے کے لیے ملنا', 'اراکین کی طرف سے چھوٹی باقاعدہ بچت کرنا', 'کمیونٹی تقریبات کا اہتمام کرنا'], answer: 'اراکین کی طرف سے چھوٹی باقاعدہ بچت کرنا' },
        { question: 'ایک SHG کے ذریعے جمع کیے گئے پیسے کا مقصد کیا ہے؟', options: ['حکومت کو دینا', 'ضرورت مند رکن کو قرض دینا', 'تمام اراکین کے لیے نئے کپڑے خریدنا', 'گروپ کے لیے زمین خریدنا'], answer: 'ضرورت مند رکن کو قرض دینا' },
        { question: 'SHGs خواتین کو کیسے بااختیار بناتے ہیں؟', options: ['انہیں سیاست میں طاقت دے کر', 'انہیں کھانا پکانا سکھا کر', 'بچت اور مالی خواندگی کو فروغ دے کر', 'مفت سفر فراہم کر کے'], answer: 'بچت اور مالی خواندگی کو فروغ دے کر' },
        { question: 'ایک SHG ایک خاتون کو ایک چھوٹا کاروبار شروع کرنے میں مدد کرتا ہے۔ یہ کس کی مثال ہے؟', options: ['خیرات', 'مالی شمولیت (Financial Inclusion)', 'ایک بڑے بینک سے قرض', 'ایک تحفہ'], answer: 'مالی شمولیت (Financial Inclusion)' },
      ],
      'finance-freedom-video': [
        { question: 'مالی آزادی کا مطلب ہے:', options: ['امیر ہونا', 'پیسے کی فکر کیے بغیر زندگی کے فیصلے کرنے کی صلاحیت رکھنا', 'کبھی کام نہ کرنا پڑے', 'لاٹری جیتنا'], answer: 'پیسے کی فکر کیے بغیر زندگی کے فیصلے کرنے کی صلاحیت رکھنا' },
        { question: 'مالی آزادی کا ایک اہم قدم ہے:', options: ['بجٹ بنانا', 'مہنگی چیزیں خریدنا', 'زیادہ شرح سود والا قرض لینا', 'کبھی پیسہ نہ بچانا'], answer: 'بجٹ بنانا' },
        { question: 'خواتین کے لیے مالی طور پر آزاد ہونا کیوں ضروری ہے؟', options: ['دوستوں کو متاثر کرنے کے لیے', 'دوسروں پر انحصار کرنے کے لیے', 'اپنی زندگی اور مستقبل پر کنٹرول رکھنے کے لیے', 'ٹیکس سے بچنے کے لیے'], answer: 'اپنی زندگی اور مستقبل پر کنٹرول رکھنے کے لیے' },
        { question: 'ویڈیو کے مطابق، مالی آزادی ایک:', options: ['خواب ہے', 'سپر پاور ہے', 'جھوٹ ہے', 'مشغلہ ہے'], answer: 'سپر پاور ہے' },
        { question: 'مالیات کے بارے میں سیکھنا شروع کرنے کا بہترین وقت ہے:', options: ['جب آپ بوڑھے ہوں', 'جب آپ طالب علم ہوں', 'کل', 'کبھی نہیں'], answer: 'کل' },
      ],
      'investing-for-beginners-video': [
        { question: 'اسٹاک کیا ہے؟', options: ['ایک قسم کا بانڈ', 'قرض کی ایک شکل', 'ایک کمپنی میں ملکیت کا ایک چھوٹا سا حصہ', 'ایک قسم کا سرکاری سرٹیفکیٹ'], answer: 'ایک کمپنی میں ملکیت کا ایک چھوٹا سا حصہ' },
        { question: 'سرمایہ کاری کا بنیادی مقصد کیا ہے؟', options: ['جلدی پیسہ کھونا', 'وقت کے ساتھ اپنے پیسے کو بڑھانا', 'قرض ادا کرنا', 'عیش و آرام کی اشیاء پر پیسہ خرچ کرنا'], answer: 'وقت کے ساتھ اپنے پیسے کو بڑھانا' },
        { question: 'میوچل فنڈ کیا ہے؟', options: ['ایک فنڈ جس میں صرف ایک شخص سرمایہ کاری کر سکتا ہے', 'ایک فنڈ جہاں کئی سرمایہ کاروں کا پیسہ اسٹاکس، بانڈز وغیرہ میں سرمایہ کاری کے لیے جمع کیا جاتا ہے', 'ایک حکومتی قرضہ پروگرام', 'ایک قسم کا بینک اکاؤنٹ'], answer: 'ایک فنڈ جہاں کئی سرمایہ کاروں کا پیسہ اسٹاکس، بانڈز وغیرہ میں سرمایہ کاری کے لیے جمع کیا جاتا ہے' },
        { question: '“تنوع” (Diversification) کا کیا مطلب ہے؟', options: ['اپنی تمام رقم ایک کمپنی میں لگانا', 'خطرہ کم کرنے کے لیے اپنی سرمایہ کاری کو مختلف اثاثوں میں پھیلانا', 'ایک بچت اکاؤنٹ میں پیسہ رکھنا', 'سرمایہ کاری کے مشورے کے لیے زیادہ فیس ادا کرنا'], answer: 'خطرہ کم کرنے کے لیے اپنی سرمایہ کاری کو مختلف اثاثوں میں پھیلانا' },
        { question: '“طویل مدتی” (Long-term) سرمایہ کاری کیا ہے؟', options: ['ایک سال سے کم عرصے کے لیے رکھی گئی سرمایہ کاری', '5 سال سے زیادہ عرصے کے لیے رکھی گئی سرمایہ کاری', 'ایک سرمایہ کاری جو ماہانہ منافع دیتی ہے', 'بینک سے قرض'], answer: '5 سال سے زیادہ عرصے کے لیے رکھی گئی سرمایہ کاری' },
      ],
      'empowered-women-video': [
        { question: 'خواتین کے لیے مالی خواندگی کا ایک اہم فائدہ کیا ہے؟', options: ['یہ انہیں دوسروں کے پیسوں کا انتظام کرنے میں مدد کرتا ہے', 'یہ انہیں زیادہ آزاد ہونے اور بہتر مالی فیصلے کرنے کے قابل بناتا ہے', 'یہ انہیں زیادہ نوکری میں ترقی دلانے میں مدد کرتا', 'یہ انہیں آزادانہ طور پر پیسہ خرچ کرنے کی اجازت دیتا ہے'], answer: 'یہ انہیں زیادہ آزاد ہونے اور بہتر مالی فیصلے کرنے کے قابل بناتا ہے' },
        { question: 'مالی طور پر بااختیار خواتین اپنے خاندانوں کی مدد کیسے کرتی ہیں؟', options: ['خاندان کے تمام فیصلے خود ہی کر کے', 'اپنے خاندان کے افراد سے پیسہ چھپا کر', 'گھریلو آمدنی اور بچوں کی تعلیم میں حصہ ڈال کر', 'دوستوں سے قرض مانگ کر'], answer: 'گھریلو آمدنی اور بچوں کی تعلیم میں حصہ ڈال کر' },
        { question: 'مائیکرو فنانس (Microfinance) کیا ہے؟', options: ['غریب افراد یا گروہوں کو چھوٹے کاروبار شروع کرنے میں مدد کے لیے دیے گئے چھوٹے قرضے', 'ایک بڑے پیمانے پر سرمایہ کاری بینکنگ سسٹم', 'ایک قسم کا سرکاری ٹیکس', 'بچوں کے لیے ایک بچت پروگرام'], answer: 'غریب افراد یا گروہوں کو چھوٹے کاروبار شروع کرنے میں مدد کے لیے دیے گئے چھوٹے قرضے' },
        { question: 'ویڈیو میں بتایا گیا ہے کہ خواتین:', options: ['مردوں پر انحصار کرتی ہیں', 'غیر ضروری چیزوں پر پیسہ ضائع کرتی ہیں', 'اپنی کمیونٹیز میں تبدیلی کا ذریعہ بن سکتی ہیں', 'صرف اپنی ذاتی دولت کی پرواہ کرتی ہیں'], answer: 'اپنی کمیونٹیز میں تبدیلی کا ذریعہ بن سکتی ہیں' },
        { question: 'ویڈیو کے مطابق، مالی خواندگی صرف پیسے کے بارے میں نہیں ہے، بلکہ یہ بھی ہے:', options: ['ڈگری حاصل کرنا', 'اعتماد اور خود اعتمادی پیدا کرنا', 'نئی جائیدادیں خریدنا', 'دنیا کا سفر کرنا'], answer: 'اعتماد اور خود اعتمادی پیدا کرنا' },
      ],
    },
    rewards: [
      { key: 'first_steps', title: 'پہلا قدم', desc: 'اپنا پہلا سبق مکمل کریں', type: 'badge', status: 'earned' },
      { key: 'budgeting_pro', title: 'بجٹ بنانے کا ماہر', desc: 'بجٹ بنانے کی بنیادی باتوں میں مہارت حاصل کریں', type: 'badge', status: 'earned' },
      { key: 'week_warrior', title: 'ہفتہ وار جنگجو', desc: '7 دن کی لکیر برقرار رکھیں', type: 'badge', status: 'earned' },
      { key: 'finance_queen', title: 'فنانس کوئین', desc: 'سطح 5 پر پہنچیں', type: 'badge', status: 'locked' }
    ],
    upcoming_rewards: [
      { key: 'level_4_access', title: 'سرمایہ کاری کیلکولیٹر تک رسائی', type: 'access', status: 'locked' }
    ],
    women_like_you: [
      { name: 'اننیا کے۔', achievement: '6 ماہ میں ₹50,000 بچائے', level: 8 },
      { name: 'پریا ایس۔', achievement: '23 سال کی عمر میں سرمایہ کاری شروع کی', level: 6 },
      { name: 'میرا آر۔', achievement: 'ہنگامی فنڈ بنایا', level: 7 }
    ],
  },
// ... (The rest of your translations.js file follows)}
}