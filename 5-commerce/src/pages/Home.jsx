import React from 'react'
import Navbar from '../compnents/global/Navbar'
import ProductsList from '../compnents/app/ProductsList'
import ProductCategories from '../compnents/app/ProductCategories'

const Home = ({ products, categories, filterByCategory, filterCategory, addToCart }) => {

  const homeFilteredCategory = filterCategory ? products.filter(product => product.category === filterCategory) : products

  
  return (

   <main>
    <Navbar />
    <ProductCategories categories={categories} filterByCategory={filterByCategory}/>
    <ProductsList products={products}/>
   </main>
  )
}

export default Home
