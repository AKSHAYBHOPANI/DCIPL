import React, { useState } from 'react';
import '../App.css';
import './CSS/register.css';
import Dashboard from './dashboard';
import FacebookLogin from 'react-facebook-login';

function Register(Profile) {
  
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

const responseFacebook = (response) => {
  console.log(response);
  setUser(response.name);
  setEmail(response.email);

}
  const NameValue = (event) => {
  event.preventDefault();
  setUser(event.target.value);
  };

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
    fetch('https://server.yourtechshow.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password,
        name: User
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.id) {
          console.log("user")
           Profile.setProfile(prevState => {
    return Object.assign({}, prevState, { id: response.id, name: response.name,
    email: response.email,
    IsSignIn: true,
    IsonBoarding: false });
  });   
        } else {
          console.log(response)
          alert("Email Already Exists")
          document.getElementById('logo').style.display="none";
        }
      })
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
        <>
        <main>
              <div className="reg-container">
                <h1 className="neon" data-text="Register">Register</h1>
                    <div className="reg-signup">
                    <form onSubmit={onSubmitSignIn}>
                      <div className="reg-input-field"><input type="name" name="name" placeholder="Name" required onChange={NameValue} value={User}></input></div>
                      <div className="reg-input-field"><input type="email" name="email" placeholder="E-Mail" required onChange={EmailValue} value={Email}></input></div>
                      <div className="reg-input-field"><input type="password" name="password" placeholder="Password"  required onChange={PasswordValue} value={Password}></input></div>
                      <div className= "reg-button-group">
                        <button className="reg-button" type="submit">Register</button>
                        <button className="reg-button" type="submit"><a href="./login">Login</a></button>
                      </div>
                      <FacebookLogin
    appId="612293356405016"
    
    fields="name,email,picture"
    callback={responseFacebook} 
    cssClass="reg-button"/>
                    </form>                  
                </div>
              </div>
                
            <div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
          </main>
</>
      )}


		
		</>
		)
};

export default Register;