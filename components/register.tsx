'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// import { useTranslation } from '../app/i18n/client'

export default function RegisterComponent ({ params: { lang } } : { params: { lang: string } }) {
  // const { t } = useTranslation(lang, 'translation')
  const router = useRouter()

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    adress: '',
    adressOptional: '',
    country: '',
    province: '',
    city: '',
    postalCode: '',
    businessName: '',
    NIF: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const checkData = () => {
    if (userData.password !== userData.confirmPassword) {
      console.log('contraseñas no coinciden')
    } else if (userData.email !== userData.confirmEmail) {
      console.log('emails no coinciden')
    } else {
      console.log('todo correcto')
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(userData)
    checkData()
    // const response = await axios.post('/api/auth/register', userData)
    // if (response.status === 200) {
    //   router.push('/es/dashboard')
    // }
  }

  return (
    <>
      <section className='bg-gray-100 pb-5 pt-5 md:pt-10 md:pb-10 lg:pt-20 lg:pb-20'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-southBrown md:text-2xl dark:text-southBrown text-center'>
                Registrarse en South Original
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Nombre*</label>
                  <input type='text' onChange={handleChange} name='name' required id='name' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='surname' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Apellidos*</label>
                  <input type='text' onChange={handleChange} name='surname' required id='surname' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Teléfono*</label>
                  <input type='text' onChange={handleChange} name='phone' required id='phone' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Correo electrónico*</label>
                  <input type='email' onChange={handleChange} name='email' required id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='confirmEmail' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Confirma el correo electrónico*</label>
                  <input type='email' onChange={handleChange} name='confirmEmail' required id='confirmEmail' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Contraseña*</label>
                  <input type='password' onChange={handleChange} name='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='confirmPassword' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Repite la contraseña*</label>
                  <input type='password' onChange={handleChange} name='confirmPassword' id='confirmPassword' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='adress' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Dirección*</label>
                  <input type='text' onChange={handleChange} name='adress' required id='adress' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='adressOptional' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Datos adicionales dirección</label>
                  <input type='text' onChange={handleChange} name='adressOptional' required id='adressOptional' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='country' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>País*</label>
                  <select onChange={handleChange} name='country' required id='country' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value=''>Selecciona una opción</option>
                    <option value='1'>España</option>
                    <option value='Portugal'>Portugal</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='province' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Provincia*</label>
                  <input type='text' onChange={handleChange} name='province' required id='province' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Ciudad*</label>
                  <input type='text' onChange={handleChange} name='city' required id='city' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='postalCode' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Código postal*</label>
                  <input type='text' onChange={handleChange} name='postalCode' required id='postalCode' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='businessName' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Nombre de la empresa*</label>
                  <input type='text' onChange={handleChange} name='businessName' required id='businessName' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='NIF' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>NIF de la empresa*</label>
                  <input type='text' onChange={handleChange} name='NIF' required id='NIF' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>

                <button type='submit' className='w-full text-white bg-southBrown hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-southBlue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-southBlue-600 dark:hover:bg-southBlue-700 dark:focus:ring-southBlue-800'>Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
