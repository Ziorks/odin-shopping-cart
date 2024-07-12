import { useNavigate, useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../../hooks";
import styles from "./Product.module.css";
import { useState } from "react";
import QuantityInput from "../../components/QuantityInput";

const Product = () => {
  const { productId } = useParams();
  const { product, isLoading, isError } = useFetchSingleProduct(productId);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Todo: add quantity of product to cart state
    navigate("/cart");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.panel}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.rating}>
          Rated {product.rating.rate} of 5 by {product.rating.count} users
        </p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
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
