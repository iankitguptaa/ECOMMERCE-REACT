// src/components/ProductCard.jsx
import React from 'react'
import { useShop } from '../context/ShopContext.jsx'

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, wishlist } = useShop()

  const inWishlist = wishlist.some((item) => item.id === product.id)

  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>{product.name[0]}</span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">₹{product.price}</span>
        </div>
        <div className="product-actions">
          <button className="btn btn-sm" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <button
            className={`btn btn-sm btn-outline ${
              inWishlist ? 'btn-outline-active' : ''
            }`}
            type="button"
            onClick={() => addToWishlist(product)}
          >
            {inWishlist ? 'In wishlist' : 'Add to wishlist'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
