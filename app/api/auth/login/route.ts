import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import  executeQuery from '../../../../utils/executeQuery';

export async function POST(request: Request) {
  
  const { email, password } = await request.body?.getReader().read().then((data) => {
    return JSON.parse(new TextDecoder().decode(data.value));
  });

  // Must check with the DB if the email and password are already registered
  
  const results: any = await executeQuery({
    query: `SELECT password FROM evtybqup_southclientes.clients where email = '${email}'`,
  });

  if(results === undefined || results.length === 0) {
    return new Response('Login Failed: Invalid email or password.', { status: 401 });
  }

  if(password === results[0].password) {
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // token valid for 7 days
      email: email
    }, process.env.TOKEN_SECRET)

    const serialized = serialize(process.env.TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
     })
    const respone = new Response('Login Success');
    respone.headers.set('Set-Cookie', serialized);
    return respone;
  }
  return new Response('Login Failed: Invalid email or password.', { status: 401 });
}


