import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        history.replace('/');
    };
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <div className="text-left">
                <button onClick={handleLogin} className="btn btn-success">Login</button>
            </div>
        </div>
    )
}
