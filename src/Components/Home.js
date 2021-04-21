import React from 'react';
import '../App.css';
import banner from "../banner.png";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
	<img class="banner" src={banner} ></img>
		</>
		)
};

export default Home;