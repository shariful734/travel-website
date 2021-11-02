import React from 'react';

import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    console.log(location.state?.from);

    const redirecting_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirecting_url)
            })
    }

    return (
        <div className="text-center mt-5 vh-100">
            <h1 className="my-3">Please LogIn</h1>
            <button className="btn-warning my-3" onClick={handleGoogleLogin}>LogIn With Google</button>


        </div>
    );
};

export default LogIn;