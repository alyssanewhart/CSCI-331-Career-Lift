import React from "react";
import privacyPolicyStyles from './privacyPolicy.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../footer/footer";


function privacyPolicy() {
    return(
        <>
        <Navbar/>
        <Footer/>
        <div className={privacyPolicyStyles.privacy}>
            This is the privacy policy page
        </div>
        </>
    )

}

export default privacyPolicy;