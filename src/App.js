import React from 'react';
import {Switch} from "react-router-dom";

import SignupPage from "./components/signup/signuppage.jsx";
import LoginPage from "./components/login/loginpage.jsx";
import RedirectProtected from "./components/redirectprotected.jsx";
import Dashboard from "./components/userdashboard/dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <RedirectProtected path = "/dashboard" component={Dashboard} />
        <LoginPage path = "/login" component={LoginPage} />
        <SignupPage path = "/register" />
      </Switch>
    </div>
  );
}

export default App;
