import Link from 'next/link'
import React from 'react'
import CartBtn from './elements/CartBtn'

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
      <nav className='bg-southDarkBrown-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href='/es/dashboard'>
                  <img className='h-8 w-8' src='https://www.southoriginal.com/wp-content/uploads/2023/01/logo_fondo_blanco.png' alt='Your Company' />
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link href='/es/dashboard' className='bg-southDarkBrown2-900 text-white rounded-md px-3 py-2 text-sm font-medium' aria-current='page'>Artículos</Link>

                  <a href='#' className='text-gray-300 hover:bg-southClearBrown2-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Ropa</a>

                  <a href='#' className='text-gray-300 hover:bg-southClearBrown2-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Accesorios</a>
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <Link href='/es/dashboard/cart'>
                  <CartBtn />
                </Link>

                <div className='relative ml-3'>
                  <div>
                    <button type='button' className='flex max-w-xs items-center rounded-full bg-southClearBrown2-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id='user-menu-button' aria-expanded='false' aria-haspopup='true' onClick={() => toggleVisibleUserOptions()}>
                      <span className='sr-only'>Open user menu</span>
                      <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                    </button>
                  </div>
                  {showMenu
                    ? (
                      <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='user-menu-button'>
                        <a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-0'>Tu perfil</a>

                        <a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-1'>Ajustes</a>

                        <a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' id='user-menu-item-2'>Cerrar sesión</a>
                      </div>
                      )
                    : <></>}
                </div>
              </div>
            </div>

            <div className='mr-2 flex md:hidden'>
              <div className='mr-3 flex items-center md:ml-6'>
                <Link href='/es/dashboard/cart'>
                  <CartBtn />
                </Link>
              </div>

              <button type='button' className='inline-flex items-center justify-center rounded-md bg-southClearBrown2-800 p-2 text-gray-400 hover:bg-southClearBrown2-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-southClearBrown2-800' aria-controls='mobile-menu' aria-expanded='false' onClick={() => toggleVisibleMobileUserOptions()}>
                <span className='sr-only'>Open main menu</span>

                <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>

                <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

          </div>
        </div>
        {showMobileMenu
          ? (
            <div className='md:hidden' id='mobile-menu'>
              <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>

                <a href='#' className='bg-southClearBrown2-900 text-white block rounded-md px-3 py-2 text-base font-medium' aria-current='page'>Artículos</a>

                <a href='#' className='text-white hover:bg-text-white-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Ropa</a>

                <a href='#' className='text-white hover:bg-southClearBrown2-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>Accesorios</a>
              </div>
              <div className='border-t border-gray-700 pt-4 pb-3'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-black'>Tom Cook</div>
                    <div className='text-sm font-medium leading-none text-white'>tom@example.com</div>
                  </div>
                  <button type='button' className='ml-auto flex-shrink-0 rounded-full bg-southClearBrown2-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <span className='sr-only'>View notifications</span>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                      <path stroke-linecap='round' stroke-linejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
                    </svg>
                  </button>
                </div>
                <div className='mt-3 space-y-1 px-2'>
                  <a href='#' className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-southClearBrown2-700 hover:text-white'>Tu perfil</a>

                  <a href='#' className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-southClearBrown2-700 hover:text-white'>Ajustes</a>

                  <a href='#' className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-southClearBrown2-700 hover:text-white'>Cerrar sesión</a>
                </div>
              </div>
            </div>
            )
          : <></>}
      </nav>

      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 mx-auto center-text'>Todos los artículos</h1>
        </div>
      </header>
    </>
  )
}

export default Headers
