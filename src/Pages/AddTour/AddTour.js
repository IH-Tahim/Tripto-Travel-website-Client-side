import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddTour = () => {

    // const [serviceData, setServiceData] = useState({});

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch("https://pure-beach-90599.herokuapp.com/addtour", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

        reset();

        console.log(data);
    };

    return (
        <div>
            <h2 className="text-center mt-3">Add Tour</h2>
            <Container>
                <Row>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="mb-3">
                            <label className="form-label" >Tour Title</label>
                            <input type="text" className="form-control" placeholder="Title" {...register("title", { required: true })} />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label className="form-label" >Tour Short Description</label>
                            <input type="text" className="form-control" placeholder="Description Max-100words" {...register("description", { required: true, max: 100 })} />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label className="form-label" >Image URL</label>
                            <input type="url" className="form-control" placeholder="Image URL" {...register("img", { required: true })} />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>

                        <Row>
                            <Col md={6}>
                                <div class="mb-3">
                                    <label className="form-label" >Tour Price</label>
                                    <input type="number" className="form-control" placeholder="Price" {...register("price", { required: true })} />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="mb-3">
                                    <label className="form-label" >Maximum People</label>
                                    <input type="number" className="form-control" placeholder="Total Peoples" {...register("people", { required: true })} />
                                    {errors.people && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={6}>
                                <div class="mb-3">
                                    <label className="form-label" >Day Count</label>
                                    <input type="number" className="form-control" placeholder="Day Count" {...register("dayCount", { required: true })} />
                                    {errors.dayCount && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="mb-3">
                                    <label className="form-label" >Night Count</label>
                                    <input type="number" className="form-control" placeholder="Night Count" {...register("nightCount", { required: true })} />
                                    {errors.nightCount && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                        </Row>

                        <div class="mb-3">
                            <label className="form-label" >Tour Country Location</label>
                            <input type="text" className="form-control" placeholder="Location" {...register("location", { required: true })} />
                            {errors.location && <span className="text-danger">This field is required</span>}
                        </div>

                        <input type="submit" className="btn btn_primary mb-3" value="Add Tour" />
                    </form>
                </Row>
            </Container>


        </div>
    );
};

export default AddTour;