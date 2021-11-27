import React from 'react';
import styles from './aboutUs.module.css';
import Footer from '../footer/footer';

function aboutUs () {

    return (
        <>
        <div>
            <header className={styles.learnHeader}>WHY wait until graduation to start your career?</header>
            <h1 className={styles.aboutUsList}> Explore Opportunities</h1>
            <h2 className={styles.aboutUsList}> Mentorship from alumni</h2>
            <h3 className={styles.aboutUsList}>Connect with students</h3>

            <p className={styles.students}>
                CareerLift will help YOU find your path.
            </p>
            <button className={styles.howItWorks}>
                How it Works 
            </button>
            <h4 className={styles.learnHeader}>
                Information for Interested Universities
            </h4>
            <ol className={styles.list}>
            <li className={styles.one}>Contact Us!&nbsp;&nbsp;</li>
            <p className={styles.info}>
                Get started connecting your students. 
                Reach out to a CareerLift team member today.
            </p>
            


            <li className={styles.two}>Customize It!</li>
            <p className={styles.info}>
                Here at CareerLift, we believe every student body is unique.
                We customize each version of CareerLift to fit your university.
            </p>
        

            <li className={styles.three}>Launch!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <p className={styles.info}>
                After customization, we will help you launch CareerLift at your university.
            </p>
            
            </ol>
    
        </div>
        <Footer/>
        </>
    )
}

export default aboutUs;
