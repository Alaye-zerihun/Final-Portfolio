import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import homeicon from "../../images/myimage.png";
import "./styles.scss";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About Me", to: "about" },
  { label: "Resume", to: "resume" },
  { label: "Skills", to: "skills" },
  { label: "Services", to: "services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Recommendation", to: "testimonials" },
  { label: "Contact", to: "contact" }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navbarTextColor, setNavbarTextColor] = useState("white");

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);
  const handleLinkClick = () => setToggleIcon(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);

    const currentElem = document.getElementById(current);
    if (currentElem) {
      const computedColor = window.getComputedStyle(currentElem).color;
      setNavbarTextColor(computedColor || "white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: activeSection
          ? getComputedStyle(document.getElementById(activeSection))?.backgroundColor || "#111"
          : "#111",
        color: navbarTextColor
      }}
    >
      <div className="navbar__container">
        <Link
          to="home"
          className="navbar__container__logo"
          smooth={true}
          duration={600}
          onClick={handleLinkClick}
        >
          <img src={homeicon} alt="Home Icon" height={50} />
        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`navbar__container__menu__item ${
                activeSection === item.to ? "active" : ""
              }`}
            >
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
