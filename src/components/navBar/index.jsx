import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import homeIcon from "../../images/22.png";
import "./styles.css";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },

  { label: "Skills", to: "skills" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Recommendations", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

const navbarStyles = {
  home: { background: "linear-gradient(90deg, #1a1a1a, #2c3e50)", color: "#fff" },
  about: { background: "linear-gradient(90deg, #e0e0e0, #ecf0f1)", color: "#2c3e50" },

  skills: { background: "linear-gradient(90deg, #1a1a1a, #34495e)", color: "#fff" },
  services: { background: "linear-gradient(90deg, #ecf0f1, #fff)", color: "#2c3e50" },
  portfolio: { background: "linear-gradient(90deg, #2c3e50, #e67e22)", color: "#fff" },
  testimonials: { background: "linear-gradient(90deg, #34495e, #2c3e50)", color: "#fff" },
  contact: { background: "linear-gradient(90deg, #1a1a1a, #000)", color: "#fff" },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = navLinks.map(({ to }) => document.getElementById(to)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const currentStyle = navbarStyles[activeSection] || { background: "linear-gradient(90deg, #1a1a1a, #2c3e50)", color: "#fff" };
  const offset = window.innerWidth > 768 ? -80 : -60;

  return (
    <nav
      className="navbar"
      ref={navRef}
      style={{
        ...currentStyle,
        transition: "background 0.5s ease, color 0.5s ease",
      }}
      aria-label="Main Navigation"
      role="navigation"
    >
      <div className="navbar__container">
        <Link
          to="home"
          className="navbar__logo"
          smooth={true}
          duration={800}
          onClick={closeMenu}
          tabIndex={0}
          aria-label="Go to Home section"
        >
          <img src={homeIcon} alt="Home Icon" height={60} style={{ objectFit: "contain", borderRadius: "50%" }} />
        </Link>

        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`} role="menu">
          {navLinks.map(({ label, to }) => (
            <li
              key={to}
              className={`navbar__menu-item ${activeSection === to ? "active" : ""}`}
              role="menuitem"
            >
              <Link
                className="navbar__menu-link"
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={800}
                onClick={closeMenu}
                tabIndex={0}
                aria-current={activeSection === to ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-icon"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          {menuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;