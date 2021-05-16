import React from 'react';
import logo from '../assests/logo.jpeg';
import '../App.css';

import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
		<header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="./careers">Careers</Link></li>
    <li><Link to="./login">Login</Link></li>
    <li><Link to="./register">Register</Link></li>
  </ul>
</header>
		</>
		)
};

export default Nav;