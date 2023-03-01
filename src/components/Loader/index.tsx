import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={styles.loader}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};

export default Loader;
