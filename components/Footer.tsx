// app/components/Footer.js
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo and Socials Section */}
        <div>
          {/* Logo */}
          <img src="images.png" alt="Logo" className="w-20 mb-4" />
          {/* Paragraph */}
          <p className="text-gray-600 mb-4">
            Crafting comfort for your spaces with timeless designs and quality.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Category</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        {/* Support and Newsletter Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Support</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      <p className="text-center text-gray-600 text-sm">
        © 2024 Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
