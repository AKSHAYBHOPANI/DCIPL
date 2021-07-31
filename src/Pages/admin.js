import React, { useState , useEffect }  from 'react';
import './CSS/admin.css';
import Login from './login';

function Admin(Profile) {
const [IsSignIn, setIsSignIn] = useState(false);
const [UsersCount, setUsersCount] = useState("");
var [date,setDate] = useState(new Date());
const GetUsers = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/users')
      .then(response => response.json())
      .then(response => {
      	console.log(response)
      	var txt = ""
      	var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>ID</th>"
      txt += "<th>Name</th>"
      txt += "<th>Email</th>"
      txt += "<th>Joined</th>"  
      txt += "</tr>"
      	for (i = 0; i < response.length; i++) {
      txt += "<tr>"
  		txt += "<td>" + JSON.stringify(response[i].id) + "</td>";
  		txt += "<td>" + JSON.stringify(response[i].name) + "</td>";
  		txt += "<td>" + JSON.stringify(response[i].email) + "</td>";
  		txt += "<td>" + JSON.stringify(response[i].joined) + "</td>";
    	txt += "</tr>"
}
      txt += "</table>"	
      document.getElementById('users').innerHTML=txt;
      document.getElementById('logo').style.display="none";
      })
} 

const GetOnboarding = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/onboarding-data')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>ID</th>"
      txt += "<th>Name</th>"
      txt += "<th>Email</th>"
      txt += "<th>Age</th>"
      txt += "<th>Assets</th>"
      txt += "<th>Liabilities</th>" 
      txt += "<th>CIBIL</th>" 
      txt += "<th>Fixed Income</th>" 
      txt += "<th>Fixed Expenses</th>" 
      txt += "<th>Expected DSAL</th>" 
      txt += "<th>Debt By Income</th>" 
      txt += "<th>FOIR</th>" 
      txt += "<th>Debt By Assets</th>" 
      txt += "<th>Recurring</th>" 
      txt += "<th>Withdraw Principle</th>" 
      txt += "<th>Period</th>" 
      txt += "<th>Source Of Income</th>" 
      txt += "<th>Major Expenses</th>" 
      txt += "<th>Stock Invest</th>" 
      txt += "<th>Bond Invest</th>"
      txt += "<th>Goal</th>" 
      txt += "<th>Yearly Invested</th>" 
      txt += "<th>Over Time</th>" 
      txt += "<th>Yearly Expect</th>" 
      txt += "<th>Long Term Growth</th>" 
      txt += "<th>Portfolio</th>" 
      txt += "<th>Outlook Short Term</th>"
      txt += "<th>Outlook Long Term</th>" 
      txt += "<th>Objective</th>" 
      txt += "<th>Risk Willingness</th>" 
      txt += "<th>Risk Ability</th>" 
      txt += "<th>Total Risk</th>"   
      txt += "</tr>"
        for (i = 0; i < response.length; i++) {
      txt += "<tr>"
      txt += "<td>" + JSON.stringify(response[i].id) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].name) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].email) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].age) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].assets) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].liabilities) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].cibil) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].fixedincome) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].fixedexpense) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].expectedsal) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].debt_by_income) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].foir) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].debt_by_assets) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].reccuring) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].withdrawprincipal) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].period) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].sourceofincome) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].majorexpense) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].stockinvest) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].bondnvest) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].goal) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].yearsinvested) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].overtime) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].yearlyexpect) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].longtermgrowth) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].portfolio) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].outlookshorterm) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].outlooklongterm) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].objective) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].riskwillingness) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].riskability) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].totalrisk) + "</td>";
      txt += "</tr>"
}
      txt += "</table>" 
      document.getElementById('users').innerHTML=txt;
      document.getElementById('logo').style.display="none";
      })
}  

const GetInvestment = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/investment')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>ID</th>"
      txt += "<th>Name</th>"
      txt += "<th>Email</th>"
      txt += "<th>Total Income</th>" 
      txt += "<th>Total Expenses</th>"
      txt += "<th>Assests</th>"
      txt += "<th>Liabilities</th>"
      txt += "<th>Investable Amount</th>"
      txt += "<th>Target Amount</th>"
      txt += "<th>Time</th>"
      txt += "<th>Income Stability</th>"
      txt += "<th>Surplus</th>"
      txt += "<th>Margin</th>"
      txt += "<th>Break Even</th>"
      txt += "<th>Margin Of Safety</th>"
      txt += "<th>Margin Of Safety Rs</th>"
      txt += "<th>Burn Rate</th>"
      txt += "<th>Return</th>"
      txt += "<th>NetWorth</th>"
      txt += "<th>Risk Ability</th>"
      txt += "<th>Target Return</th>"
      txt += "</tr>"
        for (i = 0; i < response.length; i++) {
        
      txt += "<tr>"
      txt += "<td>" + JSON.stringify(response[i].id) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].name) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].email) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].totalincome) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].totalexpenses) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].assests) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].liabilities) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].investableamount) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].targetamount) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].time) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].incomestability) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].surplus) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].margin) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].breakeven) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].marginofsafety) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].marginofsafetyrs) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].burnrate) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].return) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].networth) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].riskability) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].targetreturn) + "</td>";
      txt += "</tr>"
}
       txt += "</table>"
      document.getElementById('users').innerHTML=txt;
      document.getElementById('logo').style.display="none";
      })
}

const GetStats = () => {
fetch('https://server.yourtechshow.com/stats-users')
      .then(response => response.json())
      .then(response => {
        setUsersCount(response.users)
        return;
      })
} 

const GetUsersCSV = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/getUserCsv')
    
      .then(response => {
        console.log(response)
        if (response.ok) {
          alert("Export Successfully")
          window.location.href = "https://server.yourtechshow.com/users.csv";
        } else {
          alert("Error")
        }
        document.getElementById('logo').style.display="none";
      })
} 


const GetOnboardingCSV = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/getOnboardingCsv')
    
      .then(response => {
        console.log(response)
        if (response.ok) {
          alert("Export Successfully")
          window.location.href = "https://server.yourtechshow.com/onboarding.csv";
        } else {
          alert("Error")
        }
        document.getElementById('logo').style.display="none";
      })
} 

const GetInvestmentsCSV = () => {
  document.getElementById('logo').style.display="block";
fetch('https://server.yourtechshow.com/getInvestmentCsv')
    
      .then(response => {
        console.log(response)
        if (response.ok) {
          alert("Export Successfully")
          window.location.href = "https://server.yourtechshow.com/investment.csv";
        } else {
          alert("Error")
        }
        document.getElementById('logo').style.display="none";
      })
} 
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
                           
	return (
       <>
    {Profile.Profile.IsSignIn ? (
  <>
  <div>
<br/><br/><br/><br/>{console.log(Profile)}
<h2>Welcome, <span className="admin">Admin</span> <br/>Today is {date.toLocaleString()}</h2>
<br/>
<h2 className ="register">Total Registered Users = {UsersCount}</h2><br/>
<div className="menu-container">
<button className="button-a" onClick={GetUsers}>Users</button>
<button className="button-a" onClick={GetOnboarding}>Onboarding</button>
<button className="button-a" onClick={GetInvestment}>Investment</button>
<button className="button-a" onClick={GetUsers}>Tax</button>
</div>

<table>
<div id="users"></div>
</table>
<div className="menu-container">
<button className="button-a" onClick={GetUsersCSV}>Export Users Data</button>
<button className="button-a" onClick={GetOnboardingCSV}>Export Onboarding Data</button>
<button className="button-a" onClick={GetInvestmentsCSV}>Export Investments Data</button>
<button className="button-a" onClick={GetInvestmentsCSV}>Export Tax Data</button>
</div>
</div>
<div className="menu-container">
<a className="button" href="./features/PortfolioAllocation">Portfolio Allocation Low</a>
<a className="button" href="./features/PortfolioAllocation">Portfolio Allocation Medium</a>
<a className="button" href="./features/PortfolioAllocation">Portfolio Allocation High</a>
</div>
{GetStats()}
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
</>
      ) : (
<div>
<Login Profile={Profile} setProfile={Profile.setProfile}/>
</div>
        )}
		</>

)
};

export default Admin;