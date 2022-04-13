import React from 'react';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
    return (
        <ul className="goal-list">
            {
                props.items.map(item => (
                    <CourseGoalItem
                        id={item.id}
                        key={item.id}
                        onDelete={props.onDeleteItem}
                    >
                        {item.text}
                    </CourseGoalItem>
                ))
            }
        </ul>
    )
}
export default CourseGoalList;