import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImg from '../../images/hiking-animate.svg'

const Login = () => {

    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';

    const handelGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirectUrl);
            })
    }

    return (
        <div>
            <div className="w-50 mx-auto text-center">
                <img src={loginImg} className="w-50 " alt="" />
                <h3 className="mb-3">Login To Join With Us</h3>
                <button onClick={handelGoogleLogin} className="btn btn_primary mb-3">Login With Google</button>
            </div>

        </div>
    );
};

export default Login;