import React, { useState, useCallback } from 'react';
import '../../App.css';
import '../CSS/login.css';
import './CSS/investment.css';
import Login from '../login';
import AssetClassHigh from "../../Components/Investment/AssestClassHigh";
import AssetClassMedium from "../../Components/Investment/AssestClassMedium";
import AssetClassLow from "../../Components/Investment/AssestClassLow";
import PortfolioHigh from "../../Components/Investment/PortfolioHigh";
import PortfolioMedium from "../../Components/Investment/PortfolioMedium";
import PortfolioLow from "../../Components/Investment/PortfolioLow";
function Investment({IsSignIn,setIsSignIn, User, setUser, Email, setEmail}) {

const [TotalIncome, setTotalIncome] = useState("");
const [TotalExpenses, setTotalExpenses] = useState("");
const [Assests, setAssests] = useState("");
const [Liabilities, setLiabilities] = useState("");
const [InvestableAmount, setInvestableAmount] = useState("");
const [TargetAmount, setTargetAmount] = useState(""); 
const [Time, setTime] = useState("");
const [IncomeStability, setIncomeStability] = useState("");
const [IsFormSubmitted, setIsFormSubmitted] = useState(false);    
const [Data, setData] = useState("");
var AssetClass;
var Portfolio;
if (Data.riskability==="high") {
  AssetClass = <AssetClassHigh />
} else if (Data.riskability==="Medium") {
  AssetClass = <AssetClassMedium />
} else if (Data.riskability==="Low") {
  AssetClass = <AssetClassLow />
}

if (Data.riskability==="high") {
  Portfolio = <PortfolioHigh />
} else if (Data.riskability==="Medium") {
  Portfolio = <PortfolioMedium />
} else if (Data.riskability==="Low") {
  Portfolio = <PortfolioLow />
}

 const TotalIncomeValue = (event) => {
  setTotalIncome(event.target.value);
  };

  const TotalExpensesValue = (event) => {
  setTotalExpenses(event.target.value);
  };

  const AssestsValue = (event) => {
  setAssests(event.target.value);
  };

  const LiabilitiesValue = (event) => {
  setLiabilities(event.target.value);
  };

  const InvestableAmountValue = (event) => {
  setInvestableAmount(event.target.value);
  };
  const TargetAmountValue = (event) => {
  setTargetAmount(event.target.value);
  };
  
  const TimeValue = (event) => {
  setTime(event.target.value);
  };

  const IncomeStabilityValue = (event) => {
  setIncomeStability(event.target.value);
  };

const OnPageLoad = () => {
const email = localStorage.getItem("Email");
const user = localStorage.getItem("User");
setUser(user);
setEmail(email);
CheckIsFormSubmitted();
}

const CheckIsFormSubmitted = () => {
    fetch('https://dcipl.yourtechshow.com/IsInvestmentFormSubmitted', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Email: Email,

      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.email) {
        setIsFormSubmitted(true);
        setData(response);
        console.log(response)
       } else {
       setIsFormSubmitted(false);
     }
       })
  }

const onSubmitSignIn = (e) => {
  e.preventDefault();
  document.getElementById('logo').style.display="block";
    fetch('https://dcipl.yourtechshow.com/investment', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        User: User,
        Email: Email,
        TotalIncome: TotalIncome,
        TotalExpenses: TotalExpenses,
        Assests: Assests,
        Liabilities: Liabilities,
        InvestableAmount: InvestableAmount,
        TargetAmount: TargetAmount,
        Time: Time,
        IncomeStability: IncomeStability

      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.time) {
        alert("Thank You For Submitting Data");
        console.log(response);
        document.getElementById('logo').style.display="none";
        setIsFormSubmitted(true);
        setData(response);
       } else {
       alert("Error, Something Went Wrong.");
       console.log(response);
       document.getElementById('logo').style.display="none";
     }
       })
  }

	return (
    <>
    {IsSignIn ? (
  <>
  {IsFormSubmitted ? (
  <> 
<br></br><br></br><br></br>

<h1>Congratulations {User}, Your Investment Portfolio Is Generated ✅</h1>
<h2> Your Current Net Worth is {Data.networth}</h2>
<h2>It will take {Data.targetamount/Data.investableamount} Years To Raise {Data.targetamount} if you invest {Data.investableamount} Per Year.</h2>
<h2>Suggested Assest Classes To Invest In (Tailored just for you) - </h2>

{AssetClass}

<h2>Suggested Portfolio's To Invest In (Choises Based On Personal Interest) - </h2>

{Portfolio}

</>
) : (
<>
<br/><br/><br/><br/><br/><br/>
  <h1 className="Title">Investment Planning</h1>
  <h2 className="Title">On The Basis Of Income</h2>
  <div className="Form">
  <form onSubmit={onSubmitSignIn}>
                        <br></br>
                        <input type="number" name="fixed-income" placeholder="Total Income (Per Month)" required onChange={TotalIncomeValue} value={TotalIncome}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Total Expenses (Per Month)" required onChange={TotalExpensesValue} value={TotalExpenses} max={parseInt(TotalIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Assests" required onChange={AssestsValue} value={Assests}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Liabilities" required onChange={LiabilitiesValue} value={Liabilities}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Income Available For Investment (Savings)" required onChange={InvestableAmountValue} value={InvestableAmount} max={parseInt(TotalIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Target Amount (Goal)" required onChange={TargetAmountValue} value={TargetAmount} min={parseInt(TotalIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Time Duration For Investment (In Years)" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <label>Income Stability - </label>
                          <select onChange={IncomeStabilityValue} value={IncomeStability} required>
                          <option value="" selected disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Unstable</option>
                            <option value="Unstable">Unstable</option>
                            <option value="Somewhat Stable">Somewhat Stable</option>
                            <option value="Stable" >Stable</option>
                            <option value="Very Stable">Very Stable</option>
                          </select>
                          
                          <button type="submit">Calculate</button>
                        </form> <br></br>
</div> 
<div id="logo" class="loadingio-spinner-rolling-kswyn6f3gj7"><div class="ldio-c9p079igqka">
<div></div>
</div></div>
<br></br>   <br></br> <br></br> 
{OnPageLoad()}
</>
)}
</>
      ) : (
  <Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
        )}
		</>

		)
};

export default Investment;