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
      <Route path="/Report" element={<ReportPet />} />
      <Route path="/MyPets" element={<MyPets />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
