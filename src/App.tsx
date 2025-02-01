import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlantationForm from './components/PlantationForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import GreenCredits from './components/GreenCredits';
import WaterCredits from './components/WaterCredits';
import About from './components/About';
import Community from './components/Community';
import Corporate from './components/Corporate';
import Education from './components/Education';
import Events from './components/Events';
import History from './components/History';
import Login from './components/auth/Login'; 
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/plant" element={<PlantationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/green-credits" element={<GreenCredits />} />
          <Route path="/water-credits" element={<WaterCredits />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/education" element={<Education />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App