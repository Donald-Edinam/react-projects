import React from 'react'

const ProductsList = ({ products }) => {
  return (
   <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>{product.price}$</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 mt-2">Add to Cart</button>
        </div>
      ))}
    </div>
   </>
  )
}

export default ProductsList
