import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./Product.module.css";

const Product = () => {
  const { product } = useParams();

  return (
    <>
      <Navbar />
      <div className={styles.container}>Product Page product: {product}</div>
    </>
  );
};

export default Product;
