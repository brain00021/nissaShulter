import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'


const Filter = () => {
  // useEffect(() =>{
  //   const token = 'keyxs0GG8Do3iCnIx';
  //   const headers = {
  //     // accept: "application/json",
  //     "Authorization": 'Bearer ' + token,
  //     "Content-Type": 'application/json'
  //   }
  //   let axiosConfig = {
  //     headers: {
  //         'Authorization': 'Bearer keyxs0GG8Do3iCnIx',
  //         'Content-Type': 'application/json'
  //     }
  //   };
  //   const data = {
  //     "records": [
  //       {
  //         "fields": {
  //           "Name": "brian",
  //           "account": "brain00021",
  //           "test1": "123",
  //           "Status": "Todo"
  //         }
  //       },
  //       {
  //         "fields": {
  //           "Name": "lkis",
  //           "account": "sss",
  //           "test1": "ss",
  //           "Status": "In progress"
  //         }
  //       }
  //     ]
  //   }
    // const url = 'https://api.airtable.com/v0/apprwk49htUubEQBt/Member'
    // axios.post(url,data,axiosConfig).then((res)=>{
    //   console.log(res)
    // })
  // })
  return (
    <Container id="filterWrapper" >
      <h2>尋找我的毛小孩 </h2>
      <h6>找尋距離近的收容所，快速搜尋附近的毛小孩</h6>
      <div className="filterSection">
      <DropdownButton
       
        menuAlign="left"
        title="板橋區"
        id="county"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </DropdownButton>
      <span className="filterBorder"></span>
      <DropdownButton
        className="dropdownToggle"
        menuAlign="left"
        title="板橋區"
        id="county"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </DropdownButton>
      <span className="filterBorder"></span>
      <DropdownButton
        className="dropdownToggle"
        menuAlign="left"
        title="板橋區"
        id="county"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </DropdownButton>
      <span className="filterBorder"></span>
      <Button className="filterButton"> 開始搜尋 </Button>
      </div>
    </Container>
  )
}
export default Filter;