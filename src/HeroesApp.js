import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false,
    };
}

export const HeroesApp = () => {


    const [user, dispatchUser] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatchUser }}>
            <AppRouter />
        </AuthContext.Provider>
    );
}
