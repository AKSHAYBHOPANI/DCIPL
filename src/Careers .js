import React from 'react';
import logo from '../logo.jpeg';
import facebook from '../components/facebook.png';
import GM  from '../components/GM .png';
import TW  from '../components/TW .png';
import first from '../components/first.jpg';
import second from '../components/second.jpg';
import third from '../components/third.jpg';
import Linkedin from '../components/Linkedin.png';
import '../Careers.css';


import { Link } from "react-router-dom";

function Careers() {
	return (
		<>
		<header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link to="/">About</Link></li>
    <li><Link to="./carrers">Careers</Link></li>
    <li><Link to="./login">Login</Link></li>
    <li><Link to="./register">Register</Link></li>
  </ul>
</header>
	
       
<body>
  
  <section>
     <div className="top"><span>Careers</span></div>
     <div className="wrap">
   <div className="box">
    <img src={first} className="img-responsive"></img >  
    <center><h2>Introductory <br> </br>Consultaion</h2></center>
   <br></br>
   <center><button style="background-color: black; color: white;">Book now</button></center> 
   </div>
   <div className="box">
  <img src= {second} className="img-responsive"></img>
  <center><h2>Secondary Level<br></br> Consultaion</h2></center>
  <br></br>
  <center><button style="background-color: black; color: white;">Book now</button></center>
  </div>
   <div className="box">
  <img src= {third} className="img-responsive"></img>
  <center><h2>TeritiaryLevel <br></br> Consultaion</h2></center>
  <br></br>
  <center><button style="background-color: black; color: white;">Book now</button></center>
  <br></br>
   <div className="banner"></div>
      <div className="footer">
          <a style="color: black;" href="#">Home</a>
          <a style="color: black;"  href="#">PrivacyPolicy</a>
          <a style="color: black;"  href="#">ContactUs</a>
      </div>
      <div className="four" >
          <img height="25px" src={facebook} alt="fb"></img >
          <img height="25px" src= {TW} alt="tw"></img >
          <img height="25px" src= {GM} alt="gm"></img >
          <img height="25px" src= {Linkedin} alt="ln"></img >
  
      </div>
   </div>
  </div>
  
  
  
  
  </section>
  </body>
  </>
		)
};
export default CSareers;