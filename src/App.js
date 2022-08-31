import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Header from './Header';
import AppCourses from './AppCourses';
import AppTopTutors from './AppTopTutors';
import About from './About';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='https://arto-r.github.io/facs/' element={<Home />} />
          <Route path='https://arto-r.github.io/facs/signup' element={<SignUp />} />
          <Route path='https://arto-r.github.io/facs/login' element={<Login />} />
        </Routes>
        
      </Router>
    </>
  )
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AppCourses />
      <AppTopTutors />
      <About />
      <Footer />
    </>
  )
}

export default App;
