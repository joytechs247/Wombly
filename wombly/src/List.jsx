// QuestionList.js
import React, { useState } from 'react';

const QuestionList = ({ questions, onAddResponse }) => {
  const [responseText, setResponseText] = useState('');

  const handleResponseSubmit = (index) => {
    onAddResponse(index, responseText);
    setResponseText('');
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
          <ul className="list-disc pl-6">
            {question.responses.map((response, idx) => (
              <li key={idx}>{response.user}: {response.response}</li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={() => handleResponseSubmit(index)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit Response
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
