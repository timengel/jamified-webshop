import {NextResponse} from 'next/server';

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    console.log('City: ' + req.geo.city);
    console.log('Region: ' + req.geo.region);
    console.log('Country: ' + req.geo.country);
    console.log('Long: ' + req.geo.latitude);
    console.log('Lat: ' + req.geo.longitude);

    const username = 'admin';
    const password = 'pw';
    if (user !== username && pwd !== password) {
      return new Response('Auth required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  }
  return NextResponse.next(); // Continue middleware chain
}