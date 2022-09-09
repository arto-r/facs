import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Header from './Header';
import AppCourses from './AppCourses';
import AppTopTutors from './AppTopTutors';
import About from './About';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login';
import Coursepage from './Coursepage';
import Courses from './Courses';
import Profile from './Profile';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='loggedin' element={<HomeLoggedIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='coursepage' element={<Coursepage />} />
        <Route path='courses' element={<Courses />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </>
  )
}

const Home = () => {
  return (
    <>
      <Navbar loggedIn={false}/>
      <Header />
      <AppCourses />
      <AppTopTutors />
      <About />
      <Footer />
    </>
  )
}

const HomeLoggedIn = () => {
  return (
    <>
      <Navbar loggedIn={true}/>
      <Header />
      <AppCourses />
      <AppTopTutors />
      <About />
      <Footer />
    </>
  )
}

export default App;
