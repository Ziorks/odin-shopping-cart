import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useFetchAllProducts } from "./hooks";

const App = () => {
  const { data, isLoading, isError } = useFetchAllProducts();
  const [cart, setCart] = useState([]);
  const nCartItems = cart.reduce(
    (accum, cartItem) => accum + cartItem.quantity,
    0
  );

  const handleAdd = (product, quantity) => {
    let isAdded = false;

    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) => {
        if (cartItem.id === product.id) {
          isAdded = true;
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });

      if (isAdded) {
        return newCart;
      }

      return [...prevCart, { ...product, quantity }];
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
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>There was an error. Try reloading</div>
        ) : (
          <Outlet
            context={{
              data,
              cart,
              handleAdd,
              handleRemove,
              handleIncrement,
              handleDecrement,
              handleQuantityChange,
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
