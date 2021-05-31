import React from 'react';
import './CSS/Home.css';
import image from "../assests/ban.png";
import image1 from "../assests/image 2.png";
import image2 from "../assests/tax 1.png";
import image3 from "../assests/retire.png";
import image4 from "../assests/finance.png";
import image5 from "../assests/estate.png";
import image6 from "../assests/wealth.png";
import image7 from "../assests/pol1.jpg";
import image8 from "../assests/pol2.jpg";
import image9 from "../assests/pol3.png";
import image10 from "../assests/pol5.jpg";
import image11 from "../assests/pol6.jpg";
import image12 from "../assests/pol4.jpg";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
{/* banner section */}
<div className="container"><img src={image} alt="img"></img>
        <div class="text-box">
            <h1>YOUR SMART FINANCIAL <br />PLANNER</h1>
            <a href="" class="hero-btn1">Play now</a>
        </div>
    </div>

{/* feature section */}
<div className="nav-area">
    <section className="fea">
        <h1>Features</h1>
            <div className="row">

<div className="col"><img src={image1} alt="img1"></img>
    <div className="layer">
            <h2>INVESTMENT PLANNING</h2>
            <a href="" className="hero-btn">Details</a>
    </div>
</div>

<div className="col"><img src={image2} alt="img2"></img>
    <div className="layer">
            <h2>TAX PLANNING</h2>
            <a href="" className="hero-btn">Details</a>
    </div>
</div>

<div className="col"><img src={image3} alt="img3"></img>
    <div className="layer">
            <h2>RETIREMENT PLANNING</h2>
            <a href="" className="hero-btn">Details</a>
    </div>
</div>
</div>
</section>

<section className="fea2">
    <div className="row">

<div className="col"><img src={image4} alt="img4"></img>
    <div className="layer">
        <h2>FINANCE PLANNING</h2>
        <a href="" className="hero-btn">Details</a>
    </div>
</div>

<div className="col"><img src={image5} alt="img5"></img>
    <div className="layer">
        <h2>ESTATE  PLANNING</h2>
        <a href="" className="hero-btn">Details</a>
    </div>
</div>

<div className="col"><img src={image6} alt="img6"></img>
    <div className="layer">
        <h2>WEALTH PLANNING</h2>
        <a href="" className="hero-btn">Details</a>
    </div>
</div>

</div>
</section>

<section className="fea3">
    <h2>Why DC&CO</h2>
</section>
    
    <div class="form">
        <div className="row1">
            <div className="col1"><img src={image7} alt="img7"></img>
                <h2>Fast Planning</h2>
            </div>

            <div className="col1"><img src={image8} alt="img8"></img>
                    <h2>Complete Solutions</h2>
                </div>

                <div className="col1"><img src={image9} alt="img9"></img>
                    <h2>Premiuim Support</h2>
                </div>
        </div>

            <div className="row2">
                    <div className="col1"><img src={image10} alt="img10"></img>
                            <h2>Secure</h2>
                    </div>
    
                    <div className="col1"><img src={image11} alt="img11"></img>
                            <h2>Responsive Design</h2>
                    </div>
            
            
                    <div className="col1"><img src={image12} alt="img12"></img>
                            <h2>Trusted Platform</h2>
                    </div>
            
            
            
            
            
            
                    </div>
    </div>
</div>

</>
)
};

export default Home;