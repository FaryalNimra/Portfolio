import React from "react";
import "./Projects.scss";


const Projects = () => {
  const projects = [
  {
    name: "Fake Catcher AI",
    description:
      "Developing Fake Catcher AI, a cutting-edge two-in-one tool designed to detect Deepfake and Cheap Fake images using advanced deep learning algorithms. Provides real-time detection results with high accuracy, aiming to combat misinformation.",
  },
  {
    name: "Town Realtors, Innowify Website",
    description:
      "Designed and developed a custom official website for Town Realtors using modern web technologies. The site features a fully responsive layout, seamless user experience, and optimized performance for all device types.",
  },
  {
    name: "Chat AI Dashboard",
    description:
      "Created an interactive Chat AI Dashboard built with React.js to enhance performance analytics and team collaboration. It includes real-time data visualization, user activity tracking, and integration with various AI modules.",
    link: "https://github.com/FaryalNimra/CHAT-AI-DASHBOARD",
  },
  {
    name: "TEK TIME Website",
    description:
      "Developed a responsive React.js website for TEK TIME with smooth navigation and dynamic content updates. The site is designed to showcase products and services with a focus on user engagement and accessibility.",
    link: "https://github.com/FaryalNimra/TEK-TIME-WEBSITE-Version4",
  },
  {
    name: "Blogs Website",
    description:
      "Built a React.js powered blogging platform featuring detailed reviews, location-based content, and interactive maps. Users can explore content based on their interests and geographical location, with a clean and user-friendly UI.",
    link: "https://github.com/FaryalNimra/React_App_Blogs_Website-Version1",
  },
  {
    name: "Image Editing Website",
    description:
      "Developed a Python-based web application that allows users to apply real-time image filters and enhancements. Features include brightness, contrast adjustment, and various creative filters leveraging efficient backend processing.",
    link: "https://github.com/FaryalNimra/Image-Editing-Website",
  },
  {
    name: "Passport Management System",
    description:
      "Designed a comprehensive Passport Management System using Python with a Tkinter frontend and SQL backend. The system streamlines passport application, verification, and renewal processes, improving administrative efficiency.",
    link: "https://github.com/FaryalNimra/Passport-Management-System",
  },
  {
    name: "Brick Breaker Game",
    description:
      "Created an engaging JavaFX Brick Breaker game with dynamic gameplay, smooth controls, and increasing difficulty levels. The game includes interactive elements and a scoring system to keep players challenged and entertained.",
    link: "https://github.com/FaryalNimra/Brick-Breaker-Game-JavaFX",
  },
  {
    name: "Snake Game",
    description:
      "Developed a classic Snake Game in C++ using object-oriented programming principles. Features include multiple levels, scoring, and smooth keyboard controls for an enjoyable gaming experience.",
  },
];

  

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.link && (
              <p>
                <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
