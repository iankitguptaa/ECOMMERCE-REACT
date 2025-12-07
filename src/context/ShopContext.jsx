// src/context/ShopContext.jsx
import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext(null)

export const ShopProvider = ({ children }) => {
  // CART & WISHLIST
  const [cart, setCart] = useState([])       // [{id, name, price, image, qty}]
  const [wishlist, setWishlist] = useState([]) // [{id, name, price, image}]

  // SIMPLE AUTH (demo only, no real backend)
  const [user, setUser] = useState(null) // {name, email}
  const [registeredUsers, setRegisteredUsers] = useState([]) // [{name,email,password}]

  // ---------- Cart ----------
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const decreaseFromCart = (productId) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (!existing) return prev
      if (existing.qty === 1) {
        return prev.filter((item) => item.id !== productId)
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty - 1 } : item
      )
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  // ---------- Wishlist ----------
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId))
  }

  const moveWishlistToCart = (productId) => {
    setWishlist((prev) => {
      const product = prev.find((item) => item.id === productId)
      if (!product) return prev
      addToCart(product)
      return prev.filter((item) => item.id !== productId)
    })
  }

  // ---------- Auth with password (DEMO) ----------
  // Signup: save user in registeredUsers and log in
  const signupUser = ({ name, email, password }) => {
    const cleanedName = name.trim()
    const cleanedEmail = email.trim().toLowerCase()

    setRegisteredUsers((prev) => {
      const exists = prev.some((u) => u.email === cleanedEmail)
      if (exists) return prev
      return [...prev, { name: cleanedName, email: cleanedEmail, password }]
    })

    setUser({ name: cleanedName, email: cleanedEmail })
  }

  // Login: check email + password
  const loginUser = ({ email, password }) => {
    const cleanedEmail = email.trim().toLowerCase()
    const match = registeredUsers.find(
      (u) => u.email === cleanedEmail && u.password === password
    )
    if (!match) return false
    setUser({ name: match.name, email: match.email })
    return true
  }

  const logoutUser = () => {
    setUser(null)
  }

  // ---------- Derived values ----------
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const wishlistCount = wishlist.length
  const wishlistTotal = wishlist.reduce((sum, item) => sum + item.price, 0)

  const value = {
    // state
    cart,
    wishlist,
    user,
    registeredUsers,

    // derived
    cartCount,
    cartTotal,
    wishlistCount,
    wishlistTotal,

    // cart fns
    addToCart,
    decreaseFromCart,
    removeFromCart,

    // wishlist fns
    addToWishlist,
    removeFromWishlist,
    moveWishlistToCart,

    // auth fns
    signupUser,
    loginUser,
    logoutUser,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export const useShop = () => {
  const ctx = useContext(ShopContext)
  if (!ctx) {
    throw new Error('useShop must be used within a ShopProvider')
  }
  return ctx
}
