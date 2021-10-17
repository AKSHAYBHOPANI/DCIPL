import React from "react";
import "./subscribe.css";

function Subscribe() {
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
    <>
      {" "}
      <section className="subscribe-pg">
        <h1>
          Subscribe To DCIPL Premiuim. Get all areas of Planning in one place.
        </h1>
        <br />
        <section className="pricing-table">
          <div className="card_subs">
            <h6 className="type-dash">basic</h6>
            <div className="price-dash">
              <span></span>Free
            </div>
            {/* <h5 className="plan-dash">plan</h5> */}
            <ul className="details-dash">
              <li>24/7 support</li>
            </ul>
            <div className="buy-button">
              <h3 className="btn">subscribe</h3>
            </div>
          </div>

          <div className="card_subs">
            <h6 className="type-dash">premium</h6>
            <div className="price-dash">
              <span></span>Pro
            </div>
            {/* <h5 className="plan-dash">plan</h5> */}
            <ul className="details-dash">
              <li>Extra features</li>
              {/* <li>Get Solution</li> */}
              <li>24/7 support</li>
            </ul>
            <div className="buy-button">
              <h3 className="btn">subscribe</h3>
            </div>
          </div>
        </section>
        {/* <div className="product"> */}
        {/* <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        /> */}
        {/* <div className="description">
          <h3>PRO</h3>
          <h5>₹500.00</h5>
        </div>
      </div> */}{" "}
      </section>
      <form
        action="https://server.yourtechshow.com/create-checkout-session"
        classname="subs-dash"
        method="POST"
      >
        <button type="submit" id="checkout-button">
          Stripe
        </button>
        <button onClick={InitiatePay}>PayTm</button>
      </form>
      <br /> <br /> <br />
    </>
  );
}

export default Subscribe;
