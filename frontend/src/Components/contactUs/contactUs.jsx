import React from "react";
import contactUsStyles from './contactUs.module.css';
import Footer from "../footer/footer";
import Navbar from '../Navbar/Navbar';

//PHP for a working contact form


function contactUs() {


    return(
        
        <>
        <Navbar/>
        <Footer/>
        <div className={contactUsStyles.contactForm}>

        <h1 className={contactUsStyles.contactHeader}>
            Contact Us!
        </h1>
        <h2 className={contactUsStyles.contactInfo}>
            Please fill in your information and a CareerLift team member will reach out.
        </h2>
            <form method="POST" action="contactForm.php" className={contactUsStyles.contactFormBody}>
                <p>
                    <input type="text" name="firstName" className={contactUsStyles.firstName} placeholder="First Name"></input>
                    <input type="text" name="lastName" className={contactUsStyles.lastName} placeholder="Last Name"></input>
                </p>

                <p>
                    <input type="text" name="university" className={contactUsStyles.university} placeholder="University"></input>
                </p>

                <p>
                    <input type="text" name="email" className={contactUsStyles.email} placeholder="Email"></input>
                </p>

                <p>
                    <input type="text" name="message" className={contactUsStyles.message} placeholder="Message"></input>
                </p>

                <button  name="submit" className={contactUsStyles.submitBtn}>
                    Submit
                </button>
              
            </form>
        </div>
        </>
    )

}

export default contactUs;
