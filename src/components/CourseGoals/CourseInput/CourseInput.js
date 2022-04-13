import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const changeValueHandler = e => {
      if(e.target.value.trim().length > 0) {
          setIsValid(true);
      }
      setEnteredValue(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    if(enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
    }
    console.log();
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  }

  return (
    <form onSubmit={submitHandler}>
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
            <label htmlFor="inputText">Course Goal</label>
            <input
                type="text"
                value={enteredValue}
                onChange={changeValueHandler}
                id="inputText"
            />
        </div>
        <Button type="submit">Add Goal</Button>
    </form>
  )
}
export default CourseInput;