import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const nCartItems = cart.reduce(
    (accum, cartItem) => accum + cartItem.quantity,
    0
  );

  const handleAdd = (quantity, id) => {
    let isAdded = false;

    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          isAdded = true;
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });

      if (isAdded) {
        return newCart;
      }

      return [...prevCart, { quantity, id }];
    });
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      })
    );
  };

  return (
    <>
      <Navbar nCartItems={nCartItems} />
      <div className="content">
        <Outlet
          context={{
            cart,
            handleAdd,
            handleRemove,
            handleIncrement,
            handleDecrement,
            handleQuantityChange,
          }}
        />
      </div>
    </>
  );
};

export default App;
