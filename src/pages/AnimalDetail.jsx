import React, { useState, useEffect } from "react";
import {Container} from 'react-bootstrap';
import "assets/scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import useUtils from "../utils.js";
import "assets/scss/animalDetail.scss";
import Banner from 'components/banner.jsx'
function AnimalDetail(){
  const {animalAcceptNum,anmialId} =  useParams();
  const {animalDetail} = useUtils();
  const [detailData ,setDetailData] =useState({});
  
  useEffect(async() => {

    const  origiData =  await animalDetail(animalAcceptNum,anmialId);
    setDetailData({...origiData?.data?.[0]});
    // debugger;
  },[])
  console.log(detailData,'detailData')
  const amialPic = "https://asms.coa.gov.tw/Amlapp/Upload/Pic/" + detailData.InImage
  const bannerGroup = [amialPic]
  return(
    <div className="animalDetailWrapper">
      <Container>
      <Banner bannerGroup={bannerGroup}></Banner>
      </Container>
    </div>
  )

}

export default AnimalDetail