import React from 'react';
import './CSS/about.css';
import facebook from '../assests/facebook.png';
import google from '../assests/g+.png';
import twitter from '../assests/twitter.png';
import linkedln from '../assests/linkedin.png';
import image from '../assests/image.png';


function about() {
	return (
		<>
       
    <h1 className="about">About Us</h1>

    <p className="text"> Creative Solutions backed by potential impactful results 
     At DC & Co., we understand that change is not always easy. Since 2018, we’ve been helping individuals of various classes
    full their economic and financial needs. Our few years of experience have taught us to always make your personal success
    our priority. Our team of experts is ready to help you develop strategies for not only surviving but thriving in the
    future. DCIPL has been successful in being recognized by the Government of India as an MSME and DIPPT venture under
    Startup India Initiative. Drop us an email today to set up your first consultation.</p>
    
    <h1 className="p1">Meet the founders</h1>
    <div className="image">
        <img src={image} alt="founders"></img>
    </div>
    <div className="banner"></div>
   
    <div className="fimage">
        <img src= {facebook} alt="facebook"></img>
        <img src= {twitter} alt="twitter"></img>
        <img src= {google} alt="google"></img>
        <img src= {linkedln} alt="linkedln"></img>
    </div>
    
		</>
		)
};

export default about;