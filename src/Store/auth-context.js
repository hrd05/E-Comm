import React, { useState } from "react";


const AuthContext = React.createContext({
    token: '',
    isLogin: false,
    login: (token) => { },
    logout: () => { },
    email: ''
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const [token, setToken] = useState(initialToken);

    const isUserLoggedIn = !!token;
    // console.log(isUserLoggedIn);

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    const authContext = {
        token: token,
        isLogin: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        email: email
    }

    return (
        <AuthContext.Provider value={authContext} >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext;