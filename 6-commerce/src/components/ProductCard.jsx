import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;