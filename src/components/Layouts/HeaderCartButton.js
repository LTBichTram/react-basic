import React, { useContext, useState, useEffect } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnCartAni, setBtnCartAni] = useState(false);
  const classes = `${styles.button} ${btnCartAni ? styles.bump : ""}`;
  const numberOfCart = cartCtx.items.reduce(
    (currentAmount, item) => currentAmount + item.amount,
    0
  );

  useEffect(() => {
    setBtnCartAni(true);
    const timer = setTimeout(() => setBtnCartAni(false), 300);
    return () => clearTimeout(timer);
  }, [numberOfCart]);

  return (
    <button className={classes} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
