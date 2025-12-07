// src/pages/Products.jsx
import React from 'react'
import ProductCard from '../components/ProductCard.jsx'

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    description: 'Soft premium cotton tee.',
    price: 19,
    image: '/images/products/tshirt.jpg',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    description: 'Timeless medium-wash denim jacket.',
    price: 59,
    image: '/images/products/denim-jacket.jpg',
  },
  {
    id: 3,
    name: 'Summer Dress',
    description: 'Lightweight floral summer dress.',
    price: 39,
    image: '/images/products/summer-dress.jpg',
  },
  {
    id: 4,
    name: 'Cozy Hoodie',
    description: 'Relaxed fit fleece hoodie.',
    price: 49,
    image: '/images/products/hoodie.jpg',
  },
  {
    id: 5,
    name: 'Sporty Joggers',
    description: 'Slim-fit joggers for gym or casual wear.',
    price: 35,
    image: '/images/products/joggers.jpg',
  },
  {
    id: 6,
    name: 'Formal Shirt',
    description: 'Tailored dress shirt for office or events.',
    price: 29,
    image: '/images/products/formal-shirt.jpg',
  },
  {
    id: 7,
    name: 'Slim Jeans',
    description: 'Stretch flexible slim fit denim.',
    price: 45,
    image: '/images/products/slim-jeans.jpg',
  },
  {
    id: 8,
    name: 'Sneakers',
    description: 'Everyday sneakers to match any outfit.',
    price: 69,
    image: '/images/products/sneakers.jpg',
  },
]

const Products = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h2>All Products</h2>
          <p>Browse our full clothing collection on sale.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
