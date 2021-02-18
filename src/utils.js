import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { resolveMotionValue } from "framer-motion";
// import FormData from "form-data";
var DateDiff = function (sDate1, sDate2) { // sDate1 和 sDate2 是 2016-06-18 格式
  var oDate1 = new Date(sDate1);
  var oDate2 = new Date();
  var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return iDays;
};
const useStore = () => {
  let history = useHistory();

  const animalList = async() => {
    try{
      const url =
      "https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=500&currentPage=1&sortFields=AcceptDate";
      const config = {headers: {"Access-Control-Allow-Origin": "*"}};
      const res = await axios.get(url,config);
      const copyData = JSON.parse(JSON.stringify(res.data))
      const copyDataCustom = copyData.reduce((acc,cur) => {
        cur['isFav'] =  false
        cur['TotalStay'] =  DateDiff(cur.CreateTime.slice(0,10))
        return acc.concat(cur);
      },[])
     return copyDataCustom;
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
