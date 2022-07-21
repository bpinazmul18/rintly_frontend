import {Link, useNavigate} from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'

import NavItem from './common/nav-item';

import logo from '../assets/img/play-logo.png'


const NavBar = ({ user }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        window.location = '/logout'
    }

    const renderLogout = () => (
        <div>
            <button onClick={() => handleLogout()} className="btn btn-primary px-5 py-3 rounded-pill ms-1">Logout</button>
        </div>
    )

    const renderLogin = () => (
        <div>
            <button onClick={() => navigate('/login')} className="btn btn-outline-primary px-5 py-3 rounded-pill me-1">Login</button>
            <button onClick={() => navigate('/signup')} className="btn btn-primary px-5 py-3 rounded-pill ms-1">Register</button>
        </div>
    )

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark-400" variant="dark">
            <Container>
                <Navbar.Brand to="/" as={Link}>
                    <img className='w-25' src={logo} alt="Play logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" as="ul">
                        <NavItem to='/' linkName="Home"/>
                        <NavItem to='/movies' linkName="Movies"/>
                    </Nav>

                    <Nav>
                        {user ? renderLogout() : renderLogin()}
                    </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;