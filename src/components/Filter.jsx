import React, { useState, useEffect } from "react";
import axios from "axios"

const Filter = () => {
  useEffect(() =>{
    const token = 'keyxs0GG8Do3iCnIx';
    const headers = {
      // accept: "application/json",
      "Authorization": 'Bearer ' + token,
      "Content-Type": 'application/json'
    }
    let axiosConfig = {
      headers: {
          'Authorization': 'Bearer keyxs0GG8Do3iCnIx',
          'Content-Type': 'application/json'
      }
    };
    const data = {
      records:[{
      fields: {
          test1: "12dfg3",
          Name: "bridfgdfgan",
          account: "bradfgdfgin00021",
          Status: "Todgdo"
      },
      }] 
    }
    const url = 'https://api.airtable.com/v0/apprwk49htUubEQBt/Member'
    axios.post(url,data,axiosConfig).then((res)=>{
      console.log(res)
    })
  })
  return (
    <span>Filter 的設計搞</span>
  )
}
export default Filter;