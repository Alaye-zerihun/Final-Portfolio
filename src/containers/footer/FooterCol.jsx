import React from "react";
import PropTypes from "prop-types";

const FooterCol = ({ heading, links, handleClick }) => {
  return (
    <div className="footer__col">
      <h3 className="footer__col__title">{heading}</h3>
      <ul className="footer__col__links">
        {links.map((link, index) => (
          <li key={index}>
            {handleClick ? (
              <a
                href={`#${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.path);
                }}
              >
                {link.icon && <span>{link.icon} </span>}
                {link.title}
              </a>
            ) : (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <span>{link.icon} </span>}
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterCol.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ).isRequired,
  handleClick: PropTypes.func, // optional
};

export default FooterCol;
