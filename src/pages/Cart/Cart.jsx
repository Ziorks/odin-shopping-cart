// import styles from "./Cart.module.css";

import { Link, useOutletContext } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import styles from "./Cart.module.css";
import QuantityInput from "../../components/QuantityInput";

const Cart = () => {
  const {
    cart,
    handleRemove,
    handleIncrement,
    handleDecrement,
    handleQuantityChange,
    handleClear,
  } = useOutletContext();

  const handleCheckout = () => {
    //send cart somewhere? idk
    alert("Your order has been submitted.  Thanks! (not really, haha lol xd)");
    handleClear();
  };

  if (cart.length < 1) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>Your cart is empty</p>
        <Link to="/shop" className={styles.emptyLink}>
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Your Cart</h2>
        <Link to="/shop" className={styles.shopLink}>
          Continue shopping
        </Link>
      </div>
      <form>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeadings}>
              <th colSpan={2}>PRODUCT</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {cart.map((cartItem) => {
              const { id, price, title, image, quantity } = cartItem;

              return (
                <tr key={id} className={styles.cartItem}>
                  <td>
                    <Link to={`/shop/${id}`}>
                      <img src={image} alt={title} className={styles.image} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/shop/${id}`} className={styles.itemLink}>
                      {title}
                    </Link>
                    <p className={styles.price}>${price.toFixed(2)}</p>
                  </td>
                  <td>
                    <div className={styles.quantity}>
                      <QuantityInput
                        quantity={quantity}
                        handleDecrement={() => handleDecrement(id)}
                        handleIncrement={() => handleIncrement(id)}
                        handleQuantityChange={(newQuantity) =>
                          handleQuantityChange(id, newQuantity)
                        }
                      />
                      <button
                        type="button"
                        aria-label="remove"
                        onClick={() => handleRemove(id)}
                        className={styles.remove}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                  <td>
                    <p>${(quantity * price).toFixed(2)}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
      <div className={styles.footer}>
        <p className={styles.cartTotal}>
          Estimated total
          <span>
            $
            {cart
              .reduce(
                (accum, cartItem) => accum + cartItem.quantity * cartItem.price,
                0
              )
              .toFixed(2)}
          </span>
        </p>
        <p className={styles.additionalCosts}>
          Taxes, Discounts, and shipping calculated at checkout
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          className={styles.checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
