import React from 'react';
import {SignIn} from '@clerk/nextjs';
import {signInContainer} from './SignInContainer.module.scss'

const SignInContainer = () => {
  return (
      <div className={signInContainer}>
        <SignIn path='/sign-in' routing='path'/>
      </div>
  );
};

export default SignInContainer;
