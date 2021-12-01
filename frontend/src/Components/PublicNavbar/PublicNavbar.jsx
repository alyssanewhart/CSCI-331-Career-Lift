import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Logo from '../Images/CareerLift_LogoDraft2.png';
import styles from './Navigation.module.css';

class Navigation extends React.Component {

    render() {
        return (
            <>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"><img src={Logo} alt="Logo" id={styles.Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="../Login">Login</Nav.Link>
        <Nav.Link href="../SignUp">Sign Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        );
    }
}

export default Navigation;