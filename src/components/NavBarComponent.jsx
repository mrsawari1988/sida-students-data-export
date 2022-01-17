import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/getstudents'>
                    Get Stundets
                </Nav.Link>
                <Nav.Link as={Link} to='/studentsimages'>
                    Students Images
                </Nav.Link>
                <Nav.Link as={Link} to='/exportstudentsdata'>
                    export data
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBarComponent;
