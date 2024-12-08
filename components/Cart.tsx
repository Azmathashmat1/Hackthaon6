// app/components/Cart.js
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-50 space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="logo.jpg"
          alt="Library Stool Chair"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Library Stool Chair</h1>

        {/* Price */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600">
          $20.00 USD
        </button>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          This library stool chair offers perfect ergonomic support for your reading or study space, combining style and comfort.
        </p>

        {/* Add to Cart Button */}
        <button className="flex items-center bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
