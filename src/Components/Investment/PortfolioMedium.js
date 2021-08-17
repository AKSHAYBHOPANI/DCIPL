import React from 'react';
import '../../App.css';


function PortfolioMedium({targetreturn, email}) {

const GetPortfolioMedium = () => {
  
fetch(`http://localhost:8000/portfolio-data/${email}`)
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


    return (
        <>
        {targetreturn.targetreturn>=11 ? (
  <>
<table>
<div id="users"></div>
</table>
{GetPortfolioMedium()}      
</>
) : (
<>
<iframe id="iframe" src="https://docs.google.com/spreadsheets/d/1HVkiobjGnwy_lsS2FbWE3DZp4PUQhlHmWDSy7olLuCk/gviz/tq?tqx=out:html&tq&gid=175990139" frameborder="0" scrolling="no"></iframe>
    
        </>
        )} </>
        )
};

export default PortfolioMedium;