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
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import AnimalDetail from './pages/AnimalDetail.jsx';

import { useTranslation } from 'react-i18next';


// fontawesome.library.add(faCheckSquare, faCoffee);
function App() {
  const { t, i18n } = useTranslation();
  return (
    <Router>
      {/* <h1>{t('Welcome to React')}</h1> */}
      
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
        <Route path="/animalDetail/:animalAcceptNum/:anmialId">
            <AnimalDetail/>
        </Route>
        {/* <button onClick={() => changeLanguage("fr")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
