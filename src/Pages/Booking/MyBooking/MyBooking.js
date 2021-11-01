import React, { useEffect, useState } from 'react';

const MyBooking = () => {

    const [myBooking, setMyBooking] = useState([]);

    useEffect('http://localhost:8000/userdata')
        .then(res => res.json())
        .then(data => setMyBooking(data))
    return (
        <div>
            <h3>{myBooking.CountryName}</h3>
            <h3>{myBooking.phoneNo}</h3>
            <h3>{myBooking.description}</h3>
        </div>
    );
};

export default MyBooking;