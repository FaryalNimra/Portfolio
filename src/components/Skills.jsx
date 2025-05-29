import React from "react";
import "./Skills.scss"; // we'll create this CSS

const Skills = () => {
  const skillList = [
    "HTML & CSS", "Java", "JavaFX", "C++", "React JS", "SCSS & Bootstrap", "Python", "WordPress",
    "Microsoft Office", "MySQL", "Machine Learning & Deep Learning Models",
    "Good Communication and Writing Skills", "Team Leadership", "Project Management",
    "Problem Solving and Decision Making", "Documentation"
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="marquee">
        <ul className="skills-list">
          {skillList.map((skill, idx) => (
            <li key={idx} className="skill-item">{skill}</li>
          ))}
          {/* Repeat for seamless marquee */}
          {skillList.map((skill, idx) => (
            <li key={"repeat-"+idx} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
