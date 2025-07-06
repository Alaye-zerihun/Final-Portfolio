import React, { useEffect, useState } from "react";
import "./scrollUp.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      aria-label="Scroll to top"
      tabIndex={showScroll ? 0 : -1}
    >
      <FaArrowUp className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
