import React from "react";
import { Link } from "react-router-dom";
// import image29 from "../assests/team5.png";
import "./CSS/service.css";

function Service() {
  return (
    <div>
      <section className="services1">
        <div className="s-heading">
          <h1>
            Ser<font color="#4a90e2">vic</font>es
          </h1>
          <p>We Provide The Best In className Servies For Our Customers</p>
        </div>

        <div className="s-box1-container1">
          <div className="s-box1">
            <div className="bar"></div>

            {/* <img alt="1" src={image29} /> */}

            <h1>Planning</h1>

            <p>
              Track on your all daily expense and make your day to life easier.
            </p>

            <Link className="s-btn" to="/Planning">
              More
            </Link>
          </div>

          <div className="s-box1">
            <div className="bar"></div>

            {/* <img alt="2" src={image29} /> */}

            <h1>Execution</h1>

            <p>Make a Budget That Fit Right With You And Can Do Most With It</p>

            <Link className="s-btn" to="/Execution">
              More
            </Link>
          </div>

          <div className="s-box1">
            <div className="bar"></div>

            {/* <img alt="3" src={image29} /> */}

            <h1>Monitoring</h1>

            <p>
              We Store All Card Info And Money Safe To Make You Relax And Crazy
            </p>

            <Link className="s-btn" to="/Monitoring">
              More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
