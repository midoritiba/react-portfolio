import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    
    <Container className='main d-flex flex-column justify-content-center align-items-center'>
        <motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY:1}} 
        exit={{scaleY:0}}
        transition={{duration: 0.5}}>
            <h1 class="display-3 mb-5" id="type-effect">Contact,</h1>    
            <ContactForm />
        </motion.div>
    </Container>
    
  )
}

export default Contact