import React from 'react'

interface NewSaleProductProps {
  productos: []
}

export default function NewSaleProduct (props: NewSaleProductProps) {
  return (
    <>
      <div className='flex flex-col items-center justify-center mx-auto lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
          <div className='p-6  sm:p-4'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Artículo</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              {props.productos.map((producto : any) => (
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
    </>
  )
}
