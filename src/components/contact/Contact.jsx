import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dutra.jvitor@gmail.com</h5>
            <a
              href='mailto:dutra.jvitor@gmail.com'
              target='_blank'
              rel='noreferrer'>
              Send me an Email
            </a>
          </article>
          <article className='contact__option'>
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>in/vitor-dutra</h5>
            <a
              href='https://www.linkedin.com/in/vitor-dutra/'
              target='_blank'
              rel='noreferrer'>
              Contact me on LinkedIn
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+55(98)982470868</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+5598982470868'
              target='_blank'
              rel='noreferrer'>
              Contact me on WhatsApp
            </a>
          </article>
        </div>
      </div>
      {/* END OF CONTACT OPTIONS*/}
      <form action=''>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea
          name='message'
          rows='7'
          placeholder='Your Message'
          required></textarea>
        <button type='submit' className='btn btn-primary'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
