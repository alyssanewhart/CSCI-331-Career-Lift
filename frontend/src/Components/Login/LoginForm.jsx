import React, {useState, useContext} from "react";
import styles from './LoginForm.module.css';
import {Row, Col, Card, Form, Button, Alert }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import AuthDataService from "../../services/auth.js";
import { useHistory } from "react-router";
//import AuthProvider, {useAuth} from "../../context";

const LoginForm  = ({setUser}) => {
        const history = useHistory()
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [loginUser, setLoginUser] = useState("");
       // const [auth, handleAuth] = useAuth(useAuth);
        
        console.log(email, password)

    

        function submit(e) {
            e.preventDefault();
    
           // console.log(auth)
            var data = {
                email: email,
                password: password,
            }
    
            // authenticate user
            AuthDataService.authenticateUser(data)
            .then(response => {
                console.log(response.data)
              console.log(response.data.status);

              // return successful login status and user id
              if (response.data.status === "success") {
                setUser(response.data.user);
                // store the user_id in localStorage for access on refesh
                localStorage.setItem('user', response.data.user._id)
                console.log(response.data.user)

                // redirect to create profile page upon authentication
                history.push("/CreateProfile")

              }
              else {
                alert("Invalid login credentials. Please try again.")
                setEmail("");
                setPassword("");
              }

            })
            .catch(e => {
              console.log(e);
            });
    //<button onClick={handleAuth}>Change auth</button>
          }
    
        return (
            <div id ={styles.LoginWrapper}>
                <Card id={styles.LoginCard}>
                    <Form className={styles.LoginForm} onSubmit={submit} >
                        <img src={Logo} alt="Logo" className={styles.Logo}/>
                        <h2 id={styles.loginH2}>Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail" className={styles.formGroup}>
                                <Row>
                                    <Col>
                                        <Form.Label className={styles.formLabel}>Email</Form.Label> 
                                        <Form.Control type="email" placeholder="" className={styles.formControl} onChange={(e) => setEmail(e.target.value)}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                    

                            <Form.Group className="mb-3" controlId="formBasicPassword" class={styles.formGroup}>
                                <Row>
                                    <Col>
                                        <Form.Label className={styles.formLabel}>Password</Form.Label>
                                        <Form.Control type="password" placeholder="" className={styles.formControl} onChange={(e) => setPassword(e.target.value)}/>
                                    </Col>
                                </Row>
                    </Form.Group>

                        <Button className={styles.LoginBtn} variant="primary" type="submit"> 
                        Login </Button>
                        
                        <div id={styles.ForgotPassword}><a href='#'><b>Forgot password?</b></a></div>
                        <div id={styles.SignUpLink}>Need an account?&nbsp;<Link to="/SignUp"><b>Sign Up</b></Link></div>
                    </Form>
                </Card> 
            </div>   
        );
 
        }

export default LoginForm;
