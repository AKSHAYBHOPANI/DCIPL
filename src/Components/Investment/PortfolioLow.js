import React from 'react';
import '../../App.css';


function PortfolioLow(targetreturn) {

const GetPortfolioLow = () => {
  
fetch('http://localhost:8000/portfolio-data')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        var txt = ""
        var i =""
        txt += "<table>"
        txt += "<tr>"
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
      txt += "<td>" + JSON.stringify(response[i].assetclass) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].allocation) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].allocationamount) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].totalincome) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].weightedreturnamount) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].assests) + "</td>";
      txt += "<td>" + JSON.stringify(response[i].weightedsd) + "</td>";
      
      txt += "</tr>"
}
       txt += "</table>"
      document.getElementById('users').innerHTML=txt;
     
      })
}


    return (
        <>
<table>
<div id="users"></div>
</table>
{GetPortfolioLow()}
         </>
        )
};

export default PortfolioLow;