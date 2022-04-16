import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const changeNameHandler = e => {
        setEnteredName(e.target.value);
    }
    const changeAgeHandler = e => {
        setEnteredAge(e.target.value);
    }
    const cancelHandler = () => {
        setError(null);
    }
    const submitHandler = e => {
        e.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age!'
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (age > 0)!'
            })
            return;
        }
        const dataUser = {
            userName: enteredName,
            userAge: enteredAge
        }
        props.onAddUser(dataUser);
        setEnteredName('');
        setEnteredAge('');
    }

    return (
        <Card className={classes.input}>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onCancel={cancelHandler}
                />
            )}
            <form onSubmit={submitHandler}>
                <label htmlFor='fullname'>FullName</label>
                <input
                    id='fullname'
                    type='text'
                    value={enteredName}
                    onChange={changeNameHandler}
                />
                <label htmlFor='age'>Age</label>
                <input
                    id='age'
                    type='number'
                    value={enteredAge}
                    onChange={changeAgeHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}
export default AddUser;