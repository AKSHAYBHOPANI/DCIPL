import { React, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./AppointmentModal.css";
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

const AppointmentModal = ({ appointmentIsOpen, setAppointmentIsOpen }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Modal
        isOpen={appointmentIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: "4",
            backgroundColor: "gray",
          },
          content: {
            position: "absolute",
            left: "400px",
            width: "652px",
            height: "714px",
            background: "#FFFFFF",

            opacity: "0.8",

            border: "1px solid #ccc",

            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "10px",
          },
        }}
      >
        <div className="main234">
          <form className="form-card">
            <div className="plus1">
              <span onClick={() => setAppointmentIsOpen(false)}>+</span>
            </div>
            <h1>Book an Appointment</h1>
            <input type="text" name="name" placeholder="Full Name *" required />
            <input type="email" name="email" placeholder="Email *" required />

            {/* <input type="date" name="date" placeholder="Date *" /> */}

            <input
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
              required
            />

            <select name="mode" id="mode" class="location-drop">
              <option value="video">Mode of Consultation</option>
              <option value="video">Video Call</option>
              <option value="audio">Audio Call</option>
              <option value="home">Home Vist</option>
            </select>
            <input type="textarea" placeholder=" Your Message" name="message" />
            <h6>We'll never share your details with anyone else.</h6>
            <Link to="" className="btn23">
              Book Appointment
            </Link>
          </form>
          <div className="date-pick">
            {/* <DayPickerInput
              dayPickerProps={{
                month: new Date(2018, 10),
                showWeekNumbers: true,
                todayButton: "Today",
              }}
            /> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
