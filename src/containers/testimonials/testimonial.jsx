
import React from 'react';
import { Link } from 'react-scroll';
import styles from './Testimonial.module.css';
import testimonialImage1 from '../../images/Adu.jpg'; // Adjust path based on your project structure
import testimonialImage2 from '../../images/Tewdi.jpg';
import testimonialImage3 from '../../images/tariku.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Adugna Bekele',
    role: 'CEO  for Evangadi Networks',
    quote: 'Alaye delivered an outstanding e-commerce platform with seamless functionality and a great user experience. Highly professional and reliable!',
    image: testimonialImage1,
  },
  {
    id: 2,
    name: 'Tewedaji Shola',
    role: ' Fullstack Developer & Evangadi Admin',
    quote: 'Working with Alaye was a pleasure. His expertise in React and Firebase made our project a success. Highly recommended!',
    image: testimonialImage2,
  },
  {
    id: 3,
    name: 'Tariku Abera',
    role: 'Fullstack Developer and Teacher',
    quote: 'Alaye’s attention to detail and creative approach resulted in a stunning portfolio website. He exceeded all expectations!',
    image: testimonialImage3,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonials</h2>
        <p className={styles.subtitle}>What Clients and Colleagues Say</p>
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className={styles.testimonialCard} style={{ '--index': index }}>
              <img
                src={testimonial.image}
                alt={`${testimonial.name} profile`}
                className={styles.testimonialImage}
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
          aria-label="Go to contact section"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
