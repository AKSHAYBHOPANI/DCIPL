import React, { useState } from 'react';
import '../App.css';
import Dashboard from './dashboard';


function Register() {
  
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [IsSignIn, setIsSignIn] = useState(false);

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
    setIsSignIn(true);
  }
	return (
		<>
{IsSignIn ? (
  <>
  <br/>
        <Dashboard User={User}/>
</>
      ) : (
        <>
 <br/><br/><br/>
  <form>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  <br/ >

    <label htmlFor="email"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" required onChange={NameValue} value={User}/>

    <label htmlFor="psw"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required onChange={EmailValue} value={Email} />

    <label htmlFor="psw-repeat"><b>Password</b></label>
    <input type="password" placeholder="Password" name="password" required onChange={PasswordValue} value={Password} />


    <p>By creating an account you agree to our <a href="./">Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" onClick={OnSubmit} >Sign Up</button>
    </div>
  </div></form>
</>
      )}


		
		</>
		)
};

export default Register;