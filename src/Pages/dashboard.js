import React, { useState , useEffect }  from 'react';
import './CSS/dash.css';
import Ellipse from "../assests/Ellipse 1.png";
import line1 from "../assests/Line 1.png";
import line2 from "../assests/Line 2.png";
import line3 from "../assests/Line 3.png";
import rect1 from "../assests/rect1.jpg"; 
import rect2 from "../assests/rect2.jpg"; 

function Dashboard(Profile) {

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
  document.getElementById('logo').style.display="block";
    fetch('http://127.0.0.1:8000/onboarding', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        User: Profile.name,
        Email: Profile.Email,
        

      })
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.time) {
        alert("Thank You For Submitting Data");
        console.log(response);
        Profile.setProfile(prevState => {
    return Object.assign({}, prevState, { id: Profile.id, name: Profile.name,
    email: Profile.email,
    IsSignIn: true,
    IsonBoarding: false });
  });
        document.getElementById('logo').style.display="none";
       
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
        {console.log(Profile)}
<div className="content">
<p>Welcome, {Profile.Profile.Profile.name} Today is {date.toLocaleString()}</p>
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
</div>
{OnPageLoad()}


</>
      ) : (
      <>{console.log(Profile)}
      <br/><br/>
      <h1>Onboarding</h1>
      <h2>Welcome {Profile.Profile.Profile.name} to DCIPL, There are few things needed before we can start your Financial Planning</h2>
      <br/>
      <div className="Form">
      <form onSubmit={onSubmitSignIn}>
<label for="age">Age: </label>
    <input type="number" name="age" id="age" placeholder="Age" required></input>
<label for="assests">Assests: </label>
    <input type="number" name="assests" id="assests" placeholder="Assests" required></input>
<label for="liabilities">Liabilities: </label>
    <input type="number" name="liabilities" id="liabilities" placeholder="Liabilities" required></input>
<label for="cibil">CIBIL Score: </label>
    <input type="number" name="cibil" id="cibil" placeholder="CIBIL Score" required></input>
<label for="">What is the expected salary of the individual?</label>
    <input type="" name="" id="" required></input>
    <label for="">By when does the individual expect to start withdrawing principal?</label>
    <input type="" name="" id="" required></input>
    <label for="">Once the individual begins using the money he/she accumulated,they expect to use that money for a period of </label>
    <input type="" name="" id="" required></input>
    <label>Current and future source of income: - </label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Unstable</option>
                            <option value="Unstable">Unstable</option>
                            <option value="Somewhat Stable">Somewhat Stable</option>
                            <option value="Stable" >Stable</option>
                            <option value="Very Stable">Very Stable</option>
                          </select><br/>
     <label>What is individual's response to the statement: Aside from portfolio, individual have adequate liquid assets to meet major expenses in next 6-9 months </label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Agree</option>
                            <option value="Unstable">Neutral</option>
                            <option value="Somewhat Stable">Disagree</option>
                            <option value="Stable" >Stable</option>
                            <option value="Very Stable">Strongly Disagree</option>
                          </select><br/>
                          
    <label>If the individual owned a stock investment portfolio that lost more than 25% in 7 months, he/she would</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Sell all remaining investments</option>
                            <option value="Unstable">Sell a portion of remaining investments</option>
                            <option value="Somewhat Stable">Hold on to investments and sell nothing</option>
                            <option value="Stable" >Buy more of the investments</option>
                          </select><br/>

   <label>If the individual owned a bond investment portfolio that lost
9% in 11 months, he/she would</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Sell all remaining investments</option>
                            <option value="Unstable">Sell a portion of remaining investments</option>
                            <option value="Somewhat Stable">Hold on to investments and sell nothing</option>
                            <option value="Stable" >Buy more of the investments</option>
                          </select><br/>

   <label>Before individual makes a decision on any investment, individual needs to
consider how individual feel about the prospect of potential loss of principal.
This is a basic principle of investing: the higher return you seek, the more risk you face.
Based on the individual's feelings about risk and potential returns, his/her goal is to</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Potentially increase portfolio’s value as quickly as possible while accepting higher levels of risk or loss of principal</option>
                            <option value="Unstable">Potentially increase my portfolio’s value at a moderate pace while accepting moderate to high levels of risk or loss of principal</option>
                            <option value="Somewhat Stable">Get Income as a Primary concern, Capital Appreciation as Secondary</option>
                            <option value="Stable" >Secure the safety of my hard earned investment principal</option>
                          </select><br/>

   <label>How many years individual has been investing in Financial Markets?</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Never Invested</option>
                            <option value="Unstable">one - seven years</option>
                            <option value="Somewhat Stable">eight - fifteen years</option>
                            <option value="Stable" >More than fifteen years</option>
                          </select><br/>

   <label>Assuming normal market conditions individual expects his/her portfolio to, overtime:</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Outpace the market, have higher volatility</option>
                            <option value="Unstable">Generally keep pace with the market</option>
                            <option value="Somewhat Stable">have lower risk and lower returns</option>
                            <option value="Stable" >have a high degree of stability with modest returns</option>
                          </select><br/>
                        
  <label>Individual would prefer investments that have yearly:</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">virtually risk free rate of return of 4%</option>
                            <option value="Unstable">Potential gain of 6% and a potential loss of 2%</option>
                            <option value="Somewhat Stable">Potential gain of 8% and a potential loss of 4%</option>
                            <option value="Stable" >Potential gain of 12% and a potential loss of 8%</option>
                            <option value="Stable" >Potential gain of 20% and a potential loss of 15%</option>
                          </select><br/>

    <label>Individual believes that he/she can endure significant ups and downs
in the market, because he is looking for as much long-term growth
for his investments as possible</label>
                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Strongly Agree</option>
                            <option value="Unstable">Agree</option>
                            <option value="Somewhat Stable">Neutral</option>
                            <option value="Stable" >Disagree</option>
                            <option value="Stable" >Strongly Disagree</option>
                          </select><br/>

<label>Q. 19 Using given five year illustration, choose   
which scenario appeals to you the most: <br/> 

 </label>

                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Portfolio 1</option>
                            <option value="Unstable">Portfolio 2</option>
                            <option value="Somewhat Stable">Portfolio 3</option>
                            <option value="Stable" >Portfolio 4</option>
                       
                          </select><br/>

<label>Q. 20 Prospects for future, in general
how do you describe your own outlook 
of the financial markets for the time periods listed
For Short term (0- 5 Years)</label>

                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Positive</option>
                            <option value="Unstable">Modestly Positive</option>
                            <option value="Somewhat Stable">Neutral</option>
                            <option value="Stable" >Very Negative</option>
                            <option value="Stable" >Unsure</option>
                          </select><br/>

<label>For Long term (more than 5 years)</label>

                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Very Positive</option>
                            <option value="Unstable">Modestly Positive</option>
                            <option value="Somewhat Stable">Neutral</option>
                            <option value="Stable" >Very Negative</option>
                            <option value="Stable" >Unsure</option>
                          </select><br/>

<label>What is your primary objective for this investment portfolio:</label>

                          <select required>
                          <option value="" defaultValue disabled hidden>Choose Here</option>
                          <option value="Very Unstable">Growth</option>
                            <option value="Unstable">To generate income</option>
                            <option value="Somewhat Stable">To accumulate assets for retirement</option>
                            <option value="Stable" >To assure the safety for principal</option>
                      
                          </select><br/>

                          <button type="submit">Submit</button>

      </form>
</div>

      </>
 )}
		</>

		)
};

export default Dashboard;