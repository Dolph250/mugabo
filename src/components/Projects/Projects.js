import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

import Particle from "../Particle";

<<<<<<< HEAD
//new
=======

>>>>>>> 85861580542385b51ac2eaec96537c487c9b2b11
function Projects() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
<<<<<<< HEAD
    fetch('/mugabo/report.md')
=======
    fetch('/report.md')
>>>>>>> 85861580542385b51ac2eaec96537c487c9b2b11
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Container fluid className="project-section">

      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full screen height
        backgroundColor: '#f0f2f5', // light background
      }}
    >
      <div
        style={{
          width: '60%',
          height: '80%',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          overflowY: 'auto',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
    <Particle />
    </Container>
  );
}

export default Projects;
