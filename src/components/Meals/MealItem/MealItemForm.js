import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const amountInputRef = useRef()
    const [inputIsValid, setInputIsValid] = useState(true)
    const submitHandler = e => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = + enteredAmount

        if(enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setInputIsValid(false)
        }

        props.onAddToCart(enteredAmountNumber)
    }
    
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                defaultValue: '1',
                min: '1',
                max: '5',
                step: '1',
                type: 'number'
            }}
        />
        <button type='submit'>+ Add</button>
        {!inputIsValid ? <p>Please enter a valid value (1-5)</p> : ''}
    </form>
  )
}

export default MealItemForm