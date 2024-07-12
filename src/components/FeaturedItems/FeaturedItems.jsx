import styles from "./FeaturedItems.module.css";
import ProductCard from "../ProductCard";
import { useFetchMultipleProducts } from "../../hooks";

const FeaturedItems = () => {
  const { products, isLoading, isError } = useFetchMultipleProducts([
    2, 8, 14, 17,
  ]);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>FEATURED ITEMS</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>There was an error</div>
      ) : (
        <ul className={styles.grid}>
          {products.length > 0 ? (
            products.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))
          ) : (
            <p>There&apos;s nothing here</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default FeaturedItems;
