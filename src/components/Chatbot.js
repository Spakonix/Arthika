import React, { useState, useEffect, useRef } from "react";

// --- START: Language Content ---
// All the text for the chatbot is now stored here in both languages.
const translations = {
  en: {
    headerTitle: "Arthika Bot 🌸",
    placeholder: "Ask about savings, loans...",
    // Bot Responses
    shgResponse: "Self Help Groups (SHGs) are groups of 10–20 women who save money together, take loans, and support each other. They help in empowerment and access to credit.",
    savingsResponse: "You can save through SHGs, post office, or Jan Dhan accounts. Even ₹50–100 per month makes a difference!",
    bankResponse: "You can open a bank account using your Aadhaar card or voter ID. Many banks offer zero balance accounts for women, which is a great place to start.",
    loanResponse: "Loans are available through SHGs, banks, and govt schemes like Mudra Yojana. Being part of an SHG makes getting a loan much easier.",
    greetingResponse: "Namaste! I'm Arthika, your financial guide. How can I empower you today?",
    goodbyeResponse: "Goodbye! Stay empowered and keep saving.",
    fallbackResponse: "I can help with questions about savings, loans, and SHGs. Could you please ask in a different way?",
  },
  hi: {
    headerTitle: "आर्थिका बॉट 🌸",
    placeholder: "बचत, ऋण के बारे में पूछें...",
    // Bot Responses in Hindi
    shgResponse: "स्वयं सहायता समूह (एसएचजी) 10-20 महिलाओं के समूह हैं जो एक साथ पैसे बचाते हैं, ऋण लेते हैं और एक दूसरे का समर्थन करते हैं। वे सशक्तिकरण और क्रेडिट तक पहुंच में मदद करते हैं।",
    savingsResponse: "आप एसएचजी, डाकघर, या जन धन खातों के माध्यम से बचत कर सकती हैं। हर महीने ₹50-100 भी एक बड़ा अंतर ला सकते हैं!",
    bankResponse: "आप अपने आधार कार्ड या वोटर आईडी का उपयोग करके बैंक खाता खोल सकती हैं। कई बैंक महिलाओं के लिए शून्य बैलेंस वाले खाते प्रदान करते हैं, जो एक बेहतरीन शुरुआत है।",
    loanResponse: "ऋण एसएचजी, बैंकों और सरकारी योजनाओं जैसे मुद्रा योजना के माध्यम से उपलब्ध हैं। एसएचजी का हिस्सा होने से ऋण प्राप्त करना बहुत आसान हो जाता है।",
    greetingResponse: "नमस्ते! मैं आर्थिका, आपकी वित्तीय मार्गदर्शक हूँ। मैं आज आपको कैसे सशक्त बना सकती हूँ?",
    goodbyeResponse: "अलविदा! सशक्त रहें और बचत करती रहें।",
    fallbackResponse: "मैं बचत, ऋण और एसएचजी के बारे में सवालों में मदद कर सकती हूँ। क्या आप कृपया एक अलग तरीके से पूछ सकती हैं?",
  }
};
// --- END: Language Content ---


// --- NEW: This function detects if the input text contains Hindi characters ---
const detectLanguage = (text) => {
  // This regular expression checks for characters in the Devanagari script (used for Hindi).
  const hindiRegex = /[\u0900-\u097F]/;
  if (hindiRegex.test(text)) {
    return 'hi';
  }
  return 'en';
};


const getResponseKey = (userInput) => {
  const text = userInput.toLowerCase();
  if (text.includes("shg") || text.includes("self help group")) return "shgResponse";
  if (text.includes("save") || text.includes("saving") || text.includes("बचत")) return "savingsResponse";
  if (text.includes("bank") || text.includes("account") || text.includes("खाता")) return "bankResponse";
  if (text.includes("loan") || text.includes("ऋण")) return "loanResponse";
  if (text.includes("hello") || text.includes("hi") || text.includes("namaste") || text.includes("नमस्ते")) return "greetingResponse";
  if (text.includes("bye") || text.includes("अलविदा")) return "goodbyeResponse";
  return "fallbackResponse";
};


const TypingIndicator = () => (
    <div className="typing-indicator"><span></span><span></span><span></span></div>
);


// The component no longer needs the 'language' prop.
const Chatbot = () => {
  const [messages, setMessages] = useState([
    // Updated initial message to be bilingual.
    { text: "Namaste! How can I help you?\nनमस्ते! मैं आपकी कैसे मदद कर सकती हूँ?", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // --- UPDATED: This function now uses the new language detection logic ---
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, from: "user" };
    setMessages((prev) => [...prev, userMessage]);
    
    // 1. Detect the language from the user's input.
    const detectedLang = detectLanguage(input);
    const responseKey = getResponseKey(input);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      // 2. Get the bot's response in the *detected* language.
      const botResponseText = translations[detectedLang][responseKey];
      const botMessage = { text: botResponseText, from: "bot" };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };
  
  // Dynamically set placeholder and header based on the last detected language of conversation.
  const lastBotMessageLang = messages.length > 0 ? detectLanguage(messages[messages.length - 1].text) : 'en';

  return (
    <>
      <style>{`
        /* Styles are unchanged */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        .chatbot-container{position:fixed;bottom:30px;right:30px;z-index:1000}.arthika-chatbot{width:400px;height:600px;font-family:'Poppins',sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.2);border-radius:20px;overflow:hidden;background-color:#FFF9F1;display:flex;flex-direction:column;transition:transform .3s ease-out,opacity .3s ease-out}.arthika-chatbot.closed{transform:scale(.9) translateY(20px);opacity:0;pointer-events:none}.arthika-chatbot.open{transform:scale(1) translateY(0);opacity:1;pointer-events:auto}.chatbot-header{background:linear-gradient(135deg,#FBC02D,#F48FB1);color:#fff;padding:15px 20px;display:flex;justify-content:space-between;align-items:center;z-index:1}.chatbot-header h2{margin:0;font-size:1.2rem;font-weight:600}.chatbot-close-button{background:0 0;border:none;color:#fff;font-size:1.5rem;cursor:pointer;opacity:.8;transition:opacity .2s}.chatbot-close-button:hover{opacity:1}.chatbot-messages{flex-grow:1;background-color:#FFF9F1;position:relative;display:flex;flex-direction:column}.chatbot-messages::before{content:'';position:absolute;top:50%;left:50%;width:80%;height:80%;transform:translate(-50%,-50%);background-image:url('/arthika_log.png');background-size:contain;background-repeat:no-repeat;background-position:center;opacity:.08;pointer-events:none}.messages-scroll-container{height:100%;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:15px}.messages-scroll-container::-webkit-scrollbar{width:8px}.messages-scroll-container::-webkit-scrollbar-thumb{background-color:#FBC02D;border-radius:10px}.messages-scroll-container::-webkit-scrollbar-track{background-color:#f1f1f1}.message-container{display:flex;align-items:flex-end;gap:10px;animation:fadeIn .5s ease-in-out;z-index:1}.message-container.user{justify-content:flex-end}.message-container.bot{justify-content:flex-start}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.message-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;color:#fff;flex-shrink:0}.avatar-user{background-color:#FBC02D}.avatar-bot{background-color:#F48FB1}.message-text{padding:12px 18px;border-radius:20px;max-width:75%;color:#333;line-height:1.5;white-space:pre-wrap;}.message-container.user .message-text{background-color:#FBC02D;color:#333;border-bottom-right-radius:5px}.message-container.bot .message-text{background-color:#F48FB1;color:#fff;border-bottom-left-radius:5px}.chatbot-input{display:flex;padding:20px;border-top:1px solid #eee;background-color:#fff;z-index:1}.chatbot-input input{flex:1;padding:12px 15px;border:1px solid #ddd;border-radius:25px;font-size:1rem;font-family:'Poppins',sans-serif;margin-right:10px;transition:border-color .3s}.chatbot-input input:focus{outline:0;border-color:#F48FB1}.chatbot-input button{padding:12px 20px;background:linear-gradient(135deg,#FBC02D,#F48FB1);color:#fff;border:none;border-radius:25px;cursor:pointer;font-size:1rem;font-weight:500;transition:transform .2s,box-shadow .3s}.chatbot-input button:hover{transform:scale(1.05);box-shadow:0 4px 15px rgba(251,192,45,.4)}.typing-indicator{display:flex;padding:12px 18px;background-color:#F48FB1;border-radius:20px;border-bottom-left-radius:5px}.typing-indicator span{height:8px;width:8px;background-color:#fff;border-radius:50%;display:inline-block;margin:0 2px;animation:bounce 1.4s infinite ease-in-out both}.typing-indicator span:nth-of-type(1){animation-delay:-.32s}.typing-indicator span:nth-of-type(2){animation-delay:-.16s}@keyframes bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.chatbot-launcher{position:fixed;bottom:30px;right:30px;width:60px;height:60px;background:linear-gradient(135deg,#FBC02D,#F48FB1);border:none;border-radius:50%;color:#fff;box-shadow:0 4px 15px rgba(0,0,0,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .3s ease-out}.chatbot-launcher:hover{transform:scale(1.1)}.chatbot-launcher.hidden{transform:scale(0)}
      `}</style>

      <div className="chatbot-container">
        <div className={`arthika-chatbot ${isOpen ? 'open' : 'closed'}`}>
          <div className="chatbot-header">
            <h2>{translations[lastBotMessageLang].headerTitle}</h2>
            <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            <div className="messages-scroll-container">
              {messages.map((msg, i) => (
                <div key={i} className={`message-container ${msg.from}`}>
                  {msg.from === 'bot' && <div className="message-avatar avatar-bot">A</div>}
                  <div className="message-text">{msg.text}</div>
                  {msg.from === 'user' && <div className="message-avatar avatar-user">You</div>}
                </div>
              ))}
              {isTyping && (
                <div className="message-container bot">
                  <div className="message-avatar avatar-bot">A</div>
                  <TypingIndicator />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder={translations[lastBotMessageLang].placeholder}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
        <button className={`chatbot-launcher ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16" className="bi bi-chat-dots-fill">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966A7.7 7.7 0 0 1 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
        </button>
      </div>
    </>
  );
};

export default Chatbot;

