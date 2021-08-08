import React, { useState} from 'react';
import '../App.css';
import './CSS/login.css';
import './features/CSS/investment.css';
import Login from './login';
import AssetClassHigh from ".././Components/Investment/AssestClassHigh";
import AssetClassMedium from ".././Components/Investment/AssestClassMedium";
import AssetClassLow from ".././Components/Investment/AssestClassLow";
import PortfolioHigh from ".././Components/Investment/PortfolioHigh";
import PortfolioMedium from ".././Components/Investment/PortfolioMedium";
import PortfolioLow from ".././Components/Investment/PortfolioLow";

function MyProfile({Profile, setProfile}) {

const [IsFormSubmitted, setIsFormSubmitted] = useState(false);    
const [Data, setData] = useState("");

 

const OnPageLoad = () => {
const Profile = localStorage.getItem("Profile");
onSubmitSignIn();

}

const onSubmitSignIn = (e) => {

    fetch(`http://127.0.0.1:8000/profile/${Profile.email}`, {
      method: 'get',
    })
      
      .then(response => response.json())
      .then(response => {
       if (response.id) {
        console.log(response);
        setData(response);

var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
      txt += "<th>ID</th>"
      txt += "<th>Name</th>"
      txt += "<th>Email</th>"
      txt += "<th>Joined</th>"  
      txt += "</tr>"
      
      txt += "<tr>"
      txt += "<td>" + response.id + "</td>";
      txt += "<td>" + response.name + "</td>";
      txt += "<td>" + response.email + "</td>";
      txt += "<td>" + response.joined + "</td>";
      txt += "</tr>"
      txt += "</table>" 
      document.getElementById('users').innerHTML=txt;
    

       } else {
       alert("Error, Profile Not Found.");
       console.log(response);
     }
       })
  }

	return (
    <>
    {Profile.IsSignIn ? (
  <>
 <br/><br/> <br/><br/>
 <h1>My Profile</h1> 
<table>
<div id="users"></div>
</table>
 <br/><br/> <br/><br/>
{OnPageLoad()}

</>
      ) : (
  <Login Profile={Profile} setProfile={setProfile}/>
        )}
		</>

		)
};

export default MyProfile;