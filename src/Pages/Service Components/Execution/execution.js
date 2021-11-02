import React from 'react';
import leadboard from "../../../assests/leadboard.png";
import girlrock from "../../../assests/girlrock.png";
import team3 from "../../../assests/team 3.png";
import team4 from "../../../assests/team4.png";
import team5 from "../../../assests/team5.png";
import team6 from "../../../assests/team6.png";
import profile from "../../../assests/profile.png";
import ytvideo from"../../../assests/ytvideo.png";
import './execution.css';
const execution = () => {
    return (
        <div className="ser234whol">
        <div className="serhrow">
          <div className="serhcolumn serhleft">
            <p /><h2>Enhanced  our business by availing </h2><h1>Execution only service</h1><h2>too..</h2><p />
          </div>
          <div className="serhcolumn serhright">
            <img src={leadboard} />
          </div>
        </div>
        <hr className="serhr1" />
        <div className="serm">
          <h3>What does execution only service mean</h3>
          <p>Our A transaction executed by a firm (of Financial Advisors) upon the specific instructions of a client where the firm does not give advice on investments relating to the merits of the transaction and in relation to which the rules on assessment of appropriateness do not apply. Tracking seamlessly integrates with your favourite Email Client and is super easy to use.</p>
        </div>
        <div className="sermrow">
          <div className="sermcolumn">
            <div className="serm1card">
              <img src={team3} />
              <h3>Meeting your adviser</h3>
              <p>You’ll begin by discussing with your adviser your specific financial needs and goals. We are completely transparent on any fees and charges and there is no cost to your initial meeting.</p>
            </div>
          </div>
          <div className="sermcolumn">
            <div className="serm2card">
              <img src={team4}/>
              <h3>Creating your bespoke financial plan</h3>
              <p>As we’re independent, we can recommend whole-of-market products and investment opportunities depending on your appetite for investment risk and how you’d like your portfolio managed.</p>
            </div>
          </div>
          <div className="sermcolumn">
            <div className="serm3card">
              <img src={team6} />
              <h3>Putting your plan into action</h3>
              <p>Once you’re happy with the recommendations your adviser has made, we will implement your plan.</p>
            </div>
          </div>
          <div className="sermcolumn">
            <div className="serm4card">
              <img src={team5} />
              <h3>Keeping you on the right track</h3>
              <p>Whether it be market changes or changes to your personal goals, your adviser can review your plan and adjust when necessary. This keeps your plan dynamic.</p>
            </div>
          </div>
        </div>
        <div className="serp">
          <div className="serprow">
            <div className="serpcolumn serpleft">
              <p>We are sometimes asked if we can provide advice on a specific subject, for example the benefits of investing in gold or investing in a certain company. Or we are asked if we can just arrange a specific transaction, for example a pension transfer because that’s all that someone needs, all their other finances are in order, they just need that one thing sorting out.
                The short answer is that we don’t offer this kind of “execution only” service.
                The key point is that the Financial Advisor does not give advice about the investment and so doesn’t need to consider whether its appropriate. In other words, they don’t have to find out anything about the client’s circumstances.
              </p>
            </div>
            <div className="serpcolumn serpright">
              <img src={girlrock} />
            </div>
          </div> 
        </div>
        <div className="seryt">
          <div className="serytrow">
            <div className="serytcolumn serytleft">
              <img src={ytvideo} />
            </div>
            <div className="serytcolumn serytright">
              <h2>How a Financial Planner Can Help You
              </h2>
              <p>Video produced by the Personal Finance Society and ITV to explain how a Financial Planner can help you to achieve your financial goals.
                <button className="serbutton serytbutton">View other help videos</button>
              </p>
            </div>
          </div>
        </div>
        <div className="sercon">
          <div className="serconrow">
            <div className="serconcolumn serconleft">
              <img src={profile} />
            </div>
            <div className="serconcolumn serconright">
              <p>If you have any questions about Financial Planning please feel free to give our Financial Experts a call on 9999 9999 999 or 
              drop us an e-mail to enquiries@dcipl.co.in 
              <button className="ser1button seryt1button">Who we are</button> 
              <button className="ser1button seryt1button">Sign Up for Free Trial</button> </p>
            </div>
          </div>
        </div>
      </div>
    
    );
};

export default execution;