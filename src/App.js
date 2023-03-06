import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import "./App.css";
import CartItem from "./component/Cart/CartItem";
import { useState } from "react";
import CartProvider from "./component/Store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  function cartCloseHandler() {
    setIsCartShow(false);
  }
  function cartOpenHandler() {
    setIsCartShow(true);
  }
  return (
    <CartProvider className="app">
      {isCartShow && <CartItem onClose={cartCloseHandler} />}
      <Header onShowCart={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
