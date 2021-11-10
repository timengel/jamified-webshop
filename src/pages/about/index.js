import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
      <div>
        Built with Next.js. Back to the {' '}<Link href='/'>
        <a>home page.</a>
      </Link>
      </div>
  );
};

export default About;
