import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import PetCard from '../components/PetCard';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get('/pets');
        setPets(res.data);
      } catch (error) {
        console.error('Failed to fetch pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">🐾 Lost & Found Pets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
