import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimage.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a Full-stack Developer with strong experience in Mobile Application Development, IoT Systems, and Web Development
              <br />
              <br /> I am currently pursuing graduate studies at BUAA, majoring Space Technology Applications.  &nbsp;
              I am a Pro in <b className="purple"> React Native, Java, Core PHP 8, Laravel, Vanilla JavaScript, and jQuery.</b> Intermediate in <b className="purple">Node.js, Python, and Kotlin, Novice in    <i>DotNet, Flutter, and Blockchain Technology </i>.</b>
           
                
             
              <br />
              <br />
              I am Cisco and Huawei certified, as well as the Seeds for the Future program 2021 graduate.<br/>
              <i>
                I am aspiring <b className="purple">Space Technologist </b> 
              </i>
              <br />
              <br />
            When my hands are fall away from the keyboard, I like <b className="purple">jogging, bike rides and video games.</b>
            
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius: "200px"}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dolph250"
                 
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/delphi_dev250"
             
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dolph250/"
              
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/miles_delphi/"
               
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
