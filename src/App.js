import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import SignupPage from "./components/signup/signuppage.jsx";
import LoginPage from "./components/login/loginpage.jsx";
import RedirectProtected from "./components/redirectprotected.jsx";
import Dashboard from "./components/userdashboard/dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <RedirectProtected path = "/dashboard" component={Dashboard} />
        <LoginPage exact path = "/" component={LoginPage} />
        <SignupPage path = "/signup" />
      </Switch>
    </div>
  );
}

export default App;
