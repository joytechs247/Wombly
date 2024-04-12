// import React, { useState } from 'react';
// import CycleForm from "./CycleForm"
// import CycleList from "./CycleList"

// function PeriodTracker() {

//     const [cycles, setCycles] = useState([]);

//   const handleAddCycle = (newCycle) => {
//     setCycles([...cycles, newCycle]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="container mx-auto">
//         <h1 className="text-xl font-bold text-center mb-6">Period Tracker</h1>
//         <CycleForm onAddCycle={handleAddCycle} />
//         {/* <CycleList /> */}
//       </div>
//     </div>
//   );
// }

// export default PeriodTracker

// src/components/PeriodTracker.js
import React, { useState } from 'react';

const PeriodTracker = () => {
  const [cycles, setCycles] = useState([]);

  const addCycle = () => {
    const startDate = new Date();
    const duration = 5; // Example duration in days

    const newCycle = {
      startDate: startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      duration: duration,
      endDate: calculateEndDate(startDate, duration),
    };

    setCycles([...cycles, newCycle]);
  };

  const calculateEndDate = (startDate, duration) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration);
    return endDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Period Tracker</h1>
        <p className="text-gray-600 text-center mb-8">
          Click the "Add Cycle" button on the first day of your cycle!
        </p>
        <button
          className="bg-pink-500 hover:bg-pink-dark text-white font-bold py-2 px-4 rounded-full mb-4 w-full block text-center"
          onClick={addCycle}
          style={{ boxShadow: '0px 4px 10px rgba(255, 105, 180, 0.5)' }}
        >
          Add Cycle
        </button>
        <ul>
          {cycles.map((cycle, index) => (
            <li key={index} className="mb-4">
              <span className="font-semibold">Start Date:</span> {cycle.startDate} <br />
              <span className="font-semibold">End Date:</span> {cycle.endDate} ({cycle.duration} days)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeriodTracker;
