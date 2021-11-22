import React, {useState} from "react";
import styles from './SignUpForm.module.css';
import {Container, Row, Col, Card, Form, Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import UserDataService from "../../services/user.js";
import { useHistory } from "react-router";
import blankProfileImg from "../Images/blank_profile.png";



{/* https://react-icons.github.io/react-icons/icons?name=bs*/}


export default function SignUpForm() {

      const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");    
      const [email, setEmail] = useState("");   
      const [password, setPassword] = useState("");  
      const [userType, setUserType] = useState("");     
      const history = useHistory()

      function submit(e) {
        e.preventDefault();

        if(verifyEmailFormat(e)) {
        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userType: userType,
            profilePicture: blankProfileImg
        }

        console.log(data)
        UserDataService.createUser(data)
        .then(response => {
          if(response.data.status === "duplicate email") {
              console.log(response.data)
              alert("Email address is associated with an existing account. Please login or use another email address")
          }

          if(response.data.status === "success") {
            history.push("/Success")
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    else {
        alert("Please enter a valid MSU email address")
    }
      }

      // verify valid email format
      function verifyEmailFormat(e) {
        let studentRegex = "^[a-zA-Z0-9]+.[a-zA-Z0-9]+@student.montana.edu$"

        let professorRegex = "^[a-zA-Z0-9]+.[a-zA-Z0-9]+@montana.edu$"
        if (email.match(studentRegex) ||  email.match(professorRegex)) {
            return true
        }

        else {
            return false
        }
      }
        return (
            <div id={styles.SignUpWrapper}>
                <Card id={styles.SignUpCard}>
                    <Form class={styles.SignUpForm} onSubmit={submit}>
                        <img src={Logo} alt="Logo" class={styles.Logo}/>
                        <h2 id={styles.SignUpH2}>Sign Up </h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Container>
                                    <Row>
                                        <Col> 
                                            <Form.Label class={styles.formLabel}>First Name</Form.Label>
                                            <Form.Control class = "form-control" type="firstName" placeholder="" onChange={(e) => setfirstName(e.target.value)} />
                                        </Col>
                                        <Col> 
                                            <Form.Label class={styles.formLabel}>Last Name</Form.Label>
                                            <Form.Control class = "form-control" type="lastName" placeholder="" onChange={(e) => setlastName(e.target.value)}  />
                                        </Col>
                                    </Row>
                                </Container>
                            </Form.Group>

            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Container>
                                    <Row>
                                        <Col> 
                                            <Form.Label class={styles.formLabel}>Email</Form.Label>
                                            <Form.Control type="email" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form.Group>
            

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Container>
                                    <Row>
                                        <Col> 
                                            <Form.Label class={styles.formLabel}>Password</Form.Label>
                                            <Form.Control className="form-control" type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Form.Group>

                            <Container>
                                <Row>
                                    <Col> 
                                        <Form.Select class={styles.formSelect} aria-label="User Type" onChange={(e) => setUserType(e.target.value)}>
                                            <option>User Type</option>
                                            <option value="Student">Student</option>
                                            <option value="Alumni">Alumni</option>
                                            <option value="Professor">Professor</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Container>

                            <Button id={styles.signUpBtn} variant="primary" type="submit" >
                            Sign Up</Button>
                    </Form>
                    <div id={styles.loginLinkDiv}>Already have an account?&nbsp;<Link to="/Login"><b>Login</b></Link></div>
                </Card> 
            </div>
        );
    }


