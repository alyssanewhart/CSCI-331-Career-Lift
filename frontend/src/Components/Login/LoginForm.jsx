import React, {useState, useContext} from "react";
import styles from './LoginForm.module.css';
import {Row, Col, Card, Form, Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';


const LoginForm  = props => {
        const [user, setUser] = useState({username: "", password: ""});
        
        const onChange = e => {
            e.preventDefault();
            setUser({...user, [e.target] : e.target.value})
            console.log(user);

        }
    
        return (
            <div id ={styles.LoginWrapper}>
                <Card id={styles.LoginCard}>
                    <Form className={styles.LoginForm} >
                        <img src={Logo} alt="Logo" className={styles.Logo}/>
                        <h2 id={styles.loginH2}>Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail" className={styles.formGroup}>
                                <Row>
                                    <Col>
                                        <Form.Label className={styles.formLabel}>Email</Form.Label> 
                                        <Form.Control type="email" placeholder="" className={styles.formControl} onChange={onChange}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                

                            <Form.Group className="mb-3" controlId="formBasicPassword" class={styles.formGroup}>
                                <Row>
                                    <Col>
                                        <Form.Label className={styles.formLabel}>Password</Form.Label>
                                        <Form.Control type="password" placeholder="" className={styles.formControl} onChange={onChange}/>
                                    </Col>
                                </Row>
                    </Form.Group>

                        <Button className={styles.LoginBtn} variant="primary" type="submit">
                        SignUp </Button>
                        
                        <div id={styles.ForgotPassword}><a href='#'><b>Forgot password?</b></a></div>
                        <div id={styles.SignUpLink}>Need an account?&nbsp;<Link to="/SignUp"><b>Sign Up</b></Link></div>
                    </Form>
                </Card> 
            </div>    
        );
 
        }

export default LoginForm;