import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseData = expense => {
        const expenseData = {
            id: Math.random(),
            ...expense
        }
        props.onAddExpense(expenseData);
    }
    const startEditing = () => {
        setIsEditing(true);
    }
    const stopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (<button onClick={startEditing}>Add New Expense</button>)}
            {isEditing && (<ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseData}/>)}
        </div>
    )
}
export default NewExpense;