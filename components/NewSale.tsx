'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// import { useTranslation } from '../app/i18n/client'

export default function NewSaleComponent ({ params: { lang } } : { params: { lang: string } }) {
  // const { t } = useTranslation(lang, 'translation')
  const router = useRouter()

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    phone: '',
    phoneOptional: '',
    email: '',
    confirmEmail: '',

    adressName: '',
    adress: '',
    adressOptional: '',
    country: '',
    province: '',
    city: '',
    postalCode: '',

    businessName: '',
    NIF: '',
    copyData: true,
    adressBillment: '',
    adressBillmentOptional: '',
    phoneBillment: '',
    countryBillment: '',
    provinceBillment: '',
    cityBillment: '',
    postalCodeBillment: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const checkData = () => {
    if (userData.email !== userData.confirmEmail) {
      console.log('emails no coinciden')
    } else {
      console.log('todo correcto')
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(userData)
    checkData()
    const response = await axios.post('/api/clients', userData)
    if (response.status === 200) {
      router.push('/es/admin')
    }
  }

  const [showBillmentForm, setShowBillmentForm] = React.useState(false)

  const toggleVisibleBillmentForm = () => {
    setShowBillmentForm(current => !current)
    setUserData({
      ...userData,
      copyData: showBillmentForm
    })
  }

  return (
    <>
      <section className='bg-gray-100 md:pt-5 md:pb-10 lg:pt-10 lg:pb-20'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 dark:border-southDarkBrown-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-southBrown md:text-2xl dark:text-southBrown text-center'>
                Registrar Nueva Venta
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <h2 className='font-bold'> Datos de contacto </h2>

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
                  <label htmlFor='phoneOptional' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Teléfono alternativo</label>
                  <input type='text' onChange={handleChange} name='phoneOptional' id='phoneOptional' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Correo electrónico*</label>
                  <input type='email' onChange={handleChange} name='email' required id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div>
                  <label htmlFor='confirmEmail' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Confirma el correo electrónico*</label>
                  <input type='email' onChange={handleChange} name='confirmEmail' required id='confirmEmail' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-southClearBrown2-700 dark:border-southDarkBrown2-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>

                <br />

                <button type='submit' className='w-full text-white bg-southBrown hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-southBlue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-southBlue-600 dark:hover:bg-southBlue-700 dark:focus:ring-southBlue-800'>Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
