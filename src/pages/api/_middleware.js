import {NextResponse} from 'next/server';

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    const username = 'admin';
    const password = 'pw';
    if (user !== username && pwd !== password) {
      return response(
          'Auth required',
          401,
          {'WWW-Authenticate': 'Basic realm="Secure Area"',});
    }
  }
  return NextResponse.next(); // Continue middleware chain
}

const response = (body, status, headers) => {
  return new Response(body, {
    status: status,
    headers: headers,
  });
};