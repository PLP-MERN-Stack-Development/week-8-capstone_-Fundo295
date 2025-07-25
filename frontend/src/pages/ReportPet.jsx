import React, { useState } from 'react';
import axios from '../api/axios';

const ReportPet = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    status: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const petData = new FormData();
    for (const key in formData) {
      petData.append(key, formData[key]);
    }

    try {
      await axios.post('/pets', petData);
      alert('Pet reported successfully!');
    } catch (err) {
      alert('Failed to report pet');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Report a Lost/Found Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Pet Name" onChange={handleChange} className="w-full p-2 border" />
        <input name="type" placeholder="Type (Dog, Cat...)" onChange={handleChange} className="w-full p-2 border" />
        <input name="status" placeholder="Status (Lost/Found)" onChange={handleChange} className="w-full p-2 border" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border" />
        <input name="image" type="file" onChange={handleChange} className="w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ReportPet;
