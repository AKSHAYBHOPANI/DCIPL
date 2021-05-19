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
    fetch('http://localhost:3011/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        fixedIncome: FixedIncome,
        OtherIncome: OtherIncome
      })
    })
      
      .then(response => {
        if (response.ok) {
          console.log(response)
        } else {
          const Income= "Fixed Income = " + FixedIncome + " " + "Other Income =" + OtherIncome
          alert(Income)
        }
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
                    <button type="submit" onClick={onSubmitSignIn}>Login</button>
</div>             
</>
      ) : (
  <Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
        )}
		</>

		)
};

export default Investment;