// src/components/Cart.jsx
import React from "react";

/**
 * Cart Component
 * Displays shopping cart with items, allows removal, and order placement
 * 
 * Props:
 * - cartItems: Array of cart items [{id, name, price, ...}]
 * - onRemoveItem: Function to remove item from cart by ID
 * - onPlaceOrder: Function to handle order placement
 */
function Cart({ cartItems, onRemoveItem, onPlaceOrder }) {
  return (
    <div className="cart-container">
      {/* Cart header */}
      <h2>Your Cart</h2>

      {/* Conditional rendering: Empty cart message or cart items list */}
      {cartItems.length === 0 ? (
        // Display when cart is empty
        <p>Your cart is empty.</p>
      ) : (
        // Display cart items when cart has items
        <ul className="cart-list">
          {/* Map through each cart item and render */}
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {/* Item name */}
              <span>{item.name}</span>
              {/* Item price in KES currency */}
              <span>KES {item.price}</span>
              {/* Remove button - calls onRemoveItem with item ID */}
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Cart summary section - only shows when cart has items */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          {/* Calculate and display total price */}
          <h3>
            Total: KES{" "}
            {/* Use reduce to sum all item prices */}
            {cartItems.reduce((total, item) => total + item.price, 0)}
          </h3>
          {/* Place order button - triggers onPlaceOrder function */}
          <button onClick={onPlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

/**
 * Component Functionality Summary:
 * 1. Displays cart header
 * 2. Shows empty message when no items
 * 3. Lists all cart items with name, price, and remove button
 * 4. Calculates total price using reduce method
 * 5. Provides place order functionality
 * 6. Handles item removal by ID
 */
