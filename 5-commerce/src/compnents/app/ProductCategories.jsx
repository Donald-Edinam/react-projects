import React from 'react';

const ProductCategories = ({ categories, filterByCategory }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => filterByCategory(category)} 
          className="bg-gray-200 p-2 rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductCategories;
