import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import classes from './Auth.module.css'

const Auth = () => {
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault()
        dispatch(authActions.login())
    } 

  return (
    <form className={classes.auth} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label>Email</label>
            <input type='text'/>
        </div>
        <div className={classes.control}>
            <label>Password</label>
            <input type='password'/>
        </div>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Auth