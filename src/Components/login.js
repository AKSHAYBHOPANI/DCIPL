import React from 'react';
import '../App.css';
import '../login.css';
import facebook from "../facebook.png";
import gplus from "../gplus.png";
import linkedin from "../linkedin.png";
import twitter from "../twitter.png";

function login() {
	return (
		<>
		<main>
            <div>
                <div className="logregister_form">  
                    <h1>Register/Login</h1>
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Name"></input><br></br>
                        <input type="email" name="email" placeholder="E-Mail"></input><br></br>
                        <input type="password" name="password" placeholder="Password"></input><br></br>
                    </form>
                </div>
                <div className= "btn-group">
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </div>
            </div>
        </main>
        <footer>      
            <div className="footer">
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

export default login;