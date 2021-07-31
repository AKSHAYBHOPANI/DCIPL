import React, { useState} from 'react';
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
function PortfolioAllocation({Profile, setProfile}) {

const [AssetClass, setAssetClass] = useState("");
const [Allocation, setAllocation] = useState("");
const [weightedReturn, setweightedReturn] = useState("");
const [SD, setSD] = useState("");
const [IsFormSubmitted, setIsFormSubmitted] = useState(false);    
const [Data, setData] = useState("");

const onSubmitSignIn = (e) => {
  e.preventDefault();
  document.getElementById('logo').style.display="block";
    fetch('http://localhost:8000/investmentPortfolio', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
        assetClass: AssetClass,
        allocation: Allocation,
        weightedReturn: weightedReturn,
        SD: SD
      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.email) {
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
<h1>Congratulations {Profile.name}, Table Is Generated ✅</h1>


</>
) : (
<>
<br/><br/><br/><br/><br/><br/>
  <h1 className="Title">Portfolio Allocation Interface</h1> 
  {/*<div className="Form">
  <form onSubmit={onSubmitSignIn}>
                        <br></br>
                        <input type="number" name="fixed-income" placeholder="Equity" required onChange={FixedIncomeValue} value={FixedIncome}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Allocated Weight" required onChange={VariableIncomeValue} value={VariableIncome}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return%" required onChange={FixedExpensesValue} value={FixedExpenses} max={parseInt(FixedIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Fixed Income" required onChange={VariableExpensesValue} value={VariableExpenses} max={parseInt(VariableIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Allocated Weight" required onChange={AssestsValue} value={Assests}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return%" required onChange={LiabilitiesValue} value={Liabilities}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="SD" required onChange={TargetAmountValue} value={TargetAmount} min={parseInt(FixedIncome)}></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Allocated Weight" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return%" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="SD" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Commodities" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return%" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="SD" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Crypto" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Allocated Weight" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return %" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Forex" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Allocated Weight" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="Return%" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                        <input type="number" name="fixed-income" placeholder="SD" required onChange={TimeValue} value={Time} min="1"></input><br></br>
                          
                          <button type="submit">Upload</button>
                        </form> <br></br>
</div> 
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
<br></br><br></br>*/}

<div className="Form">
  <form onSubmit={onSubmitSignIn}>
                        <br></br>

                        <input type="text" name="asset-class" placeholder="Asset Class" required onChange={(event)=> {setAssetClass(event.target.value)}} value={AssetClass}></input><br></br>
                        <input type="number" name="allocation" placeholder="Allocation" required onChange={(event)=> {setAllocation(event.target.value)}} value={Allocation}></input><br></br>
                        <input type="number" name="weighted-return" placeholder="Weighted Return" required onChange={(event)=> {setweightedReturn(event.target.value)}} value={weightedReturn}></input><br></br>
                        <input type="number" name="sd" placeholder="SD" required onChange={(event)=> {setSD(event.target.value)}} value={SD} ></input><br></br>
                        
                          <button type="submit">Upload</button>
                        </form> <br></br>
</div> 
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
<br></br> <br></br> 
</>
)}
</>
      ) : (
  <Login Profile={Profile} setProfile={setProfile}/>
        )}
		</>

		)
};

export default PortfolioAllocation;