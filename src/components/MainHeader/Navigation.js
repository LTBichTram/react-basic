import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import Button from '../UI/Button/Button'
import classes from './Navigation.module.css'

const Navigation = () => {
  const authCtx = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLogedIn && <li><a>User</a></li>}
        {authCtx.isLogedIn && <li><a>Admin</a></li>}
        {authCtx.isLogedIn && <li><Button onClick={authCtx.onLogout}>Logout</Button></li>}
      </ul>
    </nav>
  )
}

export default Navigation