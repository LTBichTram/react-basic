import React from 'react'
import useHttp from '../../hooks/use-http'
import Section from '../UI/Section'
import TaskForm from './TaskForm'

const NewTask = props => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp()
    const createData = (textData, data) => {
        const generatedId = data.name 
        const enteredData = {
            id: generatedId,
            text: textData
        }
        props.onAddTask(enteredData)
    }
    const enteredTaskHandler = textData => {
        sendTaskRequest({
            url: 'https://test-cb02a-default-rtdb.firebaseio.com/tasks.json',
            method: 'POST',
            body: {text: textData},
            header: {
                'Content-Type': 'application/json'
            }
        }, createData.bind(null, textData));
    }
    
  return (
    <Section>
        <TaskForm
            isLoading={isLoading}
            onEnteredTask={enteredTaskHandler}
        />
        {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask