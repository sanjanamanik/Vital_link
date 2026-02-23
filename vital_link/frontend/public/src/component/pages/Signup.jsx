// Similar to Login, but POST to /api/auth/signup
// Implement accordingly
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post('/api/auth/signup', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block border p-2 mb-4 w-64" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block border p-2 mb-4 w-64" />
        <button onClick={handleSignup} className="bg-green-500 text-white p-2 w-64">Signup</button>
        <p className="mt-2">Have account? <Link to="/" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;