import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    /* RENOMBRAMOS EL COMPONENTE */
    component: Component,
    /* RESTO DE LOS COMPONENTES */
    ...rest
}) => {

    // console.log(rest)
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}