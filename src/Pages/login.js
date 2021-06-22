import React, { useState, useCallback } from 'react';
import '../App.css';
import './CSS/login.css';
import Dashboard from './dashboard';

function Login({IsSignIn, setIsSignIn}) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 

  const EmailValue = (event) => {
  setEmail(event.target.value);
  };

const PasswordValue = (event) => {
  event.preventDefault();
  setPassword(event.target.value);
  };

  const handleIsSignIn = useCallback(event => {
    setIsSignIn(true);
    localStorage.setItem("IsSignIn", true);
  }, [setIsSignIn])

const onSubmitSignIn = (e) => {
  e.preventDefault();
  document.getElementById('logo').style.display="block";
    fetch('https://dcipl.yourtechshow.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          setName(user.name)
          localStorage.setItem("User", user.name);
          localStorage.setItem("Email", Email);
          handleIsSignIn();
        } else {
          alert("Wrong Credentials")
          document.getElementById('logo').style.display="none";
        }
      })
  }

const OnPageLoad = () => {
const CheckIsSignIn = localStorage.getItem("IsSignIn");
console.log(CheckIsSignIn)
if (CheckIsSignIn) {
  setIsSignIn(true)
} else {
  setIsSignIn(false)
}

}

	return (
    <>
    {IsSignIn ? (
  <>
  <br/>
        <Dashboard User={Name} Email={Email} setUser={setName} setEmail={setEmail}/>
</>
      ) : (
  <main>
            <div className="login-container">
                <h1 className="neon" data-text="Register">Login</h1>
                <div className="login-signin">  
                    <form onSubmit={onSubmitSignIn}>
                      <div className="login-input-field"><input type="email" name="email" placeholder="Enter E-Mail ID" required onChange={EmailValue} value={Email}></input></div>
                      <div className="login-input-field"><input type="password" name="password" placeholder="Enter your Password"  required onChange={PasswordValue} value={Password}></input></div>
                      <div className= "login-button-group">
                        <button className="login-button" type="submit">login</button>
                        <button className="login-button" type="submit"><a href="./register">Register</a></button>
                      </div>
                    </form>
                </div>
            </div>
              
                {OnPageLoad()}
               <div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
  </main>
        )}
		</>

		)
};

export default Login;