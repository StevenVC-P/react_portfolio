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
                            <p>I am a Full Stack Developer after a career swtich from auditing.  While I still enjoy thinking and planning around risks, I've found a creative spark in building. I am currently enrolled at the University of Minnesota Bootcamp.
                                From Coon Rapids, I am an avid gamer with popular titles World of Warcraft and Minecraft and have begun learning how I can use programming skill to better both my and friends experince in these games.
                            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;