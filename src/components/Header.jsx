import { Navbar, Container } from 'react-bootstrap'
import { FaQq } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar className='header' collapseOnSelect expand='md'>
        <Container>
            <Link to='/'>
                <FaQq className='link text-light fs-3 pb-2'/>
            </Link>
            <Link to='/' className='link text-light navbar-brand fs-6 fs-md-4 ps-md-4'>
                michelle midori
            </Link>

            <Navbar.Toggle className='custom-toggler navbar-toggler link fs-6' style={{cursor: 'none'}} aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse className='collapse justify-content-end fs-5'>
                <NavLink className='nav-items link nav-link text-center' exact activeClassName='active' to='/'>home</NavLink>
                <NavLink className='nav-items link nav-link text-center' activeClassName='active' to='/projects'>projects</NavLink>
                <NavLink className='nav-items link nav-link text-center' activeClassName='active' to='/about'>about</NavLink>
                <NavLink className='nav-items link nav-link text-center' activeClassName='active' to='/contact'>contact</NavLink>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
  )
}

export default Header