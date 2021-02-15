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

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);
  useEffect(() => {
    console.log("hi");
    const url =
      "https://asms.coa.gov.tw/Asms/api/ViewAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate";
    axios.get(url).then(({ data }) => {
      setAnimalList([...data]);
    });
  }, []);
  return animalList.map((animal) => {
    console.log(animal, "test");
    const amialPic = "https://asms.coa.gov.tw/Amlapp/Upload/Pic/" + animal.pic;
    return <Link to="/"><AnimalCard pic={amialPic} /></Link>;
  });
};

export default AnimalList;
