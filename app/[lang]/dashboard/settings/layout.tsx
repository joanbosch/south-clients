'use client'

import Providers from '../../../../components/Providers'
import React from 'react'

export default function Layout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <header className='bg-white shadow'>
          <div className='mx-auto max-w-7xl p-3'>
            <h1 className='text-1xl font-bold tracking-wide text-gray-900 mx-auto center-text'>Ajustes</h1>
          </div>
        </header>
        {children}
      </Providers>
    </>
  )
}
