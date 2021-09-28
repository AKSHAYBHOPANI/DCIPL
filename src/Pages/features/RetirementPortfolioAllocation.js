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
function RetirementPortfolioAllocation({Profile, setProfile}) {

const [AssetClass, setAssetClass] = useState("");
const [Allocation, setAllocation] = useState("");
const [weightedReturn, setweightedReturn] = useState("");
const [SD, setSD] = useState("");
const [IsFormSubmitted, setIsFormSubmitted] = useState(false);    
const [Data, setData] = useState("");

const [Equity, setEquity] = useState("");
const [AllocatedWeight, setAllocatedWeight] = useState("");
const [Return, setReturn] = useState("");
const [FixedIncome, setFixedIncome] = useState("");
const [AllocatedWeight2, setAllocatedWeight2] = useState("");
const [Return2, setReturn2] = useState("");
const [SD2, setSD2] = useState("");
const [RealEstate, setRealEstate] = useState("");
const [AllocatedWeight3, setAllocatedWeight3] = useState("");
const [Return3, setReturn3] = useState("");
const [SD3, setSD3] = useState("");
const [Commodities, setCommodities] = useState("");
const [AllocatedWeight4, setAllocatedWeight4] = useState("");
const [Return4, setReturn4] = useState("");
const [SD4, setSD4] = useState("");
const [Crypto, setCrypto] = useState("");
const [AllocatedWeight5, setAllocatedWeight5] = useState("");
const [Return5, setReturn5] = useState("");
const [SD5, setSD5] = useState("");
const [Forex, setForex] = useState("");
const [AllocatedWeight6, setAllocatedWeight6] = useState("");
const [Return6, setReturn6] = useState("");
const [SD6, setSD6] = useState("");
const [OtherInvestments, setOtherInvestments] = useState("");
const [AllocatedWeight7, setAllocatedWeight7] = useState("");
const [Return7, setReturn7] = useState("");
const [SD7, setSD7] = useState("");
const [id, setid] = useState("");

const GetPortfolioLow = () => {
  
fetch('https://server.yourtechshow.com/retirement-portfolio-data')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>Email</th>"
      txt += "<th>Assest Class</th>"
      txt += "<th>Allocation%</th>"
      txt += "<th>Allocation</th>" 
      txt += "<th>Weighted Return%</th>"
      txt += "<th>Weighted Return</th>"
      txt += "<th>SD</th>"
      txt += "<th>Weighted SD</th>"
      txt += "</tr>"
        for (i = 0; i < response.length; i++) {
        
      txt += "<tr>"
      txt += "<td>" + response[i].email + "</td>";
      txt += "<td>" + response[i].assetclass + "</td>";
      txt += "<td>" + response[i].allocationpp + "</td>";
      txt += "<td>" + response[i].allocation + "</td>";
      txt += "<td>" + response[i].weightedreturnpp + "</td>";
      txt += "<td>" + response[i].weightedreturn + "</td>";
      txt += "<td>" + response[i].sd + "</td>";
      txt += "<td>" + response[i].weightedsd + "</td>";
      
      txt += "</tr>"
}
       txt += "</table>"
      document.getElementById('users').innerHTML=txt;
     
      })
}

const GetPortfolioLowEquity = () => {
  
fetch(`https://server.yourtechshow.com/retirementportfolioequity-data/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>Equity</th>"
      txt += "<th>Allocated Weight</th>"
      txt += "<th>Return%</th>" 
      txt += "<th>SD</th>"
      txt += "<th>Fixed Income</th>"
      txt += "<th>AllocatedWeight</th>"
      txt += "<th>Return%</th>"
      txt += "<th>SD</th>"
      txt += "<th>RealEstate</th>"
      txt += "<th>AllocatedWeight</th>"
      txt += "<th>Return%</th>"
      txt += "<th>SD</th>"
      
      txt += "<th>Other Investments</th>"
      txt += "<th>AllocatedWeight</th>"
      txt += "<th>Return%</th>"
      txt += "<th>SD</th>"
      txt += "</tr>"
        for (i = 0; i < response.length; i++) {
        
      txt += "<tr>"
      txt += "<td>" + response[i].equity + "</td>";
      txt += "<td>" + response[i].allocatedweight + "</td>";
      txt += "<td>" + response[i].return + "</td>";
      txt += "<td>" + response[i].sd + "</td>";
      txt += "<td>" + response[i].fixedincome + "</td>";
      txt += "<td>" + response[i].allocatedweight2 + "</td>";
      txt += "<td>" + response[i].return2 + "</td>";
      txt += "<td>" + response[i].sd2 + "</td>";
      txt += "<td>" + response[i].realestate + "</td>";
      txt += "<td>" + response[i].allocatedweight3 + "</td>";
      txt += "<td>" + response[i].return3 + "</td>";
      txt += "<td>" + response[i].sd3 + "</td>";
      
      txt += "<td>" + response[i].otherinvestment + "</td>";
      txt += "<td>" + response[i].allocatedweight4 + "</td>";
      txt += "<td>" + response[i].return4 + "</td>";
      txt += "<td>" + response[i].sd4 + "</td>";
      txt += "</tr>"
}
       txt += "</table>"
      document.getElementById('users2').innerHTML=txt;
     
      })
}

const onSubmitSignIn = (e) => {
  e.preventDefault();
  setIsFormSubmitted(true);
        
  }

  const onSubmitSignInEquity = (e) => {
  e.preventDefault();
  document.getElementById('logo').style.display="block";
    fetch(`https://server.yourtechshow.com/Table2Retirement`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
        tablename: id,
      equity: Equity,
      allocatedWeight: AllocatedWeight,
      Return: Return,
      SD: SD,
      FixedIncome: FixedIncome,
      allocatedWeight2: AllocatedWeight2,
      Return2: Return2,
      SD2: SD2,
      realEstate: RealEstate,
      allocatedWeight3: AllocatedWeight3,
      return3: Return3,
      SD3: SD3,
      OtherInvestments: OtherInvestments,
      allocatedWeight4: AllocatedWeight4,
      return4: Return4,
      SD4: SD4
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
<h1>Success, Table Is Updated ✅</h1>
<br></br>
<table>
<div id="users"></div>
</table>
{GetPortfolioLow()}
<br></br><br></br>
<table>
<div id="users2"></div>
</table>
{GetPortfolioLowEquity()}

</>
) : (
<>
<br/><br/><br/><br/><br/><br/>
  <h1 className="Title">Retirement Portfolio Allocation Interface</h1> 
  <div className="Form">
  <select onChange={(event)=> {setid(event.target.value)}} value={id} required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                         
                          
                          </select>
  <form onSubmit={onSubmitSignInEquity}>
                        <br></br>
                        <input type="text" name="fixed-income" placeholder="Equity" required onChange={(event)=> {setEquity(event.target.value)}} value={Equity}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight(event.target.value)}} value={AllocatedWeight}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn(event.target.value)}} value={Return} ></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD(event.target.value)}} value={SD}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Fixed Income" required onChange={(event)=> {setFixedIncome(event.target.value)}} value={FixedIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight2(event.target.value)}} value={AllocatedWeight2}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn2(event.target.value)}} value={Return2}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD2(event.target.value)}} value={SD2}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Real Estate" required onChange={(event)=> {setRealEstate(event.target.value)}} value={RealEstate}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight3(event.target.value)}} value={AllocatedWeight3} ></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn3(event.target.value)}} value={Return3} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD3(event.target.value)}} value={SD3}></input><br></br>
                       
                        <input type="text" name="fixed-income" placeholder="Other Investments" required onChange={(event)=> {setOtherInvestments(event.target.value)}} value={OtherInvestments}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight4(event.target.value)}} value={AllocatedWeight4}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn4(event.target.value)}} value={Return4}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD4(event.target.value)}} value={SD4}></input><br></br> 
                          <button type="submit">Upload</button><br/>
                        </form><br/><button onClick={onSubmitSignIn}>View</button> <br></br>
</div> 
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>

<br></br><br></br>

{/*<div className="Form">
  <form onSubmit={onSubmitSignIn}>
                        <br></br>

                        <input type="text" name="asset-class" placeholder="Asset Class" required onChange={(event)=> {setAssetClass(event.target.value)}} value={AssetClass}></input><br></br>
                        <input type="text" name="allocation" placeholder="Allocation" required onChange={(event)=> {setAllocation(event.target.value)}} value={Allocation}></input><br></br>
                        <input type="text" name="weighted-return" placeholder="Weighted Return" required onChange={(event)=> {setweightedReturn(event.target.value)}} value={weightedReturn}></input><br></br>
                        <input type="text" name="sd" placeholder="SD" required onChange={(event)=> {setSD(event.target.value)}} value={SD} ></input><br></br>
                        
                          <button type="submit">Upload</button>
                        </form> <br></br>
</div> 
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>*/}
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

export default RetirementPortfolioAllocation;