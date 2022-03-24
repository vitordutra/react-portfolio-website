import React from 'react';
import './portfolio.css';
import VIDEO1 from '../../assets/portfolio1.webm';
import VIDEO2 from '../../assets/portfolio2.webm';
import VIDEO3 from '../../assets/portfolio3.mp4';
import VIDEO4 from '../../assets/portfolio4.mp4';
import VIDEO5 from '../../assets/portfolio5.webm';

const portfolioData = [
  {
    id: 1,
    video: VIDEO1,
    title: 'Portfolio de um Fotógrafo Completamente Responsivo',
    description:
      'Portfolio fictício feito com HTML5, JavaScript Puro e Sass como pré-compilador CSS',
    github: 'https://github.com/vitordutra/fully-responsive-portfolio-website',
    demo: 'https://fully-responsive-portfolio-website.vercel.app/',
  },
  {
    id: 2,
    video: VIDEO2,
    title: 'Pokédex',
    description:
      'Pokédex feito com HTML5, CSS3, e JavaScript. Usou-se o Fetch API para consumo da PokéAPI',
    github: 'https://github.com/vitordutra/pokedex-async-javascript',
    demo: 'https://vitordutra.github.io/pokedex-async-javascript/',
  },
  {
    id: 3,
    video: VIDEO3,
    title: 'ByteBank',
    description:
      'Aplicativo construído para aprender o básico do framework Flutter',
    github: 'https://github.com/vitordutra/bytebank',
    demo: '',
  },
  {
    id: 4,
    video: VIDEO4,
    title: 'Ecoleta',
    description:
      'Web App construído com HTML5, CSS3, JavaScript no Frontend e Node.js (Express) com SQLite no Backend',
    github: 'https://github.com/vitordutra/ecoleta-javascript-web-app',
    demo: 'https://ecoleta-nlw-starter.herokuapp.com/',
  },
  {
    id: 5,
    video: VIDEO5,
    title: 'Fotomara',
    description:
      'Site oficial da empresa Fotomara. Feito em Wordpress com Elementor',
    github: '',
    demo: 'https://fotomara.com.br',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos Recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {portfolioData.map(
          ({ id, video, title, description, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <video
                    className='portfolio__item-image'
                    alt={title}
                    autoPlay
                    muted>
                    <source src={video} type='video/webm'></source>
                    <source src={video} type='video/mp4'></source>
                  </video>
                  {/* <img src={image} alt={title} /> */}
                </div>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <div className='portfolio__item-cta'>
                  {github ? (
                    <a
                      href={github}
                      className='btn'
                      target='_blank'
                      rel='noreferrer'>
                      Github
                    </a>
                  ) : (
                    <></>
                  )}
                  {demo ? (
                    <a
                      href={demo}
                      className='btn btn-primary'
                      target='_blank'
                      rel='noreferrer'>
                      Live Demo
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
