import {withSession} from '@clerk/nextjs/edge';
import {NextResponse} from 'next/server';
import {isAuthenticated, isAuthorized} from '../../lib/auth';

const PUBLIC_PAGES = [
  '/',
  '/404',
  '/_next',
  // '/products',
  // '/products/[productSlug]',
  // '/categories/[categorySlug]',
  '/sign-in',
  '/sign-in/[[...index]]',
  '/sign-up',
  '/sign-up/[[...index]]',
  // '/user',
  // '/user/[[...index]]'
]

// Must return a response object
const handler = async (req) => {

  if (PUBLIC_PAGES.includes(req.url)) {
    return NextResponse.next();
  }
  console.log('########## request');
  console.log(req);
  console.log('########## request.session');
  console.log(req.session);

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