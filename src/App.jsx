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
import Favorite from './pages/FavoritePage.jsx';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
        <Route path="/favoriteAnimal">
          <Favorite/>
        </Route>
        <Route path="/animalDetail/:animalAcceptNum/:anmialId">
          <AnimalDetail/>
        </Route>
        <Route path="/animalList">
        <AnimalList/>
        </Route>
        {/* <button onClick={() => changeLanguage("fr")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button> */}
      </Switch>
      <MessengerCustomerChat
        pageId="111895200941097"
        appId=""
        loggedInGreeting='歡迎您到浪浪不在流浪之家，有任何疑問歡迎在線上提問~~'
        loggedOutGreeting='歡迎您到浪浪不在流浪之家，有任何疑問歡迎在線上提問~~'
        attribution="setup_tool"
      />
      <Footer/>
    </Router>
  );
}

export default App;
