// src/pages/Signup.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

const Signup = () => {
  const navigate = useNavigate()
  const { signupUser, registeredUsers } = useShop()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmedName = name.trim()
    const trimmedEmail = email.trim().toLowerCase()

    if (!trimmedName || !trimmedEmail || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    const exists = registeredUsers.some((u) => u.email === trimmedEmail)
    if (exists) {
      setError('An account with this email already exists. Please log in.')
      return
    }

    signupUser({ name: trimmedName, email: trimmedEmail, password })
    navigate('/')
  }

  return (
    <section className="page-section auth-page">
      <div className="container narrow">
        <div className="page-header">
          <h2>Create Account</h2>
          <p>Sign up to start shopping.</p>
        </div>

        <form className="form auth-form" onSubmit={handleSubmit}>
          {error && <p className="error-text">{error}</p>}

          <div className="form-control">
            <label htmlFor="signup-name">Name</label>
            <input
              id="signup-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              placeholder="Min 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup
