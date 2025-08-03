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
    <div className="menu-item bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{name}</h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Price and Add to Cart Button */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-bold text-emerald-600">${price}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
