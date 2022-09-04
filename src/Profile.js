import Navbar from "./Navbar";
import Footer from "./Footer"
import './Profile.css'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="everything">
                <div className="teacher-profile">
                    <img className="selfie-profile" src={require("./assets/selfie.jpg")} alt="selfie.jpg"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;