import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInwithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Log In</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInwithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your-email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;