import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, price, title } = product;

  return (
    <Link to={`/shop/${id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </article>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default ProductCard;
