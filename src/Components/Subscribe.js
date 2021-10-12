import React from 'react';
import '../App.css';


function Subscribe() {

function InitiatePay() {

  const https = require('https');
/*
* import checksum generation utility
* You can get this utility from https://developer.paytm.com/docs/checksum/
*/
const PaytmChecksum = require('paytmchecksum');

var paytmParams = {};

paytmParams.body = {
    "requestType"   : "Payment",
    "mid"           : "YOUR_MID_HERE",
    "websiteName"   : "WEBSTAGING",
    "orderId"       : "ORDERID_98765",
    "callbackUrl"   : "dcipl.yourtechshow.com/success",
    "txnAmount"     : {
        "value"     : "1.00",
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : "CUST_001",
    },
};

/*
* Generate checksum by parameters we have in body
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "YOUR_MERCHANT_KEY").then(function(checksum){

    paytmParams.head = {
        "signature"    : checksum
    };

    var post_data = JSON.stringify(paytmParams);

    var options = {

        /* for Staging */
        hostname: 'securegw-stage.paytm.in',

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: '/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data.length
        }
    };

    var response = "";
    var post_req = https.request(options, function(post_res) {
        post_res.on('data', function (chunk) {
            response += chunk;
        });

        post_res.on('end', function(){
            console.log('Response: ', response);
        });
    });

    post_req.write(post_data);
    post_req.end();
});



}

    return (
        <>
        <br/> <br/> <br/>
   <h1>Subscribe To DCIPL Premiuim. Get all areas of Planning in one place.</h1>
 <br/>


    <section>
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>PRO</h3>
          <h5>₹500.00</h5>
        </div>
      </div>
      <form action="https://server.yourtechshow.com/create-checkout-session" method="POST">
        <button type="submit" id="checkout-button">Stripe</button>
      </form>
    </section>
 <button onClick={InitiatePay}>PayTm</button>
     <br/> <br/> <br/>

        </>
        )
};

export default Subscribe;
