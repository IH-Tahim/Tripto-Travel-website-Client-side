import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faParachuteBox, faSkiingNordic, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

const CategoryBanner = () => {
    return (
        <div className="category-section">
            <Container>
                <Row className="py-3">
                    <Col md={7} className="my-auto">
                        <h4 className="color_primary m-0 display_font">Are you ready to travel?</h4>
                        <h1 className="text-white">Tripto is a World Leading Online Tour Booking Platform</h1>
                    </Col>
                    <Col md={5}>
                        <Row className="g-4">
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="color_primary"><FontAwesomeIcon icon={faRoute} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Road<br />Tours</h4>
                                </div>

                            </Col>
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="color_primary"><FontAwesomeIcon icon={faParachuteBox} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Paragliding<br />Tours</h4>
                                </div>

                            </Col>
                        </Row>
                        <Row className="g-4">
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="color_primary"><FontAwesomeIcon icon={faSkiingNordic} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Winter<br />Tours</h4>
                                </div>

                            </Col>
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="color_primary"><FontAwesomeIcon icon={faUmbrellaBeach} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Beach<br />Tours</h4>
                                </div>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryBanner;