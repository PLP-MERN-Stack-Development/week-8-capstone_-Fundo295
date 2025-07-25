import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportPet from './pages/ReportPet';
import MyPets from './pages/MyPets';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportPet />} />
      <Route path="/mypets" element={<MyPets />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
