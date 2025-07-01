import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaCode } from "react-icons/fa";
import {  SiPytorch,SiBlockchaindotcom } from "react-icons/si";
import { FaRocket } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name:",
    value: "Alaye Zerihun",
  },
  {
    label: "Age:",
    value: "32",
  },
  {
    label: "Address:",
    value: "Ethiopia, Addis Ababa",
  },
  {
    label: "Email:",
    value: "Alaye93@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+2519-13-19-04-63",
  },
];
const jobSummary =
 "With a Master’s degree in Computer Science from Addis Ababa University, I have cultivated a strong academic foundation that underpins my expertise in software engineering, programming, and emerging technologies. My career has been defined by a passion for creating impactful digital solutions and educating others. As a university lecturer, I have guided students through the evolving world of computing, helping shape the next generation of tech professionals.My hands-on experience as a Network Engineer and Full-Stack Developer has given me a well-rounded and practical skill set. I am proficient in multiple programming languages including C++, C#, Java, Python, and PHP, and I excel at leveraging modern web frameworks such as ReactJS, NodeJS, and AngularJS. Through my training with Evangadi Networks, I have developed real-world experience in building responsive applications, implementing secure APIs, and managing full software development lifecycles.Beyond technical know-how, I am deeply invested in the future of technology, especially in the realms of AI and Blockchain. My approach is fueled by innovation and a desire to solve complex challenges. I live by the principle: “The best way to predict the future is to create it,” and I’m committed to contributing to smart, scalable, and secure digital infrastructures that empower people and transform industries.";

const About = () => {
  return (
    <section id="about" className="about">
    <PageHeaderContent
    headerText="About Me"
    icon={<BsInfoCircleFill size={40} />}

/>


      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}>Embarking on the Journey of Development Mastery <br /> <br /><FaRocket style={{ fontSize: "100px", textAlign: "center", fontWeight: "bold" }} /></h3>
            {jobSummary.split('\n').map((paragraph, index) => (
              <p key={index} style={{ textAlign: 'justify' }}>
                {paragraph}
              </p>
            ))}
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText" >
              Personal Information
            </h3>
            <ul style={{ listStyleType: "none", marginLeft: "50px"  }}>
    {personalDetails.map((item, i) => (
        <li key={i}>
            <span className="title">{item.label}</span>
            <span className="value">{item.value}</span>
        </li>
    ))}
</ul>

          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">

            <div className="about__content__servicesWrapper__innerContent__image"></div>
            <div className="about__content__servicesWrapper__innerContent__icons">
              <div><FaDev size={60} color="#FFFFFF"/></div>
              <div><SiPytorch size={60} color="#FFFFFF" /></div>
              <div><FaCode size={60} color="#FFFFFF"/></div>
              <div><SiBlockchaindotcom size={60} color="#FFFFFF" /></div>
            </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
