import React from 'react';
import {ClerkLoaded} from '@clerk/nextjs';
import LatencyTester from '../../components/auth/LatencyTester';

const About = () => {

  return (
      <ClerkLoaded>
        <LatencyTester/>
      </ClerkLoaded>
  );
};

export default About;
