import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    let newCart = [...cart];
    let index = newCart.findIndex(i => i.id === item.id);
    if (index === -1) {
      newCart = [...newCart, { ...item, quantity: 1 }];
    } else {
      newCart[index].quantity += 1;
    }
    setCart(newCart);
  };

  const removeFromCart = item => {
    let newCart = [...cart];
    let index = newCart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
