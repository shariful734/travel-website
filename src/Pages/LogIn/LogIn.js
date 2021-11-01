import React from 'react';

import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="text-center mt-5 vh-100">
            <h1 className="my-3">Please LogIn</h1>
            <button className="btn-warning my-3" onClick={signInUsingGoogle}>LogIn With Google</button>


        </div>
    );
};

export default LogIn;