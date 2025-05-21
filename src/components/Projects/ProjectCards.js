import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard({ imgPath, isBlog, title, description, demoLink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(demoLink);  // This navigates without reloading the page
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
