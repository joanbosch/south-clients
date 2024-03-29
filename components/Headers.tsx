import Link from 'next/link'
import React from 'react'
import CartBtn from './elements/CartBtn'
import Image from 'next/image'

const Headers = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleVisibleUserOptions = () => {
    setShowMenu(current => !current)
  }

  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  const toggleVisibleMobileUserOptions = () => {
    setShowMobileMenu(current => !current)
  }

  return (
    <>
      <nav className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <div className='mr-2 flex md:hidden'>
                <button type='button' className='inline-flex items-center justify-center rounded-md bg-southClearBrown2-800 p-2' aria-controls='mobile-menu' aria-expanded='false' onClick={() => toggleVisibleMobileUserOptions()}>
                  <span className='sr-only'>Open main menu</span>

                  <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                  </svg>

                  <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline space-x-4'>
                  <Link href='/es/dashboard' className='text-black hover:font-bold rounded-md px-3 py-2 text-sm font-medium' aria-current='page'>Tienda</Link>

                  <Link href='/es/dashboard' className='text-black hover:font-bold rounded-md px-3 py-2 text-sm font-medium'>Ropa</Link>

                  <Link href='/es/dashboard' className='text-black hover:font-bold rounded-md px-3 py-2 text-sm font-medium'>Accesorios</Link>
                </div>
              </div>
            </div>
            <div className='h-screen flex items-center absolute left-1/2 transform -translate-x-1/2'>
              <Link href='/es/dashboard'>
                <h1 className='m-auto font-sans tracking-widest pr-2 text-southBrown'> SOUTH ORIGINAL </h1>
              </Link>
              <Image className='hidden md:block' src='/SOUTH_logo_NONAME.png' alt='South Original Picture' width={45} height={32} />
            </div>
            <div className='md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <Link href='/es/dashboard/cart'>
                  <CartBtn />
                </Link>

                <div className='relative ml-3 md:block hidden'>
                  <div>
                    <button type='button' className='flex max-w-xs items-center rounded-full bg-southClearBrown2-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id='user-menu-button' aria-expanded='false' aria-haspopup='true' onClick={() => toggleVisibleUserOptions()}>
                      <span className='sr-only'>Open user menu</span>
                      <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                    </button>
                  </div>
                  {showMenu
                    ? (
                      <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='user-menu-button'>
                        <Link href='/es/dashboard/profile' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-0'>Tu perfil</Link>

                        <Link href='/es/dashboard/orders' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-0'>Mis pedidos</Link>

                        <Link href='/es/dashboard/settings' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-1'>Ajustes</Link>

                        <Link href='/es/login' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-2'>Cerrar sesión</Link>
                      </div>
                      )
                    : <></>}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMobileMenu
          ? (
            <>
              <div className='flex justify-center items-center bg-southBrown h-1' />
              <div className='md:hidden bg-white' id='mobile-menu'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>

                  <Link href='#' className='text-black block rounded-md px-3 py-2 text-base font-medium' aria-current='page'>Tienda</Link>

                  <Link href='/es/dashboard/orders' className='text-black block rounded-md px-3 py-2 text-base font-medium' aria-current='page'>Ropa</Link>

                  <Link href='#' className='text-black block rounded-md px-3 py-2 text-base font-medium'>Accesorios</Link>
                </div>
                <div className='border-t border-gray-700 pt-4 pb-3'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-black'>Tom Cook</div>
                      <div className='text-sm font-medium leading-none text-black'>tom@example.com</div>
                    </div>
                    <button type='button' className='ml-auto flex-shrink-0 rounded-full bg-southClearBrown2-800 p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='sr-only'>View notifications</span>
                      <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
                      </svg>
                    </button>
                  </div>
                  <div className='mt-3 space-y-1 px-2'>
                    <Link href='/es/dashboard/profile' className='block rounded-md px-3 py-2 text-base font-medium text-black '>Tu perfil</Link>

                    <Link href='/es/dashboard/orders' className='block rounded-md px-3 py-2 text-base font-medium text-black '>Mis pedidos</Link>

                    <Link href='/es/dashboard/settings' className='block rounded-md px-3 py-2 text-base font-medium text-black '>Ajustes</Link>

                    <Link href='/es/login' className='block rounded-md px-3 py-2 text-base font-medium text-black '>Cerrar sesión</Link>
                  </div>
                </div>
              </div>
            </>
            )
          : <></>}
      </nav>
      <div className='flex justify-center items-center bg-southBrown h-10'>
        <p className='text-white font-sans font-semibold tracking-widest text-xs sm:text-sm md:text-base'> CHANGING THE WORLD FROM SOUTH TO NORD</p>
      </div>
    </>
  )
}

export default Headers
