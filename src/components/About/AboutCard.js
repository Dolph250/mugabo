import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mugabo Adolphe </span>
            from <span className="purple"> Rwanda</span>
            <br />
            I am currently pursuing Master of Space Technology Applications, majoring Remote Sensing and Geographic Information Systems at Beihang University.
            <br />
            I have completed B.Sc in Computer Science from University of Rwanda.
            <br />
            <br />
            When my fingers are far away from the keyboard, I am eager to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike rides
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Chinese
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading biographies of experts in various fields
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In fidelitas et humilem"{" "}
          </p>
          <footer className="blockquote-footer">Mugabo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
