import React from 'react';
import logo from './logo.svg';
import { FaBeer } from 'react-icons/fa';
import { AiFillBug } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn-create">Create <FcApproval style={{color: '#FFD701'}}/> </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;