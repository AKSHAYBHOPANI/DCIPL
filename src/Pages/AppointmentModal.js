import { React, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./CSS/AppointmentModal.css";
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

const AppointmentModal = () => {
  return (
    <div>
      <section className="appointment-section">
        <div className="container67">
          <div className="sec-title">
            <h2>Book Appoinment</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-md-8 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="default-form">
                  <form method="post" action="contact.html">
                    <div className="row clearfix">
                      <div className="column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <select className="custom-select-box">
                            <option>Service Catogaries</option>
                            <option>Category One</option>
                            <option>Category Two</option>
                            <option>Category Three</option>
                            <option>Category Four</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <input
                            type="date"
                            className="datepicker"
                            name="text"
                            placeholder="Schedule Date"
                            required
                          />
                          {/* <i className="far fa-calendar-alt"></i> */}
                        </div>
                      </div>

                      <div className="column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            className="timepicker"
                            type="text"
                            name="schedule"
                            placeholder="Schedule Time"
                          />
                          {/* <i className="far fa-clock"></i> */}
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <Link
                          to=""
                          className="theme-btn appointment-btn"
                          type="submit"
                          name="submit-form"
                        >
                          Fix An Appoinment
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="schedule-column col-md-4 col-sm-12 col-xs-12">
              <div className="inner-outer">
                <div className="inner-column">
                  <h2>Business Hours:</h2>
                  <ul className="time-list">
                    <li>Monday - Friday 9.00 AM - 5.00 PM</li>
                    <li>Saturday 9.00 AM - 3.00 PM</li>
                    <li>
                      <strong>Sunday Closed</strong>
                    </li>
                    <li className="closed">
                      * Every 2nd, 4th Staurday and all govt holidays are
                      closed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentModal;
