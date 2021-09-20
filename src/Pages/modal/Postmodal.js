import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import movingGrid from "../../assests/moving-grid.mp4";
import logoOfDC from "../../assests/logodc1.png";
import "./Postmodal.css";

const Postmodal = ({ postIsOpen, setPostIsOpen }) => {
  return (
    <div>
      <Modal isOpen={postIsOpen}>
        <body className="body1">
          <div></div>
          <div className="derive-wall">
            <div className="derivewall-left">
              <div className="fixed-position">
                <video
                  className="video"
                  autoPlay
                  muted
                  loop
                  id="derive-background-video"
                >
                  <source
                    src={movingGrid}
                    alt="derive capital"
                    type="video/mp4"
                  />
                </video>
                <div className="heading-with-logo">
                  <img src={logoOfDC} alt="derive capital"></img>
                  <p>
                    DERIVE <span>WALL</span>
                  </p>
                </div>
                <div className="introductory-text">
                  <p>
                    When money managing gets difficult, <span>tell us!</span>
                  </p>
                </div>
                <div className="text-tag-line">
                  <p>KEEP EM' COMING</p>
                </div>
                <input
                  type="textarea"
                  placeholder="Write your money story here."
                />
                <br />
                <button className="post-btn">Post It!</button>
                <button className="post-btn">
                  <Link to="" onClick={() => setPostIsOpen(false)}>
                    Close
                  </Link>
                </button>
              </div>
            </div>

            <div className="derivewall-right">
              <div className="derive-cards">
                <div className="card card-1">
                  <p className="card-heading">#Derive-POST-8</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-2">
                  <p className="card-heading">#Derive-POST-7</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-3">
                  <p className="card-heading">#Derive-POST-6</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-4">
                  <p className="card-heading">#Derive-POST-5</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-5">
                  <p className="card-heading">#Derive-POST-4</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-6">
                  <p className="card-heading">#Derive-POST-3</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-7">
                  <p className="card-heading">#Derive-POST-2</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
                <div className="card card-8">
                  <p className="card-heading">#Derive-POST-1</p>
                  <p className="card-content">
                    Is there anything beyond MFs and FDs. Not Real Estate, Stock
                    Markets though
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </Modal>
    </div>
  );
};

export default Postmodal;
