
import React, { useState } from 'react';
import { BiCalendarCheck } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './OvulationTracker.css'; // Create a CSS file for additional styling

const OvulationTracker = () => {
    const [lastPeriodDate, setLastPeriodDate] = useState('');
    const [ovulationDate, setOvulationDate] = useState('');

    const calculateOvulation = () => {
        if (!lastPeriodDate) {
            alert('Please enter a valid date.');
            return;
        }

        const periodDate = new Date(lastPeriodDate);
        const cycleLength = 28; // Default cycle length
        const ovulationDay = new Date(periodDate.getTime());
        ovulationDay.setDate(periodDate.getDate() + cycleLength - 14);

        setOvulationDate(ovulationDay.toDateString());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">Ovulation Tracker</h1>
                <div className="mb-6">
                    <label htmlFor="last-period-date" className="block text-sm font-medium text-gray-700 mb-2">Enter the date of your last period:</label>
                    <input
                        type="date"
                        id="last-period-date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        value={lastPeriodDate}
                        onChange={(e) => setLastPeriodDate(e.target.value)}
                    />
                </div>
                <button
                    onClick={calculateOvulation}
                    className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 rounded-lg flex items-center justify-center transition duration-300"
                >
                    <IconContext.Provider value={{ className: 'inline-block mr-2', size: '1.2em' }}>
                        <BiCalendarCheck />
                    </IconContext.Provider>
                    <span>Calculate</span>
                </button>
                {ovulationDate && (
                    <p className="mt-6 text-center text-gray-800">
                        Your next ovulation date is estimated to be around <strong>{ovulationDate}</strong>.
                    </p>
                )}
            </div>
        </div>
    );
};

export default OvulationTracker;


