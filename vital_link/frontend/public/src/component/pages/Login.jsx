import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block border p-2 mb-4 w-64" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block border p-2 mb-4 w-64" />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-64">Login</button>
        <p className="mt-2">No account? <Link to="/signup" className="text-blue-500">Signup</Link></p>
      </div>
    </div>
  );
}

export default Login;