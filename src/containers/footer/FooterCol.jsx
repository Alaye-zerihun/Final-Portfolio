import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FooterColStyle = styled.div`
  .footer__col__links {
    list-style: none;
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
      color: #dcdcdc;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    a:hover {
      color: #e74c3c;
      transform: translateX(5px);
    }
  }
`;

const FooterCol = ({ heading, links, handleClick }) => {
  return (
    <FooterColStyle>
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
                  {link.icon && <span>{link.icon}</span>}
                  {link.title}
                </a>
              ) : (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon && <span>{link.icon}</span>}
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </FooterColStyle>
  );
};

FooterCol.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired,
  handleClick: PropTypes.func,
};

export default FooterCol;