import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/Login';
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🐾 PawFinder</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/Report">Report</Link>
            <Link to="/MyPets">My Pets</Link>
            <button onClick={handleLogout} className="ml-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
