import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
import classes from './Counter.module.css'

const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.counter)
    const { counter, showCounter } = state
    const incrementHanlder = () => {
        dispatch(counterActions.increment())
    }
    const increaseHanlder = () => {
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }

  return (
    <div className={classes.counter}>
        <h1>redux counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHanlder}>Increment</button>
            <button onClick={increaseHanlder}>Increase</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  )
}

export default Counter