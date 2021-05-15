import React, { useState , useEffect }  from 'react';
import '../dash.css';
import DCIPL_logo from "../pics/DCIPL_logo.jpg";
import Ellipse from "../pics/Ellipse 1.png";
import line1 from "../pics/Line 1.png";
import line2 from "../pics/Line 2.png";
import line3 from "../pics/Line 3.png";
import line4 from "../pics/Line 4.png";
import fb from "../pics/FB 1.png";
import TW from "../pics/TW 1.png";
import google from "../pics/GM 1.png";
import ll from "../pics/LLLLLLLL 1.png";


function Dashboard({User}) {

 var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });


                           
	return (
        <>
	    <div className="area">
        
		 <div className="dashboard">
        </div>
		
<div className="main">
  <ul>
          <li class="active"><a href="#">Home</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Carrers</a></li>
          <li> <a href="#">Register </a> </li>
          <li> <a href="#">Login </a> </li>
      </ul>
</div>
<div className="content">
<p>Welcome, User. Today is 14 May 2021</p>
</div>
<div className="sub">
<p>Personal Finance Portfolio</p>
</div>
<div className="h1">
<p>Holdings</p>
</div>
<div className="h2">
<p>Value</p>
</div>
<div className="sub1">
<p>Stocks</p>
</div>
<div className="sub2">
<p>Mutual Funds</p>
</div>
<div className="sub3">
<p>Health Insurance</p>
</div>
<div className="h2sub1">
<p>Rs XXXX</p>
</div>
<div className="h2sub2">
<p>Rs XXXX</p>
</div>
<div className="h2sub3">
<p>Rs XXXX</p>
</div>
<div className="pie">
<img src={Ellipse} alt="ellipse"/>
</div>
<div className="line1">
<img src={line1} alt="line1"/>
<p>10%</p>
</div>
<div className="line2">
<img src={line2} alt="line2"/>
<p>73%</p>
</div>
<div className="line3">
<img src={line3} alt="line3"/>
<p>23%</p>
</div>
<div className="line4">
<img src={line4} alt="line4" />
</div>
{/*footer*/}
<div className="rect14">
</div>
<div className="fb">
<img src={fb} alt="fb"/>
</div>
<div className="tw">
<img src={TW} alt="tw"/>
</div>
<div className="google">
<img src={google} alt="GM 1"/>
</div>
<div className="ll">
<img src={ll} alt="LLLLLLLL 1"/>
</div>
<div className="home">
<p>Home</p>
</div>
<div className="privacy">
<p>Privacy Policy</p>
</div>
<div className="contact">
<p>Contact Us</p>
</div>
</div>
</>

)
};

export default Dashboard;