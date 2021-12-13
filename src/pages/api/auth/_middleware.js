import {NextResponse} from 'next/server';

import {withSession} from '@clerk/nextjs/edge';
import {isAuthenticated} from '../../../../lib/auth';

const jsonResponse = (status, data) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
};

const handler = async (req) => {
  // const url = req.nextUrl

  console.log('############# request');
  console.log(req);
  console.log('############# request.session');
  console.log(req.session);
  console.log('############# request.url');
  console.log(req.url);
  console.log('############# request.headers');
  console.log(req.headers);
  console.log('############# request.cookies');
  console.log(req.cookies);

  const jwt = require('@tsndr/cloudflare-worker-jwt')

  let isValid = false;
  let sessionToken;
  try {
    let startTime;
    let endTime;
    if (isAuthenticated(req)) {
      sessionToken = await jwt.sign({}, process.env.CLERK_JWT_KEY);
      startTime = new Date().getTime();
      isValid = await jwt.verify(sessionToken, process.env.CLERK_JWT_KEY); // isValid = await jwt.verify(req.cookies.__session, process.env.CLERK_JWT_KEY);
      endTime = new Date().getTime();

      console.log('##### RESULT: /api/auth: jwt.verify');
      console.log('Session Token valid?: ' + isValid);
      console.log('##### DECODE: /api/auth: jwt.decode(sessionToken)');
      console.log(jwt.decode(sessionToken));
      console.log('##### TIME: api/auth/_middleware: Auth time');
      console.log(endTime - startTime);
    }
  } catch (e) {
    console.log('##### ERROR: /api/auth/_middleware: jwt.verify');
    console.log(e);
    isValid = false;
  }
  if (isValid) {
    return jsonResponse(200, {jwtID: sessionToken.jti});
  }
  return jsonResponse(500, {});
}

export default withSession(handler);