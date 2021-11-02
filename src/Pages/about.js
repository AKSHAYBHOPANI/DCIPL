import React from "react";
import "./CSS/about.css";
import no1 from "../assests/no 1.png";
import no2 from "../assests/no 2.png";
import no3 from "../assests/no 3.png";
import no4 from "../assests/no 4.jpg";
import no5 from "../assests/lock 3 1.png";
import no6 from "../assests/no 6.jpg";
import no7 from "../assests//Group 9.png";
import no8 from "../assests/stack 20 1.png";
import no9 from "../assests/no 8.jpeg";
import no10 from "../assests/no 9.jpeg";
// import { Height } from "@material-ui/icons";
import main from "../assests/Wallet.gif";

function about() {
  return (
    <>
      <div className="aboutpage-components">
        <div className="about-flaunt-cards">
          <div className="about-cards">
            <div className="ab-card-heading">
              <p>
                <span className="card-highlight-head">SIMPLIFY</span>
                <br />
                <span className="card-min-highlight">YOUR INVESTMENT</span>
              </p>
              <p>
                Derive is the smartest way to track and manage your personal
                finance. Now you can track all your accounts in one place and
                get insights into your financial health to help you take control
                of your money.{" "}
              </p>
            </div>
            <div className="ab-card-image">
              <img src={main} />
            </div>
          </div>
          <div className="about-cards" style={{ marginTop: "10%" }}>
            <div className="ab-card-heading">
              <p>
                <span className="card-highlight-head">WHAT CAN I USE</span>
                <br />
                <span className="card-min-highlight">DERIVE CAPITAL FOR?</span>
              </p>
            </div>
            <div className="ab-card-light-blog">
              <div className="blog-head">
                Track and grow your net worth at fingertips.
              </div>
              <div className="blog-img">
                <img src={no2} />
              </div>
            </div>
          </div>
          <div className="about-cards" style={{ marginTop: "10%" }}>
            <div
              className="ab-card-light-blog1"
              style={{ width: "fit-content" }}
            >
              <div className="blog-head">
                Automatic account syncing puts all your finances in one clean
                interface.
              </div>
              <div className="blog-img">
                <img src={no3} style={{ width: "100%", height: "200px" }} />
              </div>
            </div>
            <div className="ab-card-image">
              <img src={no4} style={{ marginLeft: "15%" }} />
            </div>
          </div>
          <div className="about-cards-last" style={{ marginLeft: "-5%" }}>
            <img src={no5} style={{ width: "30%" }} />
            <div className="ab-card-light-blog2" style={{ marginRight: "6%" }}>
              <div className="blog-head">
                Dervie savings the cuttting edge toools to help reach your goals
                Our demand support team of actual financial genurse
              </div>
            </div>
            <img src={no6} style={{ width: "20%" }} />
          </div>
        </div>
      </div>
      <div className="Money-blog">
        <div className="blog-bg-image">
          <img src={no7} />
          <div className="blog-content">
            <h1>MONEY BLOG</h1>
            <p>
              Personal finance is the art of managing your money. How much to
              save, where to invest and how to budget? We have created this
              space to make managing your money less daunting.
            </p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={no8} />
        <img src={no9} />
      </div>
      <div className="faq">
        <img src={no10} />
      </div>
      <div className="questions">
        <details open>
          <summary>
            How can I reach out to the derive team? Is there a support number
            where i can call?
          </summary>
          <div className="answers">
            {" "}
            We are available 24*7 available for you to extend our support,
            please contact us at 8867532639 or support@derivecapital.co.Be
            assured, we are extremely active and prompt with our service!
          </div>
        </details>
        <details>
          <summary>How can i get started?</summary>
          <div className="answers">
            <p>
              {" "}
              Currently Stack is available on Google Playstore, you can install
              the app from there. You may then start by linking your financial
              footprints across categories like banking, debit-credit cards,
              stocks, PF, Mutual Funds, loans and insurances etc. Based on this
              data, Stack will help you track your net worth and recommend
              actions you can take to improve your financial well being. You can
              also track and pay all your bills directly from Stack and get
              assured cashback on the same.
            </p>
          </div>
        </details>
        <details>
          <summary>Who is derive capital for?</summary>
          <div className="answers">
            <p>
              {" "}
              derive capital can be used by anyone and everyone, it simplifies
              and automates personal finance for people starting from beginners
              to experts!
            </p>
          </div>
        </details>
        <details>
          <summary>
            How does derive capital ensure the safety of my data?
          </summary>
          <div className="answers">
            <p>
              derive capital uses industry standard encryption protocols for
              secure services. We’ve implemented the highest standards for fraud
              protection and compliance with bank-grade security of 256-bit
              encryption and promise to never sell your data.
            </p>
          </div>
        </details>
        <details>
          <summary>What are the fees and charges for using derive?</summary>
          <div className="answers">
            <p>
              All the services at derive are for free. Go ahead, utilise it to
              the fullest!
            </p>
          </div>
        </details>
      </div>
    </>
  );
}

export default about;
