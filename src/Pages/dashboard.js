import React, { useState , useEffect }  from 'react';
import './CSS/dash.css';
import Ellipse from "../assests/Ellipse 1.png";
import line1 from "../assests/Line 1.png";
import line2 from "../assests/Line 2.png";
import line3 from "../assests/Line 3.png";
import fb from "../assests/FB 1.png";
import TW from "../assests/TW 1.png";
import google from "../assests/GM 1.png";
import ll from "../assests/LLLLLLLL 1.png";


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
        
<div className="content">
<p>Welcome, {User} Today is {date.toLocaleString()}</p>
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


</div>
</>

)
};

export default Dashboard;