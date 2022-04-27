import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const username = "wissenakamedie"
  const name = "james"
  const surname = "hetfield"
  const img = "https://i.pinimg.com/originals/59/2c/7b/592c7bb98bd5b43da5cb5eb92f38616d.jpg"
  return (
    <>
    
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
    </Routes>
    <Contact username={username} name={name} surname={surname} img={img}/>
    <Footer></Footer>
    </>
  );
}
export default App;
