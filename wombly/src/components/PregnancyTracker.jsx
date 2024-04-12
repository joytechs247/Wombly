import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PregnancyTracker = () => {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [showStatus, setShowStatus] = useState(false);

  const totalDays = month * 30 + day;
  const totalPregnancyDays = 9 * 30;
  const percentage = Math.min((totalDays / totalPregnancyDays) * 100, 100);

  const getDevelopmentStatus = (percentage) => {
    if (percentage < 10) {
      return "The journey begins: the embryo is forming.";
    } else if (percentage < 20) {
      return "The basics are taking shape: heart starts beating.";
    } else if (percentage < 30) {
      return "Development of vital organs: lungs begin to form.";
    } else if (percentage < 40) {
      return "Formation of facial features: eyes and ears develop.";
    } else if (percentage < 50) {
      return "Growing bones: skeleton starts to harden.";
    } else if (percentage < 60) {
      return "The baby starts to hear: response to external sounds.";
    } else if (percentage < 70) {
      return "Growing more: baby can now yawn and hiccup.";
    } else if (percentage < 80) {
      return "More active: the baby begins to kick and stretch.";
    } else if (percentage < 90) {
      return "Almost there: gaining weight and getting into position.";
    } else if (percentage < 100) {
      return "Final stages: organs are fully developed.";
    } else {
      return "Ready for the world: it's time to meet your baby!";
    }
  };

  const handleShowStatus = () => {
    setShowStatus(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-baby-pink font-sans">
      <div className="text-center p-6 shadow-lg rounded-lg bg-white max-w-md">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Pregnancy Progress Tracker</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Months Completed:</label>
          <select
            className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 10 }, (_, i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Additional Days:</label>
          <select
            className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={day}
            onChange={(e) => setDay(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 30 }, (_, i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div style={{ width: 200, height: 200, margin: '0 auto' }}>
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              pathColor: `rgba(255, 105, 180, ${percentage / 100})`,
              textColor: '#212121',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <button
          onClick={handleShowStatus}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Show Baby Status
        </button>
        {showStatus && (
          <div className="mt-4 text-left text-gray-700">
            <p className="font-bold">Pregnancy Progress:</p>
            <p>{`${Math.round(percentage)}% completed`}</p>
            <p className="font-bold mt-2">Baby's Development:</p>
            <p>{getDevelopmentStatus(percentage)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PregnancyTracker;
