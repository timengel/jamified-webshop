import {withSession} from '@clerk/nextjs/edge';
import {NextResponse} from 'next/server';
import {isAuthenticated, isAuthorized} from '../../../lib/auth';
import {PUBLIC_PAGES} from '../../../lib/constants';

// Must return a response object
const handler = async (req) => {

  console.log('########## request');
  console.log(req);
  console.log('########## request.session');
  console.log(req.session);

  if (PUBLIC_PAGES.includes(req.url)) {
    return NextResponse.next();
  }

  const startTime = new Date().getTime();

  if (isAuthenticated(req)) {
    if (isAuthorized(req)) {
      const endTime = new Date().getTime();

      console.log('########## auth time');
      console.log((endTime - startTime) + 'ms');

      return NextResponse.next();
    }
    return NextResponse.redirect('/404');
  }
  return NextResponse.redirect('/sign-in');
};

export default withSession(handler);