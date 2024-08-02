import React, { useState } from 'react'
import { useAuth } from '../../utils/AuthProvider'
import { useNavigate } from 'react-router-dom'
import "./login.css"

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
    <form id="login-form" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label htmlFor="text">Email</label>
      <input type="email" className="login-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" required />
      <label htmlFor="">Password</label>
      <input type="password" className="login-input" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" required />
      
      <div className="div-form" required>
      <input type="checkbox" required />
          I'm not a bot

      <button type="submit" onClick={handleSubmit}>Sign In</button>
      or
      </div>
      Are you new at x?{" "}
      <a onClick={() => navigate("/register")}>Create a New Account</a>
    </form>
    </>
  )
}
