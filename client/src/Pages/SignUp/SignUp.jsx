import './SignUp.css'
import React, { useState } from 'react';
import { login } from '../../utils/API';

const SignUp = () => {
  // State for handling user input
  const [userOrEmail, setuserOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitLogin = (e) => {
    e.preventDefault(); // prevents page from refreshing
    login({ userOrEmail, password });
  };

  return (
    <div id='bottomSection2'> 
        <div className='holder2'> 
          <div id='formHolder2' className='innerDivs'>
          <h2 id='test2'>Get Started Now</h2>
          <form onSubmit={submitLogin}>
            <div>
              <label htmlFor="userOrEmail">Username:</label>
              <input
                className='loginInput'
                type="text"
                // have an expression to determine if they are using a userOrEmail
                // or an email
                // then, set id to the according one?
                value={userOrEmail}
                onChange={(e) => setuserOrEmail(e.target.value)}
                required
              /> 
            </div>
            <div>
              <label htmlFor="userOrEmail2">Email:</label>
              <input
                className='loginInput'
                type="text"
                // have an expression to determine if they are using a userOrEmail
                // or an email
                // then, set id to the according one?
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label  htmlFor="password">Password:</label>
              <input
                type="password"
                className='loginInput'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label  htmlFor="password">Confirm Password:</label>
              <input
                type="password"
                className='loginInputConfirm'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                // TODO: CHANGE THE OnChange function
              />
            </div>
            <div>
              <button id='signUpButton' type="submit">Sign Up</button>

              <p id='alreadyHaveAnAccount'>Already have an account? <a href='/Login'>Sign In</a></p>
            </div>
          </form>
          </div> 
          <div id='rightImage2' className='innerDivs'>
            <img src="/full.png" alt="SAVY logo" id='logo' />
          </div>
        </div>
    </div>

  );
};

export default SignUp;