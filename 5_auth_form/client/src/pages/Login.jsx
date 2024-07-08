import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

    // Handle form input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const SIGN_UP_URL = "https://dummyjson.com/auth/login"

    function handlePostRequest() {
        fetch(SIGN_UP_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 30, // optional, defaults to 60
            })
        })
            .then(res => res.json())
            .then(console.log);

    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // axios.post(SIGN_UP_URL, {email, password})
        // .then(result => {
        //     console.log(result)
        //     if(result.data === "Success"){
        //         navigate("/home")
        //     }else{
        //         navigate("/register");
        //         alert("You are not registered for this service");
        //     }
        // })
        // .catch(err => (
        //     console.log(err)
        // ))
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-100">
                    <h2><center>Login</center></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Email'
                                autoComplete='off'
                                name='email'
                                className='form-control rounded-0'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                name='password'
                                className='form-control rounded-0'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0" style={{ backgroundColor: "Purple" }}>
                            Login
                        </button>
                    </form>
                    <p>Don't have an account?</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
