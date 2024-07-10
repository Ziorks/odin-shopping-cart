import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const nItems = 10;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.home}>
        Home
      </Link>
      <Link to="/shop" className={styles.shop}>
        Shop
      </Link>
      <Link to="/cart" className={styles.cart}>
        <TiShoppingCart />
        {nItems > 0 && (
          <div className={styles.nItems}>{nItems < 100 ? nItems : "99+"}</div>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
