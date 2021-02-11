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
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  return (
    <Router>
      <h1>{t('Welcome to React')}</h1>

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
        {/* <button onClick={() => changeLanguage("fr")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button> */}
      </Switch>
    </Router>
  );
}

export default App;
