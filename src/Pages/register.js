import React, { useState } from 'react';
import '../App.css';
import Dashboard from './dashboard';


function Register({IsSignIn, setIsSignIn}) {
  
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


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

  const OnSubmit = (event) => {
    event.preventDefault();
    onSubmitSignIn()
  }

  const onSubmitSignIn = () => {
    document.getElementById('logo').style.display="block";
    fetch('https://dcipl.yourtechshow.com/register', {
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
          setIsSignIn(true);
          
          /*this.props.loadUser(user)
          this.props.onRouteChange('home');*/
        } else {
          console.log(response)
          alert("Email Already Exists")
          document.getElementById('logo').style.display="none";
        }
      })
  }


	return (
		<>
{IsSignIn ? (
  <>
  <br/>
        <Dashboard User={User} Email={Email}/>
</>
      ) : (
<>
          <div className="contents">             
              <form action="#" method="post" className="signin">
                  <div className="title"><h2 className="title">Register</h2></div>
                  <div class="input-field"><input type="text" name="name" placeholder="Name" required onChange={NameValue} value={User}></input></div>
                  <div class="input-field"><input type="email" name="email" placeholder="E-Mail" required onChange={EmailValue} value={Email}></input></div>
                  <div class="input-field"><input type="password" name="password" placeholder="Password"  required onChange={PasswordValue} value={Password}></input></div>
                  <div className= "btn-group">
                      <button class="btn" type="submit" onClick={OnSubmit}>Register</button>
                      <div id="logo" class="loadingio-spinner-rolling-kswyn6f3gj7"><div class="ldio-c9p079igqka">
                      </div></div>
                  </div>
              </form>
          </div>
</>
      )}


		
		</>
		)
};

export default Register;