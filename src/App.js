import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contacts from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <AnimatePresence>
    <Router>
    <CustomCursor
      targets={['.link']}
      customClass='custom-cursor'
      dimensions={50}
      fill='#FF6900'
      smoothness={{
        movement: 0.36,
        scale: 0.07,
        opacity: 0.2,
      }}
      targetOpacity={0.6}
    />
        <Header />
          <Routes>
            <Route className='link' path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contacts />} />
          </Routes>
        <Footer />
    </Router>
  </AnimatePresence>
  );
}

export default App;
