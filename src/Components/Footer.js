import React from 'react';
import '../App.css';
import facebook from "../assests/facebook.png";
import gplus from "../assests/gplus.png";
import linkedin from "../assests/linkedin.png";
import twitter from "../assests/twitter.png";

function Footer() {
	return (
		<>
		
    <footer>      
            <div className="footer-text">
                <a href="./">Home</a>
                <a href="./">Privacy Policy</a>
                <a href="./">Contact Us</a>
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