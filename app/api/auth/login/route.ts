import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(request: Request) {
  
  const { email, password } = await request.body?.getReader().read().then((data) => {
    return JSON.parse(new TextDecoder().decode(data.value));
  });

  // Must check with the DB if the email and password are already registered
  if(email === 'admin@local.local' && password === 'admin') {
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // token valid for 7 days
      email: email
    }, 'secret')

    const serialized = serialize('my-token-name', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
     })
    const respone = new Response('Login Success');
    respone.headers.set('Set-Cookie', serialized);
    return respone;
  }
  return new Response('Login Failed: Invalid email or password.', { status: 401 });
}


