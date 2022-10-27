import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCart = cartCtx.items.reduce(
    (currentAmount, item) => currentAmount + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
