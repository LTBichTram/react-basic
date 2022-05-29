import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import Button from '../../components/UI/Button/Button'
import Card from '../../components/UI/Card/Card'
import classes from './Home.module.css'

const Home = () => {
  const authCtx = useContext(AuthContext)

  return (
    <Card className={classes.home}>
      <h3>Welcome Page !!!</h3>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  )
}

export default Home