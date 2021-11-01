import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import TopPlaces from '../TopPlaces/TopPlaces';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TopPlaces></TopPlaces>
        </div>
    );
};

export default Home;