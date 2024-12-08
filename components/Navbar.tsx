// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full border-b">
      {/* Top Bar */}
      <div className="bg-slate-600 px-4 py-2 flex items-center justify-between text-sm text-white">
        <div>Free shipping on all orders over $50</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer">
            Eng <span className="ml-1">▼</span>
          </div>
          <a href="/faq" className="hover:text-gray-800">
            FAQ
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div> {/* Small logo icon */}
          <span className="text-lg font-bold">
            <img src="logo.png" alt="logo"></img>
          </span>
        </div>

        {/* Horizontal Links */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-gray-800">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-800">
            Shop
          </a>
          <a href="/product" className="hover:text-gray-800">
            Product
          </a>
          <a href="/pages" className="hover:text-gray-800">
            Pages
          </a>
          <a href="/about" className="hover:text-gray-800">
            About
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-600">
          Contact: (009)-87654-1
        </div>
      </div>
    </div>
  );
};

export default Navbar;
