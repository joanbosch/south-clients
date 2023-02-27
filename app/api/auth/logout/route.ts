import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { cookies } from 'next/headers'

export async function POST (request: Request) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(process.env.TOKEN_NAME || '')
    const authToken = token?.value

    if (authToken === undefined) {
      return new Response('No token', { status: 401 })
    }

    jwt.verify(authToken, process.env.TOKEN_SECRET || '')

    const serialized = serialize(process.env.TOKEN_NAME || '', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0, // disable cookie
      path: '/'
    })

    const respone = new Response('Login Success')
    respone.headers.set('Set-Cookie', serialized)
    return respone
  } catch (e) {
    return new Response('Unauthorized', { status: 401 })
  }
}
