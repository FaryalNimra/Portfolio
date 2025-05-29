import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    if (isMobile) setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (isMobile) setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormStatus("");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          closeModal();
        }, 1000);
      } else {
        setFormStatus(result.error || "Something went wrong.");
      }
    } catch (err) {
      setFormStatus("Server error. Please try again later.");
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logo}>Portfolio</div>

        {isMobile && (
          <div style={styles.hamburger} onClick={toggleMenu}>
            ☰
          </div>
        )}

        {(isMobile && isMenuOpen) || !isMobile ? (
          <nav style={{ ...styles.nav, ...(isMobile ? styles.navMobile : {}) }}>
            <a href="#about" style={styles.link} onClick={handleLinkClick}>About Me</a>
            <a href="#work" style={styles.link} onClick={handleLinkClick}>Work Experience</a>
            <a href="#skills" style={styles.link} onClick={handleLinkClick}>Skills</a>
            <a href="#projects" style={styles.link} onClick={handleLinkClick}>Projects</a>
            <button
              style={{ ...styles.link, ...styles.contactButton, border: "none", cursor: "pointer" }}
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </nav>
        ) : null}
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "10px" }}>
                <label>Name:</label><br />
                <input
                  type="text"
                  required
                  style={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Email:</label><br />
                <input
                  type="email"
                  required
                  style={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Message:</label><br />
                <textarea
                  required
                  style={{ ...styles.input, height: "80px" }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" style={styles.submitButton}>Send</button>
              <button type="button" onClick={closeModal} style={styles.cancelButton}>Cancel</button>
              {formStatus && <p style={{ marginTop: "10px", color: "green" }}>{formStatus}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  header: {
    background: "linear-gradient(#302b63)",
    padding: "30px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  },
  logo: {
    fontWeight: "900",
    fontSize: "1.8rem",
  },
  nav: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
  },
  navMobile: {
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
  },
  contactButton: {
    backgroundColor: "#ff7e5f",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1rem",
  },
  hamburger: {
    fontSize: "1.8rem",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "90%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    backgroundColor: "#ff7e5f",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    color: "#333",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Header;
