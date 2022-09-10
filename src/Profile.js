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
                        <AppCourse 
                            img={require("./assets/blurredfa.jpg")}
                            name={"Course 1"}
                            id={"n1"}
                            price={11.99}
                            text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                    Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                    obcaecati veniam"
                                }
                        />
                    </Link>
                    <Link  to="/coursepage">
                        <AppCourse 
                            img={require("./assets/blurredfa.jpg")}
                            name={"Course 2"}
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
                            name={"Course 3"}
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
                            name={"Course 4"}
                            id={"n4"}
                            price={11.99}
                            text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                    Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                    obcaecati veniam"
                                }
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;