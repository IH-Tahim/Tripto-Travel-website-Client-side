import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Services = () => {

    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://pure-beach-90599.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data);

            })
    }, []);
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {
                        tours.map((tour, index) => <Col className="mb-3" key={tour._id} >
                            <Card className="position-relative h-100">
                                <Card.Img variant="top" src={tour.img} height="300px" />
                                <div className="package-price position-absolute">
                                    <h6>
                                        <span>${tour.price} </span> / per person
                                    </h6>
                                </div>
                                <Card.Body>
                                    <div className="package-meta text-center">
                                        <ul>
                                            <li>
                                                <span><FontAwesomeIcon icon={faClock} /> </span> {tour.dayCount}D/{tour.nightCount}N
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faUserFriends} /> </span> People: {tour.people}
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> </span> {tour.location}
                                            </li>
                                        </ul>
                                    </div>
                                    <Card.Title>{tour.title}</Card.Title>
                                    <Card.Text>
                                        {tour.description}
                                    </Card.Text>
                                </Card.Body>
                                <Button className="card-btn" as={Link} to={`/placeorder/${tour._id}`} >Book Now</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;