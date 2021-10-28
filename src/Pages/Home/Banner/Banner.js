import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner1 from '../../../images/Banner-1.jpg'
import Banner2 from '../../../images/Banner-2.jpg'
import Banner3 from '../../../images/Banner-3.jpg'

const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="banner-text">Travel Around The Word And See The Beauty</h1>
                        <h3 className="banner-text">we will take you to the places you have never seen before</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="banner-text">Travel Around The Word And See The Beauty</h1>
                        <h3 className="banner-text">we will take you to the places you have never seen before</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="banner-text">Travel Around The Word And See The Beauty</h1>
                        <h3 className="banner-text">we will take you to the places you have never seen before</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;