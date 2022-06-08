import React, { useContext } from 'react'
import CartIcon from '../UI/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)
  const numberOfCart = cartCtx.items.reduce((accNumber, item) => {
    return accNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCart}</span>
    </button>
  )
}

export default HeaderCartButton