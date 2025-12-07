// src/pages/Wishlist.jsx
import React from 'react'
import { useShop } from '../context/ShopContext.jsx'

const Wishlist = () => {
  const {
    wishlist,
    wishlistTotal,
    moveWishlistToCart,
    removeFromWishlist,
  } = useShop()

  const hasItems = wishlist.length > 0

  return (
    <section className="page-section">
      <div className="container narrow">
        <div className="page-header">
          <h2>Your Wishlist</h2>
          <p>
            {hasItems
              ? 'Save items you love and move them to cart when you are ready.'
              : 'Your wishlist is empty. Tap the wishlist button on any product to add it here.'}
          </p>
        </div>

        {!hasItems && (
          <div className="empty-state">
            <p>No items in your wishlist yet.</p>
          </div>
        )}

        {hasItems && (
          <>
            <div className="wishlist-list">
              {wishlist.map((item) => (
                <div className="wishlist-item" key={item.id}>
                  <div className="wishlist-item-main">
                    <div className="wishlist-item-image">
                      {item.image && (
                        <img src={item.image} alt={item.name} />
                      )}
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p className="wishlist-item-price">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="wishlist-item-actions">
                    <button
                      className="btn btn-sm"
                      type="button"
                      onClick={() => moveWishlistToCart(item.id)}
                    >
                      Move to cart
                    </button>
                    <button
                      type="button"
                      className="remove-link"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary wishlist-summary">
              <div className="cart-summary-row cart-summary-total">
                <span>Wishlist total value</span>
                <span>${wishlistTotal.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Wishlist
