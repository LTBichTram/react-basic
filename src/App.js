import React, { useContext } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import AuthContext from './store/auth-context'

const App = () => {
  const authCtx = useContext(AuthContext)

  return (
    <>
      <MainHeader/>
      <main>
        {!authCtx.isLogedIn && <Login/>}
        {authCtx.isLogedIn && <Home/>}
      </main>
    </>
  )
}

export default App