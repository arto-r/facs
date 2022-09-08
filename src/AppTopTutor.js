const AppTopTutor = ({ fullname, profilepic, place, }) => {
    return (
        <div className="toptutor" id={`topum${place}`}>
            <h3 className={`nh${place}`} style={{color:"white"}}>#{place}</h3>
            <div className={`n${place}`}>
                <img src={profilepic} alt={`${fullname}.jpg`}/>
                <h3>{fullname}</h3>
            </div>
        </div>
    )
}

export default AppTopTutor;