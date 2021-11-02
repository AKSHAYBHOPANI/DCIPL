import { React, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./subspay.css";


const Subspay = ({ modalIsOpen, setModalIsOpen }) => {
  
  function InitiatePay() {
    const https = require("https");
    /*
     * import checksum generation utility
     * You can get this utility from https://developer.paytm.com/docs/checksum/
     */
    const PaytmChecksum = require("paytmchecksum");

    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: "YOUR_MID_HERE",
      websiteName: "WEBSTAGING",
      orderId: "ORDERID_98765",
      callbackUrl: "dcipl.yourtechshow.com/success",
      txnAmount: {
        value: "1.00",
        currency: "INR",
      },
      userInfo: {
        custId: "CUST_001",
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      "YOUR_MERCHANT_KEY"
    ).then(function (checksum) {
      paytmParams.head = {
        signature: checksum,
      };

      var post_data = JSON.stringify(paytmParams);

      var options = {
        /* for Staging */
        hostname: "securegw-stage.paytm.in" /* for Production */, // hostname: 'securegw.paytm.in',

        port: 443,
        path: "/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };

      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;
        });

        post_res.on("end", function () {
          console.log("Response: ", response);
        });
      });

      post_req.write(post_data);
      post_req.end();
    });
  }
  
  return (
    <div>
      <Modal className="subs-main"
        isOpen={modalIsOpen}
       
      >
   <div className="subs-cross" onClick={() => setModalIsOpen(false)}>+</div>
        {/* <div   className="subs-main1"> */}
     
      {/* <h3> Pay  for Pro Subscription</h3>
           
      <form action="https://server.yourtechshow.com/create-checkout-session" method="POST">
        
        <h4>Pay Now with Stripe<button type="submit" style={{borderRadius:"15px" ,color:"white",marginLeft:"3%" ,padding:"2%"}} id="checkout-button">Stripe</button></h4>
      
       
      </form> */}

      {/* <h4>Pay Now with PayTm  <button onClick={InitiatePay}  style={{borderRadius:"15px",marginLeft:"3%" ,color:"white",padding:"2%"}}>PayTm</button></h4> */}
      <div className="col-sm-12">		
      <form action="https://server.yourtechshow.com/create-checkout-session" method="POST">	
      <button type="submit" className="btn btn-green btn-pay btn-paynow form-submit" id="submit-contactus-form-btn">
      Pay Now with Stripe
        {/* <span class="small">Book & pay online now</span> */}
        </button></form> 
        <button onClick={InitiatePay}  className="btn btn-green btn-pay btn-paylater form-submit" id="submit-contactus-form-btn">
      Pay Now with PayTm 
        {/* <span class="small">Book & pay in-person on day of booking</span> */}
      </button>
 </div>
            
        {/* </div> */}
      </Modal>
     </div>
  );
};

export default Subspay;
