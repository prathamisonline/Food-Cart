import React from "react";
import "./CartItem.css";
import Modal from "../UI/Model";

const CartItem = (props) => {
  const cart = (
    <ul className="cart-item">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cart}
      <div className="total">
        <span>Total amout</span>
        <span>65.34</span>
      </div>
      <div className="actions">
        <button className="btn-close" onClick={props.onClose}>
          Close
        </button>
        <button className="btn-order">Order</button>
      </div>
    </Modal>
  );
};

export default CartItem;
