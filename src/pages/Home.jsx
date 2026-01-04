// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'

const featuredClothes = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    description: 'Soft cotton tee for everyday wear.',
    price: 599,
    image: '/images/products/tshirt.jpg',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    description: 'Timeless medium-wash denim jacket.',
    price: 1259,
    image: '/images/products/denim-jacket.jpg',
  },
  {
    id: 3,
    name: 'Summer Dress',
    description: 'Lightweight floral dress for sunny days.',
    price: 750,
    image: '/images/products/summer-dress.jpg',
  },
  {
    id: 4,
    name: 'Cozy Hoodie',
    description: 'Oversized hoodie with fleece lining.',
    price: 800,
    image: '/images/products/hoodie.jpg',
  },
  {
    id: 5,
    name: 'Sporty Joggers',
    description: 'Slim-fit joggers for gym or street.',
    price: 635,
    image: '/images/products/joggers.jpg',
  },
  {
    id: 6,
    name: 'Formal Shirt',
    description: 'Sharp button-down shirt for office days.',
    price: 399,
    image: '/images/products/formal-shirt.jpg',
  },
  {
    id: 7,
    name: 'Blue Slim Jeans',
    description: 'Stretch denim jeans with slim fit.',
    price: 550,
    image: '/images/products/slim-jeans.jpg',
  },
  {
    id: 8,
    name: 'Everyday Sneakers',
    description: 'Minimal sneakers that match any outfit.',
    price: 1999,
    image: '/images/products/sneakers.jpg',
  },
]

const Home = () => {
  return (
    <>
      {/* SALE BANNER */}
      <section className="hero-section sale-section">
        <div className="container">
          <div className="sale-banner">
            <div className="sale-tag">50% OFF</div>

            <div className="sale-content">
              <h1>Big Fashion Sale on All Clothing.</h1>
              <p>
                Upgrade your wardrobe with our latest collection of tees,
                hoodies, dresses and more. Limited time only – grab your
                favourites before they&apos;re gone.
              </p>

              <div className="hero-actions">
                <Link to="/products" className="btn">
                  Shop Sale
                </Link>
                <Link to="/signup" className="btn btn-ghost">
                  Create Account
                </Link>
              </div>

              <p className="sale-note">
                *Discount automatically applied at checkout on all clothing
                items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CLOTHING */}
      <section className="page-section">
        <div className="container">
          <div className="page-header">
            <h2>Featured Clothing</h2>
            <p>Discover 8 must-have pieces from this season&apos;s sale.</p>
          </div>

          <div className="product-grid">
            {featuredClothes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
