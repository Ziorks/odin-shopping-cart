import PropTypes from "prop-types";
import styles from "./FeaturedItems.module.css";
import ProductCard from "../ProductCard";

const FeaturedItems = ({ items = [] }) => {
  return (
    <div className={styles.featuredItems}>
      <h3 className={styles.heading}>FEATURED ITEMS</h3>
      {items.length > 0 ? (
        items.map((item) => <ProductCard key={item.id} product={item} />)
      ) : (
        <p>There&apos;s nothing here</p>
      )}
    </div>
  );
};

FeaturedItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default FeaturedItems;
