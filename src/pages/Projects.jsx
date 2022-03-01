import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import { motion } from 'framer-motion'
import myProjects from '../data/myProjects'

const Projects = () => {
  const displayProjects = myProjects.map((project, id)=> {
    return (
      <Col key = {id} className='col-12 col-lg-4'>
          <Project projectData={myProjects[id]}></Project>
      </Col>
    )
})

  return (
    <Container className='main home d-flex justify-content-center'>
      <div class='scroll' id='style-4'>
        <motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY:1}} 
        exit={{scaleY:0}}
        transition={{duration: 0.5}}>
        <h1 class='display-4 mb-4' id='type-effect'>Projects,</h1>    

        <Row>
        {displayProjects}
        </Row>
        
        <Link className='link btn mb-3' style={{width: '100px'}} to='/about'>about me</Link>
        </motion.div>
        </div>
    </Container>
    
  )
}

export default Projects
