import './Login.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign Up Page';
    }); 

    return(
        <form action="/add" id="form">
            
            <h1>Sign Up</h1>

            <input type="email" id="smail" name="smail" placeholder="School Email" className="textbox" required />
            <input type="password" id="pass" name="pass" placeholder="Password" className="textbox" required />
            <input type="password" id="repass" name="repass" placeholder="Repeat Password" className="textbox" required />
            
            <input type="submit" id="signup" value="Sign Up" />
                
            <Link to='./login'>Already have an account?</Link>
            
        </form>
    )
}

export default SignUp