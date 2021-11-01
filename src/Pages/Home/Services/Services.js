import './Services.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);
    return (
        <div className="container">

            <div className="text-center my-5">
                <h1 className="text-primary">Countries You Can Go For Tour</h1>
                <p>Chose The Place You Wanna Go And We will Take You There </p>
            </div>

            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    countries.map(country => <Service
                        key={country._id}
                        country={country}
                    >

                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;