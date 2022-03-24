import React from 'react';
import './experience.css';
import { BsBootstrapFill } from 'react-icons/bs';
import {
  FaReact,
  FaCss3Alt,
  FaSass,
  FaJava,
  FaNodeJs,
  FaObjectGroup,
} from 'react-icons/fa';
import { SiJavascript, SiSpringboot } from 'react-icons/si';
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { MdPattern } from 'react-icons/md';
import { GrMysql } from 'react-icons/gr';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minha Experiência</h5>
      <h2>Skills Técnicas</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Desenvolvimento Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaSass className='experience__details-icon' />
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className='experience__backend'>
          <h3>Desenvolvimento Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiSpringboot className='experience__details-icon' />
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaObjectGroup className='experience__details-icon' />
              <div>
                <h4>Programação Orientada a Objetos</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdPattern className='experience__details-icon' />
              <div>
                <h4>Design Patterns</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
