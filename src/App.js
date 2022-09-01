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

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
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
