import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <Modal className={styles["cart-items"]}>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$32.55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>Close</button>
        <button className={styles["button--alt"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
