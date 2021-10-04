import React, { useState } from "react";
import "./CSS/applynow.css";
const axios = require("axios").default;

const Applynow = () => {
  const [UploadResume, setUploadResume] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");

  function onFileChange(e) {
    let file = e.target.files[0];
    const name =
      Email + "--" + Mobile + file.name.substring(file.name.lastIndexOf(".")); // Concat with file extension.
    console.log(name);
    file.name.substring(file.name.lastIndexOf("."));
    // Instantiate copy of file, giving it new name.
    file = new File([file], name, { type: file.type });
    setUploadResume(file);
  }

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload_resume", UploadResume);
    axios
      .post("https://server.yourtechshow.com/careers", formData, {})
      .then((res) => {
        console.log(res);
        alert(
          "Application Submitted Succesfully. You will be contacted if your Resume is shortlisted."
        );
      });
  }
  return (
    <div>
      <div class="container808">
        <header class="header808">
          <h1 id="title" class="text-center">
            Job application
          </h1>
        </header>
        <form
          id="survey-form"
          onSubmit={onSubmit}
          enctype="multipart/form-data"
        >
          <div class="form808">
            <label for="name" id="name-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
              class="p-input"
            />
          </div>
          <div class="form808">
            <label for="email" id="email-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="enter_email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              required
              class="p-input"
            />
          </div>
          <div class="form808">
            <label for="number" id="number-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="number"
              min="17"
              max="70"
              placeholder="Age"
              class="p-input"
            />
          </div>
          <div class="form808">
            <label for="number" id="number-label">
              Contact No.
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="Mobile No."
              type="text"
              maxlength="10"
              pattern="[0-9]{10}"
              required
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <div class="form808">
            <p>Status</p>
            <select name="" id="dropdown" required class="p-input" required>
              <option disabled selected value>
                Current Status
              </option>
              <option value="student">Student</option>
              <option value="unemployed">Unemployed</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </select>
          </div>
          <div class="form808 radio808">
            <p>Gender</p>
            <label>
              <input type="radio" name="gender" value="male" checked /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
          <br />
          <div class="form808 attach808">
            <label for="attach">Attach your Resume</label>
            <input
              type="file"
              name="upload_resume"
              id="upload_resume"
              onChange={onFileChange}
            />
          </div>
          <div class="form808">
            <p>Cover Letter</p>
            <textarea
              name="coverletter"
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us about your self."
              required
            ></textarea>
          </div>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Applynow;
