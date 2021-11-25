import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Logo from '../Images/CareerLift_LogoDraft2.png';
import navstyles from './Navigation.module.css';

class Navigation extends React.Component {

    render() {
        return (
            <>
  <Navbar bg="light" expand="lg" className={navstyles.navbarContainer}>
  <Container>
    <Navbar.Brand href="/aboutUs"><img src={Logo} alt="Logo" id={navstyles.Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/mainSection" className={navstyles.links}>Home</Nav.Link>
        <Nav.Link href="/aboutUs" className={navstyles.links}>About Us</Nav.Link>
        <Nav.Link href="../Login" className={navstyles.links}>Login</Nav.Link>
        <Nav.Link href="../SignUp" className={navstyles.links}>Sign Up</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/contactUs">Contact Us</NavDropdown.Item>
          <NavDropdown.Item href="/terms">Terms</NavDropdown.Item>
          <NavDropdown.Item href="/privacyPolicy">Privacy Policy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        );
    }
}

export default Navigation;