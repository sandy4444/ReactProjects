import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Redirect from ="/" to = "/login" component={LoginForm}></Redirect>
      </Switch>
    </React.Fragment>
  );
}

export default App;
