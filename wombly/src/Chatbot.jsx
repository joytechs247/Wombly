// import React, { useState } from 'react';
// import responses from './responses.json';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const sendMessage = () => {
//     if (!input) return;

//     // Add user message to chat
//     setMessages([...messages, { text: input, isUser: true }]);
//     setInput('');

//     // Get response from JSON file based on input
//     const response = getResponse(input.toLowerCase().trim());
//     setMessages([...messages, { text: response, isUser: false }]);
//   };

//   const getResponse = (input) => {
//     if (input.includes('hello') || input.includes('hi')) {
//       return getRandomResponse(responses.greetings);
//     } else if (input.includes('bye') || input.includes('goodbye')) {
//       return getRandomResponse(responses.farewells);
//     } else {
//       return getRandomResponse(responses.default);
//     }
//   };

//   const getRandomResponse = (responseArray) => {
//     const index = Math.floor(Math.random() * responseArray.length);
//     return responseArray[index];
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index} className={message.isUser ? 'user-message' : 'chatbot-message'}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type your message here..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chatbot;



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

    const newMessages = [
      ...messages,
      { text: input, isUser: true },
      { text: getResponse(input.toLowerCase().trim()), isUser: false }
    ];

    setMessages(newMessages);
    setInput('');
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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.isUser ? 'bg-pink-400 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 mr-2 py-2 px-4 rounded-lg bg-gray-200 focus:outline-none"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button
          className="py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-600 focus:outline-none"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
