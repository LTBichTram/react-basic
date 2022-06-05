import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import classes from './Cart.module.css'

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx
    const hasItems = items.length !== 0
    const price = `$${cartCtx.totalAmount.toFixed(2)}`
    const addItemHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        })
    }
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItems = items.map(item => (<li key={item.id}>
        <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
        />
    </li>))

  return (
    <Modal onClose={props.onClose}>
        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div className={classes.total}>
            <h3>Total Amount</h3>
            <div>{price}</div>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart