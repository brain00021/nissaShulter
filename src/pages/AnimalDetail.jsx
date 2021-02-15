import React, { useState, useEffect } from "react";

import "assets/scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import useUtils from "../utils.js";
function AnimalDetail(){
  const {animalAcceptNum,anmialId} =  useParams();
  const {animalDetail} = useUtils();
  
  useEffect(async() => {

    const  data =  await animalDetail(animalAcceptNum);
    debugger;
  },[])
  return(
    <div>
      animalDetail
    </div>
  )

}

export default AnimalDetail