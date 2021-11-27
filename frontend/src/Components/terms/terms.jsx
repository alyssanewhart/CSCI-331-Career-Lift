import React from "react";
import termsStyles from './terms.module.css';
import Footer from "../footer/footer";


function terms() {
    return(
        <>
        <div className={termsStyles.terms}>
            This is the terms page.
        </div>
        <Footer/>
        </>
        
    )

}

export default terms;