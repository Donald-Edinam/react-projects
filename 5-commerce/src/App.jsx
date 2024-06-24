import React, { useEffect, useState } from "react";

// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CartContext, CartProvider } from "./compnents/context/CartContext";

export default function App() {
  const [filterCategory, setFilterCategory] = useState(null);

  // Handle product filtering
  const filterByCategory = (category) => {
    setFilterCategory(category)
  }

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Products 
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));

    // Items categories
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  console.log("Categories:", categories);

  return (
    <>
      <CartProvider>
        <Router>
          <CartContext.Consumer>
            {({ cartItems, addToCart, removeFromCart }) => (
              <Routes>
                <Route
                  path="/"
                  element={<Home products={products}
                  categories={categories}
                  filterByCategory={filterByCategory}
                  filterCategory={filterCategory}
                  addToCart={addToCart}
                  />} />
                {/* <Route path="/" element={""} />
                <Route path="/" element={""} /> */}
              </Routes>
            )}
          </CartContext.Consumer>
        </Router>
      </CartProvider>
    </>
  );
}
