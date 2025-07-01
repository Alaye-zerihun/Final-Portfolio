import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll"; 
import homeicon from "../../images/myimage.png";
import "./styles.scss";

const data = [
  { label: "Home", to: "home" },
  { label: "About Me", to: "about" },
  { label: "Resume", to: "resume" },
  { label: "SKills", to: "skills" },
  { label: "Service", to: "services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Recomendation", to: "testimonials" }, // fixed here
  { label: "Contact", to: "contact" }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [navbarTextColor, setNavbarTextColor] = useState('white');

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = () => {
    setToggleIcon(false);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);

    const elem = document.getElementById(currentSection);
    if (elem) {
      const computedStyles = window.getComputedStyle(elem);
      setNavbarTextColor(computedStyles.color);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Lobster', sans-serif" }}>
      <nav
        className="navbar"
        style={{
          backgroundColor: activeSection
            ? getComputedStyle(document.getElementById(activeSection))?.backgroundColor || 'transparent'
            : 'transparent',
          color: navbarTextColor
        }}
      >
        <div className="navbar__container">
          <Link to="home" className="navbar__container__logo" smooth={true} duration={600}>
            <img src={homeicon} alt="homeicone" height={150} />
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleLinkClick}
                spy={true}
                smooth={true}
                duration={600}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
