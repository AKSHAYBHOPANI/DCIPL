import React from 'react';
import logo from '../assests/logo.jpeg';
import '../App.css';

import { Link } from "react-router-dom";

function LogoutNow() {
  alert("You have Successfully Logged Out. Hope to see you again.")
  localStorage.removeItem("IsSignIn");
  window.location.reload();
}

function Nav({IsSignIn, setIsSignIn}) {
  
	return (
<>
    {IsSignIn ? (

  <>
  <div className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
		<div className="menu">
  <ul>
  <li><a href="../">Home</a></li>
    <li><a href="../about">About</a></li>
    <li><a href="../careers">Careers</a></li>
    <li><button onClick={LogoutNow} >Logout</button></li>

  </ul>
</div>

</div>
</>
      ) : (

		<>
		<header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="./careers">Careers</a></li>
    <li><a href="./login">Login</a></li>
    <li><a href="./register">Register</a></li>
  </ul>
</header>
</>
     )}
</>
		)
};

export default Nav;
