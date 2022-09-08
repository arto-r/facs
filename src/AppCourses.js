import { Link } from 'react-router-dom'

import AppCourse from './AppCourse'

const AppCourses = () => {

    function reveal1() {
        var reveals = document.querySelectorAll(".item");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;
        
            if(elementTop<windowHeight-elementVisible){
                reveals[i].classList.add("active");
            }
        }
    }
    var prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll", reveal1);
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
        <>
            <h1><Link to='/courses' style={{color:'white'}}>Offered Courses</Link></h1>
            <div className="courses" >
                <Link to="/coursepage">
                    <AppCourse id={"n1"} />
                </Link>
                <Link  to="/coursepage">
                    <AppCourse id={"n2"} />
                </Link>
                <Link to='/coursepage'>
                    <AppCourse id={"n3"} />
                </Link>
                <Link to='/coursepage'>
                    <AppCourse id={"n4"} />
                </Link>
                <Link to='/courses' style={{textDecoration:"none"}}><p id="next" className="item">&#10095;</p></Link>
            </div>
        </>
    )
}

export default AppCourses