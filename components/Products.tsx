import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Shopping cart icon

const ProductPage = () => {
  const products = [
    { id: 1, title: "School Chair A", price: "$25", image: "chair1.png" },
    { id: 2, title: "School Chair B", price: "$30", image: "chair2.png" },
    { id: 3, title: "School Chair C", price: "$35", image: "chair3.png" },
    { id: 4, title: "School Chair D", price: "$40", image: "chair4.png" },
    { id: 5, title: "School Chair E", price: "$45", image: "chair5.png" },
    { id: 6, title: "School Chair F", price: "$50", image: "chair6.png" },
    { id: 7, title: "School Chair G", price: "$55", image: "chair7.png" },
    { id: 8, title: "School Chair H", price: "$60", image: "chair8.png" },
    { id: 9, title: "School Chair I", price: "$65", image: "chair9.png" },
    { id: 10, title: "School Chair J", price: "$70", image: "chair10.png" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg overflow-hidden relative"
          >
            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain" // Smaller image size
              />
              <div className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full">
                <FaShoppingCart className="text-white text-lg" />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-700">{product.title}</h2>
              <p className="text-gray-500 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
