import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    if (cart.length>0){
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  },[cart])

  useEffect(()=>{
 const data = localStorage.getItem("cart")
 if (data) {setCart(JSON.parse(data))}
  },[])

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
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
