import Navbar from "../../components/Navbar";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>Error Page</div>
    </>
  );
};

export default Error;
