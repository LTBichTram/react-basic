import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import classes from './Input.module.css'

const Input = (props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus()
    }
  }))

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default forwardRef(Input)