import React, { useState, useEffect } from "react";
import "./login-page.css";

export function LoginPage(props) {
  console.log('props: ', props);
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShowLoginScreen, setShowLoginScreen] = useState(true);

  useEffect(() => {
    if(isShowLoginScreen && isSubmitted){
      setTimeout(() => { setShowLoginScreen(false) }, 3000);
    }
  }, [isShowLoginScreen, isSubmitted]);

    // on logout click
    if(props.isLogout){
      localStorage.clear();
    }

  // User Login info
  const database = [ { username: "admin", password: "admin" }, { username: "user2", password: "pass2" } ];
  const errors = { uname: "invalid username", pass: "invalid password" };

  const handleSubmit = (event) => {
    console.log('event :>> ', event);
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log('pass: ', pass.value);
    console.log('uname: ', uname.value);

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    console.log('userData:111 ', userData);
    window.location.href = "/home"; // navigate to about page on submit
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        localStorage.clear();
      } else {
        console.log('userData :>> ', userData);
        setIsSubmitted(true);
        setShowLoginScreen(true);
        localStorage.setItem('token', JSON.stringify(userData)); // set token in local storage
        props.handleCallback(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      localStorage.clear();
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && ( <div className="error">{errorMessages.message}</div> );

  // JSX code for login form
  const renderForm = (
    <div className="form">
       <div className="title">Sign In</div>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
      {/* <div aria-label="Nagivation Section"> <Navigations /> </div> */}
    </div>
  );

  return (
    <div className="login-section">
      { isShowLoginScreen ?
        <div className="login-form">
        { isSubmitted ? <div>User is successfully logged in</div> : renderForm }
      </div> : ''
      }
    </div>
  );
}

export default LoginPage;