import { Link } from 'react-router-dom'
import AppTopTutor from './AppTopTutor';

const AppTopTutors = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".toptutor");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 10;
        
            if(elementTop<windowHeight-elementVisible){
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    return(
        <div className="toptutors">
            <h1 style={{textAlign: 'center',position:'relative',top:'25px'}}><Link to='/vote' style={{color:'white'}}>Top tutors of the month</Link></h1>
            <div className="notheading">
                <Link to="/facs/profile" style={{textDecoration:"none"}}>
                    <AppTopTutor 
                        fullname="Chris Kwon"
                        profilepic={require("./assets/blurredfa.jpg")}
                        place={2}/>
                </Link>
                <Link to="/facs/profile" style={{textDecoration:"none"}}>
                    <AppTopTutor 
                        fullname="Artoghrul Rashid"
                        profilepic={require("./assets/blurredfa.jpg")}
                        place={1}/>
                </Link>
                <Link to="/facs/profile" style={{textDecoration:"none"}}>
                    <AppTopTutor 
                        fullname="Egemen Sarjkuhubhuybyi"
                        profilepic={require("./assets/blurredfa.jpg")}
                        place={3}/>
                </Link>
            </div>
        </div>
    )
}

export default AppTopTutors;