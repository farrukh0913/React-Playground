import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

export function Navigations() {
  return (
    <Router>
      <div>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <CurrentRoute />
    </Router>
  );
}

function CurrentRoute() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>
}