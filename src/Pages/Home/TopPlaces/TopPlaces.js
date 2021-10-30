import './TopPlaces.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import topPlace1 from '../../../images/topPlace1.jpg';
import topPlace2 from '../../../images/topPlace2.jpg';
import topPlace3 from '../../../images/topPlace3.jpg';

const TopPlaces = () => {
    return (
        <div className="my-5 mx-5">
            <h2 className="text-primary">Top Destination</h2>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={topPlace1} />

                        <Card.Body>
                            <Card.Title className="fs-2">Brazil</Card.Title>
                            <Card.Text>
                                <h4>City : Rio de Janeiro</h4>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={topPlace2} />

                        <Card.Body>
                            <Card.Title className="fs-2">Indonesia</Card.Title>
                            <Card.Text>
                                <h4>City : Jakarat</h4>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={topPlace3} />

                        <Card.Body>
                            <Card.Title className="fs-2">Germany</Card.Title>
                            <Card.Text>
                                <h4>City : Berlin</h4>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>


        </div >
    );
};

export default TopPlaces;