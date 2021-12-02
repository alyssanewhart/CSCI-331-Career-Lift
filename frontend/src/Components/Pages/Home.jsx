import React from "react";
import HomeImage from "../Images/employees-holding-hands-wave.svg";
import styles from "./Home.module.css"


class Home extends React.Component {

    render() {
        return (
            <><img src={HomeImage} alt="employees-holding-hands-wave" id={styles.employeeImg}/></>
            
        );
    }
}

export default Home;