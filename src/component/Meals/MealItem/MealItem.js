import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const MealItem = ( props ) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <div className="Meals">
      <ul key={props.id}>
        <li className="meal-name">{props.name}</li>
        <li className="meal-detail">{props.description}</li>
        <li className="meal-price">${props.price}</li>
      </ul>
      <MealItemForm onAddToCart={addToCartHandler} />
    </div>
  );
};

export default MealItem;
