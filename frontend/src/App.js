import './App.css';
import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components//Login/LoginForm';
import SignUpForm from './Components//SignUp/SignUpForm';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navigation from './Components/PublicNavigation/Navigation.jsx'
import Home from './Components/Pages/Home.jsx';
import Feed from './Components/Pages/Feed.jsx';
import UserProfile from './Components/Pages/UserProfile';
import SignUpSuccess from './Components/SignUp/Success';
import CreateProfile from './Components/CreateProfile/CreateProfile';
import Topbar from "./Components/profileTopbar/Topbar"
//import AuthProvider, {useAuth} from "./context";
//import useAuth from "./context";
import UserDataService from "./services/user"
//import { AuthContext } from "./Context/auth-context.js"

function App() {

// stores user information 
//const {user, setUser} = useContext(AuthContext);
const [user, setUser] = useState("");

// on page refresh, retrieves user's id from the local storage and then retrieves their data from the DB
useEffect(() => {
  if(!user) {
  const loggedInId = localStorage.getItem("user");

  if(loggedInId != null) {
  const url = `/${loggedInId}`;
  
  // call service to get user's information
  UserDataService.getUser(url)
    .then(response => {
          setUser(response.data);
        }
    )
    .catch(e => {
    });
  }
  }
})

 if (user) {
    return ( 
      <Router>
        <Topbar setUser = {setUser} user = {user}/>
        <Switch>

        <Route exact path="/UserProfile"><UserProfile user = {user} setUser = {setUser}/></Route> 
      {/*  <Route path="/UserProfile/:name"><UserProfile /></Route>   */}
        <Route exact path="/CreateProfile"><CreateProfile user = {user} setUser={setUser}/></Route>
        <Route exact path="/Feed"><Feed user={user}/></Route>
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
          <Route  exact path="/Login">< LoginForm setUser={setUser} /></Route>
	      </Switch>
      </Router>
  )};
  }
  

export default App;
