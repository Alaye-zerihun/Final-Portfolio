import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import heroImage from '../../images/bg2.jpg'; 

const Hero = () => {
  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alaye Zerihun</h1>
        <p className={styles.subtitle}>
          Passionate Full Stack Developer turning ideas into dynamic, user-focused web applications.
          I build fast, modern, and scalable digital experiences that make an impact.
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
