import { useFetchAllProducts } from "../../hooks";
import ProductCard from "../../components/ProductCard";
import styles from "./Shop.module.css";

const Shop = () => {
  const { data, isLoading, isError } = useFetchAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Feast Your Eyes On These Bad Boys</h2>
      <ul className={styles.grid}>
        {data.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}></ProductCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
