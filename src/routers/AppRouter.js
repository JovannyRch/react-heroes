import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <Router>
            <div>

                <Switch>
                    <PublicRoutes path="/login" isAuthenticated={user.logged} component={LoginScreen} />

                    <PrivateRoutes
                        path="/"
                        component={DashboardRouter}
                        isAuthenticated={user.logged}
                    />

                </Switch>
            </div>
        </Router>
    )
}
