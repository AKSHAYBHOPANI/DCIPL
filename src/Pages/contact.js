
import React, { useState }  from 'react';// JavaScript Document
import './CSS/contact.css';
import contactImg from '../assests/Contact us-amico.svg'


function Contact() {

const [Name,setName] = useState("");
const [Email,setEmail] = useState("");
const [Subject,setSubject] = useState("");
const [Description,setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("https://server.yourtechshow.com/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name,
        email: Email,
        subject: Subject,
        description: Description
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("done");
          alert("We received your request. We will contact you shortly.")
        } else {
          console.log(response);
          alert("Error. Something Went Wrong");
          // document.getElementById("logo").style.display = "none";
        }
      });
  };
	return(
	<>
	{/* <div classNameName="bg1">
	
	</div> */}
  <div className="contact-page">
      <div className="contact-page__col-1">
          <h1 className="contact-page__heading">Contact Us</h1>
          <form onSubmit={onSubmit} className="contact-page__form">
              <label for="name" className="contact-page__label">Name:</label>
            <input type="text" placeholder="name" id="name"  className="contact-page__input" onChange={(e)=>{setName(e.target.value)}} value={Name}/>
            <label for="email" className="contact-page__label">Email:</label>
            <input type="text" placeholder="E-mail"  id="email" className="contact-page__input" onChange={(e)=>{setEmail(e.target.value)}} value={Email} required/>
            <label for="subject" className="contact-page__label">Subject:</label>
            <input type="text" placeholder="Subject"  id="subject" className="contact-page__input" onChange={(e)=>{setSubject(e.target.value)}} value={Subject} required/>
            <label for="subject" className="contact-page__label">Description:</label>
            <label for="message" ></label>
            <textarea name="" id="message" cols="30" rows="10" className="contact-page__message" onChange={(e)=>{setDescription(e.target.value)}} value={Description}></textarea>
            <button className="contact-page__button"> Submit </button>
          </form>
          
      </div>
      <div className="contact-page__col-2">
            <img src={contactImg} alt="" className="contact-page__img"/>
      </div>
    </div>
	</>
     )
};

export default Contact;
