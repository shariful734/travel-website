import './NotFound.css';
import React from 'react';
import notAvailable from '../../images/notFound.png'

const NotFound = () => {
    return (
        <div>
            <img className="notFound" src={notAvailable} alt="" />

        </div>
    );
};

export default NotFound;