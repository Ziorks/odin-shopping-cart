import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./QuantityInput.module.css";

const QuantityInput = ({
  quantity,
  handleIncrement,
  handleDecrement,
  handleQuantityChange,
}) => {
  const handleChange = (e) => {
    if (+e.target.value > 0) {
      handleQuantityChange(+e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        disabled={quantity < 2}
        onClick={handleDecrement}
        className={styles.incrementer}
      >
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
        onClick={handleIncrement}
        className={styles.incrementer}
      >
        <FaPlus />
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default QuantityInput;
