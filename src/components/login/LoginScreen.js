import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        // history.push('/')
        history.replace('/')
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
