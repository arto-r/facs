const AppCourse = ({ coursename, id, price, text, img, fname, lname }) => {
    return (
        <span className="course item" id={id}>
            <img src={img} alt="courseimage" />
            <div className="text">
                <h3>{coursename}</h3>
                <h3 className="price">${price}</h3>
                <h4 style={{margin:"17px 0 25px 0", color:"#777", fontWeight:400}}>{fname + " " + lname}</h4>
                <div className="viewmore">&or; View More</div>
                <p>{text}</p>
            </div>
        </span>
    )
}

export default AppCourse;