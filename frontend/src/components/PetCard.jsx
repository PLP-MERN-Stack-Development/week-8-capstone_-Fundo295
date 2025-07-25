import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      {pet.image && <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover mb-4 rounded" />}
      <h2 className="text-xl font-bold">{pet.name}</h2>
      <p>Status: {pet.status}</p>
      <p>Type: {pet.type}</p>
      <p>Description: {pet.description}</p>
      <p className="text-sm text-gray-500">{new Date(pet.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PetCard;
