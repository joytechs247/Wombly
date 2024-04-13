import React, { useState } from 'react';

const Mentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    number: '',
    lastOvulationCycle: '',
    isPregnant: false,
    lastPeriod: '',
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement form submission logic
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-pink-50 rounded-lg shadow-lg mt-5">
      <div className="mb-4 text-center">
        <img src="/path/to/image.jpg" alt="Upload" className="mx-auto mb-4 rounded-full" style={{ width: 100, height: 100 }} />
      </div>

      {submitted ? (
        <p className="text-green-700 mb-4 text-center">
          Thanks for your Response! Our Mentor will contact you within 5 minutes.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block mb-1">Your Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block mb-1">Your Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="lastOvulationCycle" className="block mb-1">Your Last Ovulation Cycle</label>
            <input
              type="text"
              id="lastOvulationCycle"
              name="lastOvulationCycle"
              value={formData.lastOvulationCycle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Are you pregnant?</label>
            <div>
              <label htmlFor="pregnantYes" className="mr-2">
                <input
                  type="radio"
                  id="pregnantYes"
                  name="isPregnant"
                  value="yes"
                  checked={formData.isPregnant}
                  onChange={handleChange}
                  className="mr-1"
                />
                Yes
              </label>
              <label htmlFor="pregnantNo">
                <input
                  type="radio"
                  id="pregnantNo"
                  name="isPregnant"
                  value="no"
                  checked={!formData.isPregnant}
                  onChange={handleChange}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="lastPeriod" className="block mb-1">When was your last period?</label>
            <input
              type="date"
              id="lastPeriod"
              name="lastPeriod"
              value={formData.lastPeriod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-1">Upload X-Ray Image (if any)</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-md transition duration-300 text-center items-center justify-center">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Mentor;
