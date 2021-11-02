import React from 'react';
import './Cancel.css';
import { Link } from "react-router-dom";
import paysc from "../../assests/error.gif";

function Cancel() {

  return (
    <>
    <div className="cn-ar"></div>
    <div className="cn1-ar">
    
    <div className="c11">
    <img src={paysc} alt="#"></img></div>
    <h1>Payment Failed</h1>
    <h2>Something Went Wrong</h2>
    <h3>Payment type <br/>        
      Bank<br/>        
      Mobile<br/>        
      Email<br/>         
      Amount paid<br/>      
      Transaction ID</h3> 

      <p>Net banking<br/>
      HDFC<br/>
      9999999999<br/>
      123@gmail.com<br/>
      500.00<br/>
      12345678</p>
    
    <div className="cio-btn">
        <Link to ="" className="cii-btn">Print</Link>
        <Link to ="" className="cii-btn">Close</Link>
        </div>
    </div>
    </>


    )

};

export default Cancel;