import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useState } from 'react';
// import emailjs from '@emailjs/browser';

const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, message } = formData;

  const mailtoLink = `mailto:deotalechinmay06@gmail.com?subject=New message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`;

  window.location.href = mailtoLink;
};

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

        <article className='contact__option' onClick={() => {window.location.href = "mailto:deotalechinmay06@gmail.com";
      }}>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <small>Mail me</small>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" className="btn btn-primary">
                Send Message
            </button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts