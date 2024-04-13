import React, { useState } from 'react';
import responses from './responses.json';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    if (!input) return;

    // Add user message to chat
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Get response from JSON file based on input
    const response = getResponse(input.toLowerCase().trim());
    setMessages([...messages, { text: response, isUser: false }]);
  };

  const getResponse = (input) => {
    if (input.includes('hello') || input.includes('hi')) {
      return getRandomResponse(responses.greetings);
    } else if (input.includes('bye') || input.includes('goodbye')) {
      return getRandomResponse(responses.farewells);
    } else {
      return getRandomResponse(responses.default);
    }
  };

  const getRandomResponse = (responseArray) => {
    const index = Math.floor(Math.random() * responseArray.length);
    return responseArray[index];
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'chatbot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
