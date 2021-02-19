import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,Form,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'

import useUtils from "../utils.js";
const Filter = () => {
  const {animalAllShelter} =useUtils();
  const [filterData,setFilterData] = useState({});
  const [filterOriginData,setFilterOriginData] = useState([]);
  useEffect( async() =>{
    const {data} = await animalAllShelter();
    setFilterOriginData([...data])
    let filterCounty = data.reduce((acc,item) => {
      const curCountry = item?.STANAME.slice(0,3);
      if(!acc.some(county => county.label === curCountry)){
        acc.push({label:curCountry}); 
      }
      
      return acc
    },[])
    filterCounty.unshift({label:'全部'})
    const filterShelterData =  data.reduce((acc,item) => {
      const {STANAME,UserTag,UserType,ShelterName} = item;
      if(!acc.some(county => county.STANAME === STANAME)){
        acc.push({STANAME,UserTag,UserType,ShelterName}); 
      }
      
      return acc
    },[])
    const animalType = [{label:'狗',AnimalType:1},{label:'貓',AnimalType:2},{label:'其他',AnimalType:3}]
    setFilterData({
      countrys:filterCounty,
      shulter:filterShelterData,
      animalSelect:animalType
    })
    

  },[])
  const onChange = (e) => {
    const {id,value} = e.target;
    console.log(value, id,'settingValue')
    if(id ==='countrys'){
      const results = filterOriginData?.filter((item)=>{
        if(value === '全部'){
          return item.STANAME
        }else{
          return item.STANAME.slice(0,3) === value
        }
       
      })
      console.log(results);
      setFilterData({
        ...filterData,
        shulter:results,
      })
    }

  }
  console.log(filterData,'filterData')

  return (
    <Container id="filterWrapper" >
      <h2>尋找我的毛小孩 </h2>
      <h6>找尋距離近的收容所，快速搜尋附近的毛小孩</h6>
      <div className="filterSection">

      <Form>
        <Form.Group>
          {/* <Form.Label>Custom select</Form.Label> */}
          {Object.entries(filterData).map((item,index) =>{
            const [key,value] = item;
            return(
              <Form.Control key={index} as="select" onChange={onChange} id={key}  custom>
                {value.map((item,Cindex)=>{
                  const checkFilterShelterData = item.hasOwnProperty('STANAME');
                  return(
                    <option key={Cindex} value={checkFilterShelterData? item.UserTag : item.value}> {checkFilterShelterData ? item.ShelterName : item.label}</option>
                  )
                })}
              </Form.Control>
            )
          })}

        </Form.Group>
      </Form>
      
        <span className="filterBorder"></span>
        <Button className="filterButton"> 開始搜尋 </Button>
      </div>
    </Container>
  )
}
export default Filter;