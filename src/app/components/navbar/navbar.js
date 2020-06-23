import React from 'react';
import LanguageComponent from '../language/language';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarComponent = () => {
    const [t] = useTranslation();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className="logo">Ubeslang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{t('navbar.menu.home')}</Nav.Link>
                    </Nav>
                    <LanguageComponent />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;