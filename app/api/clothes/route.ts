import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {

  
  try
  {
    const cookieStore = cookies();
    const token = cookieStore.get('my-token-name');
    const authToken = token?.value;
    jwt.verify(authToken, 'secret')

    return new Response(JSON.stringify({ clothes: 'cloth123' }), {
      headers: {
        'content-type': 'application/json'
     }
    });
  }
  catch (e)
  {
    return new Response('Unauthorized', { status: 401 });
  }

}