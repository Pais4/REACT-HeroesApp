import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

/* DEFINIMOS EL INIT PARA LEER EL LOCALSTORAGE */
/* SI NO EXISTE RETORNAMOS UN OBJETO QUE TENGA EL LOGGED EN FALSE */
const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}

export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify( user ))
    }, [user])
 
    return (
        <AuthContext.Provider value={ { user,dispatch } } >
            <AppRouter />
        </AuthContext.Provider>
    )
}

/* ANOTACIONES */
/*
 * rafc -> Shortcut para crear la estructura basica. 
 */