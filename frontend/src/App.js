import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components//Login/LoginForm';
import SignUpForm from './Components//SignUp/SignUpForm';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';
import Navigation from './Components/PublicNavigation/Navigation.jsx'
import Home from './Components/Pages/Home.jsx';
import Feed from './Components/Pages/Profile';
import userProfile from './Components/Pages/UserProfile';
import { AuthContext } from "./context/AuthContext"
import { useContext } from "react";
import UserProfile from './Components/Pages/UserProfile';
import Messages from './Components/Pages/Messages/Messages';
//import {dotenv}



// class LoginApp extends React.Component {



//   render() {

//     return ( 
//       <Router>
//         {/* <Navigation /> */}
//         <Switch>
// 		      <Route exact path="/" component={Home}/>
// 				  <Route  exact path="/SignUp" component={SignUpForm}/>
//           <Route  exact path="/Login" component={LoginForm}/>
//           <Route exact path="/UserProfile/:userName" component={userProfile} />
//           <Route exact path="/Feed" component={feed} />
// 	      </Switch>
//       </Router>
      
//     );
//   }
// }

// export default LoginApp;

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <SignUpForm />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/Feed" /> : <LoginForm />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <SignUpForm />}
        </Route>
        <Route path="/messages">
          {!user ? <Redirect to="/" /> : <Messages />}
        </Route>
        <Route path="/Feed">
          <Feed />
        </Route>
        <Route path="/UserProfile/:name">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;