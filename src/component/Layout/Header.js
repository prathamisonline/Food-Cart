import React from "react";
import foods from "../Images/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1>FoodCart</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </div>
      <div className="header-image">
        <img src={foods} alt="foods" />
      </div>
    </>
  );
};

export default Header;
