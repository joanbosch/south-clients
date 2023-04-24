'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// import { useTranslation } from '../app/i18n/client'

export default function LoginComponent ({ params: { lang } } : { params: { lang: string } }) {
  // const { t } = useTranslation(lang, 'translation')
  const router = useRouter()

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log('login')
    const response = await axios.post('/api/auth/login', credentials)
    if (response.status === 200) {
      router.push('/es/admin')
    }
  }

  return (
    <>
      <section className='bg-gray-100'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-southBrown md:text-2xl dark:text-southBrown text-center'>
                Iniciar sesión en South Original
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Correo electrónico</label>
                  <input type='email' onChange={handleChange} name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='nombre@dominio.com' />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Contraseña</label>
                  <input type='password' onChange={handleChange} name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <a href='/es/forgotpassword' className='text-sm font-medium dark:text-black hover:underline dark:dark:text-black'>¿Has olvidado tu contraseña?</a>
                </div>
                <button type='submit' className='w-full text-white bg-southBrown hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-southBlue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-southBlue-600 dark:hover:bg-southBlue-700 dark:focus:ring-southBlue-800'>Iniciar sesión</button>
                <p className='text-sm font-light text-gray-500'>
                  ¿Todavía no tienes una cuenta? <a href='/es/register' className='font-medium text-black hover:underline'>Regístrate</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
