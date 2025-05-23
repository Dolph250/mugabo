import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

import Particle from "../Particle";

//new
function Assignmenter() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/mugabo/README.md')
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

export default Assignmenter;
