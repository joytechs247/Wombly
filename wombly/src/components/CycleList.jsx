import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CycleList() {
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    const fetchCycles = async () => {
      const response = await axios.get('http://localhost:5000/cycles');
      setCycles(response.data);
    };
    fetchCycles();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Cycle History</h2>
      <ul className="list-disc pl-5">
        {cycles.map((cycle) => (
          <li key={cycle.id} className="mb-1">{cycle.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default CycleList;
