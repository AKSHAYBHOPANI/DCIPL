import React from 'react';
import '../Home.css';
import banner from "../banner.png";


function Home() {
	return (
		<>
{/*Banner Section*/}

<div className="area"><img src={banner} alt="Dcipl Banner" ></img>
    		<div className="area-text">
        		<h1>YOUR SMART FINANCIAL PLANNER</h1>
        		<h2>PLAY KNOW</h2>
	  </div></div>
	
{/*Features Section*/}

<div className="nav-area">
  <div className="fea">
	<h1>Features</h1>
	</div>
	<div className="rect1">
	  <h1>INVESTMENT PLANNING</h1>
    	<h2>Details</h2>
 </div>
  	<div className="rect2">
	  <h1>TAX PLANNING</h1>
		<h2>Details</h2>	
  	</div>
  <div className="rect3">
	<h1>RETIREMENT PLANNING</h1>
  			<h2>Details  </h2>
	</div>
    <div className="rect4" >
   	  <h1>FINANCE PLANNING</h1>
        <h2>Details</h2>
    </div>
     	<div className="rect5" >
     		<h1>ESTATE PLANNING</h1>
     		<h2>Deatils</h2>
     	</div>
 <div className="rect6" >
    <h1>WEALTH PLANNING</h1>
     <h2>Details</h2>
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

{/*Why Section*/}

<div className="why">
     <h1>Why DC&CO </h1>
     </div>
<div className="rect7">
<div className="pol1" >
     <h1>Fast Planning</h1>
</div>
     <div className="pol2">
     <h1>Secure</h1>
     </div>
<div className="pol3">
    <h1>Complete Solutions</h1>
</div>
     	<div className="pol4">
     		<h1>Responsive Design</h1>
     	</div>
<div className="pol5">
   <h1>Premiuim Support</h1>
</div>
     	<div className="pol6">
     		<h1>Trusted Platform</h1>
     	</div>
</div>

		</>
		)
};

export default Home;