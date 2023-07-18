import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api'



 function Login({ setToken, navigate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    async function handleSubmit(event) {
        event.preventDefault();
        const user = { username, password };
        

        const results = await login(user);

        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem("token", results.data.token)
            window.alert('Thanks for logging in to our service.')
            navigate('/routines');

        }

    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <input
                type='text'
                value={username}
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type='password'
                value={password}
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
            />
            <button disabled={!username || !password} className='login-form' type='submit'>Login</button>
            <Link to='/register' color='white'>Don't have an account? Sign up</Link>
        </form>
    )
}

export default Login;