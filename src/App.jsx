import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
  NavLink,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/all.scss";
import { Button , Alert } from 'react-bootstrap';
import HomePage from './pages/HomePage.jsx';
import AnimalList from './pages/AnimalList.jsx';
import Header  from './components/Header.jsx';
import Login from './pages/Login.jsx';
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AnimalList/>
        </Route>
        <Route path="/dashboard">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
