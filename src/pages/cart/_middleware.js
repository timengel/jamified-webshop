import {withSession} from '@clerk/nextjs/edge';
import {NextResponse} from 'next/server';
import {isAuthenticated} from '../../../lib/auth';

// Must return a response object
const handler = async (req) => {

  const startTime = new Date().getTime();

  console.log('############# request');
  console.log(req);
  console.log('############# request.session');
  console.log(req.session);

  const endTime = new Date().getTime();

  if (!isAuthenticated(req)) {
    return NextResponse.redirect('/user');
  }
  console.log('############# auth time');
  console.log(endTime - startTime);

  return NextResponse.next();
};

export default withSession(handler);