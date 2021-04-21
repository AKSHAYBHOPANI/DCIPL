import React from 'react';
import '../App.css';
import banner from "../banner.png";
import { Link } from "react-router-dom";

function dashboard() {
	return (
		<>
		<br /><br /><br /><br />
	<h1 style={{textAlign:"center"}}>Welcome User, Time is {Date()}</h1>
		</>
		)
};

export default dashboard;