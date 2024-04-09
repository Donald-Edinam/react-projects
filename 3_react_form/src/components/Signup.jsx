import React from 'react'
import { useRef, useState, useEffect } from 'react'
import EyeIcon from '@heroicons/react'


const USER_REGEX = /^[a-zA-Z0-9]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/

const Signup = () => {

    // Error checking
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        userFocus.current.focus()
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);
    }, [])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');

    }, [user, pwd, matchPwd]);
  return (

   

    <section>
        // Error handling
      <p>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
            {errMsg}
        </p>
      </p>
      <h1>Register</h1>
      <form action="" method="post">
        <label htmlFor="username">Username: </label>
        <input type="text"
        id='username'
        ref={userRef}
        autoComplete='off'
        onChange={(e) => setUser(e.target.value)}
        required
        aria-invalid={validUser ? "false" : "true"}
        aria-describedby='uidnote'
        onFocus={() => setUser.focus(true)}
        onBlur={() => setUserFocus(false)}
        />
        <p id='uidnote'
        className={userFocus && user && !validUser ? "instructions" : "offscreen"}
        >
            <EyeIcon />`
        </p>
      </form>
    </section>
  )
}



export default Signup
