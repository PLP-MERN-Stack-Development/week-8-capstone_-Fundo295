// src/components/PetCard.jsx
import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={`http://localhost:5000/uploads/${pet.image}`}
        alt={pet.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{pet.name}</h2>
      <p className="text-sm text-gray-600">{pet.description}</p>
      <p className="text-xs text-blue-500">{pet.status} in {pet.location}</p>
    </div>
  );
};

export default PetCard;
