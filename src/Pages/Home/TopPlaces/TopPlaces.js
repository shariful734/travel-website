import './TopPlaces.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TopPlaces = () => {
    return (
        <div className="my-5 mx-5">
            <h2 className="text-primary">Top Destination</h2>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col>
                    <Card className="topPlace1-card">

                        <div className="card-detail">
                            <Card.Body>
                                <Card.Title className="fs-2">Brazil</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Cristo Redentor and Corcovado, Rio de Janeiro</li>
                                        <li>Iguaçu Falls</li>
                                        <li>Ipanema</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="topPlace2-card">

                        <div className="card-detail">
                            <Card.Body>
                                <Card.Title className="fs-2">Indonesia</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Bali</li>
                                        <li> Raja Ampat Islands</li>
                                        <li>Yogyakarta</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="topPlace3-card">

                        <div className="card-detail">
                            <Card.Body>
                                <Card.Title className="fs-2">Germany</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>The Black Forest</li>
                                        <li>Fairytale Castle: Neuschwanstein</li>
                                        <li>Munich's Marienplatz</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

            </Row>


        </div >
    );
};

export default TopPlaces;