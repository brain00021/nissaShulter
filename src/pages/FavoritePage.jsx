import React, { useState, useEffect } from "react";
import {Container,Row,Col,ListGroup ,Image,Button} from 'react-bootstrap';
import "assets/scss/favorite.scss";
import AnimalCard from 'components/AnimalCard';
import useUtils from "../utils.js";

function FavoritePage(){
  const {checkIsFav} = useUtils();
  const [favoriteList, setFavoriteList] = useState([])
  const handleFavor = async() => {
    console.log('fav')
    const checkFavorite = await checkIsFav(favoriteList);
    const filterFavoriteList = checkFavorite.filter(item => item.IsFav === true);
    // debugger;
    setFavoriteList([...filterFavoriteList]);
  }
  useEffect(()=>{
    const FavoriteOriData = JSON.parse(localStorage.getItem('animalFavList')) || [];
    setFavoriteList([...FavoriteOriData])

  },[])

  return(
    <div className="indexBg favoritePageBg">
    <Container >
      <Row>
      {favoriteList.map((item,index)=>{
          return(<Col sm={6} md={4} lg={3} key={index} ><AnimalCard Name={item.Name} AcceptNum={item.AcceptNum} AnimalId={item.AnimalId} BreedName={item?.BreedName} pic={item.pic} Sex={item?.Sex}  Message={item?.Message}  IsFav={item?.IsFav} handleFavor={handleFavor}></AnimalCard></Col>)
 
        })}
      </Row>
     
    </Container>
    </div>

  )

}

export default FavoritePage