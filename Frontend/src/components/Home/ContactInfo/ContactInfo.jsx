import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
  <section className="contact-info">
    <h2>Contact Us</h2>
    <p>Email: support@pmsss.gov.in</p>
    <p>Phone: +91 123 456 7890</p>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows={4}></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactInfo;
