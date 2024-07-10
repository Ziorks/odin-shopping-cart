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
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>There was an error.</div>
      ) : (
        <>
          <div className={styles.container}>Shop Page</div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </>
      )}
    </>
  );
};

export default Shop;
