import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <li className={styles["cart-item"]}>
      <h2></h2>
      <div className={styles.summary}>
        <div className={styles.price}></div>
        <div className={styles.amount}></div>
      </div>
      <div className={styles.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
