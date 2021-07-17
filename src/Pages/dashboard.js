import React, { useState , useEffect }  from 'react';
import './CSS/dash.css';
import Ellipse from "../assests/Ellipse 1.png";
import line1 from "../assests/Line 1.png";
import line2 from "../assests/Line 2.png";
import line3 from "../assests/Line 3.png";
import rect1 from "../assests/rect1.jpg"; 
import rect2 from "../assests/rect2.jpg"; 
import Portfolio from "../assests/portfolio.png";

function Dashboard(Profile) {

const [age, setage] = useState("");
const [assets, setassets] = useState("");
const [liabilities, setliabilities] = useState("");
const [cibil, setcibil] = useState("");
const [fixedincome, setfixedincome] = useState("");
const [fixedexpense, setfixedexpense] = useState("");
const [expectedSal, setexpectedSal] = useState("");
const [withdrawPrincipal, setwithdrawPrincipal] = useState("");
const [period, setperiod] = useState("");
const [sourceOfIncome, setsourceOfIncome] = useState("");
const [majorExpense, setmajorExpense] = useState("");
const [stockInvest, setstockInvest] = useState("");
const [bondInvest, setbondInvest] = useState("");
const [goal, setgoal] = useState("");
const [yearsInvested, setyearsInvested] = useState("");
const [overtime, setovertime] = useState("");
const [yearlyExpect, setyearlyExpect] = useState("");

const [longtermGrowth, setlongtermGrowth] = useState("");
const [portfolio, setportfolio] = useState("");
const [outlookShorterm, setoutlookShorterm] = useState("");
const [outlookLongterm, setoutlookLongterm] = useState("");
const [objective, setobjective] = useState("");
const [riskWillingness, setriskWillingness] = useState("");
const [riskability, setriskability] = useState("");

 var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

const OnPageLoad = () => {

}

const onSubmitSignIn = (e) => {
  e.preventDefault();
  console.log(Profile)
  document.getElementById('logo').style.display="block";
    fetch('https://server.yourtechshow.com/onboarding', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       name: Profile.Profile.Profile.name,
       email: Profile.Profile.Profile.email,
       age: age,
       assets: assets,
       liabilities: liabilities,
       cibil: cibil,
       fixedincome: fixedincome,
       fixedexpense: fixedexpense,
       expectedSal: expectedSal,
       withdrawPrincipal: withdrawPrincipal,
       period: period,
       sourceOfIncome: sourceOfIncome,
       majorExpense: majorExpense,
       stockInvest: stockInvest,
       bondInvest: bondInvest,
       goal: goal,
       yearsInvested: yearsInvested,
       overtime: overtime,
       yearlyExpect: yearlyExpect,
       longtermGrowth: longtermGrowth,
       portfolio: portfolio,
       outlookShorterm: outlookShorterm,
       outlookLongterm: outlookLongterm,
       objective: objective         
              
      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.age) {
        console.log(Profile)
        alert("Thank You For Submitting Data");
        console.log(response);
        Profile.Profile.setProfile(prevState => {
    return Object.assign({}, prevState, { id: Profile.Profile.Profile.id, name: Profile.Profile.Profile.name,
    email: Profile.Profile.Profile.email,
    IsSignIn: true,
    IsonBoarding: true });
  });
        
       
       } else {
       alert("Error, Something Went Wrong.");
       console.log(response);
       document.getElementById('logo').style.display="none";
     }
       })
  }
                           
	return (
		<>
    {Profile.Profile.Profile.IsonBoarding ? (
        <>
	    <div className="area">
<div className="content">
<p>Welcome, {Profile.Profile.Profile.name} Today is {date.toLocaleString()}</p>
</div>
 
     
      </div>
<div className="text">
<div className="sub">
<p>Personal Finance Portfolio</p>
</div>
<div className="h1">
<p>Holdings</p>
</div>
<div className="h2">
<p>Value</p>
</div>
<div className="sub1">
<p>Stocks</p>
</div>
<div className="sub2">
<p>Mutual Funds</p>
</div>
<div className="sub3">
<p>Health Insurance</p>
</div>
<div className="h2sub1">
<p>Rs XXXX</p>
</div>
<div className="h2sub2">
<p>Rs XXXX</p>
</div>
<div className="h2sub3">
<p>Rs XXXX</p>
</div>
</div>
<div className="pie">
<img src={Ellipse} alt="ellipse"/>
</div>
<div className="line1">
<img src={line1} alt="line1"/>
<p>10%</p>
</div>
<div className="line2">
<img src={line2} alt="line2"/>
<p>73%</p>
</div>
<div className="line3">
<img src={line3} alt="line3"/>
<p>23%</p>
</div>

<div className="images">
<div className="features">
<a href="./features/investment"><img alt="" src={rect1}/><p>Investment Planning</p></a></div>
</div>
<div className="images">
<div className="features">
<a href="./"><img alt="" src={rect2}/><p>Tax Planning</p></a>
</div>
</div>

{OnPageLoad()}


</>
      ) : (
      <>
      <br/><br/>
      <h1>Onboarding</h1>
      <h2>Welcome {Profile.Profile.Profile.name} to DCIPL, There are few things needed before we can start your Financial Planning</h2>
      <br/>
      <div className="Form">
      <form onSubmit={onSubmitSignIn}>
<label for="age">Age: </label>
    <input type="number" name="age" id="age" placeholder="Age" required onChange={(event) => {setage(event.target.value)}} value={age}></input>
<label for="assests">Assests: </label>
    <input type="number" name="assests" id="assests" placeholder="Assests" required onChange={(event) => {setassets(event.target.value)}} value={assets}></input>
<label for="liabilities">Liabilities: </label>
    <input type="number" name="liabilities" id="liabilities" placeholder="Liabilities" required onChange={(event) => {setliabilities(event.target.value)}} value={liabilities}></input>
<label for="cibil">Fixed Income </label>
    <input type="number" name="fixedincome" id="fixedincome" placeholder="Fixed Income" required onChange={(event) => {setfixedincome(event.target.value)}} value={fixedincome}></input>
<label for="cibil">Fixed Expense </label>
    <input type="number" name="fixedexpense" id="fixedexpense" placeholder="Fixed Expense" required onChange={(event) => {setfixedexpense(event.target.value)}} value={fixedexpense}></input>
<label for="cibil">CIBIL Score - <a href="https://www.cibil.com/freecibilscore">Check Now</a> </label>
    <input type="number" name="cibil" id="cibil" placeholder="CIBIL Score" required onChange={(event) => {setcibil(event.target.value)}} value={cibil}></input>
<label for="">What is your expected salary?</label>
    <input type="" name="" id="" required onChange={(event) => {setexpectedSal(event.target.value)}} value={expectedSal}></input>
    <label for="">By when does you expect to start withdrawing principal?</label>
    <input type="" name="" id="" required onChange={(event) => {setwithdrawPrincipal(event.target.value)}} value={withdrawPrincipal}></input>
    <label for="">Once you begin using the money you accumulated,you expect to use that money for a period of </label>
    <input type="" name="" id="" required onChange={(event) => {setperiod(event.target.value)}} value={period}></input>
    <label>Current and future source of income: - </label>
                          <select required onChange={(event) => {setsourceOfIncome(event.target.value)}} value={sourceOfIncome}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Unstable</option>
                            <option value="Unstable">Unstable</option>
                            <option value="Somewhat Stable">Somewhat Stable</option>
                            <option value="Stable" >Stable</option>
                            <option value="Very Stable">Very Stable</option>
                          </select><br/>
     <label>Aside from portfolio, Do you have adequate liquid assets to meet major expenses in next 6-9 months ? </label>
                          <select required onChange={(event) => {setmajorExpense(event.target.value)}} value={majorExpense}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Strongly Agree">Strongly Agree</option>
                          <option value="Agree">Agree</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Strongly Disagree">Strongly Disagree</option>
                          </select><br/>
                          
    <label>If you owned a stock investment portfolio that lost more than 25% in 7 months, you would</label>
                          <select required onChange={(event) => {setstockInvest(event.target.value)}} value={stockInvest}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Sell all remaining investments">Sell all remaining investments</option>
                            <option value="Sell a portion of remaining investments">Sell a portion of remaining investments</option>
                            <option value="Hold on to investments and sell nothing">Hold on to investments and sell nothing</option>
                            <option value="Buy more of the investments" >Buy more of the investments</option>
                          </select><br/>

   <label>If you owned a bond investment portfolio that lost
9% in 11 months, you would</label>
                          <select required onChange={(event) => {setbondInvest(event.target.value)}} value={bondInvest}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Sell all remaining investments">Sell all remaining investments</option>
                            <option value="Sell a portion of remaining investments">Sell a portion of remaining investments</option>
                            <option value="Hold on to investments and sell nothing">Hold on to investments and sell nothing</option>
                            <option value="Buy more of the investments" >Buy more of the investments</option>
                          </select><br/>

   <label>Before you make a decision on any investment, you need to
consider how you feel about the prospect of potential loss of principal.
This is a basic principle of investing: the higher return you seek, the more risk you face.
Based on your feelings about risk and potential returns, your goal is to</label>
                          <select required onChange={(event) => {setgoal(event.target.value)}} value={goal}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Potentially increase portfolio’s value as quickly as possible while accepting higher levels of risk or loss of principal">Potentially increase portfolio’s value as quickly as possible while accepting higher levels of risk or loss of principal</option>
                            <option value="Potentially increase my portfolio’s value at a moderate pace while accepting moderate to high levels of risk or loss of principal">Potentially increase my portfolio’s value at a moderate pace while accepting moderate to high levels of risk or loss of principal</option>
                            <option value="Get Income as a Primary concern, Capital Appreciation as Secondary">Get Income as a Primary concern, Capital Appreciation as Secondary</option>
                            <option value="Secure the safety of my hard earned investment principal" >Secure the safety of my hard earned investment principal</option>
                          </select><br/>

   <label>How many years have you been investing in Financial Markets?</label>
                          <select required onChange={(event) => {setyearsInvested(event.target.value)}} value={yearsInvested}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Never Invested">Never Invested</option>
                            <option value="one - seven years">one - seven years</option>
                            <option value="eight - fifteen years">eight - fifteen years</option>
                            <option value="More than fifteen years" >More than fifteen years</option>
                          </select><br/>

   <label>Assuming normal market conditions you expect your portfolio to, overtime:</label>
                          <select required onChange={(event) => {setovertime(event.target.value)}} value={overtime}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Outpace the market, have higher volatility">Outpace the market, have higher volatility</option>
                            <option value="Generally keep pace with the market">Generally keep pace with the market</option>
                            <option value="have lower risk and lower returns">have lower risk and lower returns</option>
                            <option value="have a high degree of stability with modest returns" >have a high degree of stability with modest returns</option>
                          </select><br/>
                        
  <label>You would prefer investments that have yearly:</label>
                          <select required onChange={(event) => {setyearlyExpect(event.target.value)}} value={yearlyExpect}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="virtually risk free rate of return of 4%">virtually risk free rate of return of 4%</option>
                            <option value="Potential gain of 6% and a potential loss of 2%">Potential gain of 6% and a potential loss of 2%</option>
                            <option value="Potential gain of 8% and a potential loss of 4%">Potential gain of 8% and a potential loss of 4%</option>
                            <option value="Potential gain of 12% and a potential loss of 8%" >Potential gain of 12% and a potential loss of 8%</option>
                            <option value="Potential gain of 20% and a potential loss of 15%" >Potential gain of 20% and a potential loss of 15%</option>
                          </select><br/>

    <label>Do you believe that you can endure significant ups and downs
in the market, because you are looking for as much long-term growth
for your investments as possible</label>
                          <select required onChange={(event) => {setlongtermGrowth(event.target.value)}} value={longtermGrowth}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Strongly Agree">Strongly Agree</option>
                            <option value="Agree">Agree</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Disagree" >Disagree</option>
                            <option value="Strongly Disagree" >Strongly Disagree</option>
                          </select><br/>

<label>Using given five year illustration, choose   
which scenario appeals to you the most: <br/><br/> 

 </label><img width="100%" src={Portfolio} alt="Portfolio"/><br/><br/>

                          <select required onChange={(event) => {setportfolio(event.target.value)}} value={portfolio}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Portfolio 1">Portfolio 1</option>
                            <option value="Portfolio 2">Portfolio 2</option>
                            <option value="Portfolio 3">Portfolio 3</option>
                            <option value="Portfolio 4" >Portfolio 4</option>
                       
                          </select><br/>

<label>Prospects for future, in general
how do you describe your own outlook 
of the financial markets for the time periods listed
For Short term (0- 5 Years)</label>

                          <select required onChange={(event) => {setoutlookLongterm(event.target.value)}} value={outlookLongterm}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Positive">Very Positive</option>
                            <option value="Modestly Positive">Modestly Positive</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Negative" >Negative</option>
                            <option value="Very Negative" >Very Negative</option>
                          </select><br/>

<label>For Long term (more than 5 years)</label>

                          <select required onChange={(event) => {setoutlookShorterm(event.target.value)}} value={outlookShorterm}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Positive">Very Positive</option>
                            <option value="Modestly Positive">Modestly Positive</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Negative" >Negative</option>
                            <option value="Very Negative" >Very Negative</option>
                          </select><br/>

<label>What is your primary objective for this investment portfolio:</label>

                          <select required onChange={(event) => {setobjective(event.target.value)}} value={objective}>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Growth">Growth</option>
                            <option value="To generate income">To generate income</option>
                            <option value="To accumulate assets for retirement">To accumulate assets for retirement</option>
                            <option value="To assure the safety for principal" >To assure the safety for principal</option>
                      
                          </select><br/>

                          <button type="submit">Submit</button>

      </form>
</div>
<div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7"><div className="ldio-c9p079igqka">
<div></div>
</div></div>      </>
 )}
		</>

		)
};

export default Dashboard;