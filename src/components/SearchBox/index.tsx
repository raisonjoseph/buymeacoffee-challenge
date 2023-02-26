import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "../../assets/images/search_icon.svg";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.icon}>
        <img src={SearchIcon} alt="search" />
      </div>
      <input className={styles.inputField} placeholder="Search creators" />
    </div>
  );
};

export default SearchBox;
