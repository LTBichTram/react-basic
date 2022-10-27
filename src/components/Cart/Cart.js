import { useEffect, useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckOrder, setIsCheckOrder] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartList = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setIsCheckOrder(true);
    } else setIsCheckOrder(false);
  }, [cartCtx.items]);

  return (
    <Modal onClose={props.onClose}>
      <div className={styles["cart-items"]}>{cartList}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button
          className={styles.button}
          disabled={isCheckOrder}
          onClick={() => alert("hi")}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
