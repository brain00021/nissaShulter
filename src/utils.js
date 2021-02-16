import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { resolveMotionValue } from "framer-motion";
// import FormData from "form-data";
const useStore = () => {
  let history = useHistory();

  const animalList = async() => {
    try{
      const url =
      "https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=500&currentPage=1&sortFields=AcceptDate";
      const res = await axios.get(url);
     return res;
    }catch(e){
      console.log('animalList',e)
    }

  }
  const animalDetail = async(acceptNum,id) => {
    try{
      const config = {headers: {"Access-Control-Allow-Origin": "*"}};
      const url =
      `https://asms.coa.gov.tw/Asms/api/Animals?AcceptNum=${acceptNum}&keyNo=${id}&stChk=Y`;
      const res = await axios.get(url,config);
     return res;
    }catch(e){
      console.log('animalDetail',e)
    }
  }
  const shulterInfomation = async(unit) => {
    try{
      const config = {headers: {"Access-Control-Allow-Origin": "*"}};
      const url =
      `https://asms.coa.gov.tw/Asms/api/Shelter?UserTag=${unit}`;
      const res = await axios.get(url,config);
     return res;
    }catch(e){
      console.log('shulterInfomation',e)
    }
  }
  return {
    animalList,
    animalDetail,
    shulterInfomation
  }
};

export default useStore;
