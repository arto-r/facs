const AppCourse = ({ id }) => {
    return (
        <div className="course item" id={id}>
            <img src={require("./assets/blurredfa.jpg")} alt="courseimage" />
            <div className="text">
                <h3>Course {id[1]}</h3>
                <h4 className="price">$11.99</h4>
                <div className="viewmore">&or; View More</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
            </div>
        </div>
    )
}

export default AppCourse;