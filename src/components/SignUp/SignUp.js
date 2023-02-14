import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('password should be 6 characters or more ')
            return;
        }

        if (password !== confirm) {
            setError('Your password did not matched')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log('create new user', user)
            })
            .catch(error => {
                console.error(error)
            })
        console.log(email, password)

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />

            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link> </p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;