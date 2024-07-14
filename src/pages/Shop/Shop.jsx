import ProductCard from "../../components/ProductCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { data } = useOutletContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Feast Your Eyes On These Bad Boys</h2>
      <ul className={styles.grid}>
        {data.length > 0 ? (
          data.map((product) => (
            <li key={product.id}>
              <ProductCard product={product}></ProductCard>
            </li>
          ))
        ) : (
          <p>There&apos;s nothing here</p>
        )}
      </ul>
    </div>
  );
};

export default Shop;
