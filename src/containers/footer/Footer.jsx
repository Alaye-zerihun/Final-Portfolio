
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/Alaye-zerihun', label: 'GitHub', icon: <FaGithub size={24} /> },
    { href: 'https://www.linkedin.com/in/abinet-zerihun-1203a3282/', label: 'LinkedIn', icon: <FaLinkedin size={24} /> },
    { href: 'https://x.com/Alayezerihun', label: 'Twitter', icon: <FaTwitter size={24} /> },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.socialList}>
          {socialLinks.map((link) => (
            <li key={link.label} className={styles.socialItem}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`Visit my ${link.label} profile`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Alaye Zerihun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
