import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css'

const Login = () => {
    // Use Context Api
    const {userLogin} = useContext(AuthContext);
    // Navigate form login page to a speasic page
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Login form validation 
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Login with firebase
        userLogin(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/register'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;