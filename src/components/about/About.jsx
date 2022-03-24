import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { GiComputing } from 'react-icons/gi';

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>1 ano com Desenvolvimento Web</small>
            </article>

            <article className='about__card'>
              <MdWeb className='about__icon' />
              <h5>Bolsista no 3º Bimestre</h5>
              <small>
                Certified Web Developer <br />
                Digital House
              </small>
            </article>

            <article className='about__card'>
              <GiComputing className='about__icon' />
              <h5>Engenharia da Computação</h5>
              <small>2ª Graduação</small>
            </article>
          </div>

          <p>
            Sou Engenheiro Químico, cursando a minha 2ª graduação em Engenharia
            da Computação. Também sou membro do Data Analytics and Artificial
            Intelligence Lab (DARTi Lab) @ UFMA. Como é um laboratório focado em
            pesquisa de IA, estou determinado a criar aplicativos incríveis
            baseados em dados usando algoritmos avançados de aprendizado de
            máquina! Descobri minha verdadeira vocação trabalhando com
            computadores e fazendo-os trabalhar para mim. Eu amo escrever esses
            incríveis pedaços de ✨mágica chamados de software.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
