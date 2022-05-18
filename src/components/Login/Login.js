import React, { useState, useEffect, useReducer } from 'react'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import classes from './Login.module.css'

const emailInit = {
    val: '',
    isValid: undefined,
}
const passwordInit = {
    val: '',
    isValid: undefined,
}
const USER_INPUT = 'USER_INPUT'
const INPUT_BLUR = 'INPUT_BLUR'
const emailReducer = (state, action) => {
    if(action.type === USER_INPUT)
    {
        return {
            val: action.val,
            isValid: action.val.includes('@')
        }
    } else if(action.type === INPUT_BLUR)
    {
        return {
            val: state.val,
            isValid: state.val.includes('@')
        }
    }
}
const passwordReducer = (state, action) => {
    if(action.type === USER_INPUT)
    {
        return {
            val: action.val,
            isValid: action.val.trim().length >= 6
        }
    } else if(action.type === INPUT_BLUR)
    {
        return {
            val: state.val,
            isValid: state.val.trim().length >= 6
        }
    }
}

const Login = props => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, emailInit)
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, passwordInit)
    const [isValidForm, setIsValidForm] = useState(false)
    const {isValid: emailIsValid} = emailState
    const {isValid: passwordIsValid} = passwordState

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsValidForm(emailIsValid && passwordIsValid)
            console.log('Checking invalid')
        }, 500)
        return () => {
            console.log('CLEAR-UP')
            clearTimeout(timer)
        }
    }, [emailIsValid, passwordIsValid])

    const changeEmailHandler = e => {
        dispatchEmail({
            type: USER_INPUT,
            val: e.target.value,
        })
        setIsValidForm(e.target.value.includes('@') && emailState.isValid)
    }
    const changePasswordHandler = e => {
        dispatchPassword({
            type: USER_INPUT,
            val: e.target.value,
        })
        setIsValidForm(emailState.isValid && e.target.value.trim().length >= 6)
    }
    const validateEmail = e => {
        dispatchEmail({
            type: INPUT_BLUR,
            val: emailState.val,
        })
    }
    const validatePassword = e => {
        dispatchPassword({
            type: INPUT_BLUR,
            val: passwordState.val,
        })
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(emailState, passwordState)
        props.onLogin(emailState, passwordState)
    }

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
                <label>Email</label>
                <input
                    type='email'
                    value={emailState.val}
                    onChange={changeEmailHandler}
                    onBlur={validateEmail}
                />
            </div>
            <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
                <label>Password</label>
                <input
                    type='password'
                    value={passwordState.val}
                    onChange={changePasswordHandler}
                    onBlur={validatePassword}
                />
            </div>
            <div className={classes.actions}>
                <Button
                    type='submit'
                    disabled={!isValidForm}
                >
                    Login
                </Button>
            </div>
        </form>
    </Card>
  )
}

export default Login
