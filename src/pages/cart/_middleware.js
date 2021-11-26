import {withSession} from '@clerk/nextjs/edge';
import {NextResponse} from 'next/server';

// Must return a response object
const handler = async (req) => {

  console.log('############# request');
  console.log(req);
  console.log('############# request.session');
  console.log(req.session);

  if (req.session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect('/');
  }
};

export default withSession(handler);