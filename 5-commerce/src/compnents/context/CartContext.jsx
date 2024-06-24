import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Store the cart values
    const [cartItems, setCartItems] = useState([]);

    // Add to Cart
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };


    // remove from cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

