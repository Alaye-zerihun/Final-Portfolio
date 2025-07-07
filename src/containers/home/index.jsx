
import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import heroImage from '../../images/background.jpg'; 

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Alaye Zerihun
        </h1>
        <p className={styles.subtitle}>
          Full Stack Developer Crafting Innovative Web Solutions
        </p>
        <Link
          to="portfolio"
          smooth={true}
          duration={800}
          offset={-80}
          className={styles.ctaButton}
          aria-label="View my portfolio"
        >
          Explore My Work
        </Link>
      </div>

    </section>
  );
};

export default Hero;
