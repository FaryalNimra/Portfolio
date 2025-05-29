import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yahan aap API call ya email sending logic laga sakte hain
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      {submitted && <p style={styles.success}>Thank you for your message!</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #302b63, #0f0c29)",
    color: "white",
    padding: "40px 30px",
    maxWidth: "500px",
    margin: "40px auto",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(255, 126, 95, 0.5)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "900",
    fontSize: "2rem",
  },
  success: {
    backgroundColor: "#28a745",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "600",
    fontSize: "1.1rem",
  },
  input: {
    marginTop: "8px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    marginTop: "8px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    minHeight: "100px",
    resize: "vertical",
    outline: "none",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#ff7e5f",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ContactForm;
