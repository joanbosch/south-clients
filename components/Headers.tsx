import Link from 'next/link'
import React from 'react'

const Headers = () => {
  return (
    <header className='bg-gradient-to-b from-orange-400 to-orange-200 border shadow p-2 flex'>
      <Link className='text-black' href='/es/dashboard'> Dashboard </Link>
      <Link className='ml-auto mr-4 ' href='/es/cart'> Carrito </Link>
    </header>
  )
}

export default Headers
