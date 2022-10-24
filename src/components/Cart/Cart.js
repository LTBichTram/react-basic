import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose} className={styles["cart-items"]}>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$32.55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onClose}>
          Close
        </button>
        <button className={styles["button--alt"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
