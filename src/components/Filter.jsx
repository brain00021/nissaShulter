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
  useEffect( async() =>{
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
      console.log(results);
      
        setFilterData({
          ...filterData,
          shelter:results,
        })


    }
    if(value !== 'all'){
    setFilterLink({
      ...fitlerLink,
      [id]:value,
    })
  }
    console.log(fitlerLink,'fitlerLink')

  }
  const filterCheck = () =>{
    const checkShelterKey = Object.keys(fitlerLink).some((item)=> item === 'shelter');
    
    const urlParams = Object.entries(fitlerLink).reduce((acc,cur,index)=>{
      const [key,value] = cur;
      if(key ==='countrys' && !checkShelterKey){
        const findFirstShelter = filterData.shelter.find((item) => (item.STANAME.slice(0,3) === value))
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
    history.push(`/animalList${urlParams===''? '' : '?'+urlParams }`)
    onFilter && onFilter();

  }
  console.log(filterData,'filterData')

  return (
    <div id="filterWrapper" >
      {indexStatus && (
        <div className="titleWrapper">
          <h2>尋找我的毛小孩 </h2>
          <h6>找尋距離近的收容所，快速搜尋附近的毛小孩</h6>
        </div>
      )}

      <div className="filterSection">

      <Form>
        <Form.Group>
          {/* <Form.Label>Custom select</Form.Label> */}
          {Object.entries(filterData).map((item,index) =>{
            const [key,value] = item;
            return(
              <Form.Control key={index} as="select" onChange={onChange} id={key} className={key}>
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