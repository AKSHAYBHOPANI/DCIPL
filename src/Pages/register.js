import React, { useState } from "react";
import { Link } from "react-router-dom";
import logimg from "../assests/login.svg";

import Dashboard from "./dashboard";
import "./CSS/register.css";

import FacebookLogin from "react-facebook-login";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const Register = (Profile) => {
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setMobile(response.mobile);
    setEmail(response.email);
    if (response.userID) {
      Profile.setProfile((prevState) => {
        return Object.assign({}, prevState, {
          id: response.id,
          mobile: response.mobile,
          email: response.email,
          IsSignIn: true,
          IsonBoarding: false,
        });
      });
    } else {
    }
  };
  const MobileValue = (event) => {
    event.preventDefault();
    setMobile(event.target.value);
  };

  const EmailValue = (event) => {
    setEmail(event.target.value);
  };

  const PasswordValue = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const ConfirmPasswordValue = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    NProgress.start();
    // document.getElementById("logo").style.display = "block";
    if (Password === ConfirmPassword) {
      fetch("https://server.yourtechshow.com/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          password: Password,
          mobile: Mobile,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.id) {
            console.log("user");
            Profile.setProfile((prevState) => {
              return Object.assign({}, prevState, {
                id: response.id,
                mobile: response.mobile,
                email: response.email,
                IsSignIn: true,
                IsonBoarding: false,
              });
            });
            NProgress.done();
          } else {
            console.log(response);
            NProgress.done();
            alert("Email Already Exists");
            // document.getElementById("logo").style.display = "none";
          }
        });
    } else {
      alert("Password and Confirm Password do not Match.");
    }
  };

  return (
    <>
      {Profile.Profile.IsSignIn ? (
        <>
          <br />
          <Dashboard Profile={Profile} />
          {localStorage.setItem("Profile", JSON.stringify(Profile.Profile))}
        </>
      ) : (
        <>
          <div className="register-form">
            <h2>Sign Up</h2>
            <form action="" onSubmit={onSubmitSignIn}>
              <section className="left">
                <div className="input-container">
                  <label for="email" required>
                    Email Id{" "}
                  </label>
                  <input
                    onChange={EmailValue}
                    value={Email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Type Here"
                    required
                  ></input>
                </div>
                <div class="input-container">
                  <label for="phone">Mobile No.</label>

                  <input
                    onChange={MobileValue}
                    value={Mobile}
                    id="phone"
                    name="phone"
                    placeholder="Mobile No."
                    type="text"
                    maxlength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div class="input-container">
                  <label for="password">Password </label>
                  <input
                    onChange={PasswordValue}
                    value={Password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div class="input-container">
                  <label for="password">Confirm Password </label>
                  <input
                    onChange={ConfirmPasswordValue}
                    value={ConfirmPassword}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Confirm Password"
                    required
                  ></input>

                  {/* <h1>
                    {" "}
                    &nbsp; &nbsp;
                    <label for="agree">
                      <input type="checkbox" id="agree" name="agree" value="" />{" "}
                      By signing up, I agree to Derive Capital
                      <Link to=""> Terms of Service </Link>
                      and <Link to=""> Privacy Policy.</Link>
                    </label>
                  </h1> */}

                  <h5>
                    Already Signed up ? &nbsp;
                    <Link to="/login">Log In</Link>
                  </h5>

                  <button type="submit" className="btn-3">
                    Get Started
                  </button>
                </div>
              </section>
              <section className="right">
                <div className="input-container">
                  <img className="big-img" src={logimg} alt="google" />
                </div>
              </section>
            </form>
          </div>
        </>
      )}
    </>
  );
};
export default Register;
