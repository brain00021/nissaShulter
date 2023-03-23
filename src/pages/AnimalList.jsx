import React, { useState, useEffect } from "react";
import { Container, Row,Col,Image,Form } from "react-bootstrap";
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
import AnimalCard from "components/AnimalCard.jsx";
import axios from "axios";
import useUtils from "../utils.js";
import warningImg from "assets/img/icon/warmingIcon.png"
import FilterSection from "components/Filter.jsx"
import loadingImg from "assets/img/loading.gif"
const WarningWrapper = () => {
  return(
    <div className="warmingWrapper">
      <Container>
        <div className="tips">
          <i><Image src={warningImg}/></i>
          <p>集合所有公立收容所送養動物之資訊，有意領養請直洽各區收容所。領養前請謹慎考慮，不隨意棄養。</p>
        </div>
      </Container>
    </div>
  )
}
const FilterSelect = () => {
  return(
    <Form>
    <Form.Group>
      <Form.Control defaultValue='4' as="select" size="lg">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </Form.Control>
    </Form.Group>
  </Form>
  )
}

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);
  const {getAnimalTotal,animalFilterList,checkIsFav} = useUtils();
  const [filterCheck,setFilterCheck] = useState(0);
  const [loading,setLoading] = useState(false);
  const handleFilter = async() =>{
    console.log('check')
    setFilterCheck(filterCheck +1)
  }
  useEffect(async() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setLoading(true)

    // get parse
    //?Typeid=1&UserTag=LAAAG&pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate
    const UserTag = urlParams.get('shelter') ? `UserTag=${urlParams.get('shelter')} `: '';
    const Typeid =  urlParams.get('animalSelect') ? `Typeid=${urlParams.get('animalSelect')}`: '';
    let filterUrl = ''
    if(UserTag || Typeid){
      filterUrl = `?${((Typeid !== '' &&UserTag !=='') ? UserTag+'&' :UserTag) + Typeid}&pageSize=200&currentPage=1`
    }else{
      filterUrl = `?pageSize=200&currentPage=1`
    }
    console.log(filterUrl,'filterUrl')
   

    const getTotalNumber =  await getAnimalTotal();
    const originAnimalList = await animalFilterList(filterUrl);
    debugger;
    setLoading(false)
   
    setAnimalList([...originAnimalList])
  }, [filterCheck]);
  const handleFavor =  async() =>{
    console.log('handleAddFavor')
    const checkFavorite = await checkIsFav(animalList);
    setAnimalList([...(checkFavorite.length>0 ?checkFavorite:animalList)]);
  }

  return (
    <div className="indexBg favoritePageBg animalFilterWrapper">
    <FilterSection indexStatus={false} onFilter={handleFilter}></FilterSection>
    <WarningWrapper/>
    <Container >
      {loading ? <div className="loading"><Image src={loadingImg}/></div>  : animalList.length > 0 ? (
        <Row>
        {animalList.map((item,index)=>{
            return(<Col sm={6} md={4} lg={3} key={index} ><AnimalCard AcceptNum={item.AcceptNum} AnimalId={item.AnimalId} Name={item?.Name} BreedName={item?.BreedName} pic={item.pic} Sex={item?.Sex} Message={item?.areaName || '未知'}  IsFav={item?.IsFav} handleFavor={handleFavor}></AnimalCard></Col>)
  
          })}
        </Row>
      ):(
        <h3 className="errorData"> 找不到資料 </h3>
      )}

     
    </Container>
    </div>
  )
};

export default AnimalList;
