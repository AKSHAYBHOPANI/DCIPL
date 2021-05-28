import React, { useState, useCallback } from 'react';
import '../../App.css';
import '../CSS/login.css';
import './CSS/investment.css';
import Login from '../login';

function Investment({IsSignIn,setIsSignIn, User, setUser, Email, setEmail}) {

const [FixedIncome, setFixedIncome] = useState("");
const [OtherIncome, setOtherIncome] = useState("");
const [MedianIncome, setMedianIncome] = useState("");
const [TotalExpenses, setTotalExpenses] = useState("");
const [SavingsIncome, setSavingsIncome] = useState("");
const [Age, setAge] = useState("");
const [RetirementAge, setRetirementAge] = useState("");
const [AssestClass, setAssestClass] = useState("");
const [Return, setReturn] = useState("");   
const [Risk, setRisk] = useState("");  
const [Time, setTime] = useState("");
const [FinancialRisk, setFinancialRisk] = useState("");
const [Standard, setStandard] = useState("");
const [RiskWillingness, setRiskWillingness] = useState("");
const [Liquidity, setLiquidity] = useState("");     
  
 const FixedIncomeValue = (event) => {
  setFixedIncome(event.target.value);
  };

  const OtherIncomeValue = (event) => {
  setOtherIncome(event.target.value);
  };

  const MedianIncomeValue = (event) => {
  setMedianIncome(event.target.value);
  };

  const TotalExpensesValue = (event) => {
  setTotalExpenses(event.target.value);
  };

  const SavingsIncomeValue = (event) => {
  setSavingsIncome(event.target.value);
  };
  const AgeValue = (event) => {
  setAge(event.target.value);
  };
  const RetirementAgeValue = (event) => {
  setRetirementAge(event.target.value);
  };
  const AssestClassValue = (event) => {
  setAssestClass(event.target.value);
  };
  const ReturnValue = (event) => {
  setReturn(event.target.value);
  };
  const RiskValue = (event) => {
  setRisk(event.target.value);
  };
  const TimeValue = (event) => {
  setTime(event.target.value);
  };
  const FinancialRiskValue = (event) => {
  setFinancialRisk(event.target.value);
  };
  const StandardValue = (event) => {
  setStandard(event.target.value);
  };
  const RiskWillingnessValue = (event) => {
  setRiskWillingness(event.target.value);
  };
  const LiquidityValue = (event) => {
  setLiquidity(event.target.value);
  };

const OnPageLoad = () => {
const email = localStorage.getItem("Email");
const user = localStorage.getItem("User");
setUser(user);
setEmail(email);

}

const onSubmitSignIn = () => {
    fetch('https://dcipl.yourtechshow.com/investment', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: User,
        email: Email,
        FixedIncome: FixedIncome,
        OtherIncome: OtherIncome,
        MedianIncome: MedianIncome,
        TotalExpenses: TotalExpenses,
        SavingsIncome: SavingsIncome,
        Age: Age,
        RetirementAge: RetirementAge,
        AssestClass: AssestClass,
        Return: Return,
        Risk: Risk,
        Time: Time,
        FinancialRisk: FinancialRisk,
        Standard: Standard,
        RiskWillingness: RiskWillingness,
        Liquidity: Liquidity

      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.Age) {
        alert("Thank You For Submitting Data");
        console.log(response);
       } else {
       alert("You already Submitted The Data.");
       console.log(response);
     }
       })
  }

	return (
    <>
    {IsSignIn ? (
  <>
  <br/><br/><br/><br/><br/><br/>
  <h1 className="Title">Investment Planning</h1>
  <h2 className="Title">On The Basis Of Income</h2>
  <div className="Form">
  <form action="#" method="post">
                        <br></br>
                        <input type="text" name="fixed-income" placeholder="Fixed Income (Per Month)" required onChange={FixedIncomeValue} value={FixedIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Other Income (Per Month)" required onChange={OtherIncomeValue} value={OtherIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Median Income (Per Month)" required onChange={MedianIncomeValue} value={MedianIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Total Expenses (Per Month)" required onChange={TotalExpensesValue} value={TotalExpenses}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Income Available For Investment (Savings)" required onChange={SavingsIncomeValue} value={SavingsIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Current Age" required onChange={AgeValue} value={Age}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Retirement Age Proposed" required onChange={RetirementAgeValue} value={RetirementAge}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Assest Class" required onChange={AssestClassValue} value={AssestClass}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return" required onChange={ReturnValue} value={Return}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Risk" required onChange={RiskValue} value={Risk}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Time Duration For Investment (In Years)" required onChange={TimeValue} value={Time}></input><br></br>
                        <label>Financial Risk - </label>
                          <select onChange={FinancialRiskValue} value={FinancialRisk}>
                          <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                          <label>  Standard Of Living - </label>
                          <select onChange={StandardValue} value={Standard}>
                           <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                          <label>  Risk Willingness - </label>
                          <select onChange={RiskWillingnessValue} value={RiskWillingness} >
                           <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                          <label>  Liquidity - </label>
                          <select onChange={LiquidityValue} value={Liquidity}>
                           <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                        </form> <br></br>
                    <button type="submit" onClick={onSubmitSignIn}>Calculate</button>
</div> 

<br></br>   <br></br> <br></br> 
{OnPageLoad()} 
</>
      ) : (
  <Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
        )}
		</>

		)
};

export default Investment;