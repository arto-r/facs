import './Login.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    useEffect(() => {
        document.title = 'Login Page';
    });    
    return (
        <form action="/add" id="form">
          
            <h1>Log in</h1>

            <input type="email" id="smail" name="smail" placeholder="School Email" className="textbox" />
            <input type="password" id="pass" name="pass" placeholder="Password" className="textbox" />
          
            <input type="submit" id="signup" value="Log in" />

            <Link to='../signup'>Don't have an account?</Link>
            <a>Forgot Password?</a>
          
        </form>
    )
}

export default Login;