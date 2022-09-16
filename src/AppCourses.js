import { Link } from 'react-router-dom'

import AppCourse from './AppCourse'

const AppCourses = () => {
    function reveal1() {
        var reveals = document.querySelectorAll(".item");
    
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 10;
        
            if(elementTop<windowHeight-elementVisible){
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal1);

    return(
        <>
            <h1><Link to='/courses' style={{color:'white'}}>Offered Courses</Link></h1>
            <div className="courses" >
                <Link to="/coursepage">
                    <AppCourse 
                        img={require("./assets/blurredfa.jpg")}
                        coursename={"Course 1"}
                        fname={"Name"}
                        lname={"Surname"}
                        id={"n1"} 
                        price={11.99}
                        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                Omnis deleniti voluptatibus nisi reprehenderit atque! \
                                Itaque nobis, ipsam, obcaecati veniam"
                            }
                    />
                </Link>
                <Link  to="/coursepage">
                    <AppCourse 
                        img={require("./assets/blurredfa.jpg")}
                        coursename={"Course 2"}
                        fname={"Name"}
                        lname={"Surname"}
                        id={"n2"}
                        price={11.99}
                        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                obcaecati veniam"
                            }
                    />
                </Link>
                <Link to='/coursepage'>
                    <AppCourse 
                        img={require("./assets/blurredfa.jpg")}
                        coursename={"Course 3"}
                        fname={"Name"}
                        lname={"Surname"}
                        id={"n3"}
                        price={11.99}
                        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                obcaecati veniam"
                            }
                    />
                </Link>
                <Link to='/coursepage'>
                    <AppCourse 
                        img={require("./assets/blurredfa.jpg")}
                        coursename={"Course 1"}
                        fname={"Name"}
                        lname={"Surname"}
                        id={"n4"}
                        price={11.99}
                        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                obcaecati veniam"
                            }
                    />
                </Link>
                <Link to='/courses' style={{textDecoration:"none"}}><p id="next" className="item">&#10095;</p></Link>
            </div>
        </>
    )
}

export default AppCourses