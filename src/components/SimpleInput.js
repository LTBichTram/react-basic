import React from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = () => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        changeValueHandler: changeNameHandler,
        blurInputHandler: blurNameHandler,
        resetInputHandler: resetNameHandler
    } = useInput(enteredName => (enteredName.trim() !== ''))
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeValueHandler: changeEmailHandler,
        blurInputHandler: blurEmailHandler,
        resetInputHandler: resetEmailHandler
    } = useInput(enteredEmail => (enteredEmail.includes('@')))
    let formIsValid = false
    if(nameIsValid && emailIsValid) {
        formIsValid = true
    }
    const nameClasses = nameHasError ? 'form-control invalid' : 'form-control'
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'
    const submithandler = e => {
        e.preventDefault()
        console.log(enteredName, enteredEmail)
        resetNameHandler()
        resetEmailHandler()
    }

  return (
    <form onSubmit={submithandler}>
        <div className={nameClasses}>
            <label htmlFor='name'>Your Name</label>
            <input
                id='name'
                type='text'
                value={enteredName}
                onChange={changeNameHandler}
                onBlur={blurNameHandler}
            />
            {nameHasError && <p className='error-text'>Please enter a name!</p>}
        </div>
        <div className={emailClasses}>
            <label htmlFor='email'>Your Email</label>
            <input
                id='email'
                type='email'
                value={enteredEmail}
                onChange={changeEmailHandler}
                onBlur={blurEmailHandler}
            />
            {emailHasError && <p className='error-text'>Please enter a valid email address!</p>}
        </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput