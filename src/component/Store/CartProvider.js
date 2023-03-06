import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addCartHandler = () => {};
  const removeCartHandler = () => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addCartHandler,
    removeItem: removeCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
