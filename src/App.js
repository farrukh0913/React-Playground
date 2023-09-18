import React from 'react';
import logo from './logo.svg';
import { FaBeer } from 'react-icons/fa';
import { AiFillBug } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import './App.css';
import { Car, Icon } from "./elements";
import { LoginPage } from "./login/login-page";

function App() {
  return (
    <div className="App">
      {/* <div aria-label="Login Section"> <Header /> </div> */}
      {/* <div className="car-section" aria-label="Car Section"> <Icon /> {Car()} </div> */}
      <div aria-label="Login Section"> <LoginPage /> </div>
    </div>
  );
}

function Header() {
  return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <button className="btn-create">Create <FcApproval style={{ color: '#FFD701' }} /> </button>
    <p>
      Edit <code>src/App.js</code> and save to reload.
  </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer">
      Learn React
  </a>

    <span> <h2 className="title"> Hello World! </h2> </span>
  </header>)
}

export default App;