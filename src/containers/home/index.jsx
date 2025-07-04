import React, { useState, useEffect } from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss"; 
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import cvPDF from './CV/FinalCV-neba.pdf'; 

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.setAttribute('download', 'FinalCV-neba.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const phrases = [
    "Hello, I'm Alaye",
    "Computer Science Graduate(AAU)",
    "A Full Stack Developer",
    "AI & Blockchain enthusiast",
    "Shape the future by creating it",
  ];

  const typingDelay = 80;
  const erasingDelay = 50;
  const newTextDelay = 1000;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    import("../../images/2121.jpg"),
    import("../../images/favoriteimg1.jpg"),
    import("../../images/2121.jpg"),
  /*   import("../../images/AI.jpg"), */
  /*   import("../../images/graphfull.png"), */
    import("../../images/meanandmern.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3500); 

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    if (charIndex === phrases[currentPhraseIndex].length + 1 && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true);
      }, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
      }, isDeleting ? erasingDelay : typingDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentPhraseIndex, isDeleting, charIndex]);

  const handleNavigateToContactMePage = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const currentDisplayText = phrases[currentPhraseIndex].substring(0, charIndex);

  return (
    <section id="home" className="home">
      <div className="background-image-container">
        <div className="background-image slide-active"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`,            
        }}>
        </div>
        <div  
          className="background-image slide-enter"
          style={{ backgroundImage: `url(${backgroundImages[(currentImageIndex + 1) % backgroundImages.length]})` }}
        ></div>
      </div>
      <div className="constant-black-overlay"></div>
      <div className="home__text-wrapper">
        <h1>
          &nbsp;&nbsp;{currentDisplayText}
          <span className="blinking-cursor">|</span>
          <br />
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
       <div className="home__icons">
      <a href="https://github.com/Alaye-zerihun" target="_blank" rel="noopener noreferrer">
        <FaGithub className="contact-icon" />
      </a>
      <a href="https://www.linkedin.com/in/abinet-zerihun/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="contact-icon" />
      </a>
      <a href="tel:+251913190463">
        <FaPhone className="contact-icon" />
      </a>
      <a href="mailto:abinetzerihun0@gmail.com">
        <FaEnvelope className="contact-icon" />
      </a>
    </div>
       {/*  <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
       */}

      </Animate>
    </section>
  );
};

export default Home;
