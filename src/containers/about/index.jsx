
import React from 'react';
import { Link } from 'react-scroll';
import styles from './About.module.css';
import profileImage from '../../images/Alex2.JPG'; // Adjust path based on your project structure

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>Passionate Full Stack Developer</p>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src={profileImage}
              alt="Alaye Zerihun profile"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              I'm Alaye Zerihun, a dedicated Full Stack Developer with a passion for
              building innovative and user-friendly web applications. With expertise in
              both frontend and backend technologies, I specialize in creating scalable
              solutions that drive impact. My journey at Evangadi Networks honed my
              skills in React, Node.js, and modern web development practices.
            </p>
            <p className={styles.description}>
              I thrive on solving complex problems and collaborating with teams to
              deliver high-quality projects. When I'm not coding, you can find me
              exploring new technologies or contributing to open-source communities.
            </p>
            <div className={styles.buttonGroup}>
              <a
                href="/resume.pdf"
                download
                className={styles.resumeButton}
                aria-label="Download my resume"
              >
                Download Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className={styles.contactButton}
                aria-label="Go to contact section"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
