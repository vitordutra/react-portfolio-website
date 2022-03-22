import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://dribbble.com/Alien_pixels'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
