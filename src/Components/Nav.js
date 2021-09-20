import React from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
// import "./CSS/App.css";

function LogoutNow() {
  alert("You have Successfully Logged Out. Hope to see you again.");
  localStorage.removeItem("Profile");
  window.location.reload();
}

function slideshow() {
  var x = document.getElementById("check-class");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Nav(Profile) {
  return (
    <>
      {Profile.Profile.IsSignIn ? (
        <>
          <nav className="main-nav">
            <div className="logo">
              <a href="../">
                <img src={logo} className="logo1" alt=""></img>
              </a>
            </div>
            <div className="menu-link" id="check-class">
              <ul>
                <li>
                  <a href="../">HOME</a>
                </li>
                <li>
                  <a href="../about">ABOUT</a>
                </li>
                <li>
                  <a href="../service">SERVICES</a>{" "}
                </li>

                <li>
                  <a href="./profile">PROFILE</a>
                </li>
                <li>
                  <a href="" onClick={LogoutNow}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <Link to="" className="mobile-icon" onClick={slideshow}>
              <i className="fas fa-bars"></i>
            </Link>
          </nav>
        </>
      ) : (
        <>
          <nav className="main-nav">
            <div className="logo">
              <a href="../">
                <img src={logo} className="logo1" alt=""></img>
              </a>
            </div>
            <div className="menu-link" id="check-class">
              <ul>
                <li>
                  <a href="../">
                    <i className="fa fa-home"></i> HOME
                  </a>
                </li>

                <li>
                  <a href="../about">
                    <i className="fa fa-user"></i>ABOUT
                  </a>
                </li>
                <li>
                  <a href="../service">
                    <i className="fa fa-clone"></i>SERVICES
                  </a>{" "}
                </li>
                <li>
                  <a href="../blog">
                    <i className="fa fa-clipboard"></i>BLOG
                  </a>
                </li>
                <li>
                  <a href="../careers">
                    <i className="fa fa-users"></i>CAREERS
                  </a>
                </li>
                <li>
                  <a href="../contact">
                    <i className="fa fa-calendar"></i>CONTACT
                  </a>
                </li>
                <li>
                  <a href="./register">Join</a>
                </li>
              </ul>
            </div>
            <Link to="" className="mobile-icon" onClick={slideshow}>
              <i className="fas fa-bars"></i>
            </Link>
          </nav>
        </>
      )}
    </>
  );
}

export default Nav;
