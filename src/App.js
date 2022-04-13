import React, { useState } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  const addGoalHandler = goalText => {
    setCourseGoals(preGoals => {
      const updateGoal = [...preGoals];
      updateGoal.unshift({id: Math.random().toString(), text: goalText});
      return updateGoal;
    })
  }
  const deleteHandler = goalID => {
    const updateGoals = courseGoals.filter(goal => goal.id !== goalID);
    setCourseGoals(updateGoals);
  }
  let content = (<p style={{textAlign: 'center'}}>No course goals!</p>)
  if(courseGoals.length > 0) {
    content = (<CourseGoalList items={courseGoals} onDeleteItem={deleteHandler}/>)
  }

  return (
    <div className="App">
      <div id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </div>
      <div id="goals">
        {content}
      </div>
    </div>
  );
}

export default App;
