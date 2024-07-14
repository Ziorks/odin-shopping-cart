import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ nCartItems }) => {
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
        {nCartItems > 0 && (
          <div className={styles.nItems}>
            {nCartItems < 100 ? nCartItems : "99+"}
          </div>
        )}
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  nCartItems: PropTypes.number.isRequired,
};

export default Navbar;
