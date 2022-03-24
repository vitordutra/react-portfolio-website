import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='presentation'>
          <h5>Hello There 🖖 I'm</h5>
          <h1>Vitor Dutra</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA />
        </div>
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
