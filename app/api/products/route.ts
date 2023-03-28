import executeQuery from '../../../utils/executeQuery'

export async function GET (request: Request) {
  try {
    const results: any = await executeQuery({
      query: "SELECT id as 'id', name as 'name', price as 'price', img1 as 'img1', img2 as 'img2', img3 as 'img3', img4 as 'img4' FROM evtybqup_southclientes.products;"
    })

    const respone = new Response(JSON.stringify(results))
    respone.headers.set('Content-Type', 'application/json')
    return respone
  } catch (e) {
    return new Response('Unauthorized', { status: 401 })
  }
}
