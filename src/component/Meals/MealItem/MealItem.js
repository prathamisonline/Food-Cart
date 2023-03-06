import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (meal) => {
  return (
    <div className="Meals">
      <ul key={meal.id}>
        <li className="meal-name">{meal.name}</li>
        <li className="meal-detail">{meal.description}</li>
        <li className="meal-price">${meal.price}</li>
      </ul>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
