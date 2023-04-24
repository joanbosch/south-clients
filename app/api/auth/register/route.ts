import executeQuery from '../../../../utils/executeQuery'

export async function POST (request: Request) {
  // eslint-disable-next-line no-unused-vars
  const { name, surname, phone, phoneOptional, email, confirmEmail, password, confirmPassword, adress, adressOptional, country, province, city, postalCode, businessName, NIF } = await request.body?.getReader().read().then((data) => {
    return JSON.parse(new TextDecoder().decode(data.value))
  })

  await executeQuery({
    query: `INSERT INTO evtybqup_southclientes.clients(name, email, password, deposit) VALUES (${name}, ${email}, ${password}, ${email}, 0)`
  })

  return new Response('Registration ok', { status: 200 })
}
