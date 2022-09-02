import { Link } from 'react-router-dom'

const AppTopTutors = () => {

    return(
        <div className="toptutors">
            <h1 style={{textAlign: 'center',position:'relative',top:'25px'}}><Link to='/vote' style={{color:'white'}}>Top tutors of the month</Link></h1>
            <div className="notheading">
                <Link to="/profile" style={{textDecoration:"none"}}>
                    <div className="toptutor" id="topnum2">
                        <h3 className="nh2">#2</h3>
                        <div className="n2">
                            <img src={require("./assets/blurredfa.jpg")} />
                            <h3>Chris Kwon</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/profile" style={{textDecoration:"none"}}>
                    <div className="toptutor" id="topnum1">
                        <h3 className="nh1">#1</h3>
                        <div className="n1">
                            <img src={require("./assets/blurredfa.jpg")} />
                            <h3>Artoghrul Rashid</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/profile" style={{textDecoration:"none"}}>
                    <div className="toptutor" id="topnum3">
                        <h3 className="nh3">#3</h3>
                        <div className="n3">
                            <img src={require("./assets/blurredfa.jpg")} />
                            <h3>Egemen Sarjkuhubhuybyi</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AppTopTutors;