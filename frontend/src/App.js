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
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainSection from './components/HomePage/mainSection';
import learnMore from './components/aboutUs/learnMore';
import history from './history';
import privacyPolicy from './components/privacyPolicy/privacyPolicy';
import terms from './components/terms/terms';
import contactUs from './components/contactUs/contactUs';
import footer from './components/footer/footer';
//import AuthProvider, {useAuth} from "./context";
//import useAuth from "./context";

function App() {

// stores login status and user_id
const [user, setUser] = useState("");
//const [auth, handleAuth] = useAuth(useAuth);
//console.log(user.name);
/*if (user.loginStatus === "success") {
 // handleAuth();
} */
useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = loggedInUser;
    setUser(foundUser);
    console.log(user)
  }
}, []);
//console.log(user)

//const [auth, handleAuth] = useAuth(useAuth);
console.log(user)
//if (user.loginStatus === "success") {
  console.log(user)
  //console.log(auth)
 // if (auth) {
 //   console.log(auth)
 // <Route  exact path="/Login"><AuthProvider>< LoginForm /></AuthProvider></Route>
 if (user) {
    return ( 
      <Router>
        <Topbar setUser = {setUser}/>
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
          <Route path='/Navbar' component={Navbar}/>
          <Route path='/footer' component={footer}/>
          <Route path='/mainSection' exact component={MainSection}/>
          <Route path='/learnMore'  component={learnMore}/>
          <Route path='/contactUs' component={contactUs}/>
          <Route path='/terms' component={terms}/>
          <Route path='/privacyPolicy' component={privacyPolicy}/>
				  <Route  exact path="/SignUp" component={SignUpForm}/>
          <Route exact path = "/Success" component={SignUpSuccess}/>
          <Route  exact path="/Login">< LoginForm setUser = {setUser}/></Route>
	      </Switch>
      </Router>
  )};
  }
  

export default App;
