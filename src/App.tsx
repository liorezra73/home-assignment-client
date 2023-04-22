import React from 'react';
import logo from './logo.svg';
import './App.css';

import {  Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <h1>Welcome to the Home Screen</h1>
      <Link to="/users">Fetch</Link>
      <br></br>
      <Link to="/history">History</Link>
    </div>
  );
}

export default App;
