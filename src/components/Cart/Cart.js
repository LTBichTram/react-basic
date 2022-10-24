import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles["cart-items"]}>
      <div className={styles.total}>
        <h2>Total Amount</h2>
        <span>$32.55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>Close</button>
        <button className={styles["button--alt"]}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
