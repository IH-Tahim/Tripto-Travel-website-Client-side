import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { orderId } = useParams();
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const [orderDetails, setOrderDetails] = useState({});
    useEffect(() => {
        fetch(`https://pure-beach-90599.herokuapp.com/placeorder/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setOrderDetails(data)
            })
    }, [])




    const onSubmit = data => {
        orderDetails.email = user.email;
        orderDetails.userName = data?.name;
        orderDetails.number = data.address;


        const { _id, ...rest } = orderDetails;

        fetch("https://pure-beach-90599.herokuapp.com/placeorder", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Placed Order Successfully");
                    history.push("/myorders");
                }
            })
    };




    return (
        <div>
            <Container>
                <Row>
                    <Col md={7}>
                        <h4 className="text-center">Product Info</h4>
                        <hr />
                        <img src={orderDetails.img} alt="" height="300px" width="75%" className="rounded " />
                        <h4>{orderDetails.title}</h4>

                        <h6>Total People: {orderDetails.people}</h6>
                        <h6>Duration: {orderDetails.dayCount}D / {orderDetails.nightCount}N</h6>

                        <h5>Total Cost: ${orderDetails.price}</h5>
                    </Col>

                    <Col md={5}>
                        <h4 className="text-center">User Info</h4>
                        <hr />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <fieldset disabled>
                                    <input className="form-control" type="text" value={user.email} {...register("email", { required: true })} />
                                </fieldset>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" value={user.displayName}  {...register("name", { required: true })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Your Phone Number" {...register("number", { required: true })} />
                            </Form.Group>
                            <input type="submit" value="Place Order" className="btn btn_primary mb-4" />

                        </form>
                    </Col>
                </Row>





                {/* <Row className="text-center">
                    <h2 className="my-3">Confirm Your Order</h2>
                    <p>User Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>Tour Title: {orderDetails.title}</p>
                    <p>Total People: {orderDetails.people}</p>
                    <p>Location: {orderDetails.location}</p>
                    <h5>Total Cost: {orderDetails.price}</h5>
                    <div>
                        <Button as={Link} to="/myOrders" className="btn btn_primary mb-4" onClick={handelPlaceOrder}>Place Order</Button>
                    </div>

                </Row> */}
            </Container>
        </div>
    );
};

export default PlaceOrder;