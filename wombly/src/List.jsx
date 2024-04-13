// // QuestionList.js
// import React, { useState } from 'react';

// const QuestionList = ({ questions, onAddResponse }) => {
//   const [responseText, setResponseText] = useState('');

//   const handleResponseSubmit = (index) => {
//     onAddResponse(index, responseText);
//     setResponseText('');
//   };

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
//           <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
//           <ul className="list-disc pl-6">
//             {question.responses.map((response, idx) => (
//               <li key={idx}>{response.user}: {response.response}</li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <input
//               type="text"
//               value={responseText}
//               onChange={(e) => setResponseText(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//             <button
//               onClick={() => handleResponseSubmit(index)}
//               className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//             >
//               Submit Response
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionList;


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
        <div key={index} className="bg-pink-100 p-4 rounded-md mb-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-pink-800">{question.question}</h3>
          <ul className="list-disc pl-6">
            {question.responses.map((response, idx) => (
              <li key={idx} className="text-pink-700">{response.user}: {response.response}</li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
              placeholder="Your response..."
            />
            <button
              onClick={() => handleResponseSubmit(index)}
              className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:bg-pink-600"
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
