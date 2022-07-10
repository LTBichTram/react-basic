import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'
import classes from './Cart.module.css'

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false) 
    const cartCtx = useContext(CartContext)
    const price = `$${cartCtx.totalAmount.toFixed(2)}`
    const [isSubmiting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
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
    const emptyCart = cartCtx.items.length === 0
    const cartActions = <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
      <button className={classes.button} disabled={emptyCart} onClick={() => setIsCheckout(true)}>Order</button>
    </div>

    const confirmHandler = async(info) => {
      setIsSubmitting(true)
      await fetch('https://test-cb02a-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          info: info,
          order: cartCtx.items
        }),
        header: {
          'Content-Type': 'application/json'
        }
      })
      setIsSubmitting(false)
      setDidSubmit(true)
      cartCtx.clearCart()
    }
    const modalContent = <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
          <h3>Total Amount</h3>
          <span>{price}</span>
      </div>
      {!isCheckout && cartActions}
      {isCheckout && <Checkout onCloseCart={props.onCloseCart} onConfirm={confirmHandler}/>}
    </div> 
    const isSubmitingModalContent = <p>Sending order data...</p>
    const didSubmitModal = <p>Successfully sent the order!</p> 

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmiting && !didSubmit && modalContent}
      {isSubmiting && !didSubmit && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModal}
    </Modal>
  )
}

export default Cart