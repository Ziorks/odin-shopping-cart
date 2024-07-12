// import styles from "./Cart.module.css";

import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import QuantityInput from "../../components/QuantityInput";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    handleRemove,
    handleIncrement,
    handleDecrement,
    handleQuantityChange,
  } = useOutletContext();

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
      <form onSubmit={(e) => e.preventDefault()}>
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
              const quantity = cartItem.quantity;
              const { id, price, title, image } = cartItem.product;

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
                (accum, cartItem) =>
                  accum + cartItem.product.price * cartItem.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </p>
        <p className={styles.additionalCosts}>
          Taxes, Discounts, and shipping calculated at checkout
        </p>
        <button type="submit" className={styles.checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      product: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
      }),
    })
  ),
};

export default Cart;
