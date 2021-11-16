import {NextResponse} from 'next/server';
import {useRouter} from 'next/router';

export function middleware(req) {
  const router = useRouter();
  console.log(router.query);

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    if (user === 'admin' && pwd === 'pw') {
      return NextResponse.next();
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// return NextResponse.redirect(
//     `/products`
// );