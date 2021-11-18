import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ShortAboutImg from "../../../images/about-one-img.png";

const ShortAbout = () => {
    return (
        <div>
            <Container>
                <Row className="my-3">
                    <Col md={6}>
                        <img src={ShortAboutImg} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className="my-auto ps-2">
                        <p className="display_font color_primary fs-4 m-0">Get to Know Us</p>
                        <h2>Plan Your Trip with Tripto</h2>
                        <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                        <h5><span className="color_primary"><FontAwesomeIcon icon={faCheckCircle} /></span> &ensp;Invest in your simply neighborhood</h5>
                        <h5><span className="color_primary"><FontAwesomeIcon icon={faCheckCircle} /></span> &ensp;Support people in free text extreme need</h5>
                        <h5><span className="color_primary"><FontAwesomeIcon icon={faCheckCircle} /></span> &ensp;Largest global industrial business community</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShortAbout;