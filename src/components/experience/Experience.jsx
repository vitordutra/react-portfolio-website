import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React.js</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Sass</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Node.js</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Spring Boot</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Object Oriented Programming</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Design Patterns</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>SQL</h4>
              <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Advanced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
