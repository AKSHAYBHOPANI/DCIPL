import React from 'react';
import logo from '../logo.jpeg';
import '../App.css';
import login from './login';
import register from './register';
import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
		<header class="header">
  <a href=""><img src={logo} class="logo"></img></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><Link to="/">About</Link></li>
    <li><Link to="./carrers">Careers</Link></li>
    <li><Link to="./login">Login</Link></li>
    <li><Link to="./register">Register</Link></li>
  </ul>
</header>
		</>
		)
};

export default Nav;