import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        const newPath = localStorage.getItem('lastPath') || '/';

        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: 'Jovanny Rch',
            }
        };
        dispatchUser(action);
        history.replace(newPath);
    };
    const { user, dispatchUser } = useContext(AuthContext);


    return (
        <div>
            <h1>Login Screen</h1>
            {JSON.stringify(user.logged)}
            <hr />
            <div className="text-left">
                <button onClick={handleLogin} className="btn btn-success">Login</button>
            </div>
        </div>
    )
}
