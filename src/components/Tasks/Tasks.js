import React from 'react'
import TaskItem from './TaskItem'
import Section from '../UI/Section'
import classes from './Tasks.module.css'

const Tasks = props => {
    let content = <h2>No tasks found. Start adding some!</h2>

    if(props.items.length > 0) {
        const tasksList = props.items.map((item, index) => (
            <TaskItem key={index}>{item.text}</TaskItem>
        ))
        content = tasksList
    }
    if(props.isLoading) {
        content = <p>Loading tasks...</p>
    }
    if(props.error) {
        content = <button onClick={props.onFetch}>Try again</button>
    }

  return (
    <Section className={classes.container}>
        <ul>
            {content}
        </ul>
    </Section>
  )
}

export default Tasks