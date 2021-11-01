import './Footer.css';
import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer-container  text-center">
            <footer>


                <address>
                    <Row xs={2} md={2} xl={2} className="g-4">
                        <Col>
                            <h3 className="text-white pb-3">Phone Support</h3>

                            <h5><i className="fas fa-phone"></i> 0126183662</h5>
                            <h5>24 Hour A Day</h5>
                            <h5><i className="fas fa-map-marker-alt mt-2"></i> Sherpur Road, Nabiganj, Habiganj</h5>
                        </Col>

                        <Col>
                            <h3 className="text-white">Connect Us With</h3>
                            <h5><i className="far fa-envelope"></i> <a className="link" href="http://google.com"> Shoriful @gmail.com</a> </h5>

                            <h3>Social Media</h3>
                            <h5><i className="fab fa-facebook-square me-2"></i><i className="fab fa-instagram-square me-2"></i> <i className="fab fa-twitter-square"></i></h5>
                        </Col>

                    </Row>

                </address>


                <p>© 2021  All Rights Reserved  Terms of Use  and  Privacy Policy</p>



            </footer>
        </div>
    );
};

export default Footer;