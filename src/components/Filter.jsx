import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,Form,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'

import useUtils from "../utils.js";
const Filter = () => {
  const {animalAllShelter} =useUtils();
  const [filterData,setFilterData] = useState({});
  useEffect( async() =>{
    const {data} = await animalAllShelter();
    const filterCounty = data.reduce((acc,item) => {
      const curCountry = item?.STANAME.slice(0,3);
      if(!acc.some(county => county === curCountry)){
        acc.push(curCountry); 
      }
      
      return acc
    },[])
    const filterShelterData =  data.reduce((acc,item) => {
      const {STANAME,UserTag,UserType} = item;
      if(!acc.some(county => county.STANAME === STANAME)){
        acc.push({STANAME,UserTag,UserType}); 
      }
      
      return acc
    },[])
    setFilterData({
      countrys:filterCounty,
      shulter:filterShelterData
    })
    

  },[])
  const onChange = (e) => {
    console.log(e.target.value,'settingValue')

  }
  console.log(filterData,'filterData')

  return (
    <Container id="filterWrapper" >
      <h2>尋找我的毛小孩 </h2>
      <h6>找尋距離近的收容所，快速搜尋附近的毛小孩</h6>
      <div className="filterSection">

      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Custom select</Form.Label>
          <Form.Control as="select" onChange={onChange} custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Custom select</Form.Label>
          <Form.Control as="select" onChange={onChange} custom>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>
      </Form>
      
        <span className="filterBorder"></span>
        <Button className="filterButton"> 開始搜尋 </Button>
      </div>
    </Container>
  )
}
export default Filter;