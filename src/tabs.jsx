import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Link, Route, useLocation } from 'react-router-dom';
import DetailPage from './components/detail-page';
import HomePage from './components/home-page';
import LoginPage from './login/login-page';
import { MDBBtn } from 'mdb-react-ui-kit';

export function Tabs(props) {
  return (
    <Router>
      <div>
        <ul className="tabs">
          <div className="pages">
            <Link to="/home"><MDBBtn className='btn' color='success'> Home </MDBBtn></Link>
            <Link to="/detail"><MDBBtn className='btn' color='warning'> Detail </MDBBtn></Link>
          </div>

          <Link to="/login"><MDBBtn className='btn' floating color='danger' onClick={Logout}> <i className="fa fa-sign-out" aria-hidden="true"></i></MDBBtn></Link>
        </ul>

      {/* <CurrentRoute /> */}

        <hr />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );

  function Logout() {
    props.handleCallback(false);
  }
}



function CurrentRoute() {
  const location = useLocation();
  return <span>Path : {location.pathname}</span>
}