import React from "react";

/**
 * MenuItem Component
 * Renders a single menu item with image, name, description, price, and add-to-cart button
 * 
 * Props:
 * - item: { id, name, description, image, price }
 * - onAddToCart: function to handle adding this item to cart
 */
function MenuItem({ item, onAddToCart }) {
  // Destructure item properties
  const { name, description, image, price } = item;

  return (
    <div className="menu-item card p-4 rounded-2xl shadow-lg mb-6 bg-white">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mt-1 mb-3">{description}</p>

      {/* Price and Add to Cart Button */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-700">${price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
