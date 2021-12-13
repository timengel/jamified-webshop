// import {NextResponse} from 'next/server';
//
// import {withSession} from '@clerk/nextjs/edge';
// import {isAuthenticated} from '../../../lib/auth';
//
// const handler = async (req) => {
//   const jwt = require('@tsndr/cloudflare-worker-jwt')
//
//   let isValid = false;
//   try {
//     if (isAuthenticated(req)) {
//       const sessionToken = await jwt.sign({}, process.env.CLERK_JWT_KEY);
//       isValid = await jwt.verify(sessionToken, process.env.CLERK_JWT_KEY); // isValid = await jwt.verify(req.cookies.__session, process.env.CLERK_JWT_KEY);
//
//       console.log('##### RESULT: cart/_middleware: jwt.verify');
//       console.log('Session Token valid?: ' + isValid);
//     }
//   } catch (e) {
//     console.log('##### ERROR: cart/_middleware: jwt.verify');
//     console.log(e);
//     isValid = false;
//   }
//
//   if (!isValid) {
//     return NextResponse.redirect('/sign-in');
//   }
//   return NextResponse.next();
// }
//
// export default withSession(handler);