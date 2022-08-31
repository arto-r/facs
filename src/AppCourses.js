import { Link } from 'react-router-dom'

const AppCourses = () => {
    return(
        // <Router>
        <>
            <h1><Link to='/courses' style={{color:'white'}}>Offered Courses</Link></h1>
            <div className="courses">
                <div className="course item" id="n1">
                    <img src={require("./assets/blurredfa.jpg")} />
                    <div className="text">
                        <h3>Course 1</h3>
                        <h4 className="price">$11.99</h4>
                        <a className="viewmore" href="coursepage.html">&or; View More</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                    </div>
                </div>
                <div className="course item" id="n2">
                    <img src={require("./assets/blurredfa.jpg")} />
                    <div className="text">
                        <h3>Course 2</h3>
                        <h4 className="price">$11.99</h4>
                        <a className="viewmore" href="coursepage.html">&or; View More</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                    </div>
                </div>
                <div className="course item" id="n3">
                    <img src={require("./assets/blurredfa.jpg")} />
                    <div className="text">
                        <h3>Course 3</h3>
                        <h4 className="price">$11.99</h4>
                        <a className="viewmore" href="coursepage.html">&or; View More</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                    </div>
                </div>
                <div className="course item" id="n4">
                    <img src={require("./assets/blurredfa.jpg")} />
                    <div className="text">
                        <h3>Course 4</h3>
                        <h4 className="price">$11.99</h4>
                        <a className="viewmore" href="coursepage.html">&or; View More</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                    </div>
                </div>
                <a id="next" className="item" href="courses.html">&#10095;</a>
            </div>
        </>
        // </Router>
    )
}

export default AppCourses