import React from "react";
import MealItem from "./MealItem/MealItem";
import "./AvailableMeals.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <div className="all-meals">
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </div>
  );
};

export default AvailableMeals;
