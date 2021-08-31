import React from 'react';
import '../App.css';


function Footer() {
    return (
        <>
        
    <footer>      
              <div className="footer-text">
                 <div className="footer-col">
              <h4 className="h4-text">About Us</h4>
              <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./">Careers</a></li>
                <li><a href="./">Blog</a></li>
                <li><a href="./">Contact/Support</a></li>
              
                                
                </ul>
                            </div>

              <div className="footer-col"  >
                <h4 className="h4-text">Company</h4>
                <ul>
                
                <li><a href="./">Pricing and Refund policy</a></li>
                <li><a href="./">Term of use</a></li>
               <li> <a href="./policy">Privacy Policy</a></li>
               <li><a href="./">Security policy</a></li>
                
                
                </ul>
                </div>
            
            <div className="footer-col"  >
            <h4 className="h4-text">Contact Info</h4>
           <ul className="info">
           <li><i className="fa fa-map-marker"></i>
             DC Ikigai Private Limited, 
                        Dombivli East,Thane,
                        Maharashtra - 421201 
           </li>
           <li>
               <i className="fa fa-phone"></i>
             9999999999
           </li>
           <li>
               
                   <i className="fa fa-envelope"></i>
              
               info@gmail.com
           </li>
                </ul> 
                </div>
          
            <div className="footer-col">
            <h4 className="h4-text">Connect</h4>
           
            <ul className="fimage"  >
               <li> <a href="./"><i class ="fab fa-facebook"></i></a>
                <a href="./"><i class ="fab fa-twitter"></i></a>
                <a href="./"><i class ="fab fa-instagram"></i></a>
                <a href="./"><i class ="fab fa-linkedin"></i></a>
                </li>
                <li>
<form>
    <input className="email-box" type ="email" placeholder="Email ID" required></input>
    
    <input className= "submit-btn" type ="submit" value ="Sign Up"></input>
    
</form>
                </li>
                <li>
                    <div className="para">&copy; 2021 DC & CO. All rights reserved.</div>
                </li></ul>
            </div>
           </div>
        </footer>
    
        </>
        )
};

export default Footer;
