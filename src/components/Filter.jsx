import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,Form,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import useUtils from "../utils.js";
const Filter = ({indexStatus = true,onFilter}) => {
  const history = useHistory();
  const {animalAllShelter} =useUtils();
  const [filterData,setFilterData] = useState({});
  const [filterOriginData,setFilterOriginData] = useState([]);
  const [fitlerLink,setFilterLink] = useState({

  });
  const [defaultValue,setDefaultValue] = useState({})
  useEffect( async() =>{
    const oriFilterLinkDefault = JSON.parse(localStorage.getItem('filterLink'));
    setDefaultValue({...defaultValue,...oriFilterLinkDefault})

    const {data} = await animalAllShelter();
    setFilterOriginData([...data])
    let filterCounty = data.reduce((acc,item) => {
      const curCountry = item?.STANAME.slice(0,3);
      if(!acc.some(county => county.label === curCountry)){
        acc.push({label:curCountry,value:curCountry}); 
      }
      
      return acc
    },[])
    filterCounty.unshift({label:'全部縣市',value:'all'})
    let filterShelterData =  data.reduce((acc,item) => {
      const {STANAME,UserTag,UserType,ShelterName} = item;
      if(!acc.some(county => county.STANAME === STANAME)){
        acc.push({STANAME,UserTag,UserType,ShelterName}); 
      }
      
      return acc
    },[])
    filterShelterData.unshift({STANAME:'全部',ShelterName:'全省收容所',UserTag:'all'})
    const animalType = [{label:'全部動物',value:'all'},{label:'狗',value:1},{label:'貓',value:2},{label:'其他',value:3}]
    setFilterData({
      countrys:filterCounty,
      shelter:filterShelterData,
      animalSelect:animalType
    })
    

  },[])
  const onChange = (e) => {
    const {id,value} = e.target;
    console.log(value, id,'settingValue')
    if(id ==='countrys'){
      let results = []

      if(value === 'all'){
        results = [...filterOriginData]
        results.unshift({STANAME:'全部',ShelterName:'全省收容所',UserTag:'all'})
      }else{
        results = filterOriginData?.filter((item)=>{
          return item.STANAME.slice(0,3) === value
      })
    }
        setFilterData({
          ...filterData,
          shelter:results,
        })
    }else if(id === 'shelter'){
      if(value !== 'all'){
        const findShelterCountry = filterOriginData.find((item)=> (item.UserTag === value ));
        setDefaultValue({
          ...defaultValue,
          countrys:findShelterCountry.STANAME.slice(0,3)
        })
      }
    }
    if(value !== 'all'){
      const checkShelterKey = Object.keys(fitlerLink).some((item)=> item === 'shelter');
      if(!checkShelterKey){
        const findFirstShelter = filterOriginData.find((item) => (item.STANAME.slice(0,3) === value))
        setFilterLink({
            ...fitlerLink,
            [id]:value,
            ['shelter']:findFirstShelter?.UserTag,
        })
      }else{
        setFilterLink({
          ...fitlerLink,
          [id]:value,
        })
      }

    }
    console.log(fitlerLink,'fitlerLink')

  }
  const filterCheck = () =>{
    const checkShelterKey = Object.keys(fitlerLink).some((item)=> item === 'shelter');
    
    const urlParams = Object.entries(fitlerLink).reduce((acc,cur,index)=>{
      const [key,value] = cur;
      if(key ==='countrys' && !checkShelterKey){
        const findFirstShelter = filterOriginData.find((item) => (item.STANAME.slice(0,3) === value))
        setFilterLink({
          ...fitlerLink,
          shelter:findFirstShelter?.UserTag,
        })
        return acc = acc + `shelter=${findFirstShelter?.UserTag}`

      }else{
        if(index === Object.entries(fitlerLink).length-1 ){
          return acc = acc + `${key}=${value}`
        }
        else{
          return acc = acc + `${key}=${value}&`
        }
      }
    },'')
    console.log(urlParams)
    history.push(`/nissaShulter/animalList${urlParams===''? '' : '?'+urlParams }`)
    localStorage.setItem('filterLink',JSON.stringify(fitlerLink))
    onFilter && onFilter();
  }
  console.log({fitlerLink,defaultValue},'filterDataSetting')

  return (
    <div id="filterWrapper" >
      {indexStatus && (
        <div className="titleWrapper">
          <h2>Search My Fuffy Family </h2>
          <h6>There some close shulter maybe close to you </h6>
        </div>
      )}

      <div className="filterSection">

      <Form>
        <Form.Group>
          {/* <Form.Label>Custom select</Form.Label> */}
          {Object.entries(filterData).map((item,index) =>{
            const [key,value] = item;
            return(
              <Form.Control key={index} as="select"  defaultValue={defaultValue[key]} onChange={onChange} id={key} className={key}>
                {value.map((item,Cindex)=>{
                  const checkFilterShelterData = item.hasOwnProperty('STANAME');
                  return(
                    <option key={Cindex} value={checkFilterShelterData? item.UserTag : item.value}> 
                    {checkFilterShelterData ? item.ShelterName : item.label}
                    </option>
                  )
                })}
              </Form.Control>
            )
          })}

        </Form.Group>
      </Form>
        <Button onClick={filterCheck}  className="filterButton"> 開始搜尋 </Button>
      </div>
    </div>
  )
}
export default Filter;