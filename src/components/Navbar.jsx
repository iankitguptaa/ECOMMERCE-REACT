// src/components/Navbar.jsx
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

const Navbar = () => {
  const { cartCount, wishlistCount, user, logoutUser } = useShop()

  const firstName =
    user?.name?.trim().split(' ').filter(Boolean)[0] || null

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="logo">
          Innovexa-Store<span>.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          {firstName && (
            <div className="nav-user">Hi, {firstName} 👋</div>
          )}

          <div className="nav-status">
            <Link to="/cart" className="nav-pill">
              🛒 <span>Cart</span> {cartCount > 0 && <b>{cartCount}</b>}
            </Link>
            <Link to="/wishlist" className="nav-pill">
              ♡ <span>Wishlist</span>{' '}
              {wishlistCount > 0 && <b>{wishlistCount}</b>}
            </Link>
          </div>

          {user ? (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={logoutUser}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
              <Link to="/signup" className="btn">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
