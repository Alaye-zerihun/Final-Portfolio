// src/containers/about/About.jsx
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { FaRocket } from "react-icons/fa";

import "./styles.css";

const jobSummary = `
With a Master’s degree in Computer Science from Addis Ababa University, I have cultivated a strong academic foundation...

My approach is fueled by innovation and a desire to solve complex challenges. 
I live by the principle: “The best way to predict the future is to create it.”
`;

const About = () => (
  <section id="about" className="about">
    <PageHeaderContent headerText="About" icon={<BsInfoCircleFill size={40} />} />
    <div className="about__content">
      <Animate
        play
        duration={1.5}
        delay={0.3}
        start={{ transform: "translateX(-100px)", opacity: 0 }}
        end={{ transform: "translateX(0)", opacity: 1 }}
      >
        <div className="about__image-wrapper" />
      </Animate>
      <Animate
        play
        duration={1.5}
        delay={0.7}
        start={{ transform: "translateX(100px)", opacity: 0 }}
        end={{ transform: "translateX(0)", opacity: 1 }}
      >
        <div className="about__text-wrapper">
          <h2 className="about__heading">
            Embarking on the Journey of Development Mastery <FaRocket className="about__icon" />
          </h2>
          <p className="about__summary">{jobSummary.trim()}</p>
        </div>
      </Animate>
    </div>
  </section>
);

export default About;
