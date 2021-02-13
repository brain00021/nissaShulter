import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,Row,Col,DropdownButton,Dropdown,Button,Image} from 'react-bootstrap';
import 'assets/scss/infomationItem.scss'
// import AnimalCard from 'components/AnimalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch,faComment } from "@fortawesome/free-solid-svg-icons";

library.add(faHome,faSearch,faComment);
// import imgSearch from 'assets/img/icon/search.svg';
// import imgMessage from 'assets/img/icon/message.svg';
// import imgHome from 'assets/img/icon/home.svg';
const infoData = [
  {title: '尋找你的毛小孩',
  message:'利用搜尋系統幫助你輕鬆找到收容所裡適合你的毛孩，你也可以利用「我的最愛」功能先儲存你有興趣的毛孩，考慮清楚後再做決定。',
  img: faSearch},
  {title: '聯絡收容所',
  message:'找到喜歡的毛孩後，按下「聯絡收容所」，你可以詢問關於毛孩以及領養的任何問題。',
  img: faComment},
  {title: '帶毛小孩回家',
  message:'收容所會幫助你完成收養流程，一切就緒之後就能開心的帶著毛小孩回家啦！',
  img: faHome},
]

const InformationItem = ({message,title,img}) => {
  return (
    <div className="informationItemWrapper">
        <div className="informationImg">
        <FontAwesomeIcon icon={img} size="6x"/>
        </div>
        <div className="informationText">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
    </div>
  )
}
const IndexInformation = () => {
  return (
    <Container className="IndexAnimalCard">
      <h2 style={{marginBottom:60}}>認養毛小孩流程 </h2>
      <Row>
        {infoData.map((item,index)=>{
          return(<Col sm={true} md={4} key={index} ><InformationItem message={item.message} title={item.title} img={item.img}></InformationItem></Col>)
 
        })}
      </Row>
      
    </Container>
   
  )
}
export default IndexInformation;