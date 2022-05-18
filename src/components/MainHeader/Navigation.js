import React from 'react'
import Button from '../UI/Button/Button';
import classes from './Navigation.module.css'; 

const Navigation = props => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isAuthenticated && <li>Users</li>}
        {props.isAuthenticated && <li>Admin</li>}
        {props.isAuthenticated &&
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navigation