import React, { useState } from "react"
import commerce from "../lib/commerce"
import { useEffect } from "react";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [products, setProducts] = useState([]);

  // Functiion to fetch data from API
async  function fetchProducts(){
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  // Use the useEffect "hook" to run fetchProducts function
  useEffect(() => {
    fetchProducts();
  }, [])
  console.log(products)

  return (
    <Navigation />
  )
}