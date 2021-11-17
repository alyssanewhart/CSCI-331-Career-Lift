import './App.css';
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components//Login/LoginForm';
import SignUpForm from './Components//SignUp/SignUpForm';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navigation from './Components/PublicNavigation/Navigation.jsx'
import Home from './Components/Pages/Home.jsx';
import profile from './Components/Pages/profile';
import userProfile from './Components/Pages/userProfile';
import SignUpSuccess from './Components/SignUp/Success';
import CreateProfile from './Components/CreateProfile/CreateProfile';
//import useAuth from "./context";

function App() {

// stores login status and user_id
const [user, setUser] = useState({});
console.log(user.user_id);
if (user.loginStatus === "success") {
 // handleAuth();
}
//console.log(user)

//const [auth, handleAuth] = useAuth(useAuth);

if (user.loginStatus === "success") {
    return ( 
      <Router>
        <Switch>
        <Route exact path="/" component={userProfile}/>
        <Route exact path="/CreateProfile"><CreateProfile user = {user}/></Route>
          {/* <Route exact path="/userProfile" component={userProfile} /> */}
	      </Switch>
      </Router>
      
    );
}

else {
  
  return (
  <Router>
     <Navigation />
        <Switch>
		      <Route exact path="/" component={Home}/>
				  <Route  exact path="/SignUp" component={SignUpForm}/>
          <Route exact path = "/Success" component={SignUpSuccess}/>
          <Route  exact path="/Login">< LoginForm setUser={setUser}/></Route>
	      </Switch>
      </Router>
  )};
  }
  

export default App;
