import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ass1.PNG";
import emotion from "../../Assets/Projects/ass3.png";
import editor from "../../Assets/Projects/ass3.png";
import chatify from "../../Assets/Projects/ass1.PNG";
import suicide from "../../Assets/Projects/ass1.PNG";
import bitsOfCode from "../../Assets/Projects/ass2.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Assignments </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a various assignments I executed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Assigment 1"
              description="Matrix Multiplication Project Report"
              demoLink="/Assignment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Assignment 2"
              description="My personal blog page was developed using React.js. It allows integration of markdown content, resume embedding, and a responsive design."
     
              demoLink="/Assignmenter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Assignment 3"
              description="LLM"
           
              demoLink="/Assignmenter"              
            />
          </Col>

      

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Assignment 4"
              description="LLM."
                  demoLink="/Assignmenter"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
