import { Link } from 'react-router-dom'
import Footer from "./Footer"
import './Profile.css'
import AppCourse from './AppCourse'
import Navbar from './Navbar'

const Profile = () => {
    return (
        <>
            <Navbar loggedIn={true} />
            <div className="everything">
                <div className="teacher-profile">
                    <img className="selfie-profile" src={require("./assets/selfie.jpg")} alt="selfie.jpg"/>
                </div>
                <div className='courses'>
                    <Link to="/coursepage">
                        <AppCourse id={"p1"} />
                    </Link>
                    <Link  to="/coursepage">
                        <AppCourse id={"p2"} />
                    </Link>
                    <Link to='/coursepage'>
                        <AppCourse id={"p3"} />
                    </Link>
                    <Link to='/coursepage'>
                        <AppCourse id={"p4"} />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;