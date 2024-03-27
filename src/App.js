import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import HowToUse from './HowToUse';
import LoginForm from './LoginForm';
import AddPetForm from './AddPetForm';
import PetPage from './PetPage';
import Footer from './Footer';
import './App.css';
import './tailwind.css';


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
        // console.log(data)
        setProfiles(data);
      });
  }, []);

  return (
    <Router> 
      <div className="app">
        <Navbar loggedIn={loggedIn} toggleLogin={toggleLogin} profiles={profiles} />
        <Header className="header"/>
        <Routes>
          <Route path="/" element={<HowToUse/>} /> 
          <Route path="/login" element={<LoginForm onLogin={toggleLogin}/>} />
          {profiles.map(profile => (
            <Route 
              key={profile.id} 
              path={`/profiles/${profile.id}`} 
              element={<PetPage profile={profile} />} 
            />
          ))}
          <Route path="/addPet" element={<AddPetForm profiles={profiles} />} />
        </Routes>
        <Footer className="footer"/>
      </div>
    </Router>
  );
}

export default App;





