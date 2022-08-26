import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ww4vtkh', 'template_ww1m9um', form.current, 'W_h5RygcGcC1bEFub')

    e.target.reset()
  };

  return (
<section id="contact">
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
        <h4>Email</h4>
        <h6>abdulmajidabdalah27@gmail.com</h6>
        <a href="mailto:abdulmajidabdalah27@gmail.com" target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
        <RiMessengerLine className="contact__option-icon"/>
        <h4>Messenger</h4>
        <h5>abdul majid abdalah</h5>
        <a href="https://m.me/abdul.m.abdalah/"  target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4>Whatsapp</h4>
        <h5>085782189711</h5>
        <a href="mailto:abdulmajidabdalah27@gmail.com"  target="_blank">Send a message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </div>
</section>
  )
};

export default Contact;
