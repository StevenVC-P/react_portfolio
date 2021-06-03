/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import my_pic from "../images/Profesional Rounded.png";

function About () {
    return (
        <div>
            <Container style={{ marginTop:20}}>
                <Row>
                    <Col size="md-12">
                    <h5>About Me</h5>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col size="sm-12 md-6 lg-4 xl-3">
                        <img src= {my_pic} width="300" height="300" alt="Picture of me" />
                    </Col>
                    <Col size="sm-12 md-6 lg-7 xl-8">
                            <p>Self-starting and resourceful Full Stack Developer with military and audit experience.  
                                With training in implementing front-end and back-end coding, I am astute and always-learning.  
                                On group projects, I brought focus to design for user interactions on websites and databases.  
                                Understands website functionality and coding for multiple platforms and meticulously creates fully functional code.  
                                Experienced in communicating clearly with others, both technical and non-technical team members and promoting drive towards end-user needs.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;