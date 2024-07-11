import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaRegSadCry } from "react-icons/fa";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <FaRegSadCry className={styles.graphic} />
        <p className={styles.message}>Page not found</p>
        <Link to="/shop" className={styles.link}>
          Continue shopping
        </Link>
      </div>
    </>
  );
};

export default Error;
