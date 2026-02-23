import { useState } from 'react';
import axios from 'axios';

function AIChatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    try {
      const res = await axios.post('/api/ai/query', { query });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <input value={query} onChange={(e) => setQuery(e.target.value)} className="border p-2" />
      <button onClick={handleQuery} className="bg-purple-500 text-white p-2 ml-2">Ask AI</button>
      <p>{response}</p>
    </div>
  );
}

export default AIChatbot;