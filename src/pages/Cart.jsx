// src/pages/Cart.jsx
import React from 'react'
import { useShop } from '../context/ShopContext.jsx'

const Cart = () => {
  const { cart, cartTotal, addToCart, decreaseFromCart, removeFromCart } =
    useShop()

  const hasItems = cart.length > 0

  return (
    <section className="page-section">
      <div className="container narrow">
        <div className="page-header">
          <h2>Your Cart</h2>
          <p>
            {hasItems
              ? 'Review your items and adjust quantities before checkout.'
              : 'Your cart is empty. Add something from the sale!'}
          </p>
        </div>

        {!hasItems && (
          <div className="empty-state">
            <p>No items in your cart yet.</p>
          </div>
        )}

        {hasItems && (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-main">
                    <div className="cart-item-image">
                      {item.image && (
                        <img src={item.image} alt={item.name} />
                      )}
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  <div className="cart-item-controls">
                    <div className="qty-controls">
                      <button
                        type="button"
                        onClick={() => decreaseFromCart(item.id)}
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="cart-item-total">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      className="remove-link"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Estimated shipping</span>
                <span>Free</span>
              </div>
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn cart-checkout-btn" type="button">
                Checkout (demo)
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart
