import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Card, Col, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {



    const { bookingId } = useParams();

    const [country, setCountry] = useState({});

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://nameless-thicket-79075.herokuapp.com/countries/${bookingId}`)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);

    // console.log(Country);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://nameless-thicket-79075.herokuapp.com/userdata', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('book successfully');
                    reset();
                }
            })


    };
    return (
        <div className="my-5">
            <Row xs={2} md={2} xl={2} className="g-4">

                <div className="add-country text-center  my-5">

                    <h1 className="my-4">Place The Booking  </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user.displayName} {...register("customerName")} />
                        <input value={user.email} {...register("email",)} />
                        <input placeholder="countryName" {...register("countryName",)} />
                        <input placeholder="PhoneNo"  {...register("phoneNo:", { required: true, maxLength: 20 })} />
                        <textarea  {...register("Address",)} placeholder="address" />


                        <button className="bg-success" type="submit" >  Book Now</button>
                    </form>

                </div>
                <div>
                    <Col>
                        <Card className="card-body">
                            <Card.Img className="country-img" variant="top" src={country.img} />
                            <Card.Body>
                                <Card.Title>{country.name}</Card.Title>
                                <Card.Text >
                                    {country.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                </div>
            </Row>
        </div>
    );
};

export default Booking;