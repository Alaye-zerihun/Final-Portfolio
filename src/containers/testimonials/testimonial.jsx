import React from 'react';
import { Link } from 'react-scroll';
import styles from './Testimonial.module.css';
import testimonialImage1 from '../../images/Adu.jpg';
import testimonialImage2 from '../../images/Tewdi.jpg';
import testimonialImage3 from '../../images/tariku.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Adugna Bekele',
    role: 'CEO, Evangadi Networks',
    quote: 'Alaye crafted an exceptional e-commerce platform with flawless functionality and an amazing user experience. Truly professional and dependable!',
    image: testimonialImage1,
  },
  {
    id: 2,
    name: 'Tewedaji Shola',
    role: 'Fullstack Developer & Evangadi Admin',
    quote: 'Collaborating with Alaye was a delight. His mastery of React and Firebase turned our project into a triumph. Highly recommend him!',
    image: testimonialImage2,
  },
  {
    id: 3,
    name: 'Tariku Abera',
    role: 'Fullstack Developer & Teacher',
    quote: 'Alaye’s meticulous attention to detail and innovative design created a breathtaking portfolio website. Exceeded all my expectations!',
    image: testimonialImage3,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <p className={styles.subtitle}>Words from Satisfied Clients & Colleagues</p>
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className={styles.testimonialImage}
                loading="lazy"
              />
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          ))}
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80}
          className={styles.ctaButton}
          aria-label="Contact Alaye"
        >
          Connect Now
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;