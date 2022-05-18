import classes from './Button.module.css';

import React from 'react'

const Button = props => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      type={props.type || 'button'}
      disabled={props.disabled}
    >{props.children}</button>
  )
}

export default Button