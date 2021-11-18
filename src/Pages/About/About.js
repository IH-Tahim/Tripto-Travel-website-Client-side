import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShortAbout from '../Shared/ShortAbout/ShortAbout';

const About = () => {
    return (
        <div>
            <h2 className="text-center">About Us</h2>
            <Container>
                <Row className="my-3">
                    <Col md={5}>
                        <img src="https://i.ibb.co/mDsv9PB/pexels-quang-nguyen-vinh-2132126.jpg" alt="" className="w-100" height="450px" />
                    </Col>
                    <Col md={7} className="my-auto">
                        <h4 className="color_primary mb-0 mt-4 display_font">Learn about us</h4>
                        <h2 className=" mb-3">Dare to Explore with Trioto Agency</h2>
                        <p>Tripto is a Professional Travel agency Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Travel agency , with a focus on dependability and travel services. We're working to turn our passion for Travel agency into a booming online website. We hope you enjoy our Travel agency as much as we enjoy offering them to you.</p>
                    </Col>
                </Row>
            </Container>
            <ShortAbout></ShortAbout>
        </div>
    );
};

// https://i.ibb.co/QQBpsxH/pexels-david-bartus-586687.jpg

export default About;