import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Service.css';

const Service = ({ country }) => {

    const { name, description, img, _id } = country;

    return (
        <div>
            <Col>
                <Card className="card-body">
                    <Card.Img className="country-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text >
                            {description.slice(0, 120)}
                        </Card.Text>
                        <NavLink to={`/booking/${_id}`} > <Button variant="success">Place Booking</Button> </NavLink>
                    </Card.Body>
                </Card>

            </Col>
        </div>
    );
};

export default Service;