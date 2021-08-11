import React, { useState, useEffect } from "react";
// import "../App.css";
// import "./CSS/login.css";
import "./CSS/profile.css";
import icon from "../assests/iconveri.svg";
// import "./features/CSS/investment.css";
import Login from "./login";
import AssetClassHigh from ".././Components/Investment/AssestClassHigh";
import AssetClassMedium from ".././Components/Investment/AssestClassMedium";
import AssetClassLow from ".././Components/Investment/AssestClassLow";
import PortfolioHigh from ".././Components/Investment/PortfolioHigh";
import PortfolioMedium from ".././Components/Investment/PortfolioMedium";
import PortfolioLow from ".././Components/Investment/PortfolioLow";
import { Link } from "react-router-dom";

function MyProfile({ Profile, setProfile }) {
  const [IsFormSubmitted, setIsFormSubmitted] = useState(false);
  const [Data, setData] = useState("");

  const OnPageLoad = () => {
    const Profile = localStorage.getItem("Profile");
    onSubmitSignIn();
  };
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const onSubmitSignIn = (e) => {
    fetch(`http://127.0.0.1:8000/profile/${Profile.email}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.id) {
          console.log(response);
          setData(response);

          var txt = "";
          var i = "";
          txt += "<table>";
          txt += "<tr>";
          txt += "<th>ID</th>";
          txt += "<th>Name</th>";
          txt += "<th>Email</th>";
          txt += "<th>Joined</th>";
          txt += "</tr>";

          txt += "<tr>";
          txt += "<td>" + response.id + "</td>";
          txt += "<td>" + response.name + "</td>";
          txt += "<td>" + response.email + "</td>";
          txt += "<td>" + response.joined + "</td>";
          txt += "</tr>";
          txt += "</table>";
          document.getElementById("users").innerHTML = txt;
        } else {
          alert("Error, Profile Not Found.");
          console.log(response);
        }
      });
  };

  return (
    <>
      {Profile.IsSignIn ? (
        <>
          <div className="main-profile">
            <br />
            <br /> <br />
            <br />
            <h1>My Profile</h1>
            <p>Hello, {Profile.name} </p>
            <h2>
              {" "}
              Welcome to your profile at DCIPL{" "}
              <span>
                {" "}
                Date <br />
                {date.toLocaleString()}
              </span>
            </h2>
            <table>
              <div id="users"></div>
            </table>
            <h3>Personal Detail</h3>
            <div className="verified-img-part">
              <div className="verified-img">
                <Link to="">
                  {" "}
                  <img src={icon} alert="" />
                </Link>
              </div>
              <p>Verified</p>
            </div>
            <div className="personal-details-form">
              <form action="">
                <label forhtml="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <br />
                <br />
                <br />
                <label forhtml="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  required
                />{" "}
                <br />
                <br />
                <br />
                <label forhtml="gender">Gender</label>
                <input
                  id="gender"
                  type="text"
                  placeholder="Gender"
                  required
                />{" "}
                <br />
                <br />
                <br />
                <label forhtml="age">Age</label>
                <input
                  id="age"
                  type="text"
                  placeholder="Enter Age"
                  required
                />{" "}
                <br />
                <br />
                <br />
                <label forhtml="contact">Phone No.</label>
                <input
                  id="contact"
                  type="text"
                  placeholder="Mobile No.**"
                  required
                />{" "}
                <br />
                <br />
                <br />
                <label forhtml="whatsapp">Whatsapp No.</label>
                <input
                  id="whatsapp"
                  type="text"
                  placeholder="WhatsApp No."
                />{" "}
                <br />
                <br />
                <br />
                <label forhtml="email">Email ID</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email ID**"
                  required
                />{" "}
                <button>Save</button>
                <button>Edit</button>
              </form>
            </div>
            <br />
            <br /> <br />
            <br />
          </div>
          {OnPageLoad()}
        </>
      ) : (
        <Login Profile={Profile} setProfile={setProfile} />
      )}
    </>
  );
}

export default MyProfile;
