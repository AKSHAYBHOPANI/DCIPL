import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        
    <footer>      
              <div className="footer-text">
                 <div className="footer-col">
              <h4>About Us</h4>
            <p>At DC & Co., we understand that change is not always easy. Since 2018, we’ve been helping individuals of various classes full their economic and financial needs. Our few years of experience have taught us to always make your personal success our priority. Our team of experts is ready to help you develop strategies for not only surviving but thriving in the future. </p>
                            </div>

              <div className="footer-col"  >
                <h4>Company</h4>
                <ul>
                <li><a href="./">Newsletter</a></li>
                <li><a href="./">Career</a></li>
                <li><a href="./">Blog</a></li>
                <li><a href="./">Term of use</a></li>
               <li> <a href="./">Privacy Policy</a></li>
                
                
                </ul>
                </div>
            
            <div className="footer-col"  >
            <h4>Contact Info</h4>
           <ul className="info">
           <li><span><i className="fa fa-map-marker"></i></span>
           <span>  DC Ikigai Private Limited, 
                        Dombivli East, Thane,
                        Maharashtra - 421201 </span>
           </li>
           <li>
               <span><i className="fa fa-phone"></i></span>
               <p><a href ="tel:999999999">9999999999</a></p>
           </li>
           <li>
               <span>
                   <i className="fa fa-envelope"></i>
               </span>
               <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
           </li>
                </ul> 
                </div>
          
            <div className="footer-col">
            <h4>Connect</h4>
           
            <ul className="fimage"  >
               <li> <a href="#"><i class ="fab fa-facebook"></i></a>
                <a href="#"><i class ="fab fa-twitter"></i></a>
                <a href="#"><i class ="fab fa-instagram"></i></a>
                <a href="#"><i class ="fab fa-linkedin"></i></a>
                </li>
                <li>
<form>
    <input type ="email" placeholder="Email ID" required></input>
    &nbsp;  &nbsp;
    <input type ="submit" value ="Sign Up"></input>
</form>
                </li>
                <li>
                    <div>&copy; 2021 DC & CO. All rights reserved.</div>
                </li></ul>
            </div>
           </div>
        </footer>
    
        </>
        )
};

export default Footer;
