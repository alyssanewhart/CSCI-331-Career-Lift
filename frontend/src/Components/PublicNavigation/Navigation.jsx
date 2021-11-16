import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Logo from '../Images/CareerLift_LogoDraft2.png';
import styles from './Navigation.module.css';

class Navigation extends React.Component {

    render() {
        return (
            <>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"><img src={Logo} alt="Logo" id={styles.Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="../Login">Login</Nav.Link>
        <Nav.Link href="../SignUp">Sign Up</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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