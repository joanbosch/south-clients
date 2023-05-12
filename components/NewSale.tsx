import React from 'react'
import BillmentCard from './BillmentCard'
import ClientSelector from './ClientSelector'
import NewSaleArticles from './NewSaleArticles'

async function getClients () {
  const res = await fetch(`${process.env.API_URL}/api/clients`, {
    next: { revalidate: 10 },
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

async function getProducts () {
  const res = await fetch(`${process.env.API_URL}/api/products`, {
    next: { revalidate: 10 },
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export default async function NewSaleComponent ({ params: { lang } } : { params: { lang: string } }) {
  const clientes = await getClients()
  const productos = await getProducts()

  return (
    <>
      <section className='bg-gray-100 md:pt-5 md:pb-10 lg:pt-10 lg:pb-20'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-southBrown md:text-2xl dark:text-southBrown text-center'>
                Registrar Nueva Venta
              </h1>
              <form className='space-y-4 md:space-y-6'>
                <ClientSelector
                  clientes={clientes}
                />
                <NewSaleArticles
                  productos={productos}
                />
                <h2 className='font-bold'> Dirección de Facturación </h2>
                <BillmentCard
                  name='hola'
                  NIF='NIF'
                  adress='adress'
                  phone='phone'
                  country='country'
                  city='city'
                  postalCode='postalCode'
                  selected={false}
                />

                <BillmentCard
                  name='hola'
                  NIF='NIF'
                  adress='adress'
                  phone='phone'
                  country='country'
                  city='city'
                  postalCode='postalCode'
                  selected={false}
                />

                <h2 className='font-bold'> Dirección de Envío </h2>
                <BillmentCard
                  name='hola'
                  NIF='NIF'
                  adress='adress'
                  phone='phone'
                  country='country'
                  city='city'
                  postalCode='postalCode'
                  selected={false}
                />

                <h2 className='font-bold'> Método de pago </h2>
                <div className='flex items-center'>
                  <input className='mr-2' type='checkbox' name='copyData' id='copyData' />
                  <div className='block text-sm font-medium text-gray-900 dark:text-black'>Black</div>
                </div>
                <div className='flex items-center'>
                  <input className='mr-2' type='checkbox' name='copyData' id='copyData' />
                  <div className='block text-sm font-medium text-gray-900 dark:text-black'>Transferencia bancaria</div>
                </div>
                <div className='flex items-center'>
                  <input className='mr-2' type='checkbox' name='copyData' id='copyData' />
                  <div className='block text-sm font-medium text-gray-900 dark:text-black'>30 dias</div>
                </div>
                <div className='flex items-center'>
                  <input className='mr-2' type='checkbox' name='copyData' id='copyData' />
                  <div className='block text-sm font-medium text-gray-900 dark:text-black'>Deposito</div>
                </div>
                <button type='submit' className='w-full text-white bg-southBrown hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-southBlue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-southBlue-600 dark:hover:bg-southBlue-700 dark:focus:ring-southBlue-800'>Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
