import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-scroll";
import { Animate } from "react-simple-animate";
import profileImage from "../../images/Abe.jpg"; // Corrected import path
import resume from '../../containers/about/CV/My-Profile.pdf'; // Adjusted import path for resume
import styles from "./About.module.css";

const jobSummary = `
I am currently advancing my skills through comprehensive full-stack web development training at Evangadi Networks, building practical expertise to complement my passion for technology. My approach is fueled by innovation and a strong desire to solve complex challenges through creative software solutions. I live by the principle: “The best way to predict the future is to create it,” and I’m committed to developing impactful and forward-thinking applications.”
`;
const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.subtitle}>
        <BsInfoCircleFill size={40} className={styles.icon} />
      </p>
      <div className={styles.content}>
        <Animate
          play
          duration={1.5}
          delay={0.3}
          start={{ transform: "translateX(-100px)", opacity: 0 }}
          end={{ transform: "translateX(0)", opacity: 1 }}
        >
          <div className={styles.imageWrapper}>
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
          </div>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={0.7}
          start={{ transform: "translateX(100px)", opacity: 0 }}
          end={{ transform: "translateX(0)", opacity: 1 }}
        >
          <div className={styles.textWrapper}>
            <h4 className={styles.title}>
            Committed to Growth and Innovation in Full Stack Development <FaRocket className={styles.icon} />
            </h4>
            <p className={styles.description}>{jobSummary.trim()}</p>
            <div className={styles.buttonGroup}>
              <a
                href={resume}
                download="My-Profile.pdf"
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
                Contact Me
              </Link>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  </section>
);

export default About;