import first from '../assests/first.jpg';
import second from '../assests/second.jpg';
import third from '../assests/third.jpg';
import './CSS/careers.css';

function careers() {
	return (
		<>
  <br/>     
  <br/>     
  <br/>     
  <br/>     
  <br/>     
  <meta name="view port"
    content ="width=device-width, initial-scale=1.0"></meta>
    <br></br>
<div className="top"><span>Careers</span></div>
     <div className="wrap">
   <div className="box">
    <img src={first} className="img-responsive" alt="first"></img >  
    <center><h2 className="Header">Introductory <br/>Consultaion</h2></center>
   <br></br>
   <center><button className="color">Book now</button></center> 
   </div>
   <div className="box">
  <img src= {second} className="img-responsive" alt="second"></img>
  <center><h2 className="Header">Secondary Level<br/> Consultaion</h2></center>
  <br></br>
  <center><button className="color">Book now</button></center>
  </div>
   <div className="box">
  <img src= {third} className="img-responsive" alt="third"></img>
  <center><h2 className="Header">TeritiaryLevel <br/> Consultaion</h2></center>
  <br/>
  <center><button className="color">Book now</button></center>
  <br/>
   <div className="banner"></div>
    </div></div>
		</>
		)
};

export default careers;