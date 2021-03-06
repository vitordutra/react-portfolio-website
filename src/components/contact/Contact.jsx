import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hps19iy',
        'template_30z4h68',
        form.current,
        'hs1nx5xEzWtvGeUBn'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Vamos conversar? Entre em</h5>
      <h2>Contato</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dutra.jvitor@gmail.com</h5>
            <a
              href='mailto:dutra.jvitor@gmail.com'
              target='_blank'
              rel='noreferrer'>
              Me envie um Email
            </a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>in/vitor-dutra</h5>
            <a
              href='https://www.linkedin.com/in/vitor-dutra/'
              target='_blank'
              rel='noreferrer'>
              Entre em contato no LinkedIn
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55(98)982470868</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+5598982470868'
              target='_blank'
              rel='noreferrer'>
              Entre em contato no WhatsApp
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Seu Nome Completo'
            required
          />
          <input type='email' name='email' placeholder='Seu Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Sua mensagem'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
