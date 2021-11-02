import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const MyBooking = ({ specificBooking }) => {
    // console.log(specificBooking)
    // const { user } = useAuth();


    // const { myBookingId } = useParams();
    // if (user.email == specificBooking.email) {
    //     specificBooking.email.toLowerCase().includes(user.email.toLowerCase())
    // }



    return (
        <div>




            {/* <h3>{specificBooking.name}</h3>
            <h3>{specificBooking.email}</h3>
            <h3>{specificBooking.CountryName}</h3>
            <h3>{specificBooking.phoneNo}</h3>
            <h3>{specificBooking.description}</h3> */}




        </div>
    );
};

export default MyBooking;