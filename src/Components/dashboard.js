import React, { useState , useEffect }  from 'react';
import '../App.css';

function Dashboard({User}) {

 var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });



	return (
		<>
		<br /><br /><br /><br />
	<h1 style={{textAlign:"center"}}>Welcome {User}, Today is {date.toLocaleString()}</h1>
		</>
		)
};

export default Dashboard;