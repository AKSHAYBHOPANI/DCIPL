import React, { useState} from 'react';
import '../../App.css';
import '../CSS/login.css';
import './CSS/retirement.css';
import Login from '../login';
import AssetClassHigh from "../../Components/Investment/AssestClassHigh";
import AssetClassMedium from "../../Components/Investment/AssestClassMedium";
import AssetClassLow from "../../Components/Investment/AssestClassLow";
import PortfolioHigh from "../../Components/Investment/PortfolioHigh";
import PortfolioMedium from "../../Components/Investment/PortfolioMedium";
import PortfolioLow from "../../Components/Investment/PortfolioLow";


function Retirement({Profile, setProfile}) {


const [Assests, setAssests] = useState("");
const [Liabilities, setLiabilities] = useState("");
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
  Portfolio = <PortfolioHigh targetreturn={Data.targetreturn}/>
} else if (Data.riskability==="Medium") {
  Portfolio = <PortfolioMedium targetreturn={Data.targetreturn} />
} else if (Data.riskability==="Low") {
  Portfolio = <PortfolioLow targetreturn={Data.targetreturn}/>
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

  const IncomeStabilityValue = (event) => {
  setIncomeStability(event.target.value);
  };

const OnPageLoad = () => {
const Profile = localStorage.getItem("Profile");

CheckIsFormSubmitted();
}

const CheckIsFormSubmitted = () => {
    fetch('https://server.yourtechshow.com/IsRetirementFormSubmitted', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Email: Profile.email,

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
    fetch('https://server.yourtechshow.com/retirement', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        User: Profile.name,
        Email: Profile.Email,
        
        Assests: Assests,
        Liabilities: Liabilities,
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
    {Profile.IsSignIn ? (
  <>
  {IsFormSubmitted ? (
  <> 
<br></br><br></br><br></br>
{console.log(Profile)}
<h1>Congratulations {Profile.name}, Your Investment Portfolio Is Generated ✅</h1>
<h2> Your Current Net Worth is {Data.networth}</h2>
<h2>It will take {Data.targetamount/Data.investableamount} Years To Raise {Data.targetamount} if you invest {Data.investableamount} Per Year.</h2>
<h2>Suggested Assest Classes To Invest In (Tailored just for you) - </h2>

{AssetClass}

<h2>Suggested Portfolio's To Invest In (as per your Target Return of {Data.targetreturn}%) - </h2>

{Portfolio}

</>
) : (
<><div className="retire-plan">
<br/><br/><br/><br/><br/><br/>
  <h1 className="Title1">Retirement Planning</h1>
  <h2 className="Title1">On The Basis Of Investment</h2>
  <div className="Form7">
  <form onSubmit={onSubmitSignIn}>
                        <br></br>
                        
                        <input type="number" name="fixed-income" placeholder="Assests" required onChange={AssestsValue} value={Assests}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Liabilities" required onChange={LiabilitiesValue} value={Liabilities}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Target Amount (Goal)" required onChange={TargetAmountValue} value={TargetAmount}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Time Duration For Investment (In Years)" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <label>Income Stability - </label>
                          <select onChange={IncomeStabilityValue} value={IncomeStability} required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Unstable</option>
                            <option value="Unstable">Unstable</option>
                            <option value="Somewhat Stable">Somewhat Stable</option>
                            <option value="Stable" >Stable</option>
                            <option value="Very Stable">Very Stable</option>
                          </select>
                          
                          <button type="submit">Calculate</button>
                        </form> <br></br>
</div> 
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
<br></br>   <br></br> <br></br> 
</div>
{OnPageLoad()}
</>
)}
</>
      ) : (
  <Login Profile={Profile} setProfile={setProfile}/>
        )}
		</>

		)
};

export default Retirement;