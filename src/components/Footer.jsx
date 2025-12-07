// src/components/Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Innovexa-Store. All rights reserved.</p>
        <p className="footer-small">Thanks for Shopping</p>
      </div>
    </footer>
  )
}

export default Footer
