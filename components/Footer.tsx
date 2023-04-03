import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-southBrown h-0.5' />
      <div className='flex justify-center items-center '>
        <div className='grid md:grid-cols-3 gap-20 pb-4 pt-4'>
          <div className='grid grid-rows-3 gap-2'>
            <span className='text-xl font-bold text-center text-southBrown'>SOUTH ORIGINAL</span>
            <div className='col-span-1 flex justify-center items-center'>
              <Image className='md:block text-center' src='/SOUTH_logo_NONAME.png' alt='South Original Picture' width={45} height={32} />
            </div>
            <span className='text-center'>contact@southoriginal.com</span>
          </div>

          <div className='grid grid-rows-5 gap-2 text-sm text-center'>
            <h1 className='font-bold text-southBrown'>QUIÉNES SOMOS</h1>
            <a href='#'>Política de Privacidad</a>
            <a href='#'>Uso de Cookies</a>
            <a href='#'>Condiciones de Uso</a>
            <a href='#'>Avisos Legales</a>
          </div>

          <div className='grid grid-rows-4 gap-2 text-sm text-center'>
            <h1 className='font-bold text-southBrown'>AYUDA</h1>
            <a href='#'>Ventas y Reembolsos</a>
            <a href='#'>FAQ</a>
            <a href='#'>Contactos</a>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center bg-southBrown h-10'>
        <p className='text-white font-sans font-semibold tracking-widest text-xs sm:text-sm md:text-base'> SOUTH ORIGINAL</p>
      </div>
    </>
  )
}

export default Footer
