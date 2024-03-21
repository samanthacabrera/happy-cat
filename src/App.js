import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HowToUse from './components/HowToUse';
import LoginForm from './components/LoginForm';
import AddPetForm from './components/AddPetForm';
import Navbar from './components/Navbar';
import PetPage from './components/PetPage';
import Footer from './components/Footer';
import './App.css';


function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
   const toggleLogin = () => {
        setLoggedIn(!loggedIn);
    };


  const [profiles, setProfiles] = useState([]); 
  // GET request for profiles data
  useEffect(() => {
    fetch('http://localhost:3001/profiles')
      .then(r => r.json())
      .then(data => {
        setProfiles(data);
      });
  }, []);

  return (
    <Router> 
      <div className="app">
        <Header />
        <Navbar loggedIn={loggedIn} toggleLogin={toggleLogin} profiles={profiles} />
        <Routes>
          <Route path="/" element={<HowToUse />} /> 
          <Route path="/login" element={<LoginForm onLogin={toggleLogin}/>} />
          {profiles.map(profile => (
            <Route 
              key={profile.id} 
              path={`/profiles/${profile.id}`} 
              element={<PetPage profile={profile} />} 
            />
          ))}
          <Route path="/addPet" element={<AddPetForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





