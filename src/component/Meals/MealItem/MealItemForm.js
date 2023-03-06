import "./MealItemForm.css";
import React from "react";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const AmountInputRef = useRef();

  const sumbitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = AmountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <div>
      <form className="mealItemForm" onSubmit={sumbitHandler}>
        <Input
          ref={AmountInputRef}
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
        {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
