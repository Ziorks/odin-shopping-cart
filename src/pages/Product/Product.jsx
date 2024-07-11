import { useParams } from "react-router-dom";
// import styles from "./Product.module.css";

const Product = () => {
  const { productId } = useParams();

  return <div>Product Page product: {productId}</div>;
};

export default Product;
