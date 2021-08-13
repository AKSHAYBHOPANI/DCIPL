import React from 'react';
import logo from '../assests/log.png';
import '../App.css';


function LogoutNow() {
  alert("You have Successfully Logged Out. Hope to see you again.")
  localStorage.removeItem("Profile");
  window.location.reload();
}

function Nav(Profile) {
  
	return (
<>
    {Profile.Profile.IsSignIn ? (

  <>
  <header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
		
  <ul className="menu">
  <li><a href="../">Home</a></li>
    <li><a href="../about">About</a></li>
    <li><a href="../blog">Blog</a></li>
    <li><a href="../careers">Careers</a></li>
    <li><a href="../profile">Profile</a></li>
    <li><button onClick={LogoutNow} >Logout</button></li>


  </ul>
</header>



</>
      ) : (

		<>
		<header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><a href="/Home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="./blog">Blog</a></li>
    <li><a href="./careers">Careers</a></li>
    <li><a href="./login">Dashboard</a></li>
    <li><a href="./register">Register</a></li>
  </ul>
</header>
</>
     )}
</>
		)
};

export default Nav;
