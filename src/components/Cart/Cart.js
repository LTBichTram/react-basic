import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${cartCtx.totalAmount.toFixed(2)}`
    const addToCartHandler = item => {
        cartCtx.addItem({
            ...item,
            amount: 1
        })
    }
    const removeToCartHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItems = cartCtx.items.map(item => (
      <li key={item.id}>
        <CartItem
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCartHandler.bind(null, item)}
          onRemove={removeToCartHandler.bind(null, item.id)}
        />
      </li>
    ))

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <h3>Total Amount</h3>
            <span>{price}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart