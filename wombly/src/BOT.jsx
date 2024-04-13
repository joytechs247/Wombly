import React, { useState } from 'react';
import { OpenAI } from 'openai';

const openai = new OpenAI('your-api-key');

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;

    // Add user message to chat
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    try {
      // Send user message to OpenAI API
      const response = await openai.complete({
        engine: 'davinci',
        prompt: input,
        maxTokens: 150,
      });

      // Add chatbot response to chat
      setMessages([...messages, { text: response.choices[0].text.trim(), isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
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