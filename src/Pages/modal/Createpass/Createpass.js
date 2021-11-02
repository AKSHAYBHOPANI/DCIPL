import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
// import CloseIcon from "@material-ui/icons/Close";
import "./Createpass.css";
import logimg from "../../../assests/login.svg";

const Createpass = ({ createpassIsOpen, setCreatepassIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={createpassIsOpen}
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
        <div className="create-pass">
          <h1>Login with Derive Capital</h1>
          <Link
            to="#"
            className="Close2_icon"
            onClick={() => setCreatepassIsOpen(false)}
          >
            x
          </Link>
          <h2>Create New Password</h2>
          <form>
            <label for="pass">New Password:</label>

            <input type="password" id="pass" name="pass" />
            <br />
            <label for="cpass">Confirm Password:</label>

            <input type="password" id="cpass" name="cpass" />
            <br />
            <br />
          </form>
          <h3>*Both the passwords should match</h3>
          <button>Reset Password</button>
          <img src={logimg} alt="@"></img>
        </div>
      </Modal>
    </div>
  );
};

export default Createpass;
