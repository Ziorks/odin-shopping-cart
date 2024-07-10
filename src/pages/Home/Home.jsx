import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>Home Page</div>
    </>
  );
};

export default Home;
