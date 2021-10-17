import React from "react";
import "./monitoring.css";
import first from "../../../assests/1st.png";
import second from "../../../assests/2nd.png";
import third from "../../../assests/3rd.png";
import fourth from "../../../assests/4th.png";
import sixth from "../../../assests/6th.png";
import seventh from "../../../assests/7th.png";
import eighth from "../../../assests/8th.png";
import nineth from "../../../assests/9th.png";
import fullpic from "../../../assests/5146766.jpg";

const Monitoring = () => {
  return (
    <>
    <div className="full">
      <div className="fullpage">
        <div className="page-1">
         
          <img className="bgimage" src={fullpic} />
          <div className="headingofpage">SERVICES AND SUPPORT</div>
          <div className="matter">
            Get the most out of your Dynatrace Software Intelligence Platform
          </div>

          <div className="findnow">Find Answers Now</div>
          <button className="button11">Chat with us</button>
        </div>

        <div className="w1-container">
          Portfolio Management Services
        </div>
        <div className="w1-matter">
          DC & CO direct's Portfolio Management Services offer you professional investment management aimed to work around your customized investment
          strategy.<br /> Whether you're planning for your retirement or looking to grow and secure your wealth, allow DC & COto keep your investments in line with your
          financial plan.
        </div>
        <br />
        <br />
        <div className="Adv3">
          ADVANTAGES
        </div>
        <br />
        <br />

        <div className="flex-containerfor">
          <div>
            <img className="bg10"
              src={first}
              alt="second"
           
            />
          </div>
          <div className="oneheading">
            Premium investment vehicle for consistent returns
          </div>
          <div className="one">
            
            Portfolio Management Service offers professional management
           <br/>with an aim to deliver superior risk adjusted return.
            <br />
            
          </div>
        </div>
        <div>
          <img className="bg2" src={second} alt="second" />
          <div className="twohead">
            Professionally managed quality portfolio
          </div>
          <div className="two">
            
            The portfolio is managed by seasoned professionals who have <br />
            considerable experience in equity markets. They manage the <br />
            portfolio adhering to the strategy communicated to the clients.
          </div>
        </div>
      </div>
      <br />
      <div className="flex-containerfor-34">
        <div>
          <img className="bg3" src={third} alt="second"/>
          <div className="threehead">Diversification of risk</div>
          <div className="three">
            Since the stock market is uncertain and volatile at times,
            investment in <br /> PMS will look to diversify the risk and thereby
            reduce <br />
            the impact of adverse events on the portfolio.
          </div>
        </div>
        <div>
          <img
            className="bg4"
            src={fourth}
            alt="second"
            
            alt=""
          />
          <div className="fourhead">Scope for higher risk adjusted returns</div>
          <div className="four">
            {" "}
            As PMS usually have concentrated stock portfolio, it has better{" "}
            <br />
            chance to generate superior returns over the underlying index,{" "}
            <br /> especially if the portfolio is recalibrated to compensate the
            market <br /> volatility
          </div>
        </div>
      </div>

      <div className="w1-container"></div>
      <div className="Advfor">
        EXPLORE OUR PMS STRATAGIES
      </div>
      <br />
      <br />

      <div className="flex-containerfor-pms">
        <div>
          <img
            className="bg5"
            src={sixth}
            alt="second"
            
         
          />
          <div className="fivehead">
            Across Market Cap-Large, Multi, Mid
            <br /> & Small Cap Oriented
          </div>
        </div>
        <div>
          <img
            className="bg6"
            src={seventh}
            alt="second"
            
            alt=""
          />
          <div className="sixhead">Concentrated & Diversified Option</div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex-containerfor-pms2">
        <div>
          <img
            className="bg7"
            src={eighth}
            alt="second"
           
            alt=""
          />
          <div className="sevenhead">Discretionary & Non-Discretionary</div>
        </div>
        <div>
          <img
            className="bg8"
            src={nineth}
            alt="second"
           
            alt=""
          />
          <div className="eighthead">Active & Passive Strategies</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="w2-container-for-circle">
        
         <div className="outer-circle-last-one">
          <div className="inner-circle-last-two">
            <div className="circlematter-for-circle">
              <center>
                Can Subscribe by stock transfer, cash or combination of both
              </center>
            </div>
          </div>
        </div>
         <div className="outer-circle-last-one">
          <div className="inner-circle-last-two">
            <div className="circlematter-for-circle">
              <center>
               Attractive and Alligned Fee structures
              </center>
            </div>
          </div>
        </div>
        <div className="outer-circle-last-one">
          <div className="inner-circle-last-two">
            <div className="circlematter-for-circle">
              <center>
               Customized
investment
strategies
              </center>
            </div>
          </div>
        </div>
         <div className="outer-circle-last-one">
          <div className="inner-circle-last-two">
            <div className="circlematter-for-circle">
              <center>
                Complete Transparency
stacks are held in
Demat of
investors
              </center>
            </div>
          </div>
        </div>
        

        <div className="outer-circle-last-one">
          <div className="inner-circle-last-two">
            <div className="circlematter-for-circle">
              <center>Disciplined
approach and 
active monitoring</center>
            </div>
          </div>
        </div>

      </div>
      <br/>
      </div>
    </>
  );
};

export default Monitoring;
