import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import PetCard from '../components/PetCard';

const MyPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchMine = async () => {
      try {
        const res = await axios.get('/pets/mine');
        setPets(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMine();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Pet Reports</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default MyPets;
