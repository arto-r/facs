import { Link } from 'react-router-dom'

const Navbar = ({ loggedIn }) => {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", function() {
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "-1px";
        }else{
            document.getElementById("navbar").style.top = "-49px";
        }
        prevScrollpos = currentScrollPos;
    });

    return(
        <div id="navbar" className="topnav">
            <ul>
            <li><Link to='../'>Home</Link></li>
                <li><Link to='../courses'>Courses</Link></li>
                <div className="right">
                    {!loggedIn ? 
                    <>
                        <li><Link to='../signup'>Sign Up</Link></li>
                        <li><Link to='../login'>Login</Link></li>
                    </> :
                    <li><Link to='../profile'>Profile</Link></li>}
                </div>
            </ul>
        </div>
    )
}

export default Navbar;