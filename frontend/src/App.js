import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components//Login/LoginForm';
import SignUpForm from './Components//SignUp/SignUpForm';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navigation from './Components/PublicNavigation/Navigation.jsx'
import Home from './Components/Pages/Home.jsx';
import profile from './Components/Pages/profile';
import userProfile from './Components/Pages/userProfile';



class LoginApp extends React.Component {



  render() {

    return ( 
      <Router>
        <Navigation />
        <Switch>
		      <Route exact path="/" component={Home}/>
				  <Route  exact path="/SignUp" component={SignUpForm}/>
          <Route  exact path="/Login" component={LoginForm}/>
          <Route exact path="/userProfile" component={userProfile} />
	      </Switch>
      </Router>
      
    );
  }
}

export default LoginApp;
