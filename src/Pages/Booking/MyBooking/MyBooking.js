import React, { useEffect, useState } from 'react';

const MyBooking = () => {

    const [myBooking, setMyBooking] = useState([]);

    useEffect('https://nameless-thicket-79075.herokuapp.com/userdata')
        .then(res => res.json())
        .then(data => setMyBooking(data))
    return (
        <div>

            {
                myBooking.map(Booking => <div>
                    <h3>{Booking.CountryName}</h3>
                    <h3>{Booking.phoneNo}</h3>
                    <h3>{Booking.description}</h3>
                </div>)
            }

        </div>
    );
};

export default MyBooking;