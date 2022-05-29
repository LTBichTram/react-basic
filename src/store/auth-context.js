import React, { useState } from 'react'

const AuthContext = React.createContext({
    isLogedIn: false,
    onLogin: () => {},
    onLogout: () => {}
})

export const AuthContextProvider = ({children}) => {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const loginHandler = () => {
        setIsLogedIn(true)
    }
    const logoutHandler = () => {
        setIsLogedIn(false)
    }
    const values = {
        isLogedIn: isLogedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }

    return (
        <AuthContext.Provider
            value={values}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext