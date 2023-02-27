'use client'
import { useState } from 'react'
import axios from 'axios'

import { useTranslation } from '../app/i18n/client'

export default function LoginComponent ({ params: { lang } } : { params: { lang: string } }) {
  const { t } = useTranslation(lang, 'translation')

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
    console.log(credentials)
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
  }

  const handleLogout = async () => {
    const response = await axios.post('/api/auth/logout')
    console.log(response)
  }

  return (
    <>
      <h1 className='text-center mb-4 mt-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl'>{t('login')}</h1>

      <div className='mt-5 md:col-span-2 md:mt-0'>
        <form onSubmit={handleSubmit}>
          <div className='overflow-hidden shadow sm:rounded-md'>
            <div className='bg-white px-4 py-5 sm:p-6'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-4'>
                  <label className='block text-sm font-medium text-gray-700'>Email address</label>
                  <input type='email' name='email' id='email-address' placeholder='email' onChange={handleChange} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
                </div>
                <div className='col-span-6 sm:col-span-4'>
                  <label className='block text-sm font-medium text-gray-700'>Email address</label>
                  <input type='password' name='password' id='email-address' onChange={handleChange} placeholder='password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <button type='submit' className='inline-flex justify-center mr-4 rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Login</button>
              <button onClick={() => handleLogout()} className='inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Logout</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
