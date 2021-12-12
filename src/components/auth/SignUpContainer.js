import React from 'react';
import {SignUp} from '@clerk/nextjs';
import {signUpContainer} from './SignUpContainer.module.scss'

const SignUpContainer = () => {
  return (
      <div className={signUpContainer}>
        <SignUp path='/sign-up' routing='path'/>
      </div>
  );
};

export default SignUpContainer;
