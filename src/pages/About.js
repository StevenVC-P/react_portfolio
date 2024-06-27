/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import my_pic from "../images/Profesional Rounded.png";

function About() {
    return (
    <div>
      <Container style={{ marginTop: 10 }}>
        <Row>
          <Col size="md-12">
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-center" style={{ marginBottom: 20 }}>
          <Col size="sm-12 md-6 lg-4 xl-3">
            <img
              src={my_pic}
              width="250"
              height="250"
              alt="Picture of me"
              style={{
                borderRadius: "50%",
                boxShadow: "10px 10px 12px rgba(0, 0, 0, .2)",
                backgroundColor: "transparent",
                padding: 0,
                margin: "10px 0",
              }}
            />
          </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginLeft: 60 }}>
              Self-starting and resourceful Full Stack Developer with military and audit experience with training in implementing front-end and back-end coding. Astute and always-learning on group projects, the focus is design for user interactions on websites and databases. Understands website functionality and meticulously creates fully
              functional code. Former professional experiences evidence clear communication skills with others, both technical and non-technical team members, and promote drive towards end-user needs.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Technical Skills</h3>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              <li>Languages: HTML, CSS, ES6 JavaScript, Java, SQL</li>
              <li>Frameworks/Libraries: Node.js, Express, React, Jquery, Bootstrap, Mongoose</li>
              <li>Tools: MySQL, MongoDB, Rest APIs, Axios, Sequelize, DomtoIMAGE, Stability.ai</li>
              <li>Methods: RESTful WebServices, Testing, Asynchronous Programming, Pair Programming, Agile methodology, SPA UX design, API integration</li>
              <li>Other: Experience with image hosting and data management, front-end and back-end development, UI/UX design, and deployment</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Professional Experience</h3>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              <li>
                <strong>Senior Interactive Developer</strong> - Optum contract: Publicis Sapient (Nov 2023 - Current)
                <br />
                Responsibilities: Developing and enhancing UI features on RxComet.com, restructuring features for flexibility, and modifying API requests to ServiceNow.
              </li>
              <li>
                <strong>Software Developer</strong> - Optum contract: TEKSystems (May 2021 - October 2023)
                <br />
                Responsibilities: Resolving defects, developing user stories, and enhancing UI features.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
