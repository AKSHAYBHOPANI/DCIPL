import React from 'react';
import './CSS/Home.css';
import banner from "../assests/banner.png";
import fb from "../assests/FB 1.png";
import TW from "../assests/TW 1.png";
import google from "../assests/GM 1.png";
import ll from "../assests/LLLLLLLL 1.png";


function Home() {
	return (
		<>
{/*Banner Section*/}

<div className="area"><img src={banner} alt="Dcipl Banner" ></img>
            </div>
        <div className="area-text">
        <h1>YOUR SMART FINANCIAL PLANNER</h1></div>
        <div className="btn">
        <button button type="submit">PLAY NOW</button>
        </div>
	
{/*Features Section*/}
  <div className="nav-area">
  <div className="fea">
    <h1>Features</h1>
    </div>
    <div className="center" >
    <div className="rect1">
      <h1>INVESTMENT PLANNING</h1>
        </div>
      <div className="btn1">
      <button type="submit">Details</button>
    </div>
    <div className="rect2">
      <h1>TAX PLANNING</h1>
    </div>
    <div className="btn2">
    <button type="submit">Details</button>
    </div>
  <div className="rect3">
    <h1>RETIREMENT PLANNING</h1>
    </div>
   <div className="btn3">
   <button type="submit">Details</button>
  </div>
    <div className="rect4" >
      <h1>FINANCE PLANNING</h1>
    </div>
  <div className="btn4">
       <button type="submit">Details</button>
    </div>
        <div className="rect5" >
            <h1>ESTATE PLANNING</h1>
        </div>
      <div className="btn5">
            <button type="submit">Deatils</button>
    </div>
 <div className="rect6" >
    <h1>WEALTH PLANNING</h1>
 </div>
 <div className="btn6">
     <button type="submit">Details</button>
 </div>
     <div className="why">
     <h1>Why DC&CO </h1>
     </div>
<div className="rect7">
<div className="pol1" >
     <h1>Fast Planning</h1>
</div>
     <div className="pol2" >
     <h1>Secure</h1>
     </div>
<div className="pol3" >
    <h1>Complete Solutions</h1>
</div>
        <div className="pol4" >
            <h1>Responsive Design</h1>
        </div>
<div className="pol5" >
   <h1>Premiuim Support</h1>
</div>
        <div className="pol6">
            <h1>Trusted Platform</h1>
        
        </div>
        </div>
</div>
</div>
</>
)
};

export default Home;