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

    function myFunction() {
        var x = document.getElementById("navbar");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
     }

    return(
        <div id="navbar" className="topnav">
            <Link to='/facs'>Home</Link>
            <Link to='/facs/courses'>Courses</Link>
            <div className="right">
                {!loggedIn ? 
                <>
                    <Link to='/facs/signup'>Sign Up</Link>
                    <Link to='/facs/login'>Login</Link>
                </> :
                <Link to='/facs/profile'>Profile</Link>}
            </div>
            <a className='icon' onClick={myFunction}><i className="fa fa-bars"></i></a>
        </div>
    )
}

export default Navbar;