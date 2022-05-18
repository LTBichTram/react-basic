import React, { useState, Fragment, useEffect } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const loginHandler = (email, password) => {
    setIsLogin(true)
    localStorage.setItem('isLogin', '1')
  }
  const logoutHandler = () => {
    setIsLogin(false)
    localStorage.removeItem('isLogin')
  }

  return (
    <>
      <MainHeader isAuthenticated={isLogin} onLogout={logoutHandler}/>
      <main>
        {isLogin && <Home/>}
        {!isLogin && <Login onLogin={loginHandler}/>}
      </main>
    </>
  )
}

export default App