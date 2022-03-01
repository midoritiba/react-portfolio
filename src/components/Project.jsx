import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Project = ({ projectData }) => {
    return(
        <Card style={{backgroundColor:'#e4e4e4', borderRadius: '30px'}} key = {projectData.key}  className='my-4 my-lg-0'>
            <Card.Title className='fw-bold mt-3'>{projectData.projectName}</Card.Title>
            <motion.div
                whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                >
                <Card.Img className='px-2' src={projectData.imgLink} style={{height: '300px', objectFit:'cover', borderRadius: '25px'}}/>
            </motion.div>
            <Card.Body>
                        <Card.Text className='px-2' >{projectData.infoText}</Card.Text>
                        <Card.Text><span className='fw-bold'>Technologies used:</span> {projectData.technologiesUsed}</Card.Text>
                        <a className='btn link mx-2' style={{color:'black'}} rel='noopener noreferrer' target='_blank' href={projectData.websiteLink}>demo</a>
                        <a className='btn link mx-2' style={{color:'black'}}  rel='noopener noreferrer' target='_blank' href={projectData.gitHubLink} >code</a>
            </Card.Body>
        </Card>
    )
}
export default Project