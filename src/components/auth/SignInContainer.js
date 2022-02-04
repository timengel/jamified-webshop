import React from 'react';
import {signInContainer} from './SignInContainer.module.scss'

const SignInContainer = () => {
  return (
      <div className={signInContainer}>
        Not compatible with React 18@rc
        {/*<SignIn path='/sign-in' routing='path'/>*/}
      </div>
  );
};

export default SignInContainer;
