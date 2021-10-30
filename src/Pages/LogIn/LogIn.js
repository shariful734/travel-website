import React from 'react';

import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please LogIn</h1>
            <button onClick={signInUsingGoogle}>Google</button>


        </div>
    );
};

export default LogIn;