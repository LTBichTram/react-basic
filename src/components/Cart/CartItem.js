import { useContext } from "react";

import CartContext from "../../store/cart-context";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addItemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      amount: 1,
    });
  };
  const removeItemHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{price}</div>
          <div className={styles.amount}>x{props.amount}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={addItemHandler}>+</button>
        <button onClick={removeItemHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
