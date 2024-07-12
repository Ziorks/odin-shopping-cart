import styles from "./FeaturedItems.module.css";
import ProductCard from "../ProductCard";
import { useFetchAllProducts } from "../../hooks";

const FeaturedItems = () => {
  const { data, isLoading, isError } = useFetchAllProducts();
  const featuredItemIds = [5, 8, 14, 18];

  const Items = () => {
    const featuredItems = data.filter((item) =>
      featuredItemIds.includes(item.id)
    );

    return (
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
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>FEATURED ITEMS</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>There was an error</div>
      ) : (
        <Items />
      )}
    </div>
  );
};

export default FeaturedItems;
