import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Blog = ({ detail }) => {
    const { date, details, title, img, name } = detail;
    return (
        <Col md={6} className="h-100">
            <Card>
                <Row className="rounded height_custom">
                    <Col md={5}>
                        <img src={img} alt="" className="w-100" height="100%" />
                    </Col>
                    <Col md={7}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Published By {name} <br />on {date}</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>


        </Col>
    );
};

export default Blog;