// src/pages/Contact.jsx
import React from 'react'

const Contact = () => {
  return (
    <section className="page-section">
      <div className="container narrow">
        <div className="page-header">
          <h2>Contact Us</h2>
          <p>Have questions about sizing, orders, or returns? Send us a note.</p>
        </div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="How can we help?"
            />
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
