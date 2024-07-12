import styles from "./FeaturedItems.module.css";
import ProductCard from "../ProductCard";
import { useOutletContext } from "react-router-dom";

const FeaturedItems = () => {
  const { data } = useOutletContext();
  const featuredItemIds = [5, 8, 14, 18];
  const featuredItems = data.filter((item) =>
    featuredItemIds.includes(item.id)
  );

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

export default FeaturedItems;
