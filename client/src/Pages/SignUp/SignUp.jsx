import './SignUp.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { signup } from '../../utils/API';

const SignUp = () => {
  // State for handling user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault(); // prevents page from refreshing
    if (password != confirmPassword) {
      alert("Confirmed Password does not match Password");
    } else {
      const success = await signup({ username, email, password });
      if (success) {
        location.assign('/');
      }
    }

  };
 
  return (
    <div id='bottomSection2'> 
        <div className='holder2'> 
          <div id='formHolder2' className='innerDivs'>
          <h2 id='test2'>Get Started Now</h2>
          <form onSubmit={submitLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                className='loginInput'
                type="text"
                // have an expression to determine if they are using a username
                // or an email
                // then, set id to the according one?
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /> 
            </div>
            <div>
              <label htmlFor="username2">Email:</label>
              <input
                className='loginInput'
                type="text"
                // have an expression to determine if they are using a username
                // or an email
                // then, set id to the according one?
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </div>
            <div>
              <button id='signUpButton' type="submit">Sign Up</button>

              <p id='alreadyHaveAnAccount'>Already have an account? <Link to='/Login'>Sign In</Link></p>
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