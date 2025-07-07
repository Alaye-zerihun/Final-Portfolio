import { Line } from "rc-progress";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import "./styles.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = {
    Frontend: [
      { skillName: "HTML, CSS with Media Queries", percentage: 95 },
      { skillName: "React.js", percentage: 90 },
      { skillName: "API Integration", percentage: 85 },
    ],
    Backend: [
      { skillName: "Node.js", percentage: 90 },
      { skillName: "Express.js", percentage: 85 },
      { skillName: "MongoDB", percentage: 80 },
      { skillName: "MySQL", percentage: 75 },
    ],
    ProgrammingLanguages: [
      { skillName: "JavaScript", percentage: 95 },
      { skillName: "Python", percentage: 85 },
      { skillName: "Java", percentage: 80 },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="skills" aria-label="Skills Section">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__grid">
        {Object.entries(skillsData).map(([category, data], index) => (
          <article className="skill-card" key={category} aria-labelledby={`skill-category-${index}`}>
            <h3 className="skill-category" id={`skill-category-${index}`}>
              {category === "ProgrammingLanguages" ? "Languages" : category}
            </h3>
            {data.map((skill) => (
              <div className="skill-item" key={skill.skillName}>
                <div className="skill-title">
                  <span>{skill.skillName}</span>
                </div>
                <div className="skill-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.skillName} skill proficiency`}>
                  <Line
                    percent={isVisible ? skill.percentage : 0}
                    strokeWidth={4}
                    trailWidth={4}
                    strokeColor={category === "Frontend" ? "#4CAF50" : category === "Backend" ? "#2196F3" : "#FFD700"}
                    trailColor="#333"
                    strokeLinecap="square"
                    className="skill-progress"
                  />
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;