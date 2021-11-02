import React from "react";
import "./Success.css";
import { Link } from "react-router-dom";
import payss from "../../assests/payments.gif";
function Success() {
  return (
    <>
      <div className="s-ar"></div>
      <div className="s1-ar">
        <div className="s11">
         <img src={payss} alt="#"></img> 
         </div>
        <h1>Payment Successful</h1>
        <h2>You are now DCIPL PRO Member 🔥</h2>
        <h3>
          Payment type <br />
          Bank
          <br />
          Mobile
          <br />
          Email
          <br />
          Amount paid
          <br />
          Transaction ID
        </h3>

        <p>
          Net banking
          <br />
          HDFC
          <br />
          9999999999
          <br />
          123@gmail.com
          <br />
          500.00
          <br />
          12345678
        </p>

        <div className="sio-btn">
          <Link to="" className="sii-btn">
            Print
          </Link>
          <Link to="" className="sii-btn">
            Close
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success;
