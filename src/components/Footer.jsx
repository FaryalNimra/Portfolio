// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Faryal Nimra. All rights reserved.</p>
      <p style={styles.text}>
        Contact:{" "}
        <a href="mailto:faryalnimra190@gmail.com" style={styles.email}>
          faryalnimra190@gmail.com
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg, #302b63, #0f0c29)",
    color: "#eee",
    textAlign: "center",
    padding: "20px 15px",
    fontSize: "1rem",
    fontWeight: "500",
    letterSpacing: "0.02em",
    boxShadow: "inset 0 1px 10px rgba(255,255,255,0.1)",
  },
  text: {
    margin: "5px 0",
  },
  email: {
    color: "#ff7e5f",
    textDecoration: "none",
    fontWeight: "600",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default Footer;
