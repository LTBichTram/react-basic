import React from 'react'
import classes from './TaskItem.module.css'

const TaskItem = props => {
  return (
    <div className={classes.task}>
        {props.children}
    </div>
  )
}

export default TaskItem