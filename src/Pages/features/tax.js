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
import TaxPortfolio from "../../Components/Tax/Portfolio";
import Subscribe from "../../Components/Subscribe"
function Tax({ Profile, setProfile }) {
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

  const [Age, setAge] = useState("");
  const [basicSalary, setbasicSalary] = useState("");
  const [DA, setDA] = useState("");
  const [taxableAllowances, settaxableAllowances] = useState("");
  const [perquisites, setperquisites] = useState("");

  const [SOPFairMarketValue, setSOPFairMarketValue] = useState("");
  const [SOPMunicipalValue, setSOPMunicipalValue] = useState("");
  const [SOPStandardRent, setSOPStandardRent] = useState("");
  const [SOPMunicipalTaxes, setSOPMunicipalTaxes] = useState("");
  const [SOPInterestOnLoan, setSOPInterestOnLoan] = useState("");

  const [fairMarketValue, setfairMarketValue] = useState("");
  const [municipalValue, setmunicipalValue] = useState("");
  const [standardRent, setstandardRent] = useState("");
  const [municipalTaxes, setmunicipalTaxes] = useState("");
  const [actualRent, setactualRent] = useState("");
  const [municipalTaxesbyTenant, setmunicipalTaxesbyTenant] = useState("");
  const [interestOnLoan, setinterestOnLoan] = useState("");
  const [unrealizedRent, setunrealizedRent] = useState("");
  const [arrearsOfRent, setarrearsOfRent] = useState("");

  const [incomeFromBusinessAndProfession, setincomeFromBusinessAndProfession] =
    useState("");
  const [assetCategory, setassetCategory] = useState("");
  const [holdingPeriod, setholdingPeriod] = useState("");
  const [amount, setamount] = useState("");
  const [lotteryIncome, setlotteryIncome] = useState("");
  const [incomeFromOtherSources, setincomeFromOtherSources] = useState("");
  const [deductions, setdeductions] = useState("");

  const [percentDisability, setpercentDisability] = useState("");
  const [disabilityAmount, setdisabilityAmount] = useState("");
  const [seriousDiseaseExpenditure, setseriousDiseaseExpenditure] =
    useState("");
  const [higherEducationLoan, sethigherEducationLoan] = useState("");
  const [donations, setdonations] = useState("");
  const [paidRentAmount, setpaidRentAmount] = useState("");
  const [seniorCitizenAccountInterest, setseniorCitizenAccountInterest] =
    useState("");
  const [royaltyIncome, setroyaltyIncome] = useState("");
  const [savingsAccountInterest, setsavingsAccountInterest] = useState("");

  if (Data.totalrisk === "High") {
    AssetClass = <AssetClassHigh />;
  } else if (Data.totalrisk === "Medium") {
    AssetClass = <AssetClassMedium />;
  } else if (Data.totalrisk === "Low") {
    AssetClass = <AssetClassLow />;
  }

  if (Data.plan) {
    Portfolio = (
      <TaxPortfolio targetreturn={Data.targetreturn} email={Data.email} />
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
    fetch("https://server.yourtechshow.com/IsTaxFormSubmitted", {
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
    fetch("https://server.yourtechshow.com/tax", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
        age: Age,
        basicSalary: basicSalary,
        DA: DA,
        taxableAllowances: taxableAllowances,
        perquisites: perquisites,
        //Self Occupied Property SOP
        SOPFairMarketValue: SOPFairMarketValue,
        SOPMunicipalValue: SOPMunicipalValue,
        SOPStandardRent: SOPStandardRent,
        SOPMunicipalTaxes: SOPMunicipalTaxes,
        SOPInterestOnLoan: SOPInterestOnLoan,
        // for leased out property
        fairMarketValue: fairMarketValue,
        municipalValue: municipalValue,
        standardRent: standardRent,
        municipalTaxes: municipalTaxes,
        actualRent: actualRent,
        municipalTaxesbyTenant: municipalTaxesbyTenant,
        interestOnLoan: interestOnLoan,
        unrealizedRent: unrealizedRent,
        arrearsOfRent: arrearsOfRent,

        incomeFromBusinessAndProfession: incomeFromBusinessAndProfession,
        // for capital gains
        assetCategory: assetCategory,
        holdingPeriod: holdingPeriod,
        amount: amount,
        incomeFromOtherSources: incomeFromOtherSources,
        lotteryIncome: lotteryIncome,
        deductions: deductions,

        //questions
        percentDisability: percentDisability,
        disabilityAmount: disabilityAmount,
        seriousDiseaseExpenditure: seriousDiseaseExpenditure,
        higherEducationLoan: higherEducationLoan,
        donations: donations,
        paidRentAmount: paidRentAmount,
        seniorCitizenAccountInterest: seniorCitizenAccountInterest,
        royaltyIncome: royaltyIncome,
        savingsAccountInterest: savingsAccountInterest,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.plan) {
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
    fetch(`https://server.yourtechshow.com/taxPortfolio`, {
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
      {Profile.IsSubscribed ? (
        <>
          {IsFormSubmitted ? (
            <>
              <br></br>

              {console.log(Profile)}
              <h1>
                Congratulations {Profile.name}, Your Tax Planning Report Is
                Generated ✅
              </h1>
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
                <h1 className="Title1">Tax Planning</h1>
                <div className="Form7">
                  <form onSubmit={onSubmitSignIn}>
                    <br></br>

                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Age"
                      required
                      onChange={(event) => {
                        setAge(event.target.value);
                      }}
                      value={Age}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Basic Salary"
                      required
                      onChange={(event) => {
                        setbasicSalary(event.target.value);
                      }}
                      value={basicSalary}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="DA"
                      required
                      onChange={(event) => {
                        setDA(event.target.value);
                      }}
                      value={DA}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Taxable Allowances"
                      required
                      onChange={(event) => {
                        settaxableAllowances(event.target.value);
                      }}
                      value={taxableAllowances}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="Perquisites"
                      required
                      onChange={(event) => {
                        setperquisites(event.target.value);
                      }}
                      value={perquisites}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="SOPFairMarketValue"
                      required
                      onChange={(event) => {
                        setSOPFairMarketValue(event.target.value);
                      }}
                      value={SOPFairMarketValue}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="SOPMunicipalValue"
                      required
                      onChange={(event) => {
                        setSOPMunicipalValue(event.target.value);
                      }}
                      value={SOPMunicipalValue}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="SOPStandardRent"
                      required
                      onChange={(event) => {
                        setSOPStandardRent(event.target.value);
                      }}
                      value={SOPStandardRent}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="SOPMunicipalTaxes"
                      required
                      onChange={(event) => {
                        setSOPMunicipalTaxes(event.target.value);
                      }}
                      value={SOPMunicipalTaxes}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="SOPInterestOnLoan"
                      required
                      onChange={(event) => {
                        setSOPInterestOnLoan(event.target.value);
                      }}
                      value={SOPInterestOnLoan}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="fairMarketValue"
                      required
                      onChange={(event) => {
                        setfairMarketValue(event.target.value);
                      }}
                      value={fairMarketValue}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="municipalValue"
                      required
                      onChange={(event) => {
                        setmunicipalValue(event.target.value);
                      }}
                      value={municipalValue}
                    ></input>
                    <br></br>

                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="standardRent"
                      required
                      onChange={(event) => {
                        setstandardRent(event.target.value);
                      }}
                      value={standardRent}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="municipalTaxes"
                      required
                      onChange={(event) => {
                        setmunicipalTaxes(event.target.value);
                      }}
                      value={municipalTaxes}
                    ></input>
                    <br></br>

                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="actualRent"
                      required
                      onChange={(event) => {
                        setactualRent(event.target.value);
                      }}
                      value={actualRent}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="municipalTaxesbyTenant"
                      required
                      onChange={(event) => {
                        setmunicipalTaxesbyTenant(event.target.value);
                      }}
                      value={municipalTaxesbyTenant}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="interestOnLoan"
                      required
                      onChange={(event) => {
                        setinterestOnLoan(event.target.value);
                      }}
                      value={interestOnLoan}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="unrealizedRent"
                      required
                      onChange={(event) => {
                        setunrealizedRent(event.target.value);
                      }}
                      value={unrealizedRent}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="arrearsOfRent"
                      required
                      onChange={(event) => {
                        setarrearsOfRent(event.target.value);
                      }}
                      value={arrearsOfRent}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="incomeFromBusinessAndProfession"
                      required
                      onChange={(event) => {
                        setincomeFromBusinessAndProfession(event.target.value);
                      }}
                      value={incomeFromBusinessAndProfession}
                    ></input>
                    <br></br>

                    {/* <input
                      type="number"
                      name="fixed-income"
                      placeholder="assetCategory"
                      required
                      onChange={(event) => {
                        setassetCategory(event.target.value);
                      }}
                      value={assetCategory}
                    ></input>*/}
                    <label>assetCategory - </label>
                    <select
                      onChange={(event) => {
                        setassetCategory(event.target.value);
                      }}
                      value={assetCategory}
                      required
                    >
                      <option value="" defaultValue disabled hidden>
                        Choose Here
                      </option>
                      <option value="Stocks(Listed) and Securities(Listed and Unlisted)">
                        Stocks(Listed) and Securities(Listed and Unlisted)
                      </option>
                      <option value="Immovable Property">
                        Immovable Property
                      </option>
                      <option value="Unlisted Shares">Unlisted Shares</option>
                      <option value="Movable Property">Movable Property</option>
                      <option value="Debt-Oriented Mutual Funds">
                        Debt-Oriented Mutual Funds
                      </option>
                    </select>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="holdingPeriod"
                      required
                      onChange={(event) => {
                        setholdingPeriod(event.target.value);
                      }}
                      value={holdingPeriod}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="amount"
                      required
                      onChange={(event) => {
                        setamount(event.target.value);
                      }}
                      value={amount}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="incomeFromOtherSources"
                      required
                      onChange={(event) => {
                        setincomeFromOtherSources(event.target.value);
                      }}
                      value={incomeFromOtherSources}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="lotteryIncome"
                      required
                      onChange={(event) => {
                        setlotteryIncome(event.target.value);
                      }}
                      value={lotteryIncome}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="deductions"
                      required
                      onChange={(event) => {
                        setdeductions(event.target.value);
                      }}
                      value={deductions}
                    ></input>
                    <br></br>

                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="percentDisability"
                      required
                      onChange={(event) => {
                        setpercentDisability(event.target.value);
                      }}
                      value={percentDisability}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="disabilityAmount"
                      required
                      onChange={(event) => {
                        setdisabilityAmount(event.target.value);
                      }}
                      value={disabilityAmount}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="seriousDiseaseExpenditure"
                      required
                      onChange={(event) => {
                        setseriousDiseaseExpenditure(event.target.value);
                      }}
                      value={amount}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="higherEducationLoan"
                      required
                      onChange={(event) => {
                        sethigherEducationLoan(event.target.value);
                      }}
                      value={higherEducationLoan}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="donations"
                      required
                      onChange={(event) => {
                        setdonations(event.target.value);
                      }}
                      value={donations}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="paidRentAmount"
                      required
                      onChange={(event) => {
                        setpaidRentAmount(event.target.value);
                      }}
                      value={paidRentAmount}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="seniorCitizenAccountInterest"
                      required
                      onChange={(event) => {
                        setseniorCitizenAccountInterest(event.target.value);
                      }}
                      value={seniorCitizenAccountInterest}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="royaltyIncome"
                      required
                      onChange={(event) => {
                        setroyaltyIncome(event.target.value);
                      }}
                      value={royaltyIncome}
                    ></input>
                    <br></br>
                    <input
                      type="number"
                      name="fixed-income"
                      placeholder="savingsAccountInterest"
                      required
                      onChange={(event) => {
                        setsavingsAccountInterest(event.target.value);
                      }}
                      value={savingsAccountInterest}
                    ></input>
                    <br></br>
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
        <Subscribe Profile={Profile} setProfile={setProfile} />
      )}
    </>
  );
}

export default Tax;
