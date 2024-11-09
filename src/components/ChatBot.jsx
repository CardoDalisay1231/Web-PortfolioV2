import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowPopup(false); 
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chatbot-container">
      <button type="button" onClick={toggleChatbot} className="chatbot-button btn">
        <i className="bi bi-chat-dots"></i>
      </button>

      {showPopup && (
        <div className="chatbot-popup">
          You can ask the chatbot about JM!
        </div>
      )}

      {isOpen && (
        <div className="chatbot-frame">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/K0MMC6W5Hzjz6xYIUOezy"
            width="100%"
            style={{ height: '100%', minHeight: '500px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
