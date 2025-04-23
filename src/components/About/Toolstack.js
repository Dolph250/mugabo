import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
 SiAndroidstudio, SiLinux, SiQgis, SiPostman 
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQgis />
      </Col>
    </Row>
  );
}

export default Toolstack;
