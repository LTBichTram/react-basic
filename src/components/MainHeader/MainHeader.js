import React from 'react'
import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <div className={classes['main-header']}>
      <h1>MinaT</h1>
      <Navigation/>
    </div>
  )
}

export default MainHeader