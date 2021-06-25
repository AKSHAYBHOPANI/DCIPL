import React from 'react';// JavaScript Document
import './CSS/intro.css';
import image from "../assests/bg3.png";


function intro() {
	return(
	<>
	<div className="bg1">
	<img src={image} alt="image1"/>
	</div>
  <div className="textbox">
  <h1>Derive Capital</h1>
  <p>All Areas Of Planning At One Place</p>
  <a href="/Home" className="hero-btn">Visit Us To know More</a>
  </div>


	</>
     )
};

export default intro;


