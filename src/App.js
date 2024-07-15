// TO RUN HAPPY-CAT  
// 1. npm install
// 2. npm start
// 3. npm install -g json-server
// 4. json-server db.json --port 3001
// 5. json-server logs.json --port 3002

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import AddPet from './AddPet';
import AddLog from './AddLog';
import HowToUse from './HowToUse';
import PetPage from './PetPage';
import Footer from './Footer';
import './App.css';
import './tailwind.css';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [logs, setLogs] = useState([])

  // GET request for profiles data
  useEffect(() => {
    fetch('http://localhost:3001/profiles')
      .then(r => r.json())
      .then(profiles => {
        setProfiles(profiles);
      })
  }, [])

  function updateProfiles (newPetData) {
        setProfiles([...profiles, newPetData]);
  }

    function updateLogs (newLogData) {
        setLogs([...logs, newLogData]);
  }

  return (
    <Router>
      <div className="app">
        <Navbar className="navbar" profiles={profiles} />
        <Header className="header" />
        <Switch>
          <Route exact path="/">
            <HowToUse />
          </Route>
          <Route exact path="/profiles/:id">
            <PetPage profiles={profiles} logs={logs}  updateLogs={updateLogs} updateProfiles={updateProfiles} />
          </Route>
          <Route path="/addPet">
            <AddPet profiles={profiles} updateProfiles={updateProfiles}/>
          </Route>
          <Route path="/addLog">
            <AddLog profiles={profiles} />
          </Route>
        </Switch>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
