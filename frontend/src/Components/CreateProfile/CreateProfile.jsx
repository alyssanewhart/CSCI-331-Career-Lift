import React, {useState} from "react";
import styles from './CreateProfile.module.css';
import {Container, Row, Col, Card, Form, Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import { useHistory } from "react-router";

const CreateProfile = ({user}) => {
    console.log(user)

    return (
        <div id={styles.CreateProfileWrapper}>
            <Card>
                            <Container>
                                <Row>
                                    <Col> 
                                        <b>Name:</b> {user.user_data.name}
                                    </Col>
                                    <Col> 
                                        <b>User Type:</b> {user.user_data.userType}
                                     </Col>
                                </Row>
                            </Container>
                </Card> 
                </div> )

}
export default CreateProfile
