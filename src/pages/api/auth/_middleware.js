import {requireSession} from '@clerk/nextjs/edge';

// Must return a response object
const handler = async (req) => {

  console.log('############# request');
  console.log(req);
  console.log('############# request.session');
  console.log(req.session);

  return new Response(
      JSON.stringify({
        ...req.session,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
  );
};

export default requireSession(handler);