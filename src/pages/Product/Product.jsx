import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks";
import styles from "./Product.module.css";
import { useState } from "react";
import QuantityInput from "../../components/QuantityInput";

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useFetchProduct(productId);
  const [quantity, setQuantity] = useState(1);
  const { handleAdd } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(data, quantity);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  const { image, title, rating, description, price } = data;

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
