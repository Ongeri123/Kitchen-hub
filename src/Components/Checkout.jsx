
import React from "react";

function Checkout({ cartItems = [], onPlaceOrder = () => {} }) {
  // Calculate total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 150; // static for now
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="checkout p-4 max-w-xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <ul className="divide-y divide-gray-200 mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="py-2 flex justify-between">
            <span>{item.name} × {item.quantity}</span>
            <span>Ksh {item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span><span>Ksh {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span><span>Ksh {tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span><span>Ksh {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-black border-t pt-2">
          <span>Total</span><span>Ksh {total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={onPlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
