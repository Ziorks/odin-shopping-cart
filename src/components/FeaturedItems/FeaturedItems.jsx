import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FeaturedItems.module.css";
import ProductCard from "../ProductCard";

const FeaturedItems = ({ itemIds = [] }) => {
  const { data } = useOutletContext();
  const featuredItems = data.filter((item) => itemIds.includes(item.id));

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>FEATURED ITEMS</h3>
      <ul className={styles.grid}>
        {featuredItems.length > 0 ? (
          featuredItems.map((item) => (
            <li key={item.id}>
              <ProductCard product={item} />
            </li>
          ))
        ) : (
          <p>There&apos;s nothing here</p>
        )}
      </ul>
    </div>
  );
};

FeaturedItems.propTypes = {
  itemIds: PropTypes.arrayOf(PropTypes.number),
};

export default FeaturedItems;
