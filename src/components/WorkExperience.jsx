
import React, { useState } from "react";
import "./WorkExperience.scss"; // Keep your existing styles

const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      role: "React JS Developer",
      company: "Interactive Tech Solutions",
      duration: "05/2024 – 07/2024",
      location: "Remote, Pakistan",
    },
    {
      role: "WordPress Developer",
      company: "Town Realtors, Innowify",
      duration: "12/2024 – 01/2025",
      location: "Remote, Pakistan",
    },
    {
      role: "Front End Web Developer",
      company: "DA Wedding Whisper",
      duration: "03/2023 – 09/2023",
      location: "Taxila, Pakistan",
    },
    {
      role: "Web Developer",
      company: "Kairiz Cyber Technologies (SMC-Private) Limited",
      duration: "06/2024 – 07/2024",
      location: "Remote, Pakistan",
    },
    {
      role: "Front End Developer",
      company: "TechnoHacks Edutech",
      duration: "09/2023 – 10/2023",
      location: "Remote, India",
    },
    {
      role: "Management Intern",
      company: "National Ministry of IT and Telecom",
      duration: "03/2023 – 08/2023",
      location: "Taxila, Pakistan",
    },
    {
      role: "Senior Documentation Executive",
      company: "Softdesk",
      duration: "10/2023 – 12/2024",
    },
    {
      role: "Management Executive",
      company: "Elance Phantoms",
      duration: "02/2022 – 03/2022",
    },
    {
      role: "Finance Executive",
      company: "Elance Phantoms",
      duration: "02/2022 – 03/2022",
    },
    {
      role: "Documentation Executive",
      company: "Softdesk",
      duration: "02/2022 – 03/2022",
    },
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 5);

  return (
    <section className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {visibleExperiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="icon-circle">💼</div>
            <div>
              <h3 className="role">{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="details">
                {exp.duration} {exp.location ? `| ${exp.location}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          className="view-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
