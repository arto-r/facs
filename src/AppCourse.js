const AppCourse = ({ name, id, price, text, img }) => {
    return (
        <div className="course item" id={id}>
            <img src={img} alt="courseimage" />
            <div className="text">
                <h3>{name}</h3>
                <h4 className="price">${price}</h4>
                <div className="viewmore">&or; View More</div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AppCourse;