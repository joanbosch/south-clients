import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import executeQuery from '../../../utils/executeQuery'

export async function GET (request: Request) {
  try {
    // const cookieStore = cookies()
    // const token = cookieStore.get(process.env.TOKEN_NAME || '')
    // const authToken = token?.value

    // if (authToken === undefined) {
    //   return new Response('No token', { status: 401 })
    // }

    // jwt.verify(authToken, process.env.TOKEN_SECRET || '')

    const results: any = await executeQuery({
      query: 'SELECT * FROM evtybqup_southclientes.vclients_simple'
    })

    const respone = new Response(JSON.stringify(results))
    respone.headers.set('Content-Type', 'application/json')
    return respone
  } catch (e) {
    return new Response('Unauthorized', { status: 401 })
  }
}

export async function POST (request: NextRequest) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(process.env.TOKEN_NAME || '')
    const authToken = token?.value

    if (authToken === undefined) {
      return new Response('No token', { status: 401 })
    }

    // jwt.verify(authToken, process.env.TOKEN_SECRET || '')

    const {
      name, surname, phone, phoneOptional, email,
      adressName, adress, adressOptional, country, province, city, postalCode,
      businessName, NIF, copyData, adressBillment, adressBillmentOptional, phoneBillment, countryBillment, provinceBillment, cityBillment, postalCodeBillment
    } = await request.json()

    const userResults: any = await executeQuery({
      query: `INSERT INTO evtybqup_southclientes.users (name, surname, email) VALUES ("${name}", "${surname}", "${email}")`
    })

    const shipmentResults: any = await executeQuery({
      query: `INSERT INTO evtybqup_southclientes.shippment_adress (name, phone, phone_opt, adress, adress_opt, country, cp, city, province) VALUES ("¨${adressName}", "${phone}", "${phoneOptional}", "${adress}", "${adressOptional}", "${country}", "${postalCode}", "${city}", "${province}");`
    })

    let billmentResults: any
    if (copyData) {
      billmentResults = await executeQuery({
        query: `INSERT INTO evtybqup_southclientes.billment_adress (name, NIF, adress, adress_opt, phone, country, province, city, cp) VALUES ("${businessName}", "${NIF}", "${adress}", "${adressOptional}", "${phone}", "${country}", "${province}", "${city}", "${postalCode}")`
      })
    } else {
      billmentResults = await executeQuery({
        query: `INSERT INTO evtybqup_southclientes.billment_adress (name, NIF, adress, adress_opt, phone, country, province, city, cp) VALUES ("${businessName}", "${NIF}", "${adressBillment}", "${adressBillmentOptional}", "${phoneBillment}", "${countryBillment}", "${provinceBillment}", "${cityBillment}", "${postalCodeBillment}")`
      })
    }

    await executeQuery({
      query: `INSERT INTO evtybqup_southclientes.clients (idUser) VALUES ("${userResults.insertId}")`
    })

    await executeQuery({
      query: `INSERT INTO evtybqup_southclientes.clients_billmentAdress (idClient, idBillmentAdress) VALUES ("${userResults.insertId}", "${billmentResults.insertId}")`
    })

    await executeQuery({
      query: `INSERT INTO evtybqup_southclientes.clients_shippmentAdress (idClient, idShippmentAdress) VALUES ("${userResults.insertId}", "${shipmentResults.insertId}")`
    })

    const respone = new Response(JSON.stringify(userResults.insertId))
    respone.headers.set('Content-Type', 'application/json')
    return respone
  } catch (e) {
    return new Response('Unauthorized', { status: 401 })
  }
}
