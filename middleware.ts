import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { jwtVerify } from 'jose'

export async function middleware (request: NextRequest) {
  console.log('middleware')
  const authToken = request.cookies.get(process.env.TOKEN_NAME || 'prodSouthUserToken')?.value

  if (authToken === undefined) {
    console.log('authToken undefined')
    return NextResponse.redirect(new URL('/es/login', request.url))
  }

  // try {
  //   await jwtVerify(authToken, new TextEncoder().encode(process.env.TOKEN_SECRET || ''))
  //   return NextResponse.next()
  // } catch (e) {
  //   return NextResponse.redirect(new URL('/es/login', request.url))
  // }
}

export const config = {
  matcher: ['/dashboard', '/:path*/dashboard']
}
