import { Link } from "react-router-dom";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.homeBanner}>
      <h2 className={styles.heading}>
        Buy from us and all of your wildest dreams will come true.
      </h2>
      <Link to="/shop" className={styles.button}>
        SHOP NOW
      </Link>
    </div>
  );
};

export default HomeBanner;
