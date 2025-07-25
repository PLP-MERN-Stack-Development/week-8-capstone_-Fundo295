import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={login} className="space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
