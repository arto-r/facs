import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
    return(
        // <Router>
            <div id="navbar" className="topnav">
                <ul>
                    <li><Link to='https://arto-r.github.io/facs/'>Home</Link></li>
                    <li><Link to='https://arto-r.github.io/facs/courses'>Courses</Link></li>
                    <div className="right">
                        <li><Link to='https://arto-r.github.io/facs/signup'>Sign Up</Link></li>
                        <li><Link to='https://arto-r.github.io/facs/login'>Login</Link></li>
                    </div>
                </ul>
            </div>
        // </Router>
    )
}

export default Navbar;