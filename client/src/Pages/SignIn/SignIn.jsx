import './SignIn.css'
import React, { useState, useContext } from 'react';
import { login } from '../../utils/API';

const Login = () => {
  // State for handling user input
  const [userOrEmail, setuserOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault(); // prevents page from refreshing
    const success = await login({ userOrEmail, password });
    if (success) {
      location.assign('/');
    }
  };

  return (
    <div id='bottomSection'> 
        <div className='holder'> 
          <div id='formHolder' className='innerDivs'>
          <h2 id='test'>Welcome Back</h2>
          <form onSubmit={submitLogin}>
            <div>
              <label htmlFor="userOrEmail">Username or Email:</label>
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
              <button id='signInButton' type="submit">Sign In</button>
              
              <p id='alreadyHaveAnAccount'>Don't have an account? <a href='/SignUp'>Sign Up</a></p>
            </div>
          </form>
          </div> 
          <div id='rightImage' className='innerDivs'>
            <img src="/full.png" alt="SAVY logo" id='logo' />
          </div>
        </div>
    </div>

  );
};

export default Login;