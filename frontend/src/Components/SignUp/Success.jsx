import {Container, Row, Col, Card, Form, Button }from 'react-bootstrap';
import styles from './Success.module.css';
import { Link } from "react-router-dom";
import {ReactComponent as SVGCelebration} from '../Images/undraw_celebration_re_kc9k.svg';

export default function SignUpSuccess() {

return (
    <div id={styles.SuccessWrapper}>
        <div><SVGCelebration id={styles.SVGCelebration}/></div>
         <div id={styles.successDiv}> <h1 id={styles.h1}>Success!</h1>
            <p>Your account has been created</p>
            <p>Click &nbsp;<Link to="/Login"><b>here</b></Link> to login</p></div>  
    </div>
    );
}
