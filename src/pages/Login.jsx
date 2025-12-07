// src/pages/Login.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useShop()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Please enter email and password.')
      return
    }

    const success = loginUser({ email, password })
    if (!success) {
      setError('Incorrect email or password.')
      return
    }

    navigate('/')
  }

  return (
    <section className="page-section auth-page">
      <div className="container narrow">
        <div className="page-header">
          <h2>Login</h2>
          <p>Welcome back! Enter your details.</p>
        </div>

        <form className="form auth-form" onSubmit={handleSubmit}>
          {error && <p className="error-text">{error}</p>}

          <div className="form-control">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Login
          </button>

          <p className="auth-switch">
            New here? <Link to="/signup">Create account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
