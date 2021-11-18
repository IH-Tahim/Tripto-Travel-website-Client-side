import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        fetch(`https://pure-beach-90599.herokuapp.com/myorders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsChanged(false);
            })
    }, [isChanged]);

    const handelCancelOrder = id => {

        const proceed = window.confirm('Are You Sure You Want To Cancel This Order?');
        if (proceed) {
            fetch(`https://pure-beach-90599.herokuapp.com/myorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully');
                        setIsChanged(true);
                    }
                })
        }
    }

    return (
        <div>
            <Container>
                <h2 className="text-center my-3">My orders:{myOrders.length}</h2>
                <Row xs={1} md={3} className="g-3">
                    {
                        myOrders.map(order => <Col className="mb-3" key={order._id} >
                            <Card className="position-relative h-100">
                                <Card.Img variant="top" src={order.img} height="300px" />
                                <div className="package-price position-absolute">
                                    <h6>
                                        <span>${order.price} </span> / per person
                                    </h6>
                                </div>
                                <Card.Body>
                                    <div className="package-meta text-center">
                                        <ul>
                                            <li>
                                                <span><FontAwesomeIcon icon={faClock} /> </span> {order.dayCount}D/{order.nightCount}N
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faUserFriends} /> </span> People: {order.people}
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> </span> {order.location}
                                            </li>
                                        </ul>
                                    </div>
                                    <Card.Title>{order.title}</Card.Title>
                                    <Card.Text>
                                        {order.description}
                                    </Card.Text>
                                </Card.Body>
                                <Button className="card-btn" onClick={() => { handelCancelOrder(order._id) }}>Cancel Order</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default MyOrders;