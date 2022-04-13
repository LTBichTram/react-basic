import React from 'react';
import './CourseGoalItem.css';

const CourseGoalItem = props => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
    return (
        <div className="goal-item" onClick={deleteHandler}>
            {props.children}
        </div>
    )
}
export default CourseGoalItem;