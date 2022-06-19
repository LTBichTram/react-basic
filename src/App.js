import React, { useEffect, useState } from 'react'
import useHttp from './hooks/use-http'
import NewTask from './components/NewTask/NewTask'
import Tasks from './components/Tasks/Tasks'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()
  const addTaskHandler = task => {
    setTasks(preTask => preTask.concat(task))
  }

  useEffect(() => {
    const transformed = data => {
      const loadedData = []
      for(const keyData in data) {
        loadedData.push({id: data[keyData].id, text: data[keyData].text})
      }
      setTasks(loadedData)
    }

    fetchTasks({
      url: 'https://test-cb02a-default-rtdb.firebaseio.com/tasks.json',
    }, transformed)
  }, [fetchTasks])

  return (
    <>
      <NewTask onAddTask={addTaskHandler}/>
      <Tasks
        items={tasks}
        isLoading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  )
}

export default App