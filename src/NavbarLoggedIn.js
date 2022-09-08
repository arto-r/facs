import { Link } from "react-router-dom";

const NavbarLoggedIn = () => {
    return(
        <div id="navbar" className="topnav">
            <ul>
            <li><Link to='../'>Home</Link></li>
                <li><Link to='../courses'>Courses</Link></li>
                <div className="right">
                    <li><Link to='../profile'>Profile</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default NavbarLoggedIn;