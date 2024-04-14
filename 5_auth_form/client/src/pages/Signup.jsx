import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., sending data to a server
    console.log('Form submitted with values:', { name, email, password });
    // You can also reset the form fields here if needed
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2><center>Register</center></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              className='form-control rounded-0'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              className='form-control rounded-0'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0" style={{ backgroundColor: "blue" }}>
            Register
          </button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
