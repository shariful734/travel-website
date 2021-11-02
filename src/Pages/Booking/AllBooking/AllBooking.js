import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AllBooking = () => {

    const [allBooking, setAllBooking] = useState([]);
    useEffect(() => {
        fetch("https://nameless-thicket-79075.herokuapp.com/userdata")
            .then(res => res.json())
            .then(data => setAllBooking(data));
    }, []);
    return (
        <div>
            {
                allBooking.map(oneBooking => <div>

                    <Row xs={1} md={2} xl={3} className="g-4">
                        <Col>
                            <Card className="card-body">

                                <Card.Body>
                                    <Card.Title>{oneBooking.customerName
                                    }</Card.Title>

                                    <Card.Text >
                                        <p>email:{oneBooking.email}</p>
                                        <p>country:{oneBooking.countryName
                                        }</p>
                                        <p>phone no:{oneBooking.phoneNo}</p>
                                        <p>Address:{oneBooking.Address}</p>

                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>)
            }

        </div>
    );
};

export default AllBooking;