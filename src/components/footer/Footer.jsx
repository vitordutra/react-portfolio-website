import React from 'react';
import './footer.css';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Vitor Dutra
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>Sobre mim</a>
        </li>
        <li>
          <a href='#experience'>Experiência</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Depoimentos</a>
        </li>
        <li>
          <a href='#contact'>Contato</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://github.com/vitordutra'>
          <AiFillGithub />
        </a>
        <a href='https://www.instagram.com/j.vitordutra/'>
          <AiOutlineInstagram />
        </a>
        <a href='https://twitter.com/_vitor_dutra'>
          <AiOutlineTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Vitor Dutra. Todos os direitos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
