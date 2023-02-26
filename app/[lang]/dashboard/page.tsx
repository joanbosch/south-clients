"use client"

import axios from "axios"

export default function Dashboard() {

  const getProfile = async () => {
    const response = await axios.get('/api/clothes')
    console.log(response)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => getProfile()}>
        get clothes
      </button>
    </div>
  )
}
