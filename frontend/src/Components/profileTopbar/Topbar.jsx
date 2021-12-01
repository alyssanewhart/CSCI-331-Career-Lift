import styles from'./ProfileTopbar.module.css'
import { Search, Person, Chat, Notifications, Home, PeopleAlt, Work, Message} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import {Button, Navbar, Form, Nav, Container, NavDropdown, FormControl}  from 'react-bootstrap';
import { useHistory } from "react-router";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import IconButton from '@material-ui/core/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import {useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';


// receiver user state and setUser function for App.js
const Topbar = () => {

    const history = useHistory()
    const {user} = useContext(AuthContext)

    // import profileImage from user
    const profileImage = user.profilePicture;

    // function to logout user by clearing user state and local storage
    const handleLogout = () => {
        localStorage.clear();
        history.push("/")
      };

    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><img src={Logo} alt="Logo" id={styles.Logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1"><IconButton><Home class={styles.iconColor}/></IconButton></Nav.Link>
                <Nav.Link href="#action2"><IconButton><Chat class={styles.iconColor}/></IconButton></Nav.Link>
                <Nav.Link href="#action3"><IconButton><PeopleAlt class={styles.iconColor}/></IconButton></Nav.Link>
                <Nav.Link href="#action4"><IconButton><Notifications class={styles.iconColor}/></IconButton></Nav.Link>
                <Nav.Link><IconButton onClick={handleLogout}><LogoutIcon class={styles.iconColor}/></IconButton></Nav.Link>
                <Nav.Link href={`/userprofile/${user.name}`}><img alt="not found" width={"150px"} height={"150px"}src={profileImage} id={styles.profileimage}/></Nav.Link>
                  {/* <NavDropdown title="Settings" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3"></NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#" disabled>
                      Link
                  </Nav.Link> */}
                </Nav>
                {/*<Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
}
export default Topbar;
