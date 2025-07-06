import { Line } from "rc-progress";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import CountUp from "react-countup";
import "./styles.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = [
    {
      label: "Full Stack",
      data: [
        { skillName: "HTML, CSS & JavaScript", percentage: 98 },
        { skillName: "React.js", percentage: 90 },
        { skillName: "Angular.js", percentage: 50 },
        { skillName: "Node.js", percentage: 90 },
        { skillName: "Firebase", percentage: 90 },
        { skillName: "PHP", percentage: 80 },
      ],
    },
    {
      label: "Databases",
      data: [
        { skillName: "SQL", percentage: 70 },
        { skillName: "MongoDB", percentage: 70 },
        { skillName: "MySQL", percentage: 85 },
        { skillName: "Express", percentage: 60 },
      ],
    },
    {
      label: "Programming Languages",
      data: [
        { skillName: "C++", percentage: 90 },
        { skillName: "C# (.NET)", percentage: 70 },
        { skillName: "Python", percentage: 70 },
        { skillName: "Java", percentage: 85 },
        { skillName: "Dart (Flutter)", percentage: 85 },
      ],
    },
  ];

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
        {skillsData.map((category) => (
          <article className="skill-card" key={category.label}>
            <h3 className="skill-category">{category.label}</h3>
            {category.data.map((skill) => (
              <div className="skill-item" key={skill.skillName}>
                <div className="skill-title">
                  <span>{skill.skillName}</span>
                  {isVisible && (
                    <span
                      className="skill-percentage"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <CountUp
                        start={0}
                        end={skill.percentage}
                        duration={3}
                        suffix="%"
                      />
                    </span>
                  )}
                </div>
                <div className="skill-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.skillName} skill level`}>
                  <div
                    className="skill-bar-fill"
                    style={{ width: isVisible ? `${skill.percentage}%` : 0 }}
                  ></div>
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
