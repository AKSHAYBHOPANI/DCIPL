import React from 'react';
import logo from '../logo.jpeg';
import '../App.css';
import facebook from "../facebook.png";
import gplus from "../gplus.png";
import linkedin from "../linkedin.png";
import twitter from "../twitter.png";

function Footer() {
	return (
		<>
		
    <footer>      
            <div className="footer-text">
                <a href="#">Home</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="fimage">
                <img className="img1" src={facebook} alt="fb"></img>
                <img className="img2" src={gplus} alt="gp"></img>
                <img className="img3" src={linkedin} alt="ln"></img>
                <img className="img4" src={twitter} alt="tw"></img>
            </div>
        </footer>
    
		</>
		)
};

export default Footer;