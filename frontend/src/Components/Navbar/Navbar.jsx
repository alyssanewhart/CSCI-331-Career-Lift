import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import navStyles from './Navbar.module.css';


function Navbar() {
    return (
      <body>
          <nav className={navStyles.navbar}>
             <img src="../images/CareerLift_LogoDraft2.png" className={navStyles.logo}></img>
              <Link to='/Login' className={navStyles.login}>
                Login
              </Link>
              <Link to='learnMore' className={navStyles.aboutus}>
                About Us
              </Link>
              <Link to='/SignUp' className={navStyles.signup}>
                Signup
              </Link>
              <Link to='mainSection' className={navStyles.home}>
              Home
              </Link>
          </nav>

      </body>

    );
        }
  export default Navbar;