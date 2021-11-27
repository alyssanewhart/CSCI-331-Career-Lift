import React, { useRef} from "react";
import contactUsStyles from './contact.module.css';
import emailjs from "emailjs-com"
import Footer from "../footer/footer";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5msvyuk', 'template_6v1wp6f', form.current, 'user_CGquH3b47Gubt3LjlfNbg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return(

        <>
       
        <div className={contactUsStyles.contactForm}>

        <h1 className={contactUsStyles.contactHeader}>
            Contact Us!
        </h1>
        <h2 className={contactUsStyles.contactInfo}>
            Please fill in your information and a CareerLift team member will reach out.
        </h2>
            <form ref={form} onSubmit={sendEmail} className={contactUsStyles.contactFormBody}>
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

                <button name="submit" className={contactUsStyles.submitBtn}>
                    Submit
                </button>
                
            </form>
        </div>
        <Footer/>
        </>
        )
}
