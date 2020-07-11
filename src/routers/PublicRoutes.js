import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
export const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={
                (props) =>
                    (!isAuthenticated) ?
                        (<Component {...props} />) :
                        (<Redirect to="/" />)
            }
        >

        </Route>
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};