import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./QuantityInput.module.css";

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleChange = (e) => {
    if (+e.target.value > 0) {
      setQuantity(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        disabled={quantity < 2}
        onClick={() => setQuantity((prev) => prev - 1)}
        className={styles.incrementer}>
        <FaMinus />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min={1}
        value={quantity}
        onFocus={(e) => e.target.select()}
        onChange={handleChange}
        className={styles.input}
      />
      <button
        type="button"
        onClick={() => setQuantity((prev) => prev + 1)}
        className={styles.incrementer}>
        <FaPlus />
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};

export default QuantityInput;
