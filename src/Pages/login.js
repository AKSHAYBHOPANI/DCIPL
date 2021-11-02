import { Link } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import FacebookLogin from "react-facebook-login";
import logimg from "../assests/login.svg";
// import OtpInput from "react-otp-input";
import Forgotpass from "../Pages/modal/Forgotpass/Forgotpass";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "./CSS/login.css";

function Login(Profile) {
  const [forgotpassIsOpen, setForgotpassIsOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [Password, setPassword] = useState("");
  const [showpassword, setshow] = useState(false);

  const responseFacebook = (response) => {
    NProgress.start();
    console.log(response);
    setName(response.name);
    setEmail(response.email);
    if (response.userID) {
      Profile.setProfile((prevState) => {
        return Object.assign({}, prevState, {
          id: response.id,
          name: response.name,
          email: response.email,
          IsSignIn: true,
          IsonBoarding: true,
        });
      });
    } else {
      NProgress.done();
    }
  };

  const EmailValue = (event) => {
    setEmail(event.target.value);
  };

  const PasswordValue = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    NProgress.start();
    fetch("https://server.yourtechshow.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          NProgress.done();
          Profile.setProfile((prevState) => {
            return Object.assign({}, prevState, {
              id: user.id,
              name: user.name,
              email: user.email,
              IsSignIn: true,
              IsonBoarding: true,
            });
          });
        } else {
          alert("Wrong Credentials");
          // document.getElementById("logo").style.display = "none";
        }
      });
  };

  const OnPageLoad = () => {
    const CheckIsSignInRes = localStorage.getItem("Profile");
    const CheckIsSignIn = JSON.parse(CheckIsSignInRes);
    if (CheckIsSignIn) {
      Profile.setProfile(CheckIsSignIn);
      console.log(CheckIsSignIn);
    } else {
      console.log(CheckIsSignIn);
    }
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
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
        <div className="main-div">
          <div className="info-div">
            <img src={logimg} alt="Info" className="info-img" />
          </div>
          <div className="signin-div">
            <div className="sign-in">
              <h2 className="sign-in-title">Sign In</h2>
              <div className="toggle-inputs">
                <h3
                  className="toggle-inputs-text"
                  style={{ color: isEmail ? "#ffb600" : "#2d2d2d" }}
                  onClick={() => setIsEmail(true)}
                >
                  Email ID
                </h3>
                <h3 className="toggle-inputs-text-bar">|</h3>
                <h3
                  className="toggle-inputs-text"
                  style={{ color: !isEmail ? "#ffb600" : "#2d2d2d" }}
                  onClick={() => setIsEmail(false)}
                >
                  Mobile No
                </h3>
              </div>
              {isEmail ? (
                <form className="input-form" onSubmit={onSubmitSignIn}>
                  <input
                    onChange={EmailValue}
                    name="email"
                    placeholder="E-mail Id"
                    type="email"
                    id="email"
                    style={{
                      width: "100%",
                      color: "#2D2D2D",

                      marginBottom: "2rem",
                    }}
                    value={Email}
                  ></input>
                  <input
                    onChange={PasswordValue}
                    value={Password}
                    name="password"
                    placeholder="Password"
                    type={showpassword ? "text" : "password"}
                    style={{
                      width: "100%",
                      color: "#2D2D2D",
                    }}
                  ></input>
                  <h4
                    className="forgot"
                    // onClick={() => setforgotPassword(true)}
                  >
                    Forgot Password?
                  </h4>
                  <button className="submit-btn">Sign In</button>
                </form>
              ) : (
                <>
                  <form className="input-form">
                    <input
                      placeholder="Mobile No"
                      type="mobileno"
                      style={{
                        width: "100%",
                        color: "#2D2D2D",

                        margin: "1rem 0rem",
                      }}
                    ></input>
                    <button className="submit-btn" id="sign-in-button">
                      Send OTP
                    </button>
                  </form>
                  <div className="box_otp">
                    {otp.map((data, index) => {
                      return (
                        <input
                          className="form-control"
                          maxlength="1"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      );
                    })}
                    <p id="optRes"></p>
                  </div>
                  <Link
                    to=""
                    style={{
                      color: "#2D2D2D",
                      textTransform: "capitalize",
                      marginRight: "30%",
                      marginTop: "0.5rem",
                    }}
                  >
                    Resend OTP
                  </Link>
                  <button className="submit-btn">Sign In</button>
                </>
              )}

              <div
                style={{
                  color: "black",
                  fontSize: "15px",
                  marginTop: "1rem",
                }}
              >
                New User ?{" "}
                <Link
                  to="/register"
                  style={{
                    textAlign: "center",
                    color: "#FFB600",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    marginTop: "1rem",
                  }}
                >
                  Sign Up
                </Link>
                <h3>Login with</h3>
                <FacebookLogin
                  appId="612293356405016"
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="my-facebook-button-class"
                  icon="fab fa-facebook-f"
                />
              </div>
            </div>
          </div>
          {OnPageLoad()}
        </div>
      )}
    </>
  );
}
export default Login;
