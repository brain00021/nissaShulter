import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
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
import AnimalCard from "../components/AnimalCard.jsx";
import axios from "axios";
import useUtils from "../utils.js";

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);
  const {getAnimalTotal} = useUtils();
  useEffect(() => {
    getAnimalTotal();
  }, []);
  return (
    <></>
  )
};

export default AnimalList;
