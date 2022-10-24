import React from "react";

import mealsImage from "../../assets/images/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>REACT BASIC</h1>
        <HeaderCartButton />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table of full food" />
      </div>
    </>
  );
};

export default Header;
