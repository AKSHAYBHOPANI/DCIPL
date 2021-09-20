import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerpro1">
          <div className="bannerpro1">
            <br />
            <hr id="tpro1" />
            <div className="contentpro1">
              <div className="left6 boxpro1">
                <div className="upperpro1">
                  <div className="topicpro1">About us</div>
                  <p>
                    At DC & Co., we understand that change is not always easy.
                    Since 2018, we’ve been helping individuals of various
                    classes full their economic and financial needs. Our few
                    years of experience have taught us to always make your
                    personal success our priority.
                  </p>
                </div>
              </div>
              <div className="middle6 boxpro1">
                <div className="topicpro1">Our Services</div>
                <div>
                  <a href="./Home">Home</a>
                </div>
                <div>
                  <a href="./about">About Us</a>
                </div>
                <div>
                  <a href="#">Services</a>
                </div>
                <div>
                  <a href="./Blog">Blog</a>
                </div>
                <div>
                  <a href="./careers">Careers</a>
                </div>
                <div>
                  <a href="./login">Login</a>
                </div>
                <div>
                  <a href="#">Contact</a>
                </div>
              </div>
              <div className="right6 boxpro1">
                <div className="lowerpro1">
                  <div className="topicpro1">Contact us</div>
                  <div className="addresspro1">
                    <a href="#">
                      A/4, 42, Mahavir Nagar,
                      <br />
                      Manpada Road, Opp. Ashirwad Hospital,
                      <br />
                      Dombivli East, Thane,
                      <br />
                      Maharashtra - 421201
                    </a>
                    <br />
                    <br />
                  </div>
                  <div className="phonepro1">
                    <a href="tel:999999999">+999999999</a>
                  </div>
                </div>
              </div>
              <div className="iapiou65">
                <hr />
                <div className="bottompro1">
                  <p>
                    Copyright © 2021{" "}
                    <a href="https://www.dcikigai.com/" target="_blank">
                      DC Ikigai
                    </a>{" "}
                    All rights reserved
                  </p>
                </div>
                <div className="media-iconspro1">
                  <a
                    href="https://www.facebook.com/Dcikigai-103388768655970/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/p/CQIUJcsA2Py/?utm_medium=copy_link"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dco-universe"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
