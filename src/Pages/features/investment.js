import React, { useState, useCallback } from 'react';
import '../../App.css';
import '../CSS/login.css';
import './CSS/investment.css';
import Login from '../login';

function Investment({IsSignIn,setIsSignIn}) {

const [FixedIncome, setFixedIncome] = useState("");
const [OtherIncome, setOtherIncome] = useState("");      
  
 const FixedIncomeValue = (event) => {
  setFixedIncome(event.target.value);
  };

  const OtherIncomeValue = (event) => {
  setOtherIncome(event.target.value);
  };

const onSubmitSignIn = () => {
    fetch('http://localhost:3011/investment', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        FixedIncome: FixedIncome,
        OtherIncome: OtherIncome
      })
    })
      
      .then(response => response.json())
      .then(response => {
       let data = JSON.stringify(response)
       var FS = JSON.parse(data);
       console.log(FS)
       var table = ""
       let x = ""
        table += "<tr><td>" + "Good =" + FS.Good + "</td></tr>";
        table += "<tr><td>" + "Average =" + FS.Average + "</td></tr>";
        table += "<tr><td>" + "Bad =" + FS.Bad + "</td></tr>";
       document.getElementById("table").innerHTML = table;
      })
  }

	return (
    <>
    {IsSignIn ? (
  <>
  <br/><br/><br/><br/><br/>
  <h1>Investment Planning</h1>
  <h2>On The Basis Of Income</h2>
  <div className="Form">
  <form action="#" method="post">
                        <br></br>
                        <input type="text" name="fixed-income" placeholder="Fixed Income (Per Month)" required onChange={FixedIncomeValue} value={FixedIncome}></input><br></br>
                        <input type="text" name="fixed-income" placeholder="Other Income (Per Month)" required onChange={OtherIncomeValue} value={OtherIncome}></input><br></br>
                    </form> 
                    <button type="submit" onClick={onSubmitSignIn}>Calculate</button>
</div> 
<h2>Financial Stability</h2>
<table id="table"/>        
</>
      ) : (
  <Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
        )}
		</>

		)
};

export default Investment;