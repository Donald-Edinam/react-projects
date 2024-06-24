import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import ProductList from '../src/components/ProductList';
import ProductDetails from '../src/components/ProductDetails';
import Cart from '../src/components/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [Loading, setLoading] = useState(true);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;