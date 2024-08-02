import React, { useState } from 'react'
import { useAuth } from '../../utils/AuthProvider'
import { useNavigate } from 'react-router-dom'
import "./register.css"

export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3002/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email, password, role: 1}),
      })
      const data = await response.json()

      if(data){
        
        alert('You create your new acccount, now log in!')
        navigate("/login")
      }
    } catch (error) {
      console.error('Register Failed', error)
    }
  }
  
  return (
    <>
    <form id="register-form" onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label htmlFor="text">Useraname</label>
      <input type="text" className="register-input" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter your Username" required />
      
      <label htmlFor="text">Email</label>
      <input type="email" className="register-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" required />
      <label htmlFor="">Password</label>
      <input type="password" className="register-input" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" required />
      
      <div className="div-form" required>
      <input type="checkbox" required />
      I'm not from CIA
      <button type="submit" onClick={handleSubmit}>Create your New Account</button>
      or
      </div>
      Already have an account?{" "}
      <a onClick={() => navigate("/login")}>Sign In</a>
    </form>
    </>
  )
}
