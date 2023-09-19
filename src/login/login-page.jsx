import React, { useState } from "react";
import "./login-page.css";

export function LoginPage(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // window.location.href = "/about"; // navigate to about page on submit
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        localStorage.clear();
      } else {
        console.log('userData :>> ', userData);
        setIsSubmitted(true);
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
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginPage;