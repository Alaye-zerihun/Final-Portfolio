import React from 'react';
import { Link } from 'react-scroll';
import styles from './Testimonial.module.css';
import testimonialImage1 from '../../images/Adu.jpg';
import testimonialImage2 from '../../images/Tewdi.jpg';
import testimonialImage3 from '../../images/Eyasu.jpg';
import testimonialImage4 from '../../images/tariku.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Adugna Bekele',
    role: 'CEO, Evangadi Networks',
    image: testimonialImage1,
    
  },
  {
    id: 2,
    name: 'Tewedaji Shola',
    role: 'Fullstack Developer, Instructor & Evangadi Admin',
    image: testimonialImage2,
    
  },
  {
    id: 3,
    name: 'Eyasu Nigussie',
    role: 'Sinor Fullstack Developer & Instructor',
    image: testimonialImage3,
  },
  {
    id: 4,
    name: 'Tariku Abera',
    role: 'Senior Fullstack Developer and Instructor',
    image: testimonialImage4,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <p className={styles.subtitle}>Words from Satisfied Clients & Colleagues</p>
        <div className={styles.testimonialsRow}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className={styles.testimonialImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80}
          className={styles.ctaButton}
          aria-label="Contact Defense Staff College"
        >
          Connect Now
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;