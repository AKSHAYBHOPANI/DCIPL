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

const [id, setid] = useState("");

const GetPortfolioLow = () => {
  
fetch('https://server.yourtechshow.com/portfolio-data')
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
  
fetch(`https://server.yourtechshow.com/portfolioequity-data/${id}`)
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
      txt += "<th>Commodities</th>"
      txt += "<th>AllocatedWeight</th>"
      txt += "<th>Return%</th>"
      txt += "<th>SD</th>"
      txt += "<th>Crypto</th>"
      txt += "<th>AllocatedWeight</th>"
      txt += "<th>Return%</th>"
      txt += "<th>SD</th>"
      txt += "<th>Forex</th>"
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
      txt += "<td>" + response[i].commodities + "</td>";
      txt += "<td>" + response[i].allocatedweight4 + "</td>";
      txt += "<td>" + response[i].return4 + "</td>";
      txt += "<td>" + response[i].sd4 + "</td>";
      txt += "<td>" + response[i].crypto + "</td>";
      txt += "<td>" + response[i].allocatedweight5 + "</td>";
      txt += "<td>" + response[i].return5 + "</td>";
      txt += "<td>" + response[i].sd5 + "</td>";
      txt += "<td>" + response[i].forex + "</td>";
      txt += "<td>" + response[i].allocatedweight6 + "</td>";
      txt += "<td>" + response[i].return6 + "</td>";
      txt += "<td>" + response[i].sd6 + "</td>";
      
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
    fetch(`https://server.yourtechshow.com/Table2/${id}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: Profile.name,
        email: Profile.email,
      equity: Equity,
      allocatedWeight: AllocatedWeight,
      Return: Return,
      SD: SD,
      FixedIncome: FixedIncome,
      allocatedWeight2: AllocatedWeight2,
      Return2: Return2,
      SD2: SD3,
      realEstate: RealEstate,
      allocatedWeight3: AllocatedWeight3,
      return3: Return3,
      SD3: SD3,
      commodities: Commodities,
      allocatedWeight4: AllocatedWeight4,
      return4: Return4,
      SD4: SD4,
      crypto: Crypto,
      allocatedWeight5: AllocatedWeight5,
      return5: Return5,
      SD5: SD5,
      forex: Forex,
      allocatedWeight6: AllocatedWeight6,
      return6: Return6,
      SD6: SD6
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
  <h1 className="Title">Portfolio Allocation Interface</h1> 
  <div className="Form">
  <select onChange={(event)=> {setid(event.target.value)}} value={id} required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="tablehigh1">Table High 1</option>
                            <option value="tablehigh2">Table High 2</option>
                            <option value="tablehigh3">Table High 3</option>
                          <option value="tablemedium1">Table Medium 1</option>
                            <option value="tablemedium2">Table Medium 2</option>
                            <option value="tablemedium3">Table Medium 3</option>
                          <option value="tablelow1">Table Low 1</option>
                            <option value="tablelow2">Table Low 2</option>
                            <option value="tablelow3">Table Low 3</option>
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
                        <input type="text" name="fixed-income" placeholder="Commodities" required onChange={(event)=> {setCommodities(event.target.value)}} value={Commodities} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight4(event.target.value)}} value={AllocatedWeight4} ></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn4(event.target.value)}} value={Return4} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD4(event.target.value)}} value={SD4}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Crypto" required onChange={(event)=> {setCrypto(event.target.value)}} value={Crypto}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight5(event.target.value)}} value={AllocatedWeight5} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return %" required onChange={(event)=> {setReturn5(event.target.value)}} value={Return5} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD5(event.target.value)}} value={SD5}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Forex" required onChange={(event)=> {setForex(event.target.value)}} value={Forex} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Allocated Weight" required onChange={(event)=> {setAllocatedWeight6(event.target.value)}} value={AllocatedWeight6} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Return%" required onChange={(event)=> {setReturn6(event.target.value)}} value={Return6} min="1"></input><br></br>
                        <input type="text" name="fixed-income" placeholder="SD" required onChange={(event)=> {setSD6(event.target.value)}} value={SD6}></input><br></br>
                          
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

export default PortfolioAllocation;