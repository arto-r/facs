import { Link } from 'react-router-dom'

const AppCourses = () => {
    return(
        // <Router>
        <>
            <h1><Link to='https://arto-r.github.io/facs/courses' style={{color:'white'}}>Offered Courses</Link></h1>
            <div className="courses">
                <Link to="https://arto-r.github.io/facs/coursepage">
                    <div className="course item" id="n1">
                        <img src={require("./assets/blurredfa.jpg")} />
                        <div className="text">
                            <h3>Course 1</h3>
                            <h4 className="price">$11.99</h4>
                            <div className="viewmore">&or; View More</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                        </div>
                    </div>
                </Link>
                <Link  to="https://arto-r.github.io/facs/coursepage">
                    <div className="course item" id="n2">
                        <img src={require("./assets/blurredfa.jpg")} />
                        <div className="text">
                            <h3>Course 2</h3>
                            <h4 className="price">$11.99</h4>
                            <div className="viewmore">&or; View More</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                        </div>
                    </div>
                </Link>
                <Link to='https://arto-r.github.io/facs/coursepage'>
                    <div className="course item" id="n3">
                        <img src={require("./assets/blurredfa.jpg")} />
                        <div className="text">
                            <h3>Course 3</h3>
                            <h4 className="price">$11.99</h4>
                            <div className="viewmore">&or; View More</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                        </div>
                    </div>
                </Link>
                <Link to='https://arto-r.github.io/facs/coursepage'>
                    <div className="course item" id="n4">
                        <img src={require("./assets/blurredfa.jpg")} />
                        <div className="text">
                            <h3>Course 4</h3>
                            <h4 className="price">$11.99</h4>
                            <div className="viewmore">&or; View More</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti voluptatibus nisi reprehenderit atque! Itaque nobis, ipsam, obcaecati veniam dignissimos assumenda laboriosam nemo placeat neque excepturi doloribus facere culpa tempore impedit omnis nulla perspiciatis cum in adipisci debitis nostrum officia? Voluptatibus similique itaque illum debitis, magnam velit. Explicabo, quis repellat.</p>
                        </div>
                    </div>
                </Link>
                <Link to='https://arto-r.github.io/facs/courses' style={{textDecoration:"none"}}><p id="next" className="item">&#10095;</p></Link>
            </div>
        </>
        // </Router>
    )
}

export default AppCourses