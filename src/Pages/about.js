import React from 'react';
import './CSS/about.css';
import dhaval from "../assests/dhaval.png";
import keval from "../assests/keval.png";


function about() {
    return (
        <>
        <div className="parts-1">
            <div className="storage-1">
                <h1>About Us</h1>
                <br/>
                <br/>
                <p><span><i>Creative Solutions backed by potential impactful results.</i></span><br/><br/>At DC & Co., we understand that change is not always easy.Since 2018, we’ve been helping individuals of various classes full their economic and financial
                needs. Our few years of experience have taught us to always make your personal success our priority. Our team of experts is ready to help you develop strategies for not only surviving but thriving in the future. DCIPL has been successful
                in being recognized by the Government of India as an MSME and DIPPT venture under Startup India Initiative. Drop us an email today to set up your first consultation.
                </p>
            </div>

            <h1 className="caption-1">Meet Our Founders</h1> 

                    <div className="segment-1">
                        <div className="sheet-1">
                            <img src={dhaval} alt="dhaval-1"></img>   
                            <h1>Dhaval C</h1>
                            <p>CEO & Founder<br/><br/>
                            xyz@gmail.com</p>
                            <a href="">Contact</a>
                        </div>

                        <div className="sheet-1">
                            <img src={keval} alt="keval"></img>
                            <h1>Keval C</h1>
                            <p>CEO & Founder<br/><br/>
                            xyz@gmail.com</p>
                            <a href="">Contact</a>
                        </div>
                    </div>
        </div>
        
        </>
        )
};

export default about;