import { Link } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import aboutMe from '../assets/about-me.svg'
import cv from '../assets/cv.pdf'
import Draggable from 'react-draggable';
import {FaFileDownload} from 'react-icons/fa'

const About = () => {
  return (
    <div className="main">
    <motion.div 
    initial={{scaleY: 0}} 
    animate={{scaleY:1}} 
    exit={{scaleY:0}}
    transition={{duration: 0.5}}>
   <Container className='about main-section d-flex flex-column justify-content-center align-items-center'>

<h1 className='display-3' id="type-effect">About</h1>


            <Draggable>
              <div  className = 'about-item-card draggable' >
                <h3 className = 'about-item-title fw-bold'>Technologies</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>MongoDB</p>
                <p>Express.js</p>
                <p>Node.js</p>

                <p>Figma</p>
              </div>
              </Draggable> 
              <Draggable>
              <div  className = 'about-item-card draggable-2' >
                <h3 className = 'about-item-title fw-bold'>Hi,</h3>
                <h4 className = 'about-item-title fw-bold'>I am Michelle</h4>
                <p>I have a background in Engineering and Physics, where I had my first contact with programing (C++). I decided to change careers after working in a MakerSpace and get back in touch with coding having to work with Arduino. I am a very curious person and very focused on learning about different technologies. I believe that being a Full Stack Developer helps me keep learning new skills and never get bored :)</p>
              </div>
              </Draggable> 
              <Draggable>
              <div  className = 'about-item-card draggable-3' >
                <a className='link ' rel="noopener noreferrer" target="_blank" href={cv}><h3 className = 'hover-link text-decoration-underline about-item-title fw-bold text-light deco'>My CV</h3><FaFileDownload className='text-light fs-1'/></a>
              </div>
              </Draggable> 

              <Image className='mb-5' src={aboutMe} style={{width: "500px", borderRadius: '60px'}}/>
              <Link className='link btn' to="/contact">contact</Link>

    </Container>
    </motion.div>
    </div>
  )
}

export default About