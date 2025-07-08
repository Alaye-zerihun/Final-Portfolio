
import React from 'react';
import { Link } from 'react-scroll';

import styles from './Skills.module.css';

const skillsData = [
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'JavaScript' },
  { name: 'HTML & CSS' },
  { name: 'MongoDB' },
  { name: 'Git' },
  { name: 'TypeScript' },
  { name: 'AWS' },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <p className={styles.subtitle}>Technologies I Excel In</p>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
        <Link
          to="portfolio"
          smooth={true}
          duration={800}
          offset={-80}
          className={styles.ctaButton}
          aria-label="View my portfolio"
        >
          See My Projects
        </Link>
      </div>
    </section>
  );
};

export default Skills;
