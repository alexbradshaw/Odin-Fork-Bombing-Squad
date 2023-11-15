import './SignIn.css'
import defaultImage from '../../Images/default_image.png';
import SellerInfo from '../../Components/SingleItem/SellerInfo';
import React, { useState, useEffect } from 'react';
import { login } from '../../utils/API';

const Login = () => {
  // State for handling user input
  const [userOrEmail, setuserOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = (e) => {
    e.preventDefault(); // prevents page from refreshing
    login({ userOrEmail, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitLogin}>
        <div>
          <label htmlFor="userOrEmail">Username or Email:</label>
          <input
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;