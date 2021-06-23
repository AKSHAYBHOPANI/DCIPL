import React, { useState , useEffect }  from 'react';
import './CSS/admin.css';
import Login from './login';

function Admin() {
const [IsSignIn, setIsSignIn] = useState(false);
const [UsersCount, setUsersCount] = useState("");
var [date,setDate] = useState(new Date());
const GetUsers = () => {
  document.getElementById('logo').style.display="block";
fetch('https://dcipl.yourtechshow.com/users')
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

const GetInvestment = () => {
  document.getElementById('logo').style.display="block";
fetch('https://dcipl.yourtechshow.com/investment')
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
fetch('https://dcipl.yourtechshow.com/stats-users')
      .then(response => response.json())
      .then(response => {
        setUsersCount(response.users)
        return;
      })
} 

const GetUsersCSV = () => {
  document.getElementById('logo').style.display="block";
fetch('https://dcipl.yourtechshow.com/getUserCsv')
    
      .then(response => {
        console.log(response)
        if (response.ok) {
          alert("Export Successfully")
          window.location.href = "https://dcipl.yourtechshow.com/users.csv";
        } else {
          alert("Error")
        }
        document.getElementById('logo').style.display="none";
      })
} 

const GetInvestmentsCSV = () => {
  document.getElementById('logo').style.display="block";
fetch('https://dcipl.yourtechshow.com/getInvestmentCsv')
    
      .then(response => {
        console.log(response)
        if (response.ok) {
          alert("Export Successfully")
          window.location.href = "https://dcipl.yourtechshow.com/investment.csv";
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
    {IsSignIn ? (
  <>
  <div>
<br/><br/><br/><br/>
<h2>Welcome, <span className="admin">Admin</span> <br/>Today is {date.toLocaleString()}</h2>
<br/>
<h2 className ="register">Total Registered Users = {UsersCount}</h2><br/>
<div className="menu-container">
<button className="button-a" onClick={GetUsers}>Users</button>
<button className="button-a" onClick={GetInvestment}>Investment</button>
<button className="button-a" onClick={GetUsers}>Tax</button>
</div>

<table>
<div id="users"></div>
</table>
<div className="menu-container">
<button className="button-a" onClick={GetUsersCSV}>Export Users Data</button>
<button className="button-a" onClick={GetInvestmentsCSV}>Export Investments Data</button>
<button className="button-a" onClick={GetInvestmentsCSV}>Export Tax Data</button>
</div>
</div>
{GetStats()}
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>
</>
      ) : (
<div>
<Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn}/>
</div>
        )}
		</>

)
};

export default Admin;