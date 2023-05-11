import React, { useState } from 'react'
import BillmentCard from './BillmentCard'

// import { useTranslation } from '../app/i18n/client'

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

  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null)

  function handleChange(event) {
    setTarjetaSeleccionada(event.target.value)
  }

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
                <h2 className='font-bold'> Cliente </h2>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                  {clientes.map((cliente : any) => (
                    <option key={cliente.ID} value={cliente.ID}>
                      {cliente.Client}
                    </option>
                  ))}
                </select>

                <h2 className='font-bold'> Artículos </h2>
                <div className='flex flex-col items-center justify-center mx-auto lg:py-0'>
                  <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
                    <div className='p-6  sm:p-4'>
                      <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Artículo</label>
                      <select className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        {productos.map((producto : any) => (
                          <option key={producto.id} value={producto.id}>
                            {producto.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='grid-cols-2 p-6 sm:p-4'>
                      <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Unidades</label>
                      <input type='number' name='name' defaultValue={1} required id='name' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='grid-cols-2 p-6 sm:p-4'>
                      <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Precio por unidad</label>
                      <input type='text' name='name' defaultValue={1} required id='name' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                  </div>
                </div>

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
                  onChange={handleChange}
                />
                <button type='submit' className='w-full text-white bg-southBrown hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-southBlue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-southBlue-600 dark:hover:bg-southBlue-700 dark:focus:ring-southBlue-800'>Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
