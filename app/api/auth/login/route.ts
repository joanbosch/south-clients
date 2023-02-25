export async function POST(request: Request) {
  const {email, password} = request.body
  console.log('email', email)
  console.log('password', password)
  return new Response('Hello, Next.js!');
}

