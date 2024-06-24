import React, {useState} from 'react'
import FormInput from './FormInput'
// import { useRef } from 'react'

const Signup = () => {

    // const usernameRef = useRef();

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // const [errorMessage, setErrorMessage] = useState('')

    const inputs = [
        {
            id: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMesssage: 'Username should be at least 6 characters long without any special characters',
            label: 'Username',
            pattern: '^[a-zA-Z0-9]{6,18}$',
            required: true,
        },
        {
            id: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMesssage: 'Please enter a valid email',
            pattern: "",
            label: 'Email',
        },
        {
            id: 'password',
            type: 'password',
            placeholder: 'Password',
            pattern: '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$',
            errorMesssage: 'Password should be at least 8 characters long and contain at least one number and one special character ',
            label: 'Password',
        },
        {
            id: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            pattern: userInfo.password,
            errorMesssage: 'Passwords do not match',
            label: 'Confirm Password',
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
        fetch('http://localhost:4000/api/v1/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .catch(err => console.log(err)) 

    }

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    console.log(userInfo)

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 className='text-center font-bold text-2xl'>Sign Up Form</h1>
        {
            inputs.map((input, index) => {
                return (
                    <FormInput 
                    key={index} 
                    id={input.id} 
                    label={input.label} 
                    onChange={onChange} u
                    serInfoValue={userInfo[input.id]} 
                    errorMessage={input.errorMesssage} 
                    placeholder={input.placeholder} 
                    pattern={input.pattern}
                    />
                )
                
            })
        }
        <button type='submit' className='btn px-10 py-2 mx-10 my-3 w-48 text-center bg-black text-white rounded-lg'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
