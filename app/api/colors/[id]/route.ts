import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import executeQuery from '../../../../utils/executeQuery'

export async function GET (request: Request, { params: { id } } : { params: { id: string } }) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(process.env.TOKEN_NAME || '')
    const authToken = token?.value

    if (authToken === undefined) {
      return new Response('No token', { status: 401 })
    }

    jwt.verify(authToken, process.env.TOKEN_SECRET || '')

    const results: any = await executeQuery({
      query: `SELECT id as 'id', name as 'name' FROM evtybqup_southclientes.colors ${id ? `WHERE id = ${id}` : ''}`
    })

    const respone = new Response(JSON.stringify(results[0]))
    respone.headers.set('Content-Type', 'application/json')
    return respone
  } catch (e) {
    return new Response('Unauthorized', { status: 401 })
  }
}
