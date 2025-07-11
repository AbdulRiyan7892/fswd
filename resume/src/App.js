// App.js
import React from 'react';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    window.location.href = 'https://fswd-07fo.onrender.com/resume';
  };

  return (
    <>
      <nav>
        <h1>Abdul Riyan</h1>
        <ul>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('resume')}>Download Resume</li>
        </ul>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! I am Abdul Riyan, a passionate developer exploring web technologies and software development.
        </p>
      </section>

      <section id="education">
        <h2>Educational Qualification</h2>
        <p><strong>B.E.</strong> in Computer Science and Engineering</p>
        <p>Malnad College of Engineering, Hassan — CGPA: 9.5 (Expected 2026)</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>C, Java, Python, HTML, JavaScript, ASM</p>
        <p>Figma, MS Word, PowerPoint</p>
        <p>Operating Systems: Linux, Windows</p>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <button onClick={handleDownload}>Download Resume</button>
      </section>
    </>
  );
}

export default App;
