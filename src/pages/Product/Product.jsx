import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Product = () => {
  const { product } = useParams();

  return (
    <>
      <Navbar />
      <div>Product Page product: {product}</div>;
    </>
  );
};

export default Product;
