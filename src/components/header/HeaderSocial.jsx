import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiCodersrank } from 'react-icons/si';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://linkedin.com/in/vitor-dutra'
        target='_blank'
        rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/vitordutra' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a
        href='https://profile.codersrank.io/user/vitordutra'
        target='_blank'
        rel='noreferrer'>
        <SiCodersrank />
      </a>
    </div>
  );
};

export default HeaderSocial;
