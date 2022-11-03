import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Register = () => {
    const [error, setError] = useState(null);

    // Use the Context 
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError("Please provide more than 6 password");
            return;
        }
        if (password !== confirm) {
            setError("Password didn't match");
            return;
        }

        // Create user with email and password 
        createUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            form.reset();
        })
        .catch((error) => {
            setError('Please provide all information');
        })
    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p>New to ema john <Link to='/login'>Login</Link></p>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Register;