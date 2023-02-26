import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  
  let authToken = request.cookies.get('my-token-name')?.value

  if(authToken === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try
  {
    await jwtVerify(authToken, new TextEncoder().encode('secret'))
    return NextResponse.next()
  }
  catch (e)
  {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/dashboard', '/:path*/dashboard']
}