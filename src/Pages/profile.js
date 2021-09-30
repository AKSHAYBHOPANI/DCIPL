import React, { useState, useEffect } from "react";
// import "../App.css";
// import "./CSS/login.css";
import "./CSS/profile.css";
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
    fetch(`https://server.yourtechshow.com/profile/${Profile.email}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.id) {
          console.log(response);
          setData(response);
        } else {
          alert("Error, Profile Not Found.");
          console.log(response);
        }
      });
  };
  let icon = "https://avatars.dicebear.com/api/avataaars/${Profile.name}.svg";
  return (
    <>
      {Profile.IsSignIn ? (
        <>
          <div className="profile-form">
            <h2>My Profile</h2>
            <p>Hello, {Profile.name} </p>
            <h2>
              {" "}
              Welcome to your profile at DCIPL{" "}
              <span>
                {" "}
                Date <br />
                {date.toLocaleString()}
              </span>
            </h2>{" "}
            <h3>Personal Detail</h3>
            <form action="">
              <section className="profile-left">
                <div className="verified-img-part">
                  <div className="verified-img">
                    <Link to="">
                      {" "}
                      <img src={icon} alert="" />
                    </Link>
                  </div>
                  <p>Verified</p>
                </div>
              </section>
              <section className="profile-right">
                <div class="input-container">
                  <label forhtml="fname">Name</label>
                  <br />
                  <input id="fname" type="text" placeholder={Data.name} />
                </div>
                <div class="input-container">
                  <label forhtml="gender">Gender</label> <br />
                  <input id="gender" type="text" placeholder="Gender" />{" "}
                </div>
                <div class="input-container">
                  <label forhtml="age">Age</label> <br />
                  <input id="age" type="text" placeholder="Enter Age" />{" "}
                </div>{" "}
                <div class="input-container">
                  <label forhtml="contact">Phone No.</label> <br />
                  <input
                    id="contact"
                    type="text"
                    placeholder="Mobile No"
                  />{" "}
                </div>{" "}
                <div class="input-container">
                  <label forhtml="email">Email Id</label> <br />
                  <input id="email" type="text" placeholder={Data.email} />{" "}
                </div>
                <div className="input-container">
                  <label forhtml="contact">Joined</label> <br />
                  <input
                    id="contact"
                    type="text"
                    placeholder={Data.joined}
                  />{" "}
                </div>
              </section>
            </form>
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
