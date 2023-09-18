import * as React from 'react';
import { Navigations } from './navigations';
import { LoginPage } from "./login/login-page";
import { Car, Icon } from "./elements";
import logo from './logo.svg';
// import { AiFillBug } from "react-icons/ai"; // icon
import { FcApproval } from "react-icons/fc";
import './App.css';

export default function App() {
  return (
    <div>
      <div className="App">
        {/* <div aria-label="Login Section"> <Header /> </div> */}
        {/* <div className="car-section" aria-label="Car Section"> <Icon /> {Car()} </div> */}
        <div aria-label="Login Section"> <LoginPage /> </div>
      </div>

      <div aria-label="Nagivation Section"> <Navigations /> </div>
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