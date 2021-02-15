import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { resolveMotionValue } from "framer-motion";
// import FormData from "form-data";
const useStore = () => {
  let history = useHistory();

  const animalList = async() => {
    const url =
    "https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=500&currentPage=1&sortFields=AcceptDate";
    const res = await axios.get(url);
   return res;
  }
  const animalDetail = async(acceptNum,id) => {
    const config = {headers: {"Access-Control-Allow-Origin": "*"}};
    const url =
    `https://asms.coa.gov.tw/Asms/api/Animals?AcceptNum=${acceptNum}&keyNo=194965&stChk=Y`;
    const res = await axios.get(url,config);
   return res;
  }
  return {
    animalList,
    animalDetail
  }
};

export default useStore;
