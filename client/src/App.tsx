import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";

import { BatchList } from "./components/batch-list/batch-list";
import { TraineeList } from "./components/trainee-list/trainee-list";
import { About } from "./components/about/about";
import { Dashboard } from "./components/dashboard/dashboard";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  function authProtectedDashborad() {
    if (localStorage.getItem("token")) {
      window.history.pushState({}, "", "/dashboard");
      return <Dashboard />;
    } else {
      window.history.pushState({}, "", "/login");
      return <Login />;
    }
  }

  function login() {
    if (localStorage.getItem("token")) {
      window.history.pushState({}, "", "/dashboard");
      return <Dashboard />;
    } else {
      window.history.pushState({}, "", "/login");
      return <Login />;
    }
  }
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login" component={login} />

          <Route
            path="/dashboard"
            onChange={(e: any) => console.log(e)}
            component={authProtectedDashborad}
          />
        </Switch>
      </div>
    </Router>
  );
}
