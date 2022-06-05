import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const [btnIsFoamy, setBtnIsFoamy] = useState(false)
    const { items } = cartCtx
    const numberOfCartItems = items.reduce((accNumber, item) => {
        return accNumber + item.amount
    }, 0)
    const btnClass = `${classes.button} ${btnIsFoamy ? classes.bump : ''}`

    useEffect(() => {
        const timer = setTimeout(() => {
            setBtnIsFoamy(true)
        }, 300)
        return () => {
            clearTimeout(timer)
            setBtnIsFoamy(false)
        }
    }, [items])

  return (
    <button className={btnClass} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton