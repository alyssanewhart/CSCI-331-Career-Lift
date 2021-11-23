import React from "react";
import termsStyles from './terms.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../footer/footer";


function terms() {
    return(
        <>
        <Navbar/>
        <Footer/>
        <div className={termsStyles.terms}>
            This is the terms page.
        </div>
        </>
        
    )

}

export default terms;