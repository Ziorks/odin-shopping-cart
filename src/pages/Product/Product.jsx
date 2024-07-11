import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../../hooks";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Product.module.css";
import { useState } from "react";

const Product = () => {
  const { productId } = useParams();
  const { product, isLoading, isError } = useFetchSingleProduct(productId);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    if (+e.target.value > 0) {
      setQuantity(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Todo: add quantity of product to cart state
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  console.log(product);
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
            <div className={styles.quantityContainer}>
              <button
                type="button"
                disabled={quantity < 2}
                onClick={() => setQuantity((prev) => prev - 1)}
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
                onClick={() => setQuantity((prev) => prev + 1)}
                className={styles.incrementer}
              >
                <FaPlus />
              </button>
            </div>
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
