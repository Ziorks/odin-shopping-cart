import { useFetchAllProducts } from "../../hooks";
import ProductCard from "../../components/ProductCard";
import styles from "./Shop.module.css";

const Shop = () => {
  const { products, isLoading, isError } = useFetchAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  return (
    <>
      <h2 className={styles.heading}>Feast Your Eyes On These Bad Boys</h2>
      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}></ProductCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Shop;
