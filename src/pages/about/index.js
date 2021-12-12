import React from 'react';
import {SignedIn, SignedOut, useClerk} from '@clerk/nextjs';

const About = () => {
  return (
      <>
        <SignedIn>
          Test auth (signed IN): <RequestButton path='/api/auth'/>
        </SignedIn>
        <SignedOut>
          Test auth (signed OUT): <RequestButton path='/api/auth'/>
        </SignedOut>
      </>
  );
};

export const RequestButton = ({
  path,
}) => {
  const {session, setSession} = useClerk();

  const makeRequest = async () => {
    const start = new Date().getTime();
    const response = await fetch(path, {
      method: 'GET',
    });

    console.log('############# session');
    console.log(session);
    console.log('############# response');
    console.log(response);

    if (response.status === 200) {
      const responseTime = new Date().getTime() - start;
      const data = await response.json();
      console.log('############# response time');
      console.log(responseTime);
      console.log('############# data');
      console.log(data);

    } else if (response.status === 403) {
      await setSession(null);
    }
  };

  return (
      <button onClick={makeRequest}
              type='button'>Test Auth</button>
  );
}

export default About;
