import React from 'react';
import Link from 'next/link';
import {SignedIn, useClerk} from '@clerk/nextjs';

const About = () => {
  return (
      <SignedIn>
        Built with Next.js. Back to the {' '}<Link href='/'>
        <a>home page.</a>
      </Link>
        <RequestButton path='/api/auth'/>
      </SignedIn>
  );
};

export const RequestButton = ({
  path,
}) => {
  const {session, setSession} = useClerk();

  let test = 'TEST';

  const makeRequest = async () => {
    const start = new Date().getTime();
    const response = await fetch(path, {
      session: session,
      method: 'GET',
    });

    console.log(session);
    console.log(response);

    if (response.status === 200) {
      const responseTime = new Date().getTime() - start;
      const data = await response.json();
      console.log(responseTime);
      console.log('#############################');
      console.log(data);
      test = 'TEST WORKED';

    } else if (response.status === 403) {
      await setSession(null);
    }
  };

  return (
      <button
          onClick={makeRequest}
          type='button'
      >
        {test}
      </button>
  );
}

export default About;
