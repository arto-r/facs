import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
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

  useEffect(() => {
    document.title = 'Home Page';
  }); 
  
  return (
    <>
      <Routes>
        <Route path='/facs/' element={<Home />} />
        <Route path='/facs/loggedin' element={<HomeLoggedIn />} />
        <Route path='/facs/signup' element={<SignUp />} />
        <Route path='/facs/login' element={<Login />} />
        <Route path='/facs/coursepage' element={<Coursepage />} />
        <Route path='/facs/courses' element={<Courses />} />
        <Route path='/facs/profile' element={<Profile number={3} />} />
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
