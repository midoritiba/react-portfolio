import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contacts from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <>
    <AnimatePresence>
    <Router>
        <Header />
          <Routes>
            <Route className='link' path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contacts />} />
          </Routes>
        <Footer />
        <div class="cursor" 
        style={{
          left: cursorX + 'px',
          top: cursorY + 'px'
        }} ></div>
    </Router>
  </AnimatePresence>
  </>
  );
}

export default App;
