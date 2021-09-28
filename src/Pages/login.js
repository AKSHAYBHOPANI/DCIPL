import { Link } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import FacebookLogin from "react-facebook-login";
import logimg from "../assests/login.svg";
import Forgotpass from "../Pages/modal/Forgotpass/Forgotpass";
import "./CSS/login.css";

function Login(Profile) {
  const [forgotpassIsOpen, setForgotpassIsOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [toggle, setToggle] = React.useState(true);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const responseFacebook = (response) => {
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
        <div className="log_main88">
          {/* <h3>Login with</h3>
            <FacebookLogin
              appId="612293356405016"
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon="fa-facebook"
            /> */}

          {toggle ? (
            <section className="login-right">
              <form className="form-email9" onSubmit={onSubmitSignIn}>
                <label for="email">Email Id </label>
                <input
                  onChange={EmailValue}
                  value={Email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type Here"
                  required
                ></input>
                <br />
                <br />
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
                <br></br>
                <button>Log In</button>{" "}
              </form>
              <div className="agree03">
                <h3>
                  {" "}
                  <br />
                  <Link to="#" onClick={() => setForgotpassIsOpen(true)}>
                    <h4>Forgot Password ?</h4>
                  </Link>
                </h3>
                <Forgotpass
                  forgotpassIsOpen={forgotpassIsOpen}
                  setForgotpassIsOpen={setForgotpassIsOpen}
                ></Forgotpass>
              </div>
            </section>
          ) : (
            <section className="login-right">
              <form className="form-phone1">
                <label for="phone">Mobile No.</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Mobile No."
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
                <div className="otpw">Enter OTP</div>
                <div className="otp">
                  <br />{" "}
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
                  <Link to="">
                    <h4>Resend OTP</h4>
                  </Link>
                  <button>Send OTP</button>
                </div>
              </form>
              <div className="agree707">
                <h1>
                  {" "}
                  <br />
                </h1>
              </div>

              <div className="log-d12">
                <Link to="">Log In </Link>
              </div>
            </section>
          )}
          <h1>
            Login with &nbsp;
            <h5
              className="toggle-text"
              style={{ color: toggle ? "goldenrod" : "#666666" }}
              onClick={() => setToggle(true)}
            >
              {" "}
              Email Id{" "}
            </h5>
            &nbsp;|&nbsp;{" "}
            <h5
              className="toggle-text"
              style={{ color: !toggle ? "goldenrod" : "#666666" }}
              onClick={() => setToggle(false)}
            >
              Phone
            </h5>
          </h1>
          <section className="login-left">
            <img src={logimg} alt="Derive Capital"></img>
          </section>
          {/* <div className="social-icon-log">
            <h6>Login with</h6>
            <a className="s-icons-1" href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a className="s-icons-1" href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a className="s-icons-1" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a className="s-icons-1" href="#">
              <i class="fab fa-google"></i>
            </a>
          </div> */}
          {OnPageLoad()}
        </div>
      )}
    </>
  );
}
export default Login;
