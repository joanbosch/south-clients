'use client'
import React from 'react'

interface ClientSelectorProps {
  clientes: []
}

export default function ClientSelector (props: ClientSelectorProps) {
  return (
    <>
      <h2 className='font-bold'> Cliente </h2>
      <select className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {props.clientes.map((cliente : any) => (
          <option key={cliente.ID} value={cliente.ID}>
            {cliente.Client}
          </option>
        ))}
      </select>
    </>
  )
}
