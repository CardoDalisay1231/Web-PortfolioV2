import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button onClick={toggleChatbot} className="chatbot-button">
        <i className="bi bi-chat-dots"></i>
      </button>

      {isOpen && (
        <div className="chatbot-frame">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/K0MMC6W5Hzjz6xYIUOezy"
            width="100%"
            style={{ height: '100%', minHeight: '500px' }}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
