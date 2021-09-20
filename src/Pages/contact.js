import React from 'react';// JavaScript Document
import './CSS/contact.css';
import contactImg from '../assests/Contact us-amico.svg'


function contact() {
	return(
	<>
	{/* <div classNameName="bg1">
	
	</div> */}
  <div className="contact-page">
      <div className="contact-page__col-1">
          <h1 className="contact-page__heading">Contact Us</h1>
          <form action="" className="contact-page__form">
              <label for="name" className="contact-page__label">Name:</label>
            <input type="text" placeholder="name" id="name"  className="contact-page__input"/>
            <label for="email" className="contact-page__label">Email:</label>
            <input type="text" placeholder="E-mail"  id="email" className="contact-page__input"/>
            <label for="subject" className="contact-page__label">Subject:</label>
            <input type="text" placeholder="Subject"  id="subject" className="contact-page__input"/>
            <label for="subject" className="contact-page__label">Description:</label>
            <label for="message" ></label>
            <textarea name="" id="message" cols="30" rows="10" className="contact-page__message"></textarea>
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

export default contact;


