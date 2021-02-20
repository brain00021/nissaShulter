import React, { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
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
  const {getAnimalTotal,animalFilterList,checkIsFav} = useUtils();
  useEffect(async() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // get parse
    //?Typeid=1&UserTag=LAAAG&pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate
    const UserTag = urlParams.get('shelter') ? `UserTag=${urlParams.get('shelter')} `: '';
    const Typeid =  urlParams.get('animalSelect') ? `Typeid=${urlParams.get('animalSelect')  }`: '';
    let filterUrl = ''
    if(UserTag || Typeid){
      filterUrl = `?${(Typeid? UserTag+'&' :UserTag) + Typeid}&pageSize=200&currentPage=1`
    }else{
      filterUrl = `?pageSize=200&currentPage=1`
    }
    console.log(filterUrl,'filterUrl')

    const getTotalNumber =  await getAnimalTotal();
    const originAnimalList = await animalFilterList(filterUrl);
    setAnimalList([...originAnimalList])
  }, []);
  const handleFavor =  async() =>{
    console.log('handleAddFavor')
    const checkFavorite = await checkIsFav(animalList);
    setAnimalList([...(checkFavorite.length>0 ?checkFavorite:animalList)]);
  }
  return (
    <div className="indexBg favoritePageBg animalFilterWrapper">
    <Container >
      <Row>
      {animalList.map((item,index)=>{
          return(<Col sm={6} md={4} lg={3} key={index} ><AnimalCard AcceptNum={item.AcceptNum} AnimalId={item.AnimalId} Name={item?.Name} BreedName={item?.BreedName} pic={item.pic} Sex={item?.Sex} Message={item?.areaName || '未知'}  IsFav={item?.IsFav} handleFavor={handleFavor}></AnimalCard></Col>)
 
        })}
      </Row>
     
    </Container>
    </div>
  )
};

export default AnimalList;
