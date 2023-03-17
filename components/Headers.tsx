import Link from 'next/link'
import React from 'react'

const Headers = () => {
  return (
    <header className='bg-gradient-to-b from-orange-400 to-orange-200 border shadow p-2 flex'>
      <Link className='text-black' href='/dashboard'> Dashboard </Link>
    </header>
  )
}

export default Headers
