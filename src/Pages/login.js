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

const onSubmitSignIn = () => {
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
        <Dashboard User={Name} Email={Email}/>
</>
      ) : (

          <div className="container">              
              <form action="#" method="post" className="signin">  
                  <div class="title"><h2 class="title">login</h2></div>            
                  <div class="input-field"><input type="text" name="name" placeholder="Name"></input></div>
                  <div class="input-field"><input type="email" name="email" placeholder="Enter E-Mail ID" required onChange={EmailValue} value={Email}></input></div>
                  <div class="input-field"><input type="password" name="password" placeholder="Enter your Password"  required onChange={PasswordValue} value={Password}></input></div>
                  <div className= "btn-group">
                      <button class="btn" type="submit" onClick={onSubmitSignIn}>Login</button>
                      {OnPageLoad()}
                      <div id="logo" class="loadingio-spinner-rolling-kswyn6f3gj7"><div class="ldio-c9p079igqka">
                      </div></div>
                      <button class="btn" type="submit">Register</button>
                  </div>
              </form>              
          </div>

        )}
		</>

		)
};

export default Login;