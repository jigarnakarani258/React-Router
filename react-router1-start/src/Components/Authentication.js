import React, { useState , createContext, useContext } from "react"

const AuthContext = createContext(null) ;

function AuthProvider( {children} ) {

    const [user, setUser] = useState(null);

    const login = (user) => {
        return setUser(user)
    }
    const logout = () => {
        return setUser()
    }

    return (
        <AuthContext.Provider value = {{ user , login , logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext) ;
}

export { AuthProvider , useAuth };