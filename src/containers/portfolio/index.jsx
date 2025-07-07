
import React from 'react';
import { Link } from 'react-scroll';
import styles from './Portfolio.module.css';
import projectImage1 from '../../images/evangadiforum.jpeg';
import projectImage2 from '../../images/amazon.jpeg';
import projectImage3 from '../../images/netflix.jpeg';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with user authentication, product filtering, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example.com/ecommerce',
    repoLink: 'https://github.com/Alaye-zerihun/ecommerce',
    image: projectImage1,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and user-friendly interface.',
    technologies: ['React', 'Firebase', 'TypeScript'],
    liveLink: 'https://example.com/task-manager',
    repoLink: 'https://github.com/Alaye-zerihun/task-manager',
    image: projectImage2,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects with smooth animations and responsive design.',
    technologies: ['React', 'Vite', 'react-scroll'],
    liveLink: 'https://example.com/portfolio',
    repoLink: 'https://github.com/Alaye-zerihun/Final-Portfolio',
    image: projectImage3,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Portfolio</h2>
        <p className={styles.subtitle}>Projects That Showcase My Expertise</p>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div key={project.id} className={styles.projectCard} style={{ '--index': index }}>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                  aria-label={`View source code of ${project.title}`}
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80}
          className={styles.ctaButton}
          aria-label="Go to contact section"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
