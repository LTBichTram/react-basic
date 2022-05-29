import React, { useContext, useState, useReducer, useEffect, useRef } from 'react'
import AuthContext from '../../store/auth-context'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import classes from './Login.module.css'

const emailInit = {
    value: '',
    isValid: undefined,
}
const passwordInit = {
    value: '',
    isValid: undefined,
}
const USER_INPUT = 'USER_INPUT'
const INPUT_BLUR = 'INPUT_BLUR'
const emailReducer = (state, action) => {
    if(action.type === USER_INPUT) {
        return ({value: action.val, isValid: action.val.includes('@')})
    } else if(action.type === INPUT_BLUR) {
        return ({value: state.value, isValid: state.value.includes('@')})
    }
    return ({value: '', isValid: false})
}
const passwordReducer = (state, action) => {
    if(action.type === USER_INPUT) {
        return ({value: action.val, isValid: action.val.trim().length >= 6})
    } else if(action.type === INPUT_BLUR) {
        return ({value: state.value, isValid: state.value.trim().length >= 6})
    }
    return ({value: '', isValid: false})
}

const Login = () => {
    const authCtx = useContext(AuthContext)
    const [emailState, dispatchEmail] = useReducer(emailReducer, emailInit)
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, passwordInit)
    const [formIsValid, setFormIsValid] = useState(false)
    const {isValid: emailIsValid} = emailState
    const {isValid: passwordIsValid} = passwordState
    const emailRef = useRef()
    const passwordRef = useRef()
    const changeEmailHandler = e => {
        dispatchEmail({val: e.target.value, type: USER_INPUT})
    }
    const changePasswordHandler = e => {
        dispatchPassword({val: e.target.value, type: USER_INPUT})
    }
    const validateEmail = () => {
        dispatchEmail({type: INPUT_BLUR})
    }
    const validatePassword = () => {
        dispatchPassword({type: INPUT_BLUR})
    }
    const submitHandler = e => {
        e.preventDefault()
        if(formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value)
        } else if(!emailIsValid) {
            emailRef.current.focus()
        } else {
            passwordRef.current.focus()
        }
    }

    useEffect(() => {
        const authenticate = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid)
            console.log('Cheack Invalid')
        }, 500)
        return () => {
            clearTimeout(authenticate)
            console.log('CLEAR-UP')
        }
    }, [emailIsValid, passwordIsValid])

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <Input
                ref={emailRef}
                id='email'
                label='Email'
                type='email'
                isValid={emailIsValid}
                value={emailState.value}
                onChange={changeEmailHandler}
                onBlur={validateEmail}
            />
            <Input
                ref={passwordRef}
                id='password'
                label='Password'
                type='password'
                isValid={passwordIsValid}
                value={passwordState.value}
                onChange={changePasswordHandler}
                onBlur={validatePassword}
            />
            <div className={classes.actions}>
                <Button type='submit'>Login</Button>
            </div>
        </form>
    </Card>
  )
}

export default Login