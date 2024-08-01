import React, { useContext, useState } from 'react'
import { useAuth } from '../../utils/AuthProvider'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password}),
      })
      const data = await response.json()

      if(data.token){
        
        //const {access, refresh} = data.token

        //localStorage.setItem("accessToken", JSON.stringify(access))
        //localStorage.setItem("refreshToken", JSON.stringify(refresh))
        //localStorage.setItem("AuthToken", JSON.stringify(JSON.stringify(data)))
        localStorage.setItem("AuthToken", JSON.stringify(data))

        login(data.token)
        navigate("/search-movie")
      }
    } catch (error) {
      console.error('Login Failed', error)
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required />
      <button type="submit" onClick={handleSubmit}>Sign In</button>
    </form>
    </>
  )
}
