import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        margin: 0,
      }}
    >
      <Header />
      <main>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>

        <section id="work"><WorkExperience /></section>
        <section id="projects"><Projects /></section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
