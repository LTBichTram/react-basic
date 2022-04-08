import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilterYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }
    const expensesFilter = props.expenses.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseChart items={expensesFilter}/>
            <ExpensesList items={expensesFilter}/>
        </Card>
    )
}
export default Expenses;