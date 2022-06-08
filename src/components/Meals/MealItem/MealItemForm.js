import React, { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    let amountInputRef = useRef()
    const submitHandler = e => {
      e.preventDefault()
      const enteredAmount = amountInputRef.current.value
      const enteredAmountNumber = + enteredAmount
      props.onAmount(enteredAmountNumber)
      amountInputRef.current.value = '1'
    }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                type: 'number',
            }}
        />
        <button type='submit' className={classes.button}>+ Add</button>
    </form>
  )
}

export default MealItemForm