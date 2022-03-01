import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Home = () => {
  return (
        <Container className='main home d-flex justify-content-center'>
            <motion.div 
            initial={{scaleY: 0}} 
            animate={{scaleY:1}} 
            exit={{scaleY:0}}
            transition={{duration: 0.5}}>
            <Row>
                <Col className='text-md-start align-self-center'>
                  <h1 className='display-1' id='type-effect'>Hello,</h1>
                  <h3 className='display-6 display-sm-3 pt-3 pt-sm-5'>I'm Michelle</h3>
                  <h4 className='pt-2 pb-sm-3 fs-4'>I am a <span class='fw-bold'>web developer</span> based in Hamburg, Germany</h4>
                  <Link className='link btn' to='/projects'>check out projects</Link>
                </Col>
            </Row>
            </motion.div>
        </Container>
  )
}

export default Home