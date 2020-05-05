import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import SignupPage from "./components/signup/signuppage.jsx";
import LoginPage from "./components/login/loginpage.jsx";
import Dashboard from "./components/userdashboard/dashboard.jsx";
import { connect } from "react-redux";

const LoginRoute = ({component: Component, ...props}) => {

  return (
  <Route
    {...props}
    render = { props => 
      !props.loggedIn ?
      ( <Component {...props}/> ) :  (<Redirect to="/dashboard" />)
        }
    />
  )
}

const ProtectedRoute = ({component: Component, ...props}) => {

  return (
  <Route
    {...props}
    render = { props => 
      !props.loggedIn ?
      ( <Component {...props}/> ) :  (<Redirect to="/" />)
        }
    />
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path = "/dashboard" component={Dashboard} />
        <LoginRoute exact path = "/" component={LoginPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    
    // loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
