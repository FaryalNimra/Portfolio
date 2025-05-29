import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaFlag } from "react-icons/fa";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        {/* Left Side */}
        <div className="about-left">
          <h1>I am Faryal Nimra</h1>
          <p>Final-year Software Engineering student at UET Taxila, driven by a passion for developing intelligent and impactful
software solutions. Well-versed in front-end development, machine learning, and project management. Keen interest in AI advancements and
committed to contributing to collaborative, fast-paced environments that value innovation and results</p>

          <div className="icon-links">
            <a href="tel:+923026130237" className="icon-circle" title="Call">
              <FaPhone />
            </a>
            <a href="mailto:faryalnimra190@gmail.com" className="icon-circle" title="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/faryal-nimra-4a49a32b6"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.google.com/maps/place/Nawababad+Wah+Cantt"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>

            {/* Flag icon (not a link) */}
            <span className="icon-circle" title="Pakistani">
              <FaFlag />
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <img
            src="https://via.placeholder.com/250" // Replace with actual image
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
