import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { FaRocket } from "react-icons/fa";
import myImage from "../../images/Alex2.JPG";
import "./styles.css";

const jobSummary = `
With a Master’s degree in Computer Science from Addis Ababa University, I have cultivated a strong academic foundation in algorithms, software engineering, and system design. My professional journey is marked by a passion for innovative problem-solving and a commitment to delivering impactful solutions.

My approach is fueled by innovation and a desire to solve complex challenges. I live by the principle: “The best way to predict the future is to create it,” driving me to continuously learn and adapt in the ever-evolving tech landscape.
`;

const About = () => (
  <section id="about" className="about">
    <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
    <div className="about__content">
      <Animate
        play
        duration={1.8}
        delay={0.3}
        start={{ transform: "translateX(-200px)", opacity: 0 }}
        end={{ transform: "translateX(0)", opacity: 1 }}
      >
        <div className="about__image-wrapper">
          <img src={myImage} alt="Alaye Zerihun" className="about__image" />
          <div className="about__image-overlay"></div>
        </div>
      </Animate>
      <Animate
        play
        duration={1.8}
        delay={0.7}
        start={{ transform: "translateX(200px)", opacity: 0 }}
        end={{ transform: "translateX(0)", opacity: 1 }}
      >
        <div className="about__text-wrapper">
          <h2 className="about__heading">
            Embarking on the Journey of <span>Development Mastery</span>
            <FaRocket className="about__icon" />
          </h2>
          <p className="about__summary">{jobSummary.trim()}</p>
          <a href="#contact" className="about__cta">
            Let’s Create the Future Together!
          </a>
        </div>
      </Animate>
    </div>
  </section>
);

export default About;