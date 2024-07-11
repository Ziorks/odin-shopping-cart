import styles from "./Error.module.css";

import Navbar from "../../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>Error Page</div>;
    </>
  );
};

export default Error;
