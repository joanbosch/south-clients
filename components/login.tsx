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
      <h1>{t('login')}</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='email' onChange={handleChange} />
        <input type='password' name='password' placeholder='password' onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>

      <button onClick={() => handleLogout()}>Logout</button>
    </>
  )
}
