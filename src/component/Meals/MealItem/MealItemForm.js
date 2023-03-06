import "./MealItemForm.css";
import React from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <div>
      <form className="mealItemForm">
        <Input
          lable="Amount"
          input={{
            min: "1",
            max: "5",
            id: "amount_" + props.id,
            steps: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
