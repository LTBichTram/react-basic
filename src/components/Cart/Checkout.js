import React from 'react'
import useInput from '../../hooks/use-input'
import classes from './Checkout.module.css'

const isNotEmpty = value => (value !== '')
const isPhone = value => (value.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/))

const Checkout = props => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        changeValueHandler: changeNameHandler,
        blurValueHandler: blurNameHandler,
        resetValueHandler: resetNameHandler
    } = useInput(isNotEmpty)
    const {
        value: enteredAddress,
        isValid: addressIsValid,
        hasError: addressHasError,
        changeValueHandler: changeAddressHandler,
        blurValueHandler: blurAddressHandler,
        resetValueHandler: resetAddressHandler
    } = useInput(isNotEmpty)
    const {
        value: enteredPhone,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        changeValueHandler: changePhoneHandler,
        blurValueHandler: blurPhoneHandler,
        resetValueHandler: resetPhoneHandler
    } = useInput(isNotEmpty)
    const formValidate = nameIsValid && addressIsValid && phoneIsValid
    const submitFormHandler = e => {
        e.preventDefault()
        if(!formValidate) {
            
        }
        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            phone: enteredPhone
        })
        resetNameHandler()
        resetAddressHandler()
        resetPhoneHandler()
    }
    const nameClasses = nameHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    const addressClasses = addressHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    const phoneClasses = phoneHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={nameClasses}>
            <label htmlFor='name'>Your Name</label>
            <input
                id='name'
                type='text'
                value={enteredName}
                onChange={changeNameHandler}
                onBlur={blurNameHandler}
            />
        </div>
        <div className={addressClasses}>
            <label htmlFor='address'>Address</label>
            <input
                id='address'
                type='text'
                value={enteredAddress}
                onChange={changeAddressHandler}
                onBlur={blurAddressHandler}
            />
        </div>
        <div className={phoneClasses}>
            <label htmlFor='phone'>Phone</label>
            <input
                id='phone'
                type='number'
                value={enteredPhone}
                onChange={changePhoneHandler}
                onBlur={blurPhoneHandler}
            />
        </div>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onCloseCart}>Close</button>
            <button className={`${classes.button} ${classes.submit}`} disabled={!formValidate}>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout