import { useFetchProducts } from "../../hooks";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import styles from "./Shop.module.css";

const Shop = () => {
  const { products, isLoading, isError } = useFetchProducts();

  console.log(products);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>There was an error.</div>
        ) : (
          <>
            <h2 className={styles.heading}>
              Feast Your Eyes On These Bad Boys
            </h2>
            <ul className={styles.grid}>
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product}></ProductCard>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Shop;
