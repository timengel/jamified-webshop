import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';

const LoginForm = () => {

  const [details, setDetails] = useState({name: '', password: ''});
  const [user, setUser] = useState({name: '', password: ''});
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem('isAuthenticated') && sessionStorage.getItem(
        'user_name')) {
      setIsAuthenticated(
          Boolean(sessionStorage.getItem('isAuthenticated')));
      setUser({name: sessionStorage.getItem('user_name'), password: ''});
    } else {
      sessionStorage.setItem('isAuthenticated', 'false');
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  useEffect(() => {
    sessionStorage.setItem('user_name', user.name);
  }, [user]);

  const adminUser = {
    name: 'admin',
    password: 'pw',
  };

  const Login = (details) => {
    console.log(details);

    if (details.name === adminUser.name && details.password
        === adminUser.password) {
      setUser({
        name: details.name,
        password: details.password,
      });
      setIsAuthenticated(true);
      console.log('Logged in!');
    } else {
      setError('Details do not match!');
      console.log('Details do not match!');
    }
  };

  const Logout = () => {
    setUser({
      name: '',
      password: '',
    });
    setIsAuthenticated(false);
    console.log('Logged out!');
  };

  const validateForm = () => {
    return details.name.length > 0 && details.password.length > 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
      <div>
        {
          (isAuthenticated) ? (
              <div>
                <h2>Welcome, <span>{user.name}</span>!</h2>
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
                <form onSubmit={submitHandler}>
                  <input type='text' name='name' value={details.name}
                         onChange={(e) => setDetails(
                             {...details, name: e.target.value})}/><br/>
                  <input type='password' name='password'
                         value={details.password}
                         onChange={(e) => setDetails(
                             {...details, password: e.target.value})}/><br/>
                  <input type='submit' value='Login'
                         disabled={!validateForm()}/><br/>
                </form>
              </div>
          )
        }
      </div>
  );
};
export default LoginForm;
