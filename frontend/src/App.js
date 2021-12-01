import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components//Login/LoginForm';
import SignUpForm from './Components//SignUp/SignUpForm';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Feed from './Components/Pages/Profile';
import userProfile from './Components/Pages/UserProfile';
import { AuthContext } from "./context/AuthContext"
import { useContext } from "react";
import UserProfile from './Components/Pages/UserProfile';
import Messages from './Components/Pages/Messages/Messages';
import SignUpSuccess from './Components/SignUp/Success';
import CreateProfile from './Components/CreateProfile/CreateProfile';
import Navigation from './Components/PublicNavigation/Navigation.jsx'


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
        </Route>
        <Route path="/login">{user ? <Redirect to="/createprofile" /> : <LoginForm />}</Route>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <SignUpForm />}
        </Route>
        <Route exact path="/createprofile"><CreateProfile /></Route>
        <Route exact path = "/success" component={SignUpSuccess}/>
        <Route path="/messages">
          {!user ? <Redirect to="/" /> : <Messages />}
        </Route>
        <Route path="/Feed">
          <Feed />
        </Route>
        <Route path="/userprofile/:name">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;