import React, { useRef, useEffect } from "react";
import Navbar from "./components/navBar/";
import Home from "./containers/home/";
import About from "./containers/about";
import Resume from "./containers/resume/index.jsx";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Footer from "./containers/footer/Footer";
import smoothscroll from "smoothscroll-polyfill";
import Testimonials from "./containers/testimonials/testimonial.jsx";

import ScrollUp from "./containers/scrollUp/ScrollUp.jsx";

// Add smooth scroll polyfill
smoothscroll.polyfill();

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    skills: useRef(null),
    services: useRef(null),       // Added
    testimonials: useRef(null),   // Added
    portfolio: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    for (let section in sections) {
      if (isElementInViewport(sections[section].current)) {
        window.history.replaceState(null, null, `#${section}`);
        break;
      }
    }
  };

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
        <Contact />

      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
