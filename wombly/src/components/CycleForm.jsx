// import React, { useState } from 'react';
// import axios from 'axios';

// function CycleForm({ onAddCycle }) {
//   const [startDate, setStartDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (startDate) {
//       const newCycle = { date: startDate };
//       const response = await axios.post('http://localhost:5000/cycles', newCycle);
//       onAddCycle(response.data);  // Update parent state
//       setStartDate('');  // Reset form field
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <div className="mb-4">
//         <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
//         <input
//           type="date"
//           id="start-date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Add Cycle
//       </button>
//     </form>
//   );
// }

// export default CycleForm;



import React, { useState } from 'react';
import axios from 'axios';

function CycleForm({ onAddCycle }) {
  const [startDate, setStartDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (startDate) {
      const newCycle = { date: startDate };
      try {
        const response = await axios.post('http://localhost:5000/cycles', newCycle);
        onAddCycle(response.data);
        setStartDate('');
      } catch (error) {
        console.error('Error adding cycle:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-6 rounded-lg shadow-lg bg-pink-100">
      <div className="mb-4">
        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        Add Cycle
      </button>
    </form>
  );
}

export default CycleForm;
