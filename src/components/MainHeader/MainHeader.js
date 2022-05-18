import Navigation from './Navigation';
import classes from './MainHeader.module.css';

import React from 'react'

const MainHeader = props => {
  return (
    <div className={classes['main-header']}>
      <h1>MinaT</h1>
      <Navigation isAuthenticated={props.isAuthenticated} onLogout={props.onLogout}/>
    </div>
  )
}

export default MainHeader