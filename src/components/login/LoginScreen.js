import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        /* SI NO EXISTE LO REDIRECCIONAMOS AL VALOR POR DEFECTO */
        const lastPath = localStorage.getItem('lastPath') || '/';

        // history.push('/')
        dispatch( {
            type: types.login,
            payload: {
                name: 'Mateo'
            }
        })
        
        history.replace( lastPath )
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

/* ANOTACIONES */
/*
 * En los props utilizamos el History haciendo destructuring para usar la funcion Replace y/o Push
 *
*/
