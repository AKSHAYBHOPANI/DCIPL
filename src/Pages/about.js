import React from 'react';
import './CSS/about.css';
import dhaval from "../assests/dhaval.png";
import keval from "../assests/keval.png"


function about() {
    return (
        <>
          <script>
            var meta = document.createElement('meta');
meta.httpEquiv = "X-UA-Compatible";
meta.content = "IE=edge";
document.getElementsByTagName('head')[0].appendChild(meta);</script>
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0"/>');


        <div className="body">
            <div className="about-section"> 
                <div className="inner-container">
                    <h1 className="heading">About Us</h1>
                        <p className="text">
                            Creative Solutions backed by potential impactful results At DC & Co., we understand that change is not always easy. Since 2018, we’ve been helping individuals of various classes full their economic and financial needs. Our few years of experience have
                            taught us to always make your personal success our priority. Our team of experts is ready to help you develop strategies for not only surviving but thriving in the future. DCIPL has been successful in being recognized by the Government
                            of India as an MSME and DIPPT venture under Startup India Initiative. Drop us an email today to set up your first consultation.
                        </p>
                </div>
                <div className="row"></div>
                    <h2 className="team">Meet Our Founders</h2>
                    <div className="column">
                        <div className="card">
                         <div className="founders">
                         <img src= {dhaval} alt="Dhaval"></img></div>
                            <div className="container">
                                <h2>Dhaval C</h2>
                                <p className="title">CEO & Founder</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>



                    <div className="column">
                        <div className="card">
                         <div className="founders">
                         <img src= {keval} alt="Keval"></img></div>
                            <div className="container">  
                                <h2>Keval C</h2>
                                <p className="title">CEO & Founder</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
        )
};

export default about;