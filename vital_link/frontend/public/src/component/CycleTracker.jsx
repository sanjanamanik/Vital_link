import { useState } from 'react';
import axios from 'axios';

function CycleTracker() {
  const [date, setDate] = useState('');

  const handleLog = async () => {
    try {
      await axios.post('/api/cycle/log', { date }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      alert('Cycle logged!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2" />
      <button onClick={handleLog} className="bg-blue-500 text-white p-2 ml-2">Log Cycle</button>
    </div>
  );
}

export default CycleTracker;