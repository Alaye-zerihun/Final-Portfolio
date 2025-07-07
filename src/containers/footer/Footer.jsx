import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import "./styles.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

const FooterStyle = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #2c3e50);
  padding: 10rem 2rem 5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  .container {
    display: flex;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer__col {
    line-height: 1.8;
    transition: transform 0.3s ease;
  }
  .footer__col:hover {
    transform: translateY(-5px);
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #e74c3c;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    font-size: 1.6rem;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: #fff;
    text-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
  }
  .copyright {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    text-align: center;
    padding: 2rem 0;
    margin-top: 6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    .para {
      margin: 0;
      color: #dcdcdc;
      font-size: 1.4rem;
    }
    .home__icons {
      margin-bottom: 1.5rem;
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }
    .contact-icon {
      font-size: 2rem;
      color: #fff;
      transition: transform 0.3s ease, color 0.3s ease;
    }
    .contact-icon:hover {
      color: #e74c3c;
      transform: scale(1.2);
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 8rem 1rem 4rem;
    .container {
      flex-direction: column;
      gap: 3rem;
      & > div {
        margin-top: 0;
        text-align: center;
      }
    }
    .footer__col__title {
      font-size: 2rem;
    }
    .footer__col1__title {
      font-size: 2.8rem;
    }
    .copyright .home__icons {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <FooterStyle>
      <div className="container">
    
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: "Home", path: "home" },
              { title: "About", path: "about" },
              { title: "Skills", path: "skills" },
              { title: "Resume", path: "resume" },
              { title: "Portfolio", path: "portfolio" },
              { title: "Contact", path: "contact" },
            ]}
            handleClick={scrollToSection}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              { title: "+251 913 190 463", path: "tel:+251913190463" },
              { title: "alaye93@gmail.com", path: "mailto:alaye93@gmail.com" },
              { title: "Ethiopia, Addis Ababa, 5 Kilo near Egypt Embassy", path: "#" },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/abinet-zerihun/",
                icon: <FaLinkedin />,
              },
              {
                title: "Github",
                path: "https://github.com/Alaye-zerihun",
                icon: <FaGithub />,
              },
              {
                title: "Telegram",
                path: "https://t.me/Abenet2127",
                icon: <FaTelegram />,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
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
            <a href="mailto:alaye93@gmail.com">
              <FaEnvelope className="contact-icon" />
            </a>
            <a href="https://t.me/Abenet2127" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="contact-icon" />
            </a>
          </div>
          <PText>'The best way to predict the future is to create it.'</PText>
          <PText>© 2025 Developed by Alaye Zerihun | All rights reserved</PText>
        </div>
      </div>
    </FooterStyle>
  );
}