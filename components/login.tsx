"use client"
import { useState } from "react"
import axios from "axios"

export default function LoginComponent({ params: { lang } } : { params: { lang: string } }) {

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </>
  )
}