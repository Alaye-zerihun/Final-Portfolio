import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Portfolio.module.css';
import projectImage1 from '../../images/evangadiforum.jpeg';
import projectImage2 from '../../images/amazon.jpeg';
import projectImage3 from '../../images/netflix.jpeg';
import projectImage6 from '../../images/Alaye-Evangadi-Certification.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Amazon Clone',
    description: 'A stunning Amazon clone with sleek product listings, a dynamic cart, and Firebase payment simulation, optimized for all devices.',
    technologies: ['React', 'Firebase', 'TypeScript'],
    liveLink: 'https://vocal-entremet-84378a.netlify.app/',
    repoLink: 'https://github.com/Alaye-zerihun/Amazon-Website.git',
    image: projectImage2,
    category: 'Web',
  },
  {
    id: 2,
    title: 'Evangadi Forum',
    description: 'A vibrant forum with seamless auth, dynamic posts, and a responsive design that wows users.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://evangadiforum-frontend-final.vercel.app/',
    repoLink: 'https://github.com/Alaye-zerihun/Evangadiforum-Frontend-final.git',
    image: projectImage1,
    category: 'Web',
  },
  {
    id: 3,
    title: 'Netflix Clone',
    description: 'A captivating Netflix clone with a smooth streaming UI and fully responsive design.',
    technologies: ['React', 'Vite', 'react-scroll'],
    liveLink: 'https://netflix-by-alex-fjuq.vercel.app/',
    repoLink: 'https://github.com/Alaye-zerihun/Netflix-by-alex.git',
    image: projectImage3,
    category: 'Web',
  },
];

const certificationsData = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'Certificate in Full-Stack Web Development',
    thumbnail: 'https://via.placeholder.com/300x200?text=Full-Stack+Wow!',
    link: 'https://example.com/fullstack-cert.pdf',
    category: 'Development',
  },
  {
    id: 2,
    title: 'AI Fundamentals',
    description: 'Udacity Nanodegree in Artificial Intelligence Fundamentals',
    thumbnail: 'https://via.placeholder.com/300x200?text=AI+Mastery!',
    link: 'https://www.udacity.com/certificate/e/d82655fc-66bf-11f0-9f51-438e9c662b8d',
    category: 'AI',
  },
  {
    id: 3,
    title: 'Programming Fundamentals',
    description: 'Udacity Nanodegree in Programming Fundamentals',
    thumbnail: 'https://via.placeholder.com/300x200?text=Programming+Excellence!',
    link: 'https://www.udacity.com/certificate/e/d82b1c90-661a-11f0-8b1d-97a26c61b964',
    category: 'Development',
  },
  {
    id: 4,
    title: 'Evangadi Certification',
    description: 'Evangadi Tech Certification',
    thumbnail: projectImage6,
    link: projectImage6,
    category: 'Development',
  },
  {
    id: 5,
    title: 'Android Developer',
    description: 'Udacity Nanodegree in Android Developer Fundamentals',
    thumbnail: 'https://via.placeholder.com/300x200?text=Android+Expertise!',
    link: 'https://www.udacity.com/certificate/e/fe82342e-66c3-11f0-bc92-4fe17d5824ee',
    category: 'Mobile',
  },
  {
    id: 6,
    title: 'Data Science',
    description: 'Certificate in Data Science',
    thumbnail: 'https://via.placeholder.com/300x200?text=Data+Science+Genius!',
    link: 'https://example.com/data-science-cert.pdf',
    category: 'Data',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const handleFilter = (category) => setFilter(category);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Elite Portfolio</h2>
        <p className={styles.subtitle}>Unveiling Cutting-Edge Skills & Achievements</p>

        <div className={styles.filterButtons}>
          {['All', 'Web', 'Development', 'AI', 'Mobile', 'Data'].map((cat) => (
            <button
              key={cat}
              className={`${styles.filterButton} ${filter === cat ? styles.active : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {(filter === 'All' ? [...projectsData, ...certificationsData] : [
            ...projectsData.filter((p) => filter === 'Web' && p.category === filter),
            ...certificationsData.filter((c) => filter === c.category),
          ]).map((item, index) => (
            <div key={item.id} className={`${styles.projectCard} ${item.thumbnail ? styles.certificateCard : ''}`} style={{ '--index': index }}>
              {(item.title === 'Amazon Clone' || item.title === 'Data Science' || item.title === 'Programming Fundamentals') && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
              <img
                src={item.image || item.thumbnail}
                alt={`${item.title} ${item.thumbnail ? 'Certificate' : 'Project'}`}
                className={styles.projectImage}
                loading="lazy"
                onError={() => console.error(`Failed to load ${item.title} image`)}
              />
              <h3 className={styles.projectTitle}>{item.title}</h3>
              <p className={styles.projectDescription}>{item.description}</p>
              {item.technologies ? (
                <div className={styles.technologies}>
                  {item.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              ) : null}
              <div className={styles.links}>
                {item.liveLink && (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                    aria-label={`View ${item.title} demo`}
                  >
                    Live Demo
                  </a>
                )}
                {item.repoLink && (
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                    aria-label={`View ${item.title} code`}
                  >
                    Source Code
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                    aria-label={`View ${item.title} certificate`}
                  >
                    View Cert
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80}
          className={`${styles.ctaButton} ${styles.animate}`}
          aria-label="Contact me"
        >
          Hire My Expertise!
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;