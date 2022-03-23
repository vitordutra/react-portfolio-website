import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!A ordem dos tratores não altera o pão duris.Delegadis gente finis, bibendum egestas augue arcu ut est.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review:
      'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!A ordem dos tratores não altera o pão duris.Delegadis gente finis, bibendum egestas augue arcu ut est.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review:
      'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!A ordem dos tratores não altera o pão duris.Delegadis gente finis, bibendum egestas augue arcu ut est.',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review:
      'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!A ordem dos tratores não altera o pão duris.Delegadis gente finis, bibendum egestas augue arcu ut est.',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Avatar One' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
