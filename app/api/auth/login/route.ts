export async function POST(request: Request) {
  
  const data = await request.body?.getReader().read().then((data) => {
    return JSON.parse(new TextDecoder().decode(data.value));
  });

  console.log(data);
  return new Response('Hello, Next.js!');
}


