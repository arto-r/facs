import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div id="navbar" className="topnav">
            <ul>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='courses'>Courses</Link></li>
                <div className="right">
                <li><Link to='signup'>Sign Up</Link></li>
                    <li><Link to='login'>Login</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;