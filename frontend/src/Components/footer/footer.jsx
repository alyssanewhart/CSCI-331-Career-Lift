import React from 'react';
import footerStyles from './footer.module.css';
import history from '../../history';
import { Link } from 'react-router-dom';
//import DOMPurify from 'dompurify';
//<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dirtyContent) }} />

function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <Link to='/terms' className={footerStyles.terms} onclick={() => history.push("/terms")}>
                Terms
            </Link>  

            <Link to='/privacyPolicy' className={footerStyles.privacy} onclick={() => history.push("/privacyPolicy")}>
                Privacy Policy    
            </Link>

            <Link to='/contactUs' className={footerStyles.contact} onclick={() => history.push("/contactUs")}>
                Contact Us
            </Link>  

        </footer>
    )
}

export default Footer
