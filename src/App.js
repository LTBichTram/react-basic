import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = dataUser => {
    setUsers(preUser => {
      return [
        ...preUser,
        {userName: dataUser.userName, userAge: dataUser.userAge, id: Math.random().toString()}
      ]
    })
  }

  return (
    <div className='App'>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}
export default App;
