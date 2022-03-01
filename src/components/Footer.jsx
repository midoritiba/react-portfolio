import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
        <Container className='justify-content-center align-items-center' >
            <Row className='align-middle align-items-center mb-0 mb-sm-2'>
            <Col className='col-12 col-lg-6 text-center pt-3 pt-lg-0'>
            © 2022 michelle midori
            </Col>
            <Col className='col-12 col-lg-6 pb-3 pt-lg-2 text-center fs-5'>
                <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none px-2 px-sm-5' href='https://github.com/midoritiba'><FaGithub className='text-light fs-5' /></a>
                <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none px-2 px-sm-5' href='https://www.linkedin.com/in/michelle-midori/'><FaLinkedinIn className='text-light fs-5' /></a>
                <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none px-2 px-sm-5' href='mailto:mic.tiba@gmail.com'><FaAt className='text-light fs-5' /></a>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer