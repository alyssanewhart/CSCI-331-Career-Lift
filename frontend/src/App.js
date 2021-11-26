import './App.css';
import React, {useState, useEffect} from 'react';
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
import Topbar from "./Components/profileTopbar/Topbar"
//import AuthProvider, {useAuth} from "./context";
//import useAuth from "./context";
import UserDataService from "./services/user"

function App() {

// stores user information 
const [user, setUser] = useState("");

// on page refresh, retrieves user's id from the local storage and then retrieves their data from the DB
useEffect(() => {
  if(!user) {
  const loggedInId = localStorage.getItem("user");
  const url = `/${loggedInId}`;
  console.log(url)
  
  // call service to get user's information
  UserDataService.getUser(url)
    .then(response => {
          setUser(response.data);
        }
    )
    .catch(e => {
      console.log(e);
    });
  }
  })

 if (user) {
    return ( 
      <Router>
        <Topbar setUser = {setUser} user = {user}/>
        <Switch>

        <Route exact path="/UserProfile" component={userProfile}/>
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
          <Route  exact path="/Login">< LoginForm setUser = {setUser}/></Route>
	      </Switch>
      </Router>
  )};
  }
  

export default App;
