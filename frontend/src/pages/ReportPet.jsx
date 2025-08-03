import React, { useState } from 'react';
import axios from '../api/axios';

const ReportPet = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    status: '',
    description: '',
    contact: '',
    location: '',
    image: null,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: ['type', 'status'].includes(name) ? value.toLowerCase() : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const petData = new FormData();
    for (const key in formData) {
      petData.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to report a pet.');
        return;
      }

      await axios.post('/pets', petData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess('Pet reported successfully!');
      setFormData({
        name: '',
        type: '',
        status: '',
        description: '',
        contact: '',
        location: '',
        image: null,
      });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'Failed to report pet');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Report a Lost/Found Pet</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-600 mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Pet Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="type" placeholder="Type (dog, cat...)" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="status" placeholder="Status (lost/found)" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="location" placeholder="Last seen location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="contact" placeholder="Your contact info" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows={4} required />
        <input name="image" type="file" accept="image/*" onChange={handleChange} className="w-full" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportPet;
