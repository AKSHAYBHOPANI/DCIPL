import React, { useState, useCallback } from 'react';
import '../App.css';
import './CSS/login.css';
import Dashboard from './dashboard';
import FacebookLogin from 'react-facebook-login';

function Login(Profile) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 
 const responseFacebook = (response) => {
  console.log(response);
  setName(response.name);
  setEmail(response.email);
  if (response.userID) {
  Profile.setProfile(prevState => {
    return Object.assign({}, prevState, { id: response.id, name: response.name,
    email: response.email,
    IsSignIn: true,
    IsonBoarding: true });
  });
  } else {}
}

  const EmailValue = (event) => {
  setEmail(event.target.value);
  };

const PasswordValue = (event) => {
  event.preventDefault();
  setPassword(event.target.value);
  };



const onSubmitSignIn = (e) => {
  e.preventDefault();
  document.getElementById('logo').style.display="block";
    fetch('https://server.yourtechshow.com/signin', {
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
          Profile.setProfile(prevState => {
    return Object.assign({}, prevState, { id: user.id, name: user.name,
    email: user.email,
    IsSignIn: true,
    IsonBoarding: true });
  });
        } else {
          alert("Wrong Credentials")
          document.getElementById('logo').style.display="none";
        }
      })
  }

const OnPageLoad = () => {
const CheckIsSignInRes = localStorage.getItem("Profile");
const CheckIsSignIn = JSON.parse(CheckIsSignInRes)
if (CheckIsSignIn) {
 Profile.setProfile(CheckIsSignIn)
console.log(CheckIsSignIn)
} else {
   console.log(CheckIsSignIn)
}

}

	return (
    <>
    {Profile.Profile.IsSignIn ? (
  <>
  <br/>
        <Dashboard Profile={Profile}/>
        {localStorage.setItem("Profile", JSON.stringify(Profile.Profile))}
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
                       <FacebookLogin
    appId="612293356405016"
    
    fields="name,email,picture"
    callback={responseFacebook} 
    cssClass="reg-button"/>
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