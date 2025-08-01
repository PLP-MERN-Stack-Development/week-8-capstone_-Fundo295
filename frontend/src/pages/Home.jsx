// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pets')
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      {/* Logo & Tagline */}
      <img
  src="/banner.jpg"
  alt="Lost pet banner"
  className="w-full h-64 object-cover rounded-lg mb-10"
/>

      <div className="text-center mb-8">
        <img
          src="/logo.png"
          alt="PawFinder SA Logo"
          className="mx-auto h-24 w-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-700">PawFinder SA</h1>
        <p className="text-gray-600 mt-2">Reuniting lost pets with families across South Africa using AI & community.</p>
      </div>

      {/* About Us */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-3">About PawFinder</h2>
        <p className="text-gray-700">
          PawFinder SA is South Africa’s first community-driven platform to reunite lost and found pets using AI-powered image matching,
          geolocation, and multilingual support. Whether you’ve lost your furry friend in Cape Town, Soweto, or Durban — we help connect you
          with the right people instantly.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 rounded-lg shadow-sm p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-800">
          <li>Register or log in to your PawFinder account.</li>
          <li>Report a lost or found pet with an image and location.</li>
          <li>Our AI scans for similar reports and alerts nearby users via SMS.</li>
          <li>View or manage your reports anytime under "My Pets".</li>
        </ol>
      </section>

      {/* Pet Listings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map(pet => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
      </section>

            {/* Contact Us */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-20">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-700 mb-2">
          📧 Email: <a href="mailto:support@pawfinder.co.za" className="text-blue-600 underline">support@pawfinder.co.za</a>
        </p>
        <p className="text-gray-700 mb-2">
          📍 Address: 123 Animal Rescue Street, Johannesburg, South Africa
        </p>
        <p className="text-gray-700 mb-2">
          ☎️ Phone: +27 87 555 5555
        </p>
        <p className="text-gray-700">
          🐾 Follow us on social media: 
          <a href="https://twitter.com/pawfinder_sa" target="_blank" rel="noopener noreferrer" className="text-blue-500 ml-2 underline">Twitter</a> | 
          <a href="https://facebook.com/pawfinderSA" target="_blank" rel="noopener noreferrer" className="text-blue-700 ml-2 underline">Facebook</a>
        </p>
      </section>

    </div>
  );
};

export default Home;
