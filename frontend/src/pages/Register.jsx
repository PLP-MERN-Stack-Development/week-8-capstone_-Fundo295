import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', form);
      alert('Registered successfully');
      navigate('/login');
    } catch {
      alert('Failed to register');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={register} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
