import { Link } from 'react-router-dom'
import Footer from "./Footer"
import './Profile.css'
import AppCourse from './AppCourse'
import Navbar from './Navbar'

const Profile = ({ number }) => {

    return (
        <>
            <Navbar loggedIn={true} />
            <div className="everything">
                <div className="teacher-profile">
                    <img className="selfie-profile" src={require("./assets/selfie.jpg")} alt="selfie.jpg"/>
                    <h1>Artoghrul Rashid</h1>
                    <a href="malto:artoghrul.rashid23@fryeburgacademy.org" target="_blank" rel="noreferrer" style={{textDecoration:"none", wordBreak:"break-word"}}>
                        <i style={{color:"#777",textDecoration:"none"}}>artoghrul.rashid23@fryeburgacademy.org</i>
                    </a>
                    <br />
                    <h2>Other Contacts</h2>
                    <p>Phone Number: +994506352447</p>
                    <p>Snapchat: artoooo.o</p>
                    <p>Instagram: arto_rashid</p>
                    <p>Facebook: ----</p>
                </div>

                <div className='profilecoursesandh1' >
                    <h1>Artoghrul's Bio</h1>
                    
                    <p style={{color:"white", marginLeft:"20px"}}>Lorem ipsum dolor qui ad, mollitia, similique aliquam distinctio! Vero, harum rerum. Vel nobis eos atque corporis ipsa magnam doloremque, quis commodi voluptatibus fugit sit minus dolores. Fugiat nihil itaque cumque est sapiente ad nisi vero! Itaque tempora nemo quidem placeat cumque labore voluptatum maiores asperiores est, dignissimos provident sunt reprehenderit nam nesciunt pariatur a ab architecto voluptatibus odio necessitatibus, inventore deserunt recusandae! Veniam exercitationem mollitia saepe aliquam delectus optio odio debitis.</p>
                    <h1>Courses Offered by Artoghrul</h1>

                    <div id="profilecourses" style={{gridTemplateColumns:number>3?"repeat(4,1fr)":`repeat(${number}, 1fr)`}}>
                        <div className='profilecourse'>
                            <Link to="/coursepage">
                                <AppCourse 
                                    img={require("./assets/blurredfa.jpg")}
                                    coursename={"Course 1"}
                                    fname={"Name"}
                                    lname={"Surname"}
                                    id={"n1"}
                                    price={11.99}
                                    text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                                            Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, \
                                            obcaecati veniam"
                                        }
                                />
                            </Link>
                        </div>

                        <div className='profilecourse'>
                            <Link to="/coursepage">
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
                        </div>

                        <div className='profilecourse'>
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
                        </div>

                        {/* <div className='profilecourse'>
                            <Link to='/coursepage'>
                                <AppCourse 
                                    img={require("./assets/blurredfa.jpg")}
                                    coursename={"Course 4"}
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
                        </div> */}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;