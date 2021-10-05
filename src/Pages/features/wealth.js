import React, { useState } from "react";
import "../../App.css";
import "../CSS/login.css";
import "./CSS/wealth.css";
import Login from "../login";
import AssetClassHigh from "../../Components/Investment/AssestClassHigh";
import AssetClassMedium from "../../Components/Investment/AssestClassMedium";
import AssetClassLow from "../../Components/Investment/AssestClassLow";
import PortfolioHigh from "../../Components/Investment/PortfolioHigh";
import PortfolioMedium from "../../Components/Investment/PortfolioMedium";
import PortfolioLow from "../../Components/Investment/PortfolioLow";
import WealthPortfolio from "../../Components/Wealth/Portfolio";

function Wealth({ Profile, setProfile }) {
  const [Assests, setAssests] = useState("");
  const [Liabilities, setLiabilities] = useState("");
  const [TargetAmount, setTargetAmount] = useState("");
  const [Time, setTime] = useState("");
  const [Plan, setPlan] = useState("");
  const [IncomeStability, setIncomeStability] = useState("");
  const [IsFormSubmitted, setIsFormSubmitted] = useState(false);
  const [Data, setData] = useState("");
  var AssetClass;
  var Portfolio;
  if (Data.totalrisk === "High") {
    AssetClass = <AssetClassHigh />;
  } else if (Data.totalrisk === "Medium") {
    AssetClass = <AssetClassMedium />;
  } else if (Data.totalrisk === "Low") {
    AssetClass = <AssetClassLow />;
  }

  if (Data.plan) {
    Portfolio = (
      <WealthPortfolio targetreturn={Data.targetreturn} email={Data.email} />
    );
  }

  const AssestsValue = (event) => {
    setAssests(event.target.value);
  };

  const LiabilitiesValue = (event) => {
    setLiabilities(event.target.value);
  };

  const TargetAmountValue = (event) => {
    setTargetAmount(event.target.value);
  };

  const TimeValue = (event) => {
    setTime(event.target.value);
  };

  const PlanValue = (event) => {
    setPlan(event.target.value);
  };

  const IncomeStabilityValue = (event) => {
    setIncomeStability(event.target.value);
  };
  const OnPageLoad = () => {
    const Profile = localStorage.getItem("Profile");

    CheckIsFormSubmitted();
  };

  const CheckIsFormSubmitted = () => {
    fetch("https://server.yourtechshow.com/IsWealthFormSubmitted", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: Profile.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.email) {
          setIsFormSubmitted(true);
          setData(response);
          console.log(response);
        } else {
          setIsFormSubmitted(false);
        }
      });
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/wealth", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
        TargetAmount: TargetAmount,
        Time: Time,
        PlanType: Plan,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.time) {
          console.log(response);
          setData(response);

          console.log();
          onSubmitWealth();
          document.getElementById("logo").style.display = "none";
          alert("Thank You For Submitting Data");
        } else {
          alert("Error, Something Went Wrong.");
          console.log(response);
          document.getElementById("logo").style.display = "none";
        }
      });
  };

  const onSubmitWealth = () => {
    fetch(`https://server.yourtechshow.com/wealthPortfolio`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.name) {
          console.log(response);
          setIsFormSubmitted(true);
        } else {
          alert("Error, Something Went Wrong.");
        }
      });
  };

  return (
    <>
      {Profile.IsSignIn ? (
        <>
          {IsFormSubmitted ? (
            <>
              <br></br>
              {console.log(Profile)}
              <h1>
                Congratulations {Profile.name}, Your Wealth Planning Report Is
                Generated ✅
              </h1>
              <h2>
                You need to Deposit Amount {Data.depositperyear} Per Year to
                Raise {Data.targetamount}
              </h2>
              <h2>
                Suggested Assest Classes To Invest In (Tailored just for you) -{" "}
              </h2>

              {AssetClass}

              <h2>
                Suggested Portfolio's To Invest In (as per your Target Return of{" "}
                {Data.return}%) -{" "}
              </h2>

              {Portfolio}
            </>
          ) : (
            <>
              <div className="wealth-plan">
                <h1 className="Title1">Wealth Planning</h1>
                <h2 className="Title1">On The Basis Of Investment</h2>
                <div className="Form7">
                  <form onSubmit={onSubmitSignIn}>
                    <br></br>

                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Target Amount (Goal)"
                      required
                      onChange={TargetAmountValue}
                      value={TargetAmount}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Time Duration For Investment (In Years)"
                      required
                      onChange={TimeValue}
                      value={Time}
                      min="1"
                    ></input>
                    <br></br>

                    <label>Plan Type - </label>
                    <select onChange={PlanValue} value={Plan} required>
                      <option value="" defaultValue disabled hidden>
                        Choose Here
                      </option>
                      <option value="Girl Child Plan">Girl Child Plan</option>
                      <option value="Child Education Plan">
                        Child Education Plan
                      </option>
                      <option value="Normal Plan">Normal Plan</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit">Calculate</button>
                  </form>{" "}
                  <br></br>
                </div>
                <div
                  id="logo"
                  className="loadingio-spinner-rolling-kswyn6f3gj7"
                >
                  <div className="ldio-c9p079igqka">
                    <div></div>
                  </div>
                </div>
                <br></br> <br></br> <br></br>
              </div>
              {OnPageLoad()}
            </>
          )}
        </>
      ) : (
        <Login Profile={Profile} setProfile={setProfile} />
      )}
    </>
  );
}

export default Wealth;
