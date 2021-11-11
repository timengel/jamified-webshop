import React from 'react';
import {loginContainer} from './Login.module.scss';

const Login = () => {
  return (
      <div className={loginContainer}>
        <button>
          CUSTOMER
        </button>
        <button>
          ADMIN
        </button>
      </div>
  );
};

export default Login;
