import React from 'react';
import {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {loginFormContainer} from './LoginForm.module.scss';
import cookieCutter from 'cookie-cutter';
import {SignJWT} from 'jose';
import {nanoid} from 'nanoid';
import {serverRuntimeConfig} from '../../../next.config';
import {USER_TOKEN} from '../../../lib/constants';

const LoginForm = () => {

  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const adminUser = {
    name: 'admin',
    password: 'pw',
  };

  const Login = (details) => {
    console.log(details);

    if (details.name === adminUser.name && details.password
        === adminUser.password) {
      setUsername(details.name);
      setIsAuthenticated(true);

      const token = serverRuntimeConfig.dummyTokenValue;

      // Set cookie
      cookieCutter.set(USER_TOKEN, token);
      console.log('Logged in!');
    } else {
      setError('Details do not match!');
      console.log('Details do not match!');
    }
  };

  const Logout = () => {
    setUsername('');
    setIsAuthenticated(false);

    // Delete cookie
    cookieCutter.set(USER_TOKEN, '', {expires: new Date(0)});
    console.log('Logged out!');
  };

  const validateForm = () => {
    return true;
    // return details.name.length > 0 && details.password.length > 0;
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Add validation logic here

    setUsername(enteredName);
    Login({name: enteredName, password: enteredPassword});
  };

  return (
      <div className={loginFormContainer}>
        {
          (isAuthenticated) ? (
              <div>
                <h2>Welcome, <span>{username}</span>!</h2>
                <button onClick={Logout}>Logout</button>
              </div>
          ) : (
              <div>
                <h2>Login</h2>
                {
                  (error !== '') ? (
                      <div>{error}</div>
                  ) : (
                      <div>Please provide your credentials:</div>
                  )
                }
                <form onSubmit={loginSubmitHandler}>
                  <input type='text'
                         name='name'
                         required
                         ref={nameInputRef}/><br/>
                  <input type='password'
                         name='password'
                         required
                         ref={passwordInputRef}/><br/>
                  <input type='submit'
                         value='Login'
                         disabled={!validateForm()}/><br/>
                </form>
              </div>
          )
        }
      </div>
  );
};
export default LoginForm;
