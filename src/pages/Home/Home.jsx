import FeaturedItems from "../../components/FeaturedItems";
import HomeBanner from "../../components/HomeBanner";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <HomeBanner />
        <FeaturedItems />
      </div>
    </>
  );
};

export default Home;
