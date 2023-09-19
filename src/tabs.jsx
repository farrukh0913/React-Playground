import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

export function Tabs() {
  return (
    <Router>
      <div>
        <ul className="tabs">
          <div className="pages">
            <Link to="/"><MDBBtn className='btn' color='success'> Home </MDBBtn></Link>
            <Link to="/about"><MDBBtn className='btn' color='warning'> About </MDBBtn></Link>
          </div>
          <Link to="/signin"><MDBBtn className='btn' color='danger'> Logout </MDBBtn></Link>
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