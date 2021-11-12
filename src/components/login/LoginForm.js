import React from 'react';
import {useState} from 'react';

const LoginForm = () => {

  const [details, setDetails] = useState({name: '', password: ''});
  const [user, setUser] = useState({name: '', password: ''});
  const [error, setError] = useState('');

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
    console.log('Logged out!');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
      <div>
        {
          (user.name !== '') ? (
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
                  <input type='submit' value='Login'/><br/>
                </form>
              </div>
          )
        }
      </div>
  );
};
export default LoginForm;
