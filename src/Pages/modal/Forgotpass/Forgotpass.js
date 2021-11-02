import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import logimg from "../../../assests/login.svg";

import Createpass from "../Createpass/Createpass";
import "./Forgotpass.css";

const Forgotpass = ({ forgotpassIsOpen, setForgotpassIsOpen }) => {
  const [createpassIsOpen, setCreatepassIsOpen] = useState(false);

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div>
      <Modal
        isOpen={forgotpassIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            left: "150px",
            width: "1152px",
            height: "714px",
            background: "#FFFFFF",

            border: "1px solid #ccc",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "10px",
          },
        }}
      >
        <div className="main-forgot">
          <h1>Login with Derive Capital</h1>
          <Link
            to="#"
            className="Close2_icon"
            onClick={() => setForgotpassIsOpen(false)}
          >
            x
          </Link>
          <h2>Forgot Password</h2>
          <h3>
            We have sent password recovery OTP to your Email
            A********b@gmail.com
          </h3>

          <Link to="">
            {" "}
            <h4>Resend OTP</h4>
          </Link>
          <img src={logimg} alt="#"></img>
          <Link to="#" onClick={() => setCreatepassIsOpen(true)}>
            <button onClick={(e) => setOtp([...otp.map((v) => "")])}>
              Verify
            </button>
          </Link>
          <Createpass
            createpassIsOpen={createpassIsOpen}
            setCreatepassIsOpen={setCreatepassIsOpen}
          ></Createpass>
          <h6>Didn’t recieve the email? Check your spam folder</h6>

          <div className="otp2">
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
            <br />
            <p id="optRes1"></p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Forgotpass;
