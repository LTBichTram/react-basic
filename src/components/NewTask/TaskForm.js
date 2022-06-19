import React, { useRef } from 'react'
import classes from './TaskForm.module.css'

const TaskForm = props => {
    const textInputRef = useRef()
    const submitHandler = e => {
        e.preventDefault()
        const textInput = textInputRef.current.value
        if(textInput.trim().length > 0) {
            props.onEnteredTask(textInput)
        }
        textInputRef.current.value = ''
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <input
            ref={textInputRef}
            type='text'
        />
        <button type='submit'>{props.isLoading ? 'Sending...' : 'Add task'}</button>
    </form>
  )
}

export default TaskForm