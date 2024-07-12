import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Product.module.css";
import QuantityInput from "../../components/QuantityInput";

const Product = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data, handleAdd } = useOutletContext();
  const navigate = useNavigate();
  const product = data.find((product) => product.id === +productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(product, quantity);
    navigate("/cart");
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const { image, title, rating, description, price } = product;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.panel}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.rating}>
          Rated {rating.rate} of 5 by {rating.count} users
        </p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <p className={styles.description}>{description}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <QuantityInput
              quantity={quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleQuantityChange={handleQuantityChange}
            />
          </div>
          <button type="submit" className={styles.addBtn}>
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
